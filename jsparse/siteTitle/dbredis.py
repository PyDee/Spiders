import os
import six
import redis


class RedisDB:
    def __init__(self):
        self.r = redis.Redis()

    def fetch_one_element(self):
        element = self.r.lpop('title')
        element = self.bytes_to_str(element)
        return element

    @staticmethod
    def bytes_to_str(s, encoding='utf-8'):
        """Returns a str if a bytes object is given."""
        if six.PY3 and isinstance(s, bytes):
            return s.decode(encoding)
        return s

    def redis_init(self):
        """将数据写入到队列中"""
        file_path = os.getcwd() + '\\jd_hosts.txt'
        count = 0
        with open(file_path, 'r') as file_to_read:
            while True:
                lines = file_to_read.readline()
                lines = lines.replace("\n", "")
                if not lines:
                    break
                    pass
                new_url = "http://{}".format(lines)
                self.r.lpush("title", new_url)
                count = count + 1
                if count % 10000 == 0:
                    print("execute insert! count is %d" % count)


if __name__ == '__main__':
    rdb = RedisDB()
    rdb.fetch_one_element()
