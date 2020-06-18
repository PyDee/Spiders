from scrapy.http import Request
import json
from scrapy_redis.spiders import RedisSpider
from items import UserInfo


class UserSpider(RedisSpider):
    """
     start_urls = ['https://api.bilibili.com/x/space/acc/info?mid=2217069&jsonp=jsonp']
    """
    name = 'user'
    allowed_domains = ['space.bilibili.md.com', 'api.bilibili.md.com']
    # focus-follow 的接口
    follow_info_url = 'https://api.bilibili.com/x/relation/stat?vmid={}&jsonp=jsonp'
    # 获取用户发布视频信息接口
    video_info = 'https://api.bilibili.com/x/space/arc/search?mid={}&ps=30&tid=0&pn=1&keyword=&order=pubdate&jsonp=jsonp'
    # 获赞和播放的接口
    like_play_url = 'https://api.bilibili.com/x/space/upstat?mid={}&jsonp=jsonp'
    redis_key = "bili_user:start_urls"

    def parse(self, response):
        """
        获取用户名-性别-等级-头图等信息
        """
        ret_dict = json.loads(response.text)
        # ret_dict = response
        status_code = ret_dict.get('code')
        user_info = UserInfo()
        if not status_code:
            if 'data' in ret_dict.keys():
                info_dict = ret_dict.get('data')
                user_info['mid'] = info_dict.get('mid')
                user_info['name'] = info_dict.get('name')
                user_info['sex'] = info_dict.get('sex')
                user_info['introduction'] = info_dict.get('sign')
                user_info['level'] = info_dict.get('level')
                user_info['face'] = info_dict.get('face')
                response.meta['item'] = user_info
                yield Request(url=self.follow_info_url.format(user_info.get('mid')),
                              meta=response.meta,
                              callback=self.get_follow_info
                              )

    def get_follow_info(self, response):
        user_info = response.meta['item']
        ret_dict = json.loads(response.text)
        status_code = ret_dict.get('code')
        if not status_code:
            if 'data' in ret_dict.keys():
                info_dict = ret_dict['data']
                user_info['following'] = info_dict.get('following')
                user_info['focus'] = info_dict.get('follower')
                response.meta['item'] = user_info
                yield Request(url=self.like_play_url.format(user_info.get('mid')),
                              meta=response.meta,
                              callback=self.get_like_play
                              )

    def get_like_play(self, response):
        user_info = response.meta['item']
        ret_dict = json.loads(response.text)
        status_code = ret_dict.get('code')
        if not status_code:
            if 'data' in ret_dict.keys():
                info_dict = ret_dict['data']
                user_info['video_play_count'] = info_dict.get('archive').get('view')
                user_info['article_play_count'] = info_dict.get('article').get('view')
                user_info['like'] = info_dict.get('likes')
                response.meta['item'] = user_info
                yield Request(url=self.video_info.format(user_info.get('mid')),
                              meta=response.meta,
                              callback=self.get_video_count
                              )

    def get_video_count(self, response):
        user_info = response.meta['item']
        ret_dict = json.loads(response.text)
        status_code = ret_dict.get('code')
        if not status_code:
            if 'data' in ret_dict.keys():
                info_dict = ret_dict['data']
                user_info['video_count'] = info_dict.get('page').get('count')
                yield user_info
