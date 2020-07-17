# -*- coding: utf-8 -*-
import scrapy
import re
from lxml import etree
from scrapy.http import Request
from scrapy_redis.spiders import RedisSpider


class WeibovipinfoSpider(RedisSpider):
    name = 'weiboVipInfo'
    allowed_domains = ['weibo.com']
    redis_key = "vip_ids"
    custom_settings = {
        'COOKIES_ENABLED': False,
        "DEFAULT_REQUEST_HEADERS": {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            'Connection': 'keep-alive',
            'Cookie': 'SUB=_2AkMoUmz0f8NxqwJRmP4Rz2zka45_ww7EieKeDp0vJRMxHRl-yT9kqhRatRB6A9JCG9Kk7jauQttEWYin_a8rgqKo9WZO; SUBP=0033WrSXqPxfM72-Ws9jqgMF55529P9D9W5l0erZTYOvMhfcesKEgrlL; _s_tentry=passport.weibo.com; Apache=6611138971153.541.1594811333268; SINAGLOBAL=6611138971153.541.1594811333268; ULV=1594811333340:1:1:1:6611138971153.541.1594811333268:; YF-Page-G0=b7e3c62ec2c0b957a92ff634c16e7b3f|1594811341|1594811328',
            'Host': 'weibo.com',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-User': '?1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
        }
    }

    def make_requests_from_url(self, url):
        url = 'https://weibo.com/p/100505{}/info'.format(url.strip())
        return Request(url, dont_filter=True)

    def parse(self, response):
        request_url = response.url
        user_id = request_url.split("/")[-2]
        user_id = user_id.strip("100505")
        result = '<div id="response">{}</div>'
        elements = re.findall("<script>FM.view\((.*?)\)</script>", response.text, re.M)
        if len(elements) <= 0:
            raise ValueError('Response is None')
        for element in elements:
            dict_ele = eval(element)
            if dict_ele.get('domid') == "Pl_Official_PersonalInfo__57":
                result = result.format(dict_ele.get('html').replace(r"\/", '/'))
                break
        item_dict = self.deal_html(result)
        item_dict["user_id"] = user_id
        yield item_dict

    def deal_html(self, html):
        result = etree.HTML(html)
        elements = result.xpath('//*[@id="response"]/div')
        if len(elements) <= 0:
            pass
        item_dict = dict()

        for element in elements:
            classify = element.xpath('./div[1]/div/div/h2/text()')[0]
            if classify == "基本信息":
                li_elements = element.xpath('//ul[@class="clearfix"]/li')
                for li in li_elements:
                    span_1 = li.xpath('./span[1]/text()')[0]
                    try:
                        span_2 = li.xpath('./span[2]/text()')[0].strip()
                    except:
                        span_2 = ""
                    item_key = self.deal_item(span_1)
                    if len(item_key) <= 0:
                        continue
                    item_dict[item_key] = span_2
            break
        if 'nickname' not in item_dict.keys():
            pass
        else:
            return item_dict
            # print("out:------------", item_dict)
            # self.insert_item(item_dict, 'info')

    @staticmethod
    def deal_item(item1):
        item_key = str()
        if item1 == "昵称：":
            item_key = "nickname"
        if item1 == "所在地：":
            item_key = "Location"
        if item1 == "性别：":
            item_key = "sex"
        if item1 == "生日：":
            item_key = 'birthday'
        if item1 == "注册时间：":
            item_key = "regdate"
        return item_key
