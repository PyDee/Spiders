import redis
import pandas as pd


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

    def run(self):
        df = pd.read_excel('./bili_nav.xlsx')
        df_li = df.values.tolist()
        count = 1000
        for s_li in df_li:
            self.r.lpush('bili_nav', s_li[0])
            count += 1
            if count % 1000 == 0:
                print('处理{}个数据'.format(count))


if __name__ == '__main__':
    rdb = RedisDB()
    rdb.run()
