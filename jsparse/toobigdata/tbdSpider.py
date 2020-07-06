"""Too Big Data 网站 mcn 数据获取"""
import time
import requests
import pymongo
from lxml import etree


class MongoDB:
    def __init__(self):
        self.client = pymongo.MongoClient("127.0.0.1", 27017)
        self.md = self.client['tbd']

    def insert_item(self, success_item, collection_name):
        try:
            collection = self.md[collection_name]
            collection.insert_one(success_item)  # 数据写入mongoDB
            print('success!!!')
        except:
            print('写入数据失败')


class TooBigData:
    mcn_urls = [
        'https://toobigdata.com/douyin/collections/mcn?page=1',
        'https://toobigdata.com/douyin/collections/mcn?page=2',
        'https://toobigdata.com/douyin/collections/mcn?page=3',
        'https://toobigdata.com/douyin/collections/mcn?page=4',
        'https://toobigdata.com/douyin/collections/mcn?page=5',
        'https://toobigdata.com/douyin/collections/mcn?page=6',
        'https://toobigdata.com/douyin/collections/mcn?page=7',
        'https://toobigdata.com/douyin/collections/mcn?page=8',
        'https://toobigdata.com/douyin/collections/mcn?page=9',
        'https://toobigdata.com/douyin/collections/mcn?page=10',
        'https://toobigdata.com/douyin/collections/mcn?page=11',
        'https://toobigdata.com/douyin/collections/mcn?page=12',
        'https://toobigdata.com/douyin/collections/mcn?page=13',
        'https://toobigdata.com/douyin/collections/mcn?page=14',
        'https://toobigdata.com/douyin/collections/mcn?page=15',
        'https://toobigdata.com/douyin/collections/mcn?page=16',
        'https://toobigdata.com/douyin/collections/mcn?page=17',
        'https://toobigdata.com/douyin/collections/mcn?page=18',
        'https://toobigdata.com/douyin/collections/mcn?page=19',
        'https://toobigdata.com/douyin/collections/mcn?page=20',
        'https://toobigdata.com/douyin/collections/mcn?page=21',
        'https://toobigdata.com/douyin/collections/mcn?page=22',
        'https://toobigdata.com/douyin/collections/mcn?page=23',
        'https://toobigdata.com/douyin/collections/mcn?page=24',
        'https://toobigdata.com/douyin/collections/mcn?page=25',
        'https://toobigdata.com/douyin/collections/mcn?page=26',
        'https://toobigdata.com/douyin/collections/mcn?page=27',
        'https://toobigdata.com/douyin/collections/mcn?page=28',
        'https://toobigdata.com/douyin/collections/mcn?page=29',
        'https://toobigdata.com/douyin/collections/mcn?page=30',
        'https://toobigdata.com/douyin/collections/mcn?page=31',
        'https://toobigdata.com/douyin/collections/mcn?page=32',
        'https://toobigdata.com/douyin/collections/mcn?page=33',
    ]
    mdb = MongoDB()

    @staticmethod
    def get_mcn_info(mdb, url, mcn_list):
        """获取单页 mcn 数据"""
        mcn_response = requests.get(url).text
        time.sleep(5)
        mcn_result = etree.HTML(mcn_response)
        mcn_elements = mcn_result.xpath('//h2[@class="rank-title"]/following-sibling::div[2]/div')
        for mcn_element in mcn_elements:
            mcn_info = dict()
            mcn_info['mcn_name'] = mcn_element.xpath('./h5/a/text()')[0]
            mcn_info['mcn_url'] = "https://toobigdata.com" + mcn_element.xpath('./h5/a/@href')[0] + "?page=1"
            mcn_info['mcn_kol'] = mcn_element.xpath('./span[2]/text()')[0]
            mdb.insert_item(mcn_info, 'mcn')
            mcn_list.append(mcn_info['mcn_url'])

    @staticmethod
    def get_kol_info(mdb, url):
        """获取对应机构下单页 kol 数据"""
        mcn_id = url.split("?")[0].split('/')[-1]
        kol_response = requests.get(url).text
        time.sleep(5)
        kol_result = etree.HTML(kol_response)
        kol_elements = kol_result.xpath('//h4[@class="rank-title"]/following-sibling::table/tbody/tr')
        for kol_element in kol_elements:
            kol_info = dict()
            kol_info['mcn_id'] = mcn_id
            try:
                kol_info['kol_name'] = kol_element.xpath('./td[1]/a/text()')[0]
            except:
                continue
            try:
                kol_info['kol_introduce'] = kol_element.xpath('./td[2]/text()')[0]
            except:
                kol_info['kol_introduce'] = None
            try:
                kol_info['kol_fans'] = kol_element.xpath('./td[3]/text()')[0]
            except:
                kol_info['kol_fans'] = 0
            try:
                kol_info['kol_likes'] = kol_element.xpath('./td[4]/text()')[0]
            except:
                kol_info['kol_likes'] = 0
            try:
                kol_info['kol_videos'] = kol_element.xpath('./td[last()]/text()')[0]
            except:
                kol_info['kol_videos'] = 0
            mdb.insert_item(kol_info, 'kol')

        next_page = kol_result.xpath('//ul[@class="pagination"]/li[last()]/a/@href')
        if len(next_page) <= 0:
            return None
        else:
            return next_page[0]

    def run_get_kol(self, url):
        next_page = self.get_kol_info(self.mdb, url)
        while True:
            if next_page is None:
                break
            else:
                next_page = self.get_kol_info(self.mdb, next_page)

    def run(self):
        kol_first_page_list = list()
        for mcn_url in self.mcn_urls:
            self.get_mcn_info(self.mdb, mcn_url, kol_first_page_list)
        print(kol_first_page_list)
        for kol_url in kol_first_page_list:
            self.run_get_kol(kol_url)


if __name__ == '__main__':
    tbd = TooBigData()
    tbd.run()
