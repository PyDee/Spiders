# -*- coding: utf-8 -*-
import scrapy


class UserSpider(scrapy.Spider):
    name = 'user'
    allowed_domains = ['space.bilibili.com']
    start_urls = ['http://space.bilibili.com/']

    def parse(self, response):
        pass
