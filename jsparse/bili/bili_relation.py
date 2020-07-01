import os
import time
import json
import redis
import requests
import signal
import random
from multiprocessing import Process, Pool
from bos_filter import RedisDB, BosFilter
from bili_mongo import BosMongo

rdb = RedisDB()
mbd = BosMongo()
bf = BosFilter()

r = redis.Redis(host="127.0.0.1")
redis_key = "bili_relation_list"
redis_set = "bili_relation_set"


def parse(pid, url, proxies):
    response = requests.get(url, proxies=proxies)
    ret_dict = json.loads(response.text)
    status_code = ret_dict.get('code')
    if not status_code:
        if 'data' in ret_dict.keys():
            info_dict = ret_dict.get('data')
            total = info_dict.get('total')
            focus_list = info_dict.get('list')
            user_id = response.url.strip('https://api.bilibili.com/x/relation/followings?vmid=').split('&')[0]
            for focus_item in focus_list:
                focus_info = dict()
                focus_info['total'] = total
                focus_info['user_id'] = user_id
                focus_info['focus_id'] = focus_item.get('mid')
                focus_info['focus_name'] = focus_item.get('uname')
                focus_info['focus_face'] = focus_item.get('face')
                focus_info['introduction'] = focus_item.get('sign')
                # print("test:", focus_info)
                # 将 follower id 写入到待抓取队列
                r.sadd(redis_set, focus_info.get('focus_id'))
                mbd.execute('relation', focus_info)
            print(f"进程--{pid}--当前抓取：用户-{user_id}-完成")


def get_proxy(index):
    proxy_url = 'http://ip.ipjldl.com/index.php/api/entry?method=proxyServer.hdtiqu_api_url&packid=0&fa=0&groupid=0&fetch_key=&time=100&qty=10&port=1&format=json&ss=5&css=&dt=0&pro=&city=&usertype=4'
    try:
        response = requests.get(proxy_url)
        response = response.text
        result = json.loads(response)
        proxy_list = result.get('data')
        proxy_count = len(proxy_list)
        num = random.randint(0, proxy_count)
        ip = proxy_list[num].get('IP')
        port = proxy_list[num].get('Port')
        proxy = 'https://{}:{}'.format(ip, port)

        return proxy
    except Exception as e:
        print(f"{index}----当前获取代理失败，正在重新获取代理！！！")
        time.sleep(3)
        get_proxy(index)
        pass


def run(index):
    proxy = get_proxy(index)
    proxies = {
        "http": proxy,
        "https": proxy,
    }
    k = 0
    while True:
        url = rdb.r.lpop(redis_key)
        if url is None:
            break
        try:
            parse(index, url, proxies)
        except Exception as e:
            k += 1
            proxy = get_proxy(index)
            proxies = {
                "http": proxy,
                "https": proxy,
            }
            print(f"{index}----new_proxy:{proxies}")
            parse(index, url, proxies)
    print("over")


if __name__ == '__main__':
    for i in range(20):
        p = Process(target=run, args=(i,))
        p.start()

    print("主进程ouer！！！")
