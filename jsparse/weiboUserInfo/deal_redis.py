import os
import six
import redis


class RedisDB:
    def __init__(self):
        self.r = redis.Redis()
        self.db_name = "vip_ids"

    def fetch_one_element(self):
        element = self.r.lpop(self.db_name)
        element = self.bytes_to_str(element)
        return element

    @staticmethod
    def bytes_to_str(s, encoding='utf-8'):
        """Returns a str if a bytes object is given."""
        if six.PY3 and isinstance(s, bytes):
            return s.decode(encoding)
        return s

    def redis_init(self):
        file_path = os.getcwd() + '\\a.txt'
        count = 0
        with open(file_path, 'r') as file_to_read:
            while True:
                lines = file_to_read.readline()
                lines = lines.replace("\n", "")
                if not lines:
                    break
                self.r.lpush(self.db_name, lines.strip())
                count = count + 1
                if count % 10000 == 0:
                    print("execute insert! count is %d" % count)


if __name__ == '__main__':
    rdb = RedisDB()
    rdb.redis_init()
