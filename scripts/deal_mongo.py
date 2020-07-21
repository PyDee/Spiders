"""测试update"""
import pymongo
import codecs
import csv


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

    def write_bili_relation_to_txt(self, skip=0):
        # 链接mongo数据库
        db = self.my_client['bili']
        my_collection = db.relation
        # 查询库中数据
        skip_num = 10000000 * skip
        cursor = my_collection.find().limit(10000000).skip(skip_num)
        # 打开csv文件
        with codecs.open('data{}.txt', 'w', 'utf-8') as file:
            # 写入多行用writerows
            for data in cursor:
                file.write("{}\t{}\t{}\t{}\t{}\n".format(data["user_id"],
                                                         data["focus_id"],
                                                         data["focus_name"].replace("\n", '').replace("\t", ''),
                                                         data["focus_face"],
                                                         data["introduction"].replace("\n", '').replace("\t", '')
                                                         ))

    def write_bili_follower_to_txt(self):
        # 链接mongo数据库
        db = self.my_client['bili']
        my_collection = db.follower
        # 查询库中数据
        cursor = my_collection.find().limit(10000000)
        # 打开csv文件
        with codecs.open('follower.txt', 'w', 'utf-8') as file:
            # 写入多行用writerows
            for data in cursor:
                file.write("{}\t{}\t{}\n".format(
                    data["focus_id"],
                    data["focus_fans"],
                    data["focus_focus"],
                ))


if __name__ == '__main__':
    db = DBMongo()
    # key = {"name": "test5", 'age': 1}
    # add_state = {'$addToSet': {'list': {"focus": 5, 'name': '小明', 'age': 66}}}
    # db.update_info(key, add_state, 'test')
    # for i in range(5, 15):
    #     db.write_bili_to_txt(skip=i)
    db.write_bili_follower_to_txt()
