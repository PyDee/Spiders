"""执行本脚本，可以将所有用户关注的 focus_id 导入到 focus 抓取队列 """
import redis


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

    def add_to_set(self, key, value):
        """将数据放到集合中"""
        self.r.sadd(key, value)

    def get_from_set(self, key):
        """从集合中读取数据"""
        result = self.r.smembers(key)
        return result

    def get_set_count(self, key):
        """获取集合总数"""
        set_count = self.r.scard(key)
        return set_count

    def run(self):
        # 由 relation 获取到的 follower id的集合
        relation_focus_set = "bili_relation_set"
        # 用于对已抓取的 follower id 进行过滤
        filter_set_name = "bili_focus_used_set"
        # 等待抓取的 follower 的id
        focus_list = "bili_focus_list"
        focus_info_url = "https://api.bilibili.com/x/relation/stat?vmid={}&jsonp=jsonp"
        result = self.r.smembers(relation_focus_set)
        count = 0
        for item in result:
            pre_count = self.get_set_count(filter_set_name)
            self.add_to_set(filter_set_name, item)
            next_count = self.get_set_count(filter_set_name)
            if pre_count < next_count:
                count += 1
                self.add_to_list(focus_list, focus_info_url.format(item))
            else:
                continue
        print("总共新增：{}个待处理 focus_id".format(count))


if __name__ == '__main__':
    rdb = RedisDB()
    rdb.run()
