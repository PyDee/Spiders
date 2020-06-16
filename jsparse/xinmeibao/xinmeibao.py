import time
import requests
import pymongo
import json
from .url_file import urls_xhs, urls_weibo, urls_woa


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


class XMB:
    def __init__(self):
        self.db = DBMongo()
        self.headers = {
            'accept': '*/*',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'zh-CN,zh;q=0.9',
            'cookie': 'utm_fv=https://i.xinmeibao.com/resource/weibo; utm_referrer=https://i.xinmeibao.com/resource/news; Hm_lvt_b1d3d3f049786de1a1c364159b2bf980=1591787251; Hm_lpvt_b1d3d3f049786de1a1c364159b2bf980=1591787251; XSRF-TOKEN=eyJpdiI6IlV0b0NmY3RsdHl3U1d4alorZnpGdEE9PSIsInZhbHVlIjoiZWd6WXc4K3pFU25wU1dCNk8zRmRWTDhLQ3k1OVNQNU5IelRhNVZ6WnUwM3UyZnBDaE9kSXpBTXlzdG5yZ0pseiIsIm1hYyI6IjdiYWJjNTFlNzc4MDZhYTJmOWI0Y2JkOGNkZjE0MTFmZWJiZmZjNWY5YjdmMGFkZDlhNjhhODlhMWEwYTUzNTgifQ%3D%3D; SESSION_COOKIE=eyJpdiI6IkpoYVlCZGNSOVJ6UjlOZVVXbHFDckE9PSIsInZhbHVlIjoiR1FDNXdMMDJ2b1ArQXhYM2lyNWozQXE0anBDZEc3Rnc3a2pjV0pFMmhYMTBCTU13YW5LRTlZN0haQnFOUHBQdyIsIm1hYyI6Ijg5Y2ZmM2VhODVjMjYxZDljYzcyMjgwYTBiYjgxMWM5MDgyMGVlOWEzYWJjOTA0ZTIyZWMxYWYxYmIxZWRjYzUifQ%3D%3D',
            'origin': 'https://i.xinmeibao.com',
            'platform': 'xinmeibao',
            'referer': 'https://i.xinmeibao.com/resource/xhs?sort_field=&sort_direct=descend&publish_scope=&page=72',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36',
            'x-identity': 'advertiser',
        }

    @staticmethod
    def get_response(url, headers):
        ret = requests.get(url, headers=headers)
        response = json.loads(ret.text)
        data = response.get('data')
        return data

    @staticmethod
    def get_weibo(db, data, collection):
        for element in data:
            try:
                item = dict()
                item['name'] = element.get('name')
                item['id'] = element.get('id')
                item['classify'] = element.get('category').get('name')
                item['fans_num'] = element.get('analysis').get('fans_num')
                item['focus_num'] = element.get('analysis').get('follows_num')
                item['total_like'] = element.get('analysis').get('total_like')
                item['avg_retweet_num'] = element.get('analysis').get('avg_retweet_num')
                item['max_retweet_num'] = element.get('analysis').get('max_retweet_num')
                item['avg_like_num'] = element.get('analysis').get('avg_like_num')
                item['max_like_num'] = element.get('analysis').get('max_like_num')
                item['avg_comment_num'] = element.get('analysis').get('avg_comment_num')
                item['max_comment_num'] = element.get('analysis').get('max_comment_num')
                item['plant'] = '微博'
                item['gender'] = element.get('gender')
                item['price'] = element.get('quote').get('price')  # 直发
                item['price_second'] = element.get('quote').get('price_second')
                db.insert_2_xt(item, collection)
            except:
                break

    @staticmethod
    def get_xhs(db, data, collection):
        for element in data:
            try:
                item = dict()
                item['name'] = element.get('name')
                item['id'] = element.get('id')
                item['plant'] = '小红书'
                item['fans_num'] = element.get('analysis').get('fans_num')
                item['focus_num'] = element.get('analysis').get('follows_num')
                item['total_like'] = element.get('analysis').get('total_like')
                item['post_num'] = element.get('analysis').get('post_num')
                item['classify'] = element.get('category').get('name')
                item['gender'] = element.get('gender')
                item['video_price'] = element.get('quote').get('price')  # 直发
                item['word_price'] = element.get('quote').get('price_second')
                db.insert_2_xt(item, collection)
            except:
                break

    @staticmethod
    def get_woa(db, data, collection):
        for element in data:
            try:
                item = dict()
                item['name'] = element.get('name')
                item['id'] = element.get('id')
                item['classify'] = element.get('category').get('name')
                item['fans_num'] = element.get('analysis').get('fans_num')
                item['focus_num'] = element.get('analysis').get('follows_num')
                item['total_like'] = element.get('analysis').get('total_like')
                item['avg_top'] = element.get('analysis').get('avg_read_num_top')
                item['avg_untop'] = element.get('analysis').get('avg_read_num_untop')
                item['max_read_num'] = element.get('analysis').get('max_read_num')
                item['like_top_avg'] = element.get('analysis').get('avg_like_num_top')
                item['like_untop_avg'] = element.get('analysis').get('avg_like_num_untop')
                item['max_like_num'] = element.get('analysis').get('max_like_num')
                item['plant'] = '微信'
                item['gender'] = element.get('gender')
                item['top'] = element.get('quote').get('price')  # 直发
                item['untop'] = element.get('quote').get('price_second')
                db.insert_2_xt(item, collection)
            except:
                break

    def run(self):
        url_dict = {
            "xmb_xhs": urls_xhs,
            "xmb_woa": urls_woa,
            "xmb_weibo": urls_weibo,

        }
        urls = ''
        func = ''
        for item in url_dict.keys():
            if item == 'xmb_xhs':
                urls = urls_xhs
                func = self.get_xhs
            if item == 'xmb_woa':
                urls = urls_woa
                func = self.get_woa
            if item == 'xmb_weibo':
                urls = urls_weibo
                func = self.get_weibo

            for url in urls:
                time.sleep(3)
                data = self.get_response(url, self.headers)
                func(self.db, data, item)


if __name__ == '__main__':
    xmb = XMB()
    xmb.run()
