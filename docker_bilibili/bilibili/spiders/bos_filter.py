import hashlib
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


class BosFilter:
    def __init__(self):
        self.rd = RedisDB()

    def add_to_queue(self, filter_name, ori_str):
        """
        将原始字符串添加到去重队列
        :param filter_name: 队列名称
        :param ori_str:待加密字符串，即用户的 user_id ,或者是 focus_id
        :return:
        """
        secret_data = self.get_str_sha1_secret_str(str(ori_str))
        self.rd.add_to_set(filter_name, secret_data)

    @staticmethod
    def get_str_sha1_secret_str(res: str):
        """
        使用sha1加密算法，返回str加密后的字符串
        :param res:待加密字符串
        :return:加密完成的字符串
        """
        sha = hashlib.sha1(res.encode('utf-8'))
        encrypts = sha.hexdigest()
        return encrypts

    def judge_is_exist(self, filter_name, ori_str):
        """
        判断当前值是否已经请求过，若已经请求过，则返回True，未请求过返回False
        :param filter_name:
        :param ori_str:需要判断是否已经请求过的id
        :return:
        """

        secret_data = self.get_str_sha1_secret_str(str(ori_str))
        pre_count = self.rd.get_set_count(filter_name)
        self.rd.add_to_set(filter_name, secret_data)
        next_count = self.rd.get_set_count(filter_name)

        if pre_count < next_count:
            # 表示队列中不存在，插入成功， 未获取过
            return False
        else:
            # 表示队列中存在， 插入失败， 已经存在
            return True


if __name__ == '__main__':
    bos = BosFilter()
    print(bos.judge_is_exist('test', 1))
