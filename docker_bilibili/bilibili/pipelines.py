import pymongo
from pymongo.errors import DuplicateKeyError
from .settings import MONGO_HOST, MONGO_PORT


class BiLiBiLiPipeline(object):
    def __init__(self):
        client = pymongo.MongoClient(MONGO_HOST, MONGO_PORT)
        db = client['bili']
        self.User = db["user"]
        self.Video = db["video"]
        self.Comment = db["comment"]

    def process_item(self, item, spider):
        if spider.name == 'comment':
            self.insert_item(self.Comment, item)
        elif spider.name == 'user':
            self.insert_item(self.User, item)
        elif spider.name == 'video':
            self.insert_item(self.Video, item)
        return item

    @staticmethod
    def insert_item(collection, item):
        try:
            collection.insert(dict(item))
        except DuplicateKeyError:
            pass
