# -*- coding: utf-8 -*-
""" 
@Time : 2020/10/28 15:24
@Author : PyDee
@File : kol_init.py
@description : 将本地哔哩哔哩 KOL id 上传到初始 url 队列中
"""
import sys
import os
import redis

REDIS_HOST = "redis"


class RedisDB:
    def __init__(self):
        self.r = redis.Redis(host=REDIS_HOST)

    def del_spider_key(self, spider_name):
        """
        清空当前 redis 中 key 的名称为 spider_name 中所有的值
        :param spider_name: redis 中保存的key 的名称
        :return: None
        """
        for key in self.r.scan_iter(f"{spider_name}*"):
            self.r.delete(key)

    def redis_init(self, spider_name, url, init_file_name):
        """
        向 Redis 数据库初始化 url 种子
        :param spider_name: spider 名称
        :param url: 缺少参数的作为种子的 url
        :param init_file_name: 初始化种子文件的名称
        :return:None
        """
        self.del_spider_key(spider_name)
        file_path = os.getcwd() + f'/{init_file_name}'
        # 计数器
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
                # 每10000 条进行一次统计报数
                if count % 10000 == 0:
                    print("execute insert! count is %d" % count)


if __name__ == '__main__':
    # 执行释义：python kol_init.py spider_name init_file_name
    # 执行方法：python kol_init.py kol_user kol.txt
    ori_rei = RedisDB()
    mode = sys.argv[1]
    init_file_name = sys.argv[2]
    spider_url = {
        "kol_user": "https://api.bilibili.com/x/space/acc/info?mid={}&jsonp=jsonp",
        "kol_video": "https://api.bilibili.com/x/space/arc/search?mid={}&ps=30&tid=0&pn=1&order=pubdate&jsonp=jsonp"
    }
    ori_rei.redis_init(mode, spider_url.get(mode), init_file_name)
