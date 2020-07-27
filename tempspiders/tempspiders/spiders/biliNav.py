# -*- coding: utf-8 -*-
import scrapy
import json
from scrapy_redis.spiders import RedisSpider


class BilinavSpider(RedisSpider):
    name = 'biliNav'
    allowed_domains = ['api.bilibili.com', 'www.bilibili.com']
    # start_urls = ['https://api.bilibili.com/x/space/arc/search?mid=2390163&ps=30&tid=0&pn=1']
    redis_key = "bili_nav"

    def make_requests_from_url(self, url):
        url = 'https://api.bilibili.com/x/space/arc/search?mid={}&ps=30&tid=0&pn=1'.format(url.strip())
        return scrapy.Request(url, dont_filter=True)

    def parse(self, response):
        dict_res = json.loads(response.text)
        res_code = dict_res.get("code")
        if res_code != 0:
            raise Exception("当前IP过期，获取失败")
        res_data = dict_res.get("data")
        res_list = res_data.get("list")
        res_v_list = res_list.get("vlist")
        if len(res_v_list) <= 0:
            # 表示id下没有视频
            pass
        else:
            #  当前为获取所有视频的面包屑
            # for item in res_v_list:
            #     video_info = dict()
            #     print(item.get('mid'))
            #     print(item.get('aid'))
            #     print(item.get('bvid'))
            #     print(item.get('typeid'))

            # 获取某一个视频的面包屑信息
            item = res_v_list[0]
            video_info = dict()
            video_info['mid'] = item.get('mid')
            video_info['aid'] = item.get('aid')
            video_info['bvid'] = item.get('bvid')
            video_info['typeid'] = item.get('typeid')
            info_url = "https://www.bilibili.com/video/{}".format(video_info.get('bvid'))
            response.meta['item'] = video_info

            yield scrapy.Request(info_url, callback=self.get_nav_info, meta=response.meta)

    def get_nav_info(self, response):
        video_info = response.meta.get('item')
        video_info['first'] = response.xpath(
            '//div[@id="viewbox_report"]//span[@class="a-crumbs"]/a[1]/text()').extract_first()
        video_info['last'] = response.xpath(
            '//div[@id="viewbox_report"]//span[@class="a-crumbs"]/a[last()]/text()').extract_first()
        yield video_info
