import redis


class RedisDB:
    def __init__(self):
        self.r = redis.StrictRedis(host='localhost', port=6379, db=0)

    def set_str(self, key, value):
        self.r.set(key, value)

    def get_str(self, key):
        value = self.r.get(key)
        return value
