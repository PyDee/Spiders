import scrapy
import json
from scrapy_redis.spiders import RedisSpider


class FocusSpider(RedisSpider):
    name = 'focus'
    allowed_domains = ['api.bilibili.md.com']
    redis_key = "bili_focus:start_urls"
    # focus-follow 的接口
    follow_info_url = 'https://api.bilibili.com/x/relation/stat?vmid={}&jsonp=jsonp'

    def parse(self, response):
        ret_dict = json.loads(response.text)
        status_code = ret_dict.get('code')
        if not status_code:
            if 'data' in ret_dict.keys():
                info_dict = ret_dict.get('data')
                total = info_dict.get('total')
                focus_list = info_dict.get('list')
                user_id = response.url.strip('https://api.bilibili.com/x/relation/followings?vmid=').split('&')[0]
                for focus_item in focus_list:
                    focus_info = dict()
                    focus_info['total'] = total
                    focus_info['user_id'] = user_id
                    focus_info['focus_id'] = focus_item.get('mid')
                    # todo 关系表
                    focus_info['focus_name'] = focus_item.get('uname')
                    focus_info['focus_face'] = focus_item.get('face')
                    focus_info['introduction'] = focus_item.get('sign')
                    response.meta['item'] = focus_info
                    # yield 请求focus内容
                    yield scrapy.Request(url=self.follow_info_url.format(focus_info.get('focus_id')),
                                         meta=response.meta,
                                         callback=self.get_follow_info)

    @staticmethod
    def get_follow_info(response):
        focus_item = response.meta["item"]
        ret_dict = json.loads(response.text)
        status_code = ret_dict.get('code')
        if not status_code:
            if 'data' in ret_dict.keys():
                info_dict = ret_dict['data']
                focus_item['focus_fans'] = info_dict.get('following')
                focus_item['focus_focus'] = info_dict.get('follower')
                yield focus_item
