"""将本地微博id上传到初始url队列中"""
import sys
import os
import redis

# from ..settings import REDIS_HOST
REDIS_HOST = "127.0.0.1"


class RedisDB:
    def __init__(self):
        self.r = redis.Redis(host=REDIS_HOST)
        pass

    def redis_init(self, spider_name, url):
        for key in self.r.scan_iter(f"{spider_name}*"):
            self.r.delete(key)
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
        url = "https://api.bilibili.com/x/space/acc/info?mid={}&jsonp=jsonp"
        self.redis_init('bili_user', url)

    def insert_focus(self):
        """
        用户关注 start_urls 初始化
        :return:None
        """
        url = "https://api.bilibili.com/x/relation/followings?vmid={}&pn=1&ps=50&order=desc&jsonp=jsonp"
        self.redis_init('bili_focus', url)

    def insert_videos(self):
        pass

    def insert_comments(self):
        pass


if __name__ == '__main__':
    ori_rei = RedisDB()
    mode = sys.argv[1]
    mode_to_fun = {
        'user': ori_rei.insert_user,
        'videos': ori_rei.insert_videos,
        'focus': ori_rei.insert_focus,
        'comments': ori_rei.insert_comments,
    }
    mode_to_fun[mode]()
