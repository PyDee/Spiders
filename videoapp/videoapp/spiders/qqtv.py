# -*- coding: utf-8 -*-
"""
introduce：腾讯视频获取，播放量--评论数
"""

import scrapy
from scrapy import Request
from ..items import QqItem


class QqtvSpider(scrapy.Spider):
    # 防止多次添加start_urls
    flag = True

    name = 'qqtv'
    allowed_domains = ['v.qq.com']

    # 设置开启请求个数，及等待时间
    # custom_settings = {
    #     'CONCURRENT_REQUESTS': 3,
    #     "DOWNLOAD_DELAY": 1,
    # }

    start_urls = [
        # 电影
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=0&channel=movie&listpage=2&offset=0&pagesize=30&sort=18&year=2020',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=0&channel=movie&listpage=2&offset=30&pagesize=30&sort=18&year=2020',

        # 电视剧
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=0&channel=tv&listpage=2&offset=0&pagesize=30&sort=18&year=50',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=0&channel=tv&listpage=2&offset=30&pagesize=30&sort=18&year=50',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=0&channel=tv&listpage=2&offset=60&pagesize=30&sort=18&year=50',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=0&channel=tv&listpage=2&offset=90&pagesize=30&sort=18&year=50',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=0&channel=tv&listpage=2&offset=120&pagesize=30&sort=18&year=50',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=0&channel=tv&listpage=2&offset=150&pagesize=30&sort=18&year=50',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=0&channel=tv&listpage=2&offset=180&pagesize=30&sort=18&year=50',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=0&channel=tv&listpage=2&offset=210&pagesize=30&sort=18&year=50',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=0&channel=tv&listpage=2&offset=240&pagesize=30&sort=18&year=50',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=0&channel=tv&listpage=2&offset=270&pagesize=30&sort=18&year=50',

        # 动漫
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=0&channel=cartoon&iyear=50&listpage=2&offset=0&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=0&channel=cartoon&iyear=50&listpage=2&offset=30&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=0&channel=cartoon&iyear=50&listpage=2&offset=60&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=0&channel=cartoon&iyear=50&listpage=2&offset=90&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=0&channel=cartoon&iyear=50&listpage=2&offset=120&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=0&channel=cartoon&iyear=50&listpage=2&offset=150&pagesize=30&sort=18',

        # 综艺
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=0&channel=variety&iyear=50&listpage=2&offset=0&pagesize=30&sort=4',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=0&channel=variety&iyear=50&listpage=2&offset=30&pagesize=30&sort=4',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=0&channel=variety&iyear=50&listpage=2&offset=60&pagesize=30&sort=4',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=0&channel=variety&iyear=50&listpage=2&offset=90&pagesize=30&sort=4',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=0&channel=variety&iyear=50&listpage=2&offset=120&pagesize=30&sort=4',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=0&channel=variety&iyear=50&listpage=2&offset=150&pagesize=30&sort=4',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=0&channel=variety&iyear=50&listpage=2&offset=180&pagesize=30&sort=4',

        # 纪录片
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=0&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=30&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=60&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=90&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=120&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=150&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=180&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=210&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=240&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=270&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=300&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=330&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=360&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=390&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=420&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=450&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=480&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=510&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=540&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=570&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=600&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=630&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=660&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=690&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=720&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=750&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=780&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=810&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=840&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=870&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=900&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=930&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=960&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=990&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=1020&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=1050&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=1080&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=1110&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=1140&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=1170&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=1200&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=1230&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=1260&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=1290&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=1320&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=1350&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=1380&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=1410&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=1440&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=1470&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=1500&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=1530&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=1560&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=1590&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=1620&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=1650&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=1680&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=1710&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=1740&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=1770&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=1800&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=1830&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=1860&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=1890&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=1920&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=1950&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=1980&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=2010&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=2040&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=2070&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=2100&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=2130&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=2160&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=2190&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=2220&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=2250&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=2280&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=2310&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=2340&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=2370&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=2400&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=2430&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=2460&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=2490&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=2520&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=2550&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=2580&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=2610&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=2640&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=2670&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=2700&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=2730&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=2760&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=2790&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=2820&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=2850&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=2880&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=2910&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=2940&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=2970&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=3000&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=3030&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=3060&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=3090&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=3120&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=3150&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=3180&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=3210&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=3240&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=3270&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=3300&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=3330&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=3360&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=3390&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=3420&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=3450&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=3480&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=3510&pagesize=30&sort=18',
        'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=1&channel=doco&listpage=2&offset=3540&pagesize=30&sort=18',
    ]

    # start_urls = [
    #     'https://v.qq.com/x/bu/pagesheet/list?_all=1&append=0&channel=variety&iyear=50&listpage=2&offset=90&pagesize=30&sort=4',
    # ]

    def parse(self, response):
        # page_count = len(response.xpath('//div[@class="mod_pages"]/button')[1:-1])
        # if page_count > 1 and self.flag:
        #     self.flag = False
        #     for page_num in range(0, page_count):
        #         page_url = response.url.replace('offset=0', 'offset={}'.format(page_num * 30))
        #         yield Request(page_url, self.parse, dont_filter=True, meta=response.meta)

        if 'channel=movie' in response.request.url:
            classify = 'movie'
        elif 'channel=tv' in response.request.url:
            classify = 'tv'
        elif 'channel=doco' in response.request.url:
            classify = 'doco'
        elif 'channel=cartoon' in response.request.url:
            classify = 'cartoon'
        elif 'channel=variety' in response.request.url:
            classify = 'variety'
        else:
            pass

        comment_count_url = 'https://v.qq.com/x/cover/{}.html'

        # print(response.text)
        video_list = response.xpath('//div[@class="list_item"]')
        for video in video_list:
            item = QqItem()
            item['platform'] = self.name
            item['classify'] = classify
            item['title'] = video.xpath('./a/@title').extract_first()
            item['data_float'] = video.xpath('./a/@data-float').extract_first()
            if item['classify'] == 'movie':
                item['play_count'] = video.xpath('./div[@class="figure_count"]/text()').extract_first()
            request_meta = response.meta
            request_meta['item'] = item

            yield Request(meta=request_meta, callback=self.comment_count,
                          url=comment_count_url.format(item['data_float']))

    def comment_count(self, response):
        """
        评论数
        :param response:
        :return:
        """

        item = response.meta['item']
        if item['classify'] != 'movie':
            item['play_count'] = response.xpath('//em[@id="mod_cover_playnum"]/text()').extract_first()
        try:
            item['comment_count'] = response.xpath(
                '//div[@class="txp_comment_hot"]/@r-props').extract_first().strip('{number:').strip(';}')
        except:
            item['comment_count'] = None

        issued_date_url = 'https://v.qq.com' + response.xpath('//h2[@class="player_title"]/a/@href').extract_first()
        request_meta = response.meta
        request_meta['item'] = item

        yield Request(meta=request_meta, callback=self.issued_time,
                      url=issued_date_url)

    def issued_time(self, response):
        """
        上映时间
        :return:
        """
        item = response.meta['item']
        if item['classify'] == 'movie':
            item['issued_date'] = response.xpath(
                '//span[contains(text(),"上映时间")]/following-sibling::span[@class="type_txt"]/text()').extract_first()
        if item['classify'] == 'tv' or item['classify'] == 'cartoon':
            item['issued_date'] = response.xpath(
                '//span[contains(text(),"出品时间")]/following-sibling::span[@class="type_txt"]/text()').extract_first()
        if item['classify'] == 'variety':
            item['issued_date'] = response.xpath(
                '//span[contains(text(),"更新期数")]/following-sibling::span[@class="type_txt"]/text()').extract_first()
        if item['classify'] == 'doco':
            item['issued_date'] = response.xpath(
                '//span[contains(text(),"播出时间")]/following-sibling::span[@class="type_txt"]/text()').extract_first()
        yield item
