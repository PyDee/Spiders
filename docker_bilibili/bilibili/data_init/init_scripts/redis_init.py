"""将本地微博id上传到初始url队列中"""
import sys
import os
import redis

REDIS_HOST = "localhost"


class RedisDB:
    def __init__(self):
        self.r = redis.Redis(host=REDIS_HOST)
        pass

    def redis_init(self, spider_name, url):
        file_path = os.getcwd() + '\\init.txt'
        count = 0
        with open(file_path, 'r') as file_to_read:
            while True:
                lines = file_to_read.readline()
                lines = lines.replace("\n", "")
                if not lines:
                    break
                    pass
                new_url = url.format(lines)
                self.r.lpush(f'{spider_name}:start_urls', new_url)
                count = count + 1
                if count % 10000 == 0:
                    print("execute insert! count is %d" % count)

    def insert_user(self):
        """
        用户 start_urls 初始化
        :param mid:哔哩哔哩中表示 user_id 的字段
        :return:None
        """
        spider_name = 'bili_user'
        for key in self.r.scan_iter(f"{spider_name}*"):
            self.r.delete(key)
        url = "https://api.bilibili.com/x/space/acc/info?mid={}&jsonp=jsonp"
        self.redis_init(spider_name, url)

    def insert_relation(self):
        """
        用户关注 start_urls 初始化
        :return:None
        """
        spider_name = 'bili_relation'
        for key in self.r.scan_iter(f"{spider_name}*"):
            self.r.delete(key)
        url = "https://api.bilibili.com/x/relation/followings?vmid={}&pn=1&ps=50&order=desc&jsonp=jsonp"
        self.redis_init(spider_name, url)
        url = "https://api.bilibili.com/x/relation/followings?vmid={}&pn=2&ps=50&order=desc&jsonp=jsonp"
        self.redis_init(spider_name, url)


if __name__ == '__main__':
    ori_rei = RedisDB()
    mode = sys.argv[1]
    mode_to_fun = {
        'user': ori_rei.insert_user,
        'relation': ori_rei.insert_relation,
    }
    mode_to_fun[mode]()
