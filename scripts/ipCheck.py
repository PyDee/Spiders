"""
read_excel 读取同级目录下 IP.xlxs 文件
请求百度 ip 检测接口，获取 ip 归属地址
"""
import time
import pandas as pd
import requests
import pymongo
import json


class DBMongo:
    def __init__(self):
        self.my_client = pymongo.MongoClient("mongodb://localhost:27017/")

        # 连接数据库
        self.ip_check_db = self.my_client["IPCheck"]

    def read_fail(self):
        collection = self.ip_check_db['fail']
        result = list(collection.find({}, {"_id": 0}))
        for i in result:
            yield i

    def insert_success(self, success_item):
        collection = self.ip_check_db["success"]
        collection.insert_one(success_item)  # 数据写入mongoDB

    def insert_fail(self, fail_item):
        collection = self.ip_check_db["fail"]
        collection.insert_one(fail_item)  # 数据写入mongoDB


class IPlace:
    def __init__(self):
        self.eg_mongo = DBMongo()

    @staticmethod
    def get_ip_place(ip, proxy):
        proxies = {
            "http": proxy,
            "https": proxy,
        }
        url = 'https://sp0.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php?query={}&resource_id=6006'.format(ip)
        ret = requests.get(url).text
        return ret

    @staticmethod
    def json_parse_response(response):
        ret = json.loads(response)
        result = ret.get('data')[0]
        location = result.get('location')
        location = location.split(' ')[0]
        province = location.split('省')[0]
        city = location.split('省')[-1]
        return province, city

    def get_proxy(self):
        try:
            proxy_url = 'http://ip.ipjldl.com/index.php/api/entry?method=proxyServer.hdtiqu_api_url&packid=0&fa=0&groupid=0&fetch_key=&time=100&qty=1&port=1&format=json&ss=5&css=&dt=0&pro=&city=&usertype=4'
            ret = requests.get(proxy_url)
            result = json.loads(ret.text)
            proxy = result.get('data')
            IP = proxy[0].get('IP')
            Port = proxy[0].get('Port')
            proxy = "http://{}:{}".format(IP, Port)
            return proxy
        except Exception as e:
            print(e)
            time.sleep(2)
            self.get_proxy()

    def read_excel(self):
        df = pd.read_excel('IP.xlsx')

        df.iterrows()
        for i in df.iterrows():
            item = dict()
            index = i[0]
            item['quid'] = i[1]['quid']
            item['ipstr'] = i[1]['ipstr']
            item['country'] = i[1]['country']
            item['province'] = i[1]['province']
            item['city'] = i[1]['city']
            yield item

    def main(self):
        # 初始化一个代理ip
        proxy = self.get_proxy()
        k = 0
        index = 0
        # 读取待检测ip文件
        for item in self.read_excel():
            index += 1
            try:
                if index % 20 == 0 and proxy != 0:
                    proxy = self.get_proxy()
                result = self.get_ip_place(item['ipstr'], proxy)
                item['new_province'], item['new_city'] = self.json_parse_response(result)
                self.eg_mongo.insert_success(item)
                k += 1
                print("成功的ip：{}----{}".format(k, item))

            except:
                self.eg_mongo.insert_fail(item)
                print('失败的ip：{}----{}'.format(index, item['ipstr']))
                continue

    def run(self):
        proxy = self.get_proxy()
        k = 0
        index = 0
        # 读取待检测ip文件
        for item in self.eg_mongo.read_fail():
            index += 1
            try:
                if index % 20 == 0 and proxy != 0:
                    proxy = self.get_proxy()
                result = self.get_ip_place(item['ipstr'], proxy)
                print(result)
                item['new_province'], item['new_city'] = self.json_parse_response(result)
                self.eg_mongo.insert_success(item)
                k += 1
                print("成功的ip：{}----{}".format(k, item))

            except Exception as e:
                self.eg_mongo.insert_fail(item)
                print('失败的ip：{}----{} \n {}'.format(index, item['ipstr'], e))
                continue


if __name__ == '__main__':
    eg = IPlace()
    eg.run()
