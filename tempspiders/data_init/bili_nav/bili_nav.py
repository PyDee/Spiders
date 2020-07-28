import redis
import pandas as pd
import pymongo


class MongoDB:

    def __init__(self):
        self.m = pymongo.MongoClient("mongodb://localhost:27017/")

    def read_uid(self):
        result_list = list()
        db = self.m["temp"]
        c = db.navBili
        result = c.find({}, {"mid": 1})
        data = pd.DataFrame(list(result))
        df_li = data.values.tolist()
        for i in df_li:
            result_list.append(i[1])
        return result_list


class RedisDB:
    def __init__(self):
        self.r = redis.StrictRedis(host='localhost',
                                   port=6379,
                                   db=0,
                                   decode_responses=True
                                   )

    def add_to_list(self, key, value):
        """将数据放到队列中"""
        self.r.lpush(key, value)

    def get_from_list(self, key):
        """从队列中读取数据"""
        result = self.r.lpop(key)
        return result

    def run(self, result):
        df = pd.read_excel('./bili_nav.xlsx')
        df_li = df.values.tolist()
        count = 1000
        # print(result)
        for s_li in df_li:
            # print(s_li[0])
            if int(s_li[0]) in result:
                continue
            else:
                self.r.lpush('bili_nav', s_li[0])
                count += 1
                if count % 1000 == 0:
                    print('处理{}个数据'.format(count))


if __name__ == '__main__':
    mdb = MongoDB()
    result = mdb.read_uid()
    #  如果是第一次处理，可设置result 为空列表
    rdb = RedisDB()
    rdb.run(result)
