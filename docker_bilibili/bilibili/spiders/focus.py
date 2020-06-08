import scrapy
import json
from scrapy_redis.spiders import RedisSpider
import re

from ..items import UserFocus


class FocusSpider(RedisSpider):
    name = 'focus'
    allowed_domains = ['api.bilibili.com']
    redis_key = "bili_focus:start_urls"
    # focus-follow 的接口
    follow_info_url = 'https://api.bilibili.com/x/relation/stat?vmid={}&jsonp=jsonp'

    # r = redis.Redis(host="127.0.0.1")

    def parse(self, response):
        ret_dict = json.loads(response.text)
        status_code = ret_dict.get('code')
        focus_info = UserFocus()
        if not status_code:
            if 'data' in ret_dict.keys():
                info_dict = ret_dict.get('data')
                # 总共关注了多少人
                if 'pn=1' in response.url:
                    total = info_dict.get('total')
                    page_count = total // 20 + 2
                    page_count = 6 if page_count > 6 else page_count
                    for page in range(2, page_count):
                        page_url = response.url.replace('pn=1', 'pn={}'.format(page))
                        print(page_url)
                        yield scrapy.Request(page_url, self.parse, dont_filter=True, meta=response.meta)

                focus_list = info_dict.get('list')
                user_id = response.url.strip('https://api.bilibili.com/x/relation/followings?vmid=').split('&')[0]
                for focus in focus_list:
                    focus_info['user_id'] = user_id
                    focus_info['focus_id'] = focus.get('mid')
                    focus_info['focus_name'] = focus.get('uname')
                    focus_info['focus_face'] = focus.get('face')
                    focus_info['introduction'] = focus.get('sign')
                    response.meta['item'] = focus_info
                    yield scrapy.Request(url=self.follow_info_url.format(focus_info.get('focus_id')),
                                         meta=response.meta,
                                         callback=self.get_follow_info)

    def get_follow_info(self, response):
        focus_info = response.meta['item']
        ret_dict = json.loads(response.text)
        status_code = ret_dict.get('code')
        if not status_code:
            if 'data' in ret_dict.keys():
                info_dict = ret_dict['data']
                focus_info['focus_fans'] = info_dict.get('following')
                focus_info['focus_focus'] = info_dict.get('follower')
                yield focus_info
