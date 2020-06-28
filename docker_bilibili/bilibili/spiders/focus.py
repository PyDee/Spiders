import json
from scrapy_redis.spiders import RedisSpider
from items import UserFocus


class FocusSpider(RedisSpider):
    name = 'focus'
    allowed_domains = ['api.bilibili.com', 'api.bilibili.com']
    redis_key = "bili_focus:start_urls"

    def parse(self, response):
        ret_dict = json.loads(response.text)
        status_code = ret_dict.get('code')
        if not status_code:
            if 'data' in ret_dict.keys():
                info_dict = ret_dict.get('data')
                focus_info = UserFocus()
                focus_info['focus_id'] = info_dict.get('mid')
                focus_info['focus_fans'] = info_dict.get('following')
                focus_info['focus_focus'] = info_dict.get('follower')
                yield focus_info
