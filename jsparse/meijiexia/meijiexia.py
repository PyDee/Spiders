import time
import random
import requests
from lxml import etree
import pymongo
from .url_file import mjx_weibo, mjx_dy, mjx_ks, mjx_xhs


class DBMongo:
    def __init__(self):
        self.my_client = pymongo.MongoClient("mongodb://localhost:27017/")

        # 连接数据库
        self.db = self.my_client["mcn"]

    def insert_2_xt(self, success_item, collection_name):
        try:
            collection = self.db[collection_name]
            collection.insert_one(success_item)  # 数据写入mongoDB
            print('success!!!')
        except:
            print('写入数据失败')


class MJX:
    def __init__(self):
        self.db = DBMongo()
        self.headers = {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            'Cache-Control': 'max-age=0',
            'Connection': 'keep-alive',
            'Cookie': 'accessId=defba4d0-9ab2-11e8-b156-7b8f577687be; qimo_seokeywords_defba4d0-9ab2-11e8-b156-7b8f577687be=; href=https%3A%2F%2Fwww.meijiexia.com%2Fmedias-118.html; ci_session=ccb97bb846cd5e0ce6538c2cc8f11ca7abc296ee; Hm_lvt_c96abf7da979015953d1d22702db6de8=1591685037,1592274339,1592278224; qimo_seosource_defba4d0-9ab2-11e8-b156-7b8f577687be=%E7%AB%99%E5%86%85; Hm_lpvt_c96abf7da979015953d1d22702db6de8=1592278238; pageViewNum=34',
            'Host': 'www.meijiexia.com',
            'Referer': 'https://www.meijiexia.com/medias-118.html',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-User': '?1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36',
        }

    def get_response(self, url, collection):
        proxy = self.get_proxy()
        proxies = {
            "http": "http://{}:{}".format(proxy.get('IP'), proxy.get('Port')),
            "https": "http://{}:{}".format(proxy.get('IP'), proxy.get('Port')),
        }
        ret = requests.get(url, headers=self.headers, proxies=proxies)

        response = etree.HTML(ret.text)
        tr_list = response.xpath('//tbody[@id="qu-con"]/tr')
        for tr in tr_list:
            item = dict()
            user_id = tr.xpath('./td[@class="td1"]/input/@value')[0]
            nick_name = tr.xpath('./td[@class="td2"]/div[@class="itemMsg"]//a/text()')[0]
            place = tr.xpath('./td[@class="td3"]/text()')[0]
            fans_num = tr.xpath('./td[@class="td6"]/p[@class="num"]/text()')[0]
            price_list = tr.xpath('./td[@class="td4"]/p')
            for price_element in price_list:
                classify = price_element.xpath(
                    './span[@class="money"]/preceding-sibling::span[1]/text()')[0]
                price = price_element.xpath('./span[@class="money"]/text()')[0]
                item[classify.strip()] = price.strip()
            item['fans_num'] = fans_num.strip()
            item['user_id'] = user_id.strip()
            item['nick_name'] = nick_name.strip()
            item['place'] = place.strip()
            item['plant'] = collection.split('mjx_')[1]
            self.db.insert_2_xt(item, collection)

    @staticmethod
    def get_proxy():
        proxy = [{"IP": "180.123.199.105", "Port": 21730}]
        return random.choice(proxy)

    def run(self):
        urls = ''
        for item in {'mjx_weibo': mjx_weibo, 'mjx_dy': mjx_dy, 'mjx_ks': mjx_ks, 'mjx_xhs': mjx_xhs}.keys():
            if item == 'mjx_weibo':
                urls = mjx_weibo
            if item == 'mjx_dy':
                urls = mjx_dy
            if item == 'mjx_ks':
                urls = mjx_ks
            if item == 'mjx_xhs':
                urls = mjx_xhs

            for url in urls:
                time.sleep(3)
                print(url)
                self.get_response(url, item)


if __name__ == '__main__':
    mjx = MJX()
    mjx.run()
