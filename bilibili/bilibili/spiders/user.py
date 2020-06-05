import scrapy
import time
import json
from scrapy_redis.spiders import RedisSpider
from ..items import UserInfo


class UserSpider(RedisSpider):
    """
     start_urls = ['https://api.bilibili.com/x/space/acc/info?mid=2217069&jsonp=jsonp']
    """
    name = 'user'
    allowed_domains = ['space.bilibili.com', 'api.bilibili.com']
    redis_key = "bili_user:start_urls"
    follow_info_url = 'https://api.bilibili.com/x/relation/stat?vmid={}&jsonp=jsonp'

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
                user_info['level'] = info_dict.get('level')
                user_info['face'] = info_dict.get('face')
                response.meta['item'] = user_info
                yield scrapy.Request(url=self.follow_info_url.format(user_info.get('mid')),
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
                user_info['follower'] = info_dict.get('follower')
                yield user_info
