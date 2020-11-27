import json
import scrapy
from scrapy_redis.spiders import RedisSpider


class FansSpider(RedisSpider):
    """
    start_urls = ['https://api.bilibili.com/x/relation/followers?vmid=8170242&pn=1&ps=20&order=desc&jsonp=jsonp']
    """
    name = 'fans'
    allowed_domains = ['api.bilibili.com']
    redis_key = 'bili_fans:start_urls'
    user_url = 'https://api.bilibili.com/x/space/acc/info?mid={}&jsonp=jsonp'

    def parse(self, response):
        ret_dict = json.loads(response.text)
        status_code = ret_dict.get('code')
        if not status_code:
            if 'data' in ret_dict.keys():
                fans_list = ret_dict.get('data').get('list')
                for fans in fans_list:
                    mid = fans.get('mid')
                    print(mid)
    # todo 需要将 user_url 存入队列中，保证循环获取用户信息
