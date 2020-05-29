# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html
import pymongo
from pymongo.errors import DuplicateKeyError

# from .items import RelationshipItem, TweetItem, UserItem, CommentItem
from .settings import MONGO_HOST, MONGO_PORT


class VideoappPipeline:
    def __init__(self):
        client = pymongo.MongoClient(MONGO_HOST, MONGO_PORT)
        db = client['video']
        self.tencent = db["tencent"]
        self.iqiyi = db["iqiyi"]
        self.mg = db["mg"]
        self.youku = db["youku"]
        self.tencent.remove()
        # self.mg.remove()
        # self.iqiyi.remove()
        # self.youku.remove()

    def process_item(self, item, spider):
        if spider.name == 'qqtv':
            self.insert_item(self.tencent, item)
        elif spider.name == 'iqiyi':
            self.insert_item(self.iqiyi, item)
        elif spider.name == 'mgtv':
            self.insert_item(self.mg, item)
        elif spider.name == 'youku':
            self.insert_item(self.youku, item)
        return item

    @staticmethod
    def insert_item(collection, item):
        try:
            collection.insert(dict(item))
        except DuplicateKeyError:
            pass
