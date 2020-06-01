# -*- coding: utf-8 -*-
import scrapy


class CommentSpider(scrapy.Spider):
    name = 'comment'
    allowed_domains = ['api.bilibili.com']
    start_urls = ['http://api.bilibili.com/']

    def parse(self, response):
        pass
