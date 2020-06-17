"""测试update"""
import pymongo


class DBMongo:
    def __init__(self):
        self.my_client = pymongo.MongoClient("mongodb://localhost:27017/")

        # 连接数据库
        self.db = self.my_client["mcn"]

    def insert_2_xt(self, success_item, collection_name):
        try:
            collection = self.db[collection_name]
            collection.insert_one(success_item)  # 数据写入mongoDB
            print('写入成功')
        except:
            print('写入失败')

    def update_info(self, key, add_state, collection_name):
        try:
            collection = self.db[collection_name]
            # 不存在时插入数据
            collection.update_one(key, add_state, upsert=True)
            print("更新成功")
        except Exception as e:
            print("更新失败:{}".format(e))


if __name__ == '__main__':
    db = DBMongo()
    key = {"name": "test5", 'age': 1}
    add_state = {'$addToSet': {'list': {"focus": 5, 'name': '小明', 'age': 66}}}
    db.update_info(key, add_state, 'test')
