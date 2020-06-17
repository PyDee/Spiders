# -*- coding: utf-8 -*-
"""
introduce:抓取评论数和热度
"""
import re

import scrapy
from scrapy import Request
from ..items import YouKuItem


class YoukuSpider(scrapy.Spider):
    name = 'youku'
    allowed_domains = ['www.youku.com', 'list.youku.com', 'v.youku.com']
    custom_settings = []

    start_urls = [
        # 电影
        'https://list.youku.com/category/page?c=96&r=2020&type=show&p=1',
        'https://list.youku.com/category/page?c=96&r=2020&type=show&p=2',
        'https://list.youku.com/category/page?c=96&r=2020&type=show&p=3',

        # 电视剧
        'https://list.youku.com/category/page?c=97&r=2020&type=show&p=1',
        'https://list.youku.com/category/page?c=97&r=2020&type=show&p=2',
        'https://list.youku.com/category/page?c=97&r=2020&type=show&p=3',
        'https://list.youku.com/category/page?c=97&r=2020&type=show&p=4',

        # 综艺
        'https://list.youku.com/category/page?c=85&r=2020&type=show&p=1',
        'https://list.youku.com/category/page?c=85&r=2020&type=show&p=2',

        # 动漫
        'https://list.youku.com/category/page?c=100&r=2020&type=show&p=1',
        'https://list.youku.com/category/page?c=100&r=2020&type=show&p=2',

        # 纪录片
        'https://list.youku.com/category/page?c=84&type=show&p=1',
        'https://list.youku.com/category/page?c=84&type=show&p=2',
        'https://list.youku.com/category/page?c=84&type=show&p=3',
        'https://list.youku.com/category/page?c=84&type=show&p=4',
        'https://list.youku.com/category/page?c=84&type=show&p=5',
        'https://list.youku.com/category/page?c=84&type=show&p=6',
        'https://list.youku.com/category/page?c=84&type=show&p=7',
        'https://list.youku.com/category/page?c=84&type=show&p=8',
    ]

    def parse(self, response):

        if 'c=96' in response.url:
            classify = 'movie'
        if 'c=97' in response.url:
            classify = 'tv'
        if 'c=85' in response.url:
            classify = 'variety'
        if 'c=100' in response.url:
            classify = 'cartoon'
        if 'c=84' in response.url:
            classify = 'doco'

        detail_url = 'https://v.youku.com/v_show/id_{}.html'

        result = response.body.decode(response.encoding)
        result = result.replace('true', 'True')
        result = result.replace('false', 'False')
        result = eval(result.replace('null', 'None'))
        element_list = result.get('data')
        for element in element_list:
            item = YouKuItem()
            item['platform'] = self.name
            item['classify'] = classify
            item['title'] = element.get('title')
            item['videoId'] = element.get('videoId')

            request_meta = response.meta
            request_meta['item'] = item
            yield Request(detail_url.format(item['videoId']), meta=request_meta, callback=self.get_detail)

    def get_detail(self, response):
        try:
            item = response.meta['item']
            result = response.text
            result_str = re.search('window.__INITIAL_DATA__ =(.*?);</script>', result).group(1)
            result_dict = eval(result_str.replace('false', 'False').replace('true', 'True').replace('null', 'None'))
            item['comment_count'] = result_dict.get('data').get('data').get('data').get('extra').get('totalComment')
            item['issued_date'] = result_dict.get('data').get('data').get('data').get('extra').get('showReleaseTime')
            item['heat'] = result_dict.get('data').get('data').get('nodes')[0].get('nodes')[0].get('nodes')[0].get(
                'data').get('heat')
            yield item
        except:
            pass

        # todo 评论数不知道取得对不对
