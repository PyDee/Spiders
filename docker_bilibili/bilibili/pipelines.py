import pymongo
from pymongo.errors import DuplicateKeyError
from .settings import MONGO_HOST, MONGO_PORT


class BiLiPipeline(object):
    def __init__(self):
        client = pymongo.MongoClient(MONGO_HOST, MONGO_PORT)
        db = client['bili']
        self.User = db["user"]
        self.Focus = db["follower"]
        self.Relation = db["relation"]
        self.Kol_User = db["kol_user"]
        self.Kol_Video = db["kol_video"]

    def process_item(self, item, spider):
        if spider.name == 'user':
            self.insert_item(self.User, item)
        if spider.name == 'focus':
            self.insert_item(self.Focus, item)
        if spider.name == 'relation':
            self.insert_item(self.Relation, item)
        if spider.name == 'kol_user':
            self.insert_item(self.Kol_User, item)
        if spider.name == 'kol_video':
            self.insert_item(self.Kol_Video, item)

        return item

    @staticmethod
    def insert_item(collection, item):
        try:
            collection.insert(dict(item))
        except DuplicateKeyError:
            pass
