import pymongo
from pymongo.errors import DuplicateKeyError
from settings import MONGO_HOST, MONGO_PORT


class BiLiBiLiPipeline(object):
    def __init__(self):
        client = pymongo.MongoClient(MONGO_HOST, MONGO_PORT)
        db = client['bili']
        self.User = db["user"]
        self.Focus = db["focus"]

    def process_item(self, item, spider):
        if spider.name == 'user':
            self.insert_item(self.User, item)
        elif spider.name == 'focus':
            self.insert_item(self.Focus, item)
        return item

    @staticmethod
    def insert_item(collection, item):
        try:
            collection.insert(dict(item))
        except DuplicateKeyError:
            pass
