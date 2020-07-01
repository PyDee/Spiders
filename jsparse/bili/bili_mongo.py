"""保存 bili 数据到 mongodb 中"""
import pymongo


class BosMongo(object):
    def __init__(self):
        self.client = pymongo.MongoClient("127.0.0.1", 27017)
        self.db = self.client['bili']
        self.follower = self.db["follower"]
        self.relation = self.db["relation"]

    def execute(self, spider, item):
        if spider == "relation":
            self.insert_item(self.relation, item)
        if spider == "follower":
            self.insert_item(self.follower, item)

    @staticmethod
    def insert_item(collection, item):
        """
        向 mongodb 插入数据
        :param collection: 集合名词
        :param item: 数据内容，字典
        :return:None
        """
        try:
            collection.insert(dict(item))
        except Exception as e:
            print("插入数据时出现问题：", e)
