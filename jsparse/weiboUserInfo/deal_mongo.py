import pymongo


class MongoDB:
    def __init__(self):
        self.client = pymongo.MongoClient("127.0.0.1", 27017)
        self.md = self.client['wbvip']

    def insert_item(self, success_item, collection_name):
        try:
            collection = self.md[collection_name]
            collection.insert_one(success_item)  # 数据写入mongoDB
            print('success!!!')
        except:
            print('写入数据失败')
