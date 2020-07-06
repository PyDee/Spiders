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
        self.KOL = self.db["kol"]

    def process_item(self, item, spider):
        if spider.name == 'kol':
            self.insert_item(self.KOL, item)

    @staticmethod
    def insert_item(collection, item):
        try:
            collection.insert(dict(item))
        except DuplicateKeyError:
            pass
