import pymongo
import pandas as pd
from dbredis import RedisDB

rdb = RedisDB()


class DBMongo:
    def __init__(self):
        self.my_client = pymongo.MongoClient("mongodb://localhost:27017/")

        # 连接数据库
        self.db = self.my_client["title"]

    def insert_2_xt(self, success_item, collection_name):
        try:
            collection = self.db[collection_name]
            collection.insert_one(success_item)  # 数据写入mongoDB
            print('success!!!')
        except Exception as e:
            print('写入数据失败', e)

    def write_failed_to_redis(self):
        """将失败的写入到redis重新获取"""
        # 连接数据库
        table = self.db["loss"]
        data = list(table.find())
        for i in data:
            rdb.r.lpush('title', i.get('url'))
            # print(i.get('url'))

    def write_to_file(self, collection_name="has", target="result"):
        """将成功的写入到文件"""
        # 连接数据库
        with open('.\\result.txt', 'a+') as f:
            table = self.db[collection_name]
            data = list(table.find())
            for i in data:
                try:
                    f.write(i.get(target))
                    f.write("\n")
                except:
                    continue


if __name__ == '__main__':
    mdb = DBMongo()
    mdb.write_to_file()
    mdb.write_to_file(collection_name="loss", target='url')
