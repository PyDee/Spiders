import scrapy
from scrapy_redis.spiders import RedisSpider


class FocusSpider(RedisSpider):
    name = 'focus'
    allowed_domains = ['api.bilibili.com']
    redis_key = "bili_focus:start_urls"

    def parse(self, response):
        pass
