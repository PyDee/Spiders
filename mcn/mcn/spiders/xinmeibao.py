"""
小红书 https://api.xinmeibao.com/api/resource/xhs?page=77&per_page=100
微信公众号 https://api.xinmeibao.com/api/resource/woa?page=2&per_page=100
微博 https://api.xinmeibao.com/api/resource/weibo?page=2&per_page=100
"""
import scrapy


class XinmeibaoSpider(scrapy.Spider):
    name = 'xinmeibao'
    allowed_domains = ['api.xinmeibao.com']
    start_urls = ['http://i.xinmeibao.com/']

    def parse(self, response):
        pass
