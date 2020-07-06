# -*- coding: utf-8 -*-
import scrapy


class KolSpider(scrapy.Spider):
    name = 'kol'
    allowed_domains = ['toobigdata.com']
    start_urls = ['http://toobigdata.com/']

    def parse(self, response):
        pass
