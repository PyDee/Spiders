# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


import pymongo
from pymongo.errors import DuplicateKeyError


class TempMongoDB(object):
    def __init__(self):
        client = pymongo.MongoClient("127.0.0.1", 27017)
        self.db = client['temp']

    def process_item(self, item, spider):
        if item is None:
            pass
        else:
            # print(11111111111111, item)
            self.insert_item(item, 'info')

    def insert_item(self, success_item, collection_name):
        try:
            collection = self.db[collection_name]
            collection.insert_one(success_item)  # 数据写入mongoDB
            print('success!!!')
        except:
            print('写入数据失败')
