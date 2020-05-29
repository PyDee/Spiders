# -*- coding: utf-8 -*-
import re
import logging
import time
import os

import scrapy
from scrapy import Request

from ..items import MgItem

# logger = logging.getLogger()
# logger.setLevel(logging.INFO)  # Log等级总开关
# rq = time.strftime('%Y%m%d%H%M', time.localtime(time.time()))
# log_path = os.path.dirname(os.getcwd())
# log_name = log_path + rq + '.log'
# logfile = log_name
# fh = logging.FileHandler(logfile, mode='w')
# fh.setLevel(logging.DEBUG)  # 输出到file的log等级的开关
# formatter = logging.Formatter("%(asctime)s - %(filename)s[line:%(lineno)d] - %(levelname)s: %(message)s")
# fh.setFormatter(formatter)
# logger.addHandler(fh)
# logger.debug('this is a logger debug message')


class MgtvSpider(scrapy.Spider):
    flag = True
    name = 'mgtv'
    allowed_domains = ['www.mgtv.com', 'pcweb.api.mgtv.com', 'vc.mgtv.com', 'comment.mgtv.com']
    # custom_settings = {
    #     'CONCURRENT_REQUESTS': 5,
    #     "DOWNLOAD_DELAY": 0.1,
    # }
    start_urls = [
        # 综艺
        'https://list.mgtv.com/1/a1-a1--------c1-1---.html?channelId=1',
        'https://list.mgtv.com/1/a1-a1--------c1-2---.html?channelId=1',
        'https://list.mgtv.com/1/a1-a1--------c1-3---.html?channelId=1',
        'https://list.mgtv.com/1/a1-a1--------c1-4---.html?channelId=1',
        'https://list.mgtv.com/1/a1-a1--------c1-5---.html?channelId=1',
        'https://list.mgtv.com/1/a1-a1--------c1-6---.html?channelId=1',
        'https://list.mgtv.com/1/a1-a1--------c1-7---.html?channelId=1',
        'https://list.mgtv.com/1/a1-a1--------c1-8---.html?channelId=1',
        'https://list.mgtv.com/1/a1-a1--------c1-9---.html?channelId=1',
        'https://list.mgtv.com/1/a1-a1--------c1-10---.html?channelId=1',
        'https://list.mgtv.com/1/a1-a1--------c1-11---.html?channelId=1',
        'https://list.mgtv.com/1/a1-a1--------c1-12---.html?channelId=1',
        'https://list.mgtv.com/1/a1-a1--------c1-13---.html?channelId=1',
        'https://list.mgtv.com/1/a1-a1--------c1-14---.html?channelId=1',
        'https://list.mgtv.com/1/a1-a1--------c1-15---.html?channelId=1',
        'https://list.mgtv.com/1/a1-a1--------c1-16---.html?channelId=1',
        'https://list.mgtv.com/1/a1-a1--------c1-17---.html?channelId=1',
        'https://list.mgtv.com/1/a1-a1--------c1-18---.html?channelId=1',
        'https://list.mgtv.com/1/a1-a1--------c1-19---.html?channelId=1',
        'https://list.mgtv.com/1/a1-a1--------c1-20---.html?channelId=1',
        'https://list.mgtv.com/1/a1-a1--------c1-21---.html?channelId=1',
        'https://list.mgtv.com/1/a1-a1--------c1-22---.html?channelId=1',
        'https://list.mgtv.com/1/a1-a1--------c1-23---.html?channelId=1',
        'https://list.mgtv.com/1/a1-a1--------c1-24---.html?channelId=1',
        'https://list.mgtv.com/1/a1-a1--------c1-25---.html?channelId=1',
        'https://list.mgtv.com/1/a1-a1--------c1-26---.html?channelId=1',
        'https://list.mgtv.com/1/a1-a1--------c1-27---.html?channelId=1',
        # 电视剧
        'https://list.mgtv.com/2/a1-a1--------c2-1---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-2---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-3---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-4---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-5---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-6---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-7---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-8---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-9---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-10---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-11---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-12---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-13---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-14---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-15---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-16---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-17---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-18---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-19---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-20---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-21---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-22---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-23---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-24---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-25---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-26---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-27---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-28---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-29---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-30---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-31---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-32---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-33---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-34---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-35---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-36---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-37---.html?channelId=2',
        'https://list.mgtv.com/2/a1-a1--------c2-38---.html?channelId=2',
        # 电影
        'https://list.mgtv.com/3/a1--------a1-c2-1--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-2--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-3--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-4--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-5--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-6--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-7--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-8--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-9--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-10--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-11--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-12--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-13--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-14--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-15--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-16--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-17--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-18--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-19--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-20--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-21--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-22--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-23--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-24--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-25--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-26--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-27--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-28--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-29--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-30--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-31--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-32--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-33--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-34--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-35--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-36--a1-.html?channelId=3',
        'https://list.mgtv.com/3/a1--------a1-c2-37--a1-.html?channelId=3',
        # 动漫
        'https://list.mgtv.com/50/a1-a1-------a1-c2-1---.html?channelId=50',
        'https://list.mgtv.com/50/a1-a1-------a1-c2-2---.html?channelId=50',
        'https://list.mgtv.com/50/a1-a1-------a1-c2-3---.html?channelId=50',
        'https://list.mgtv.com/50/a1-a1-------a1-c2-4---.html?channelId=50',
        'https://list.mgtv.com/50/a1-a1-------a1-c2-5---.html?channelId=50',
        'https://list.mgtv.com/50/a1-a1-------a1-c2-6---.html?channelId=50',
        'https://list.mgtv.com/50/a1-a1-------a1-c2-7---.html?channelId=50',
        'https://list.mgtv.com/50/a1-a1-------a1-c2-8---.html?channelId=50',
        'https://list.mgtv.com/50/a1-a1-------a1-c2-9---.html?channelId=50',
        'https://list.mgtv.com/50/a1-a1-------a1-c2-10---.html?channelId=50',
        'https://list.mgtv.com/50/a1-a1-------a1-c2-11---.html?channelId=50',
        'https://list.mgtv.com/50/a1-a1-------a1-c2-12---.html?channelId=50',
        'https://list.mgtv.com/50/a1-a1-------a1-c2-13---.html?channelId=50',
        'https://list.mgtv.com/50/a1-a1-------a1-c2-14---.html?channelId=50',
        'https://list.mgtv.com/50/a1-a1-------a1-c2-15---.html?channelId=50',
        'https://list.mgtv.com/50/a1-a1-------a1-c2-16---.html?channelId=50',
        'https://list.mgtv.com/50/a1-a1-------a1-c2-17---.html?channelId=50',
        'https://list.mgtv.com/50/a1-a1-------a1-c2-18---.html?channelId=50',
        'https://list.mgtv.com/50/a1-a1-------a1-c2-19---.html?channelId=50',
        'https://list.mgtv.com/50/a1-a1-------a1-c2-20---.html?channelId=50',
        'https://list.mgtv.com/50/a1-a1-------a1-c2-21---.html?channelId=50',
        'https://list.mgtv.com/50/a1-a1-------a1-c2-22---.html?channelId=50',
        'https://list.mgtv.com/50/a1-a1-------a1-c2-23---.html?channelId=50',
        'https://list.mgtv.com/50/a1-a1-------a1-c2-24---.html?channelId=50',
        'https://list.mgtv.com/50/a1-a1-------a1-c2-25---.html?channelId=50',
        'https://list.mgtv.com/50/a1-a1-------a1-c2-26---.html?channelId=50',
        # 纪录片
        'https://list.mgtv.com/51/a1---------c1-1---.html?channelId=51',
        'https://list.mgtv.com/51/a1---------c1-2---.html?channelId=51',
        'https://list.mgtv.com/51/a1---------c1-3---.html?channelId=51',
        'https://list.mgtv.com/51/a1---------c1-4---.html?channelId=51',
        'https://list.mgtv.com/51/a1---------c1-5---.html?channelId=51',
        'https://list.mgtv.com/51/a1---------c1-6---.html?channelId=51',
        'https://list.mgtv.com/51/a1---------c1-7---.html?channelId=51',
        'https://list.mgtv.com/51/a1---------c1-8---.html?channelId=51',
        'https://list.mgtv.com/51/a1---------c1-9---.html?channelId=51',
    ]

    def parse(self, response):
        # re_sub = re.compile(r'-\d--')
        # page_count = response.xpath('//a[contains(@title,"最后一页")]/text()').extract_first()
        # if int(page_count) > 1 and self.flag:
        #     self.flag = False
        #     for page_num in range(1, int(page_count) + 1):
        #         page_url = re_sub.sub(r'-{}--'.format(page_num), response.url)
        #         logger.info(1, response.request.url)
        #         yield Request(page_url, self.parse, dont_filter=True, meta=response.meta)
        request_url = response.request.url
        # todo 分类可能有问题
        if 'channelId=1' in request_url:
            classify = 'variety'
        if 'channelId=2' in request_url:
            classify = 'tv'
        if 'channelId=3' in request_url:
            classify = 'movie'
        if 'channelId=50' in request_url:
            classify = 'cartoon'
        if 'channelId=51' in request_url:
            classify = 'doco'

        element_list = response.xpath('//li[@class="m-result-list-item"]')
        play_count_url = 'https://vc.mgtv.com/v2/dynamicinfo?vid={}'
        for element in element_list:
            item = MgItem()
            item['platform'] = self.name
            item['classify'] = classify
            item['title'] = element.xpath('./a[@class="u-title"]/text()').extract_first()
            item['vid'] = element.xpath('./a[@class="u-title"]/@href').extract_first().split('/')[
                -1].strip('.html')
            # vid = item['data_float'].split('/')[-1].strip('.html')
            request_meta = response.meta
            request_meta['item'] = item
            yield Request(meta=request_meta, callback=self.play_count,
                          url=play_count_url.format(item['vid']))

    def play_count(self, response):
        """播放量"""
        issued_date_url = 'https://pcweb.api.mgtv.com/video/info?vid={}'
        item = response.meta['item']
        item['play_count'] = eval(response.body.decode(response.encoding)).get('data').get('all')
        request_meta = response.meta
        request_meta['item'] = item
        yield Request(
            meta=request_meta, callback=self.issued_date,
            url=issued_date_url.format(item['vid'])
        )

    def issued_date(self, response):
        """上映时间"""
        comment_url = 'https://comment.mgtv.com/v4/comment/getCount?subjectType=hunantv2014&subjectId={}&platform=pc&_support=100000003'
        item = response.meta['item']
        result = eval(response.body.decode(response.encoding))
        item['issued_date'] = result.get('data').get('info').get('detail').get(
            'releaseTime')
        request_meta = response.meta
        request_meta['item'] = item
        yield Request(
            meta=request_meta, callback=self.get_comment_count,
            url=comment_url.format(item['vid'])
        )

    def get_comment_count(self, response):
        item = response.meta['item']
        result = eval(response.body.decode(response.encoding))
        item['comment_count'] = result.get('data').get('commentCount')
        yield item

    # todo 综艺存在上映日期和更新到，
    # todo 电视剧存在上映日期和更新到非准确日期，是一个集数
