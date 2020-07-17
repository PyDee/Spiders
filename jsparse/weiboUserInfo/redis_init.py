import os
import redis


class RedisDB:
    def __init__(self):
        self.r = redis.Redis(host="127.0.0.1", port=7001)
        self.db_name = "vip_ids"

    def redis_init(self):
        file_path = os.getcwd() + '\\wbidforvip.txt'
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
