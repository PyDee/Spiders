# 部分弹幕功能代码来自项目：https://github.com/IsoaSFlus/danmaku，感谢大佬
# 快手弹幕代码来源及思路：https://github.com/py-wuhao/ks_barrage，感谢大佬

import sys
import os
import base64
import asyncio
import danmaku
from db import RedisDB, MysqlClass

r = RedisDB()
"""
# 编码
encode_str = base64.encodebytes(test_str.encode('utf8'))  # b'aGVsbG8gd29ybGQh\n'
print(encode_str.decode())  # 默认以utf8解码，结果 aGVsbG8gd29ybGQh
# 解码
decode_str = base64.decodebytes(encode_str)  # b'hello world!'
print(decode_str.decode())  # 默认以utf8解码，结果 hello world!

"""


async def printer(q):
    """
    输出弹幕信息
    :param q: 输出异步队列中 put 的弹幕
    :return:
    """
    while True:
        mdb = MysqlClass()
        m = await q.get()
        if m['msg_type'] == 'danmaku':
            insert_dict = {
                "live_user": unique_name,
                "comment_author": base64.encodebytes(m["name"].encode("utf-8")),
                "comment_text": base64.encodebytes(m["content"].encode("utf-8")),
            }
            # print(f'{m["name"]}：{m["content"]}')
            print(insert_dict)
            # mdb.insert_comment(insert_dict)
        if len(m) <= 0:
            mdb.conn.close()


async def main(token, livestreamid, unique_name):
    """
    开启socket连接，开始任务
    :param url:websocket url
    :return:
    """
    # 实例化一个异步队列
    q = asyncio.Queue()
    # 实例化获取弹幕的类，具体到某一个网站， dmc实例对象
    dmc = danmaku.DanmakuClient(unique_name, token, livestreamid, q)
    # 创建异步任务，执行输出弹幕
    asyncio.create_task(printer(q))
    # 启动socket 连接获取任务
    await dmc.start()


ws_url = 'wss://live-ws-pg-group2.kuaishou.com/websocket'
token = "jjnulr/CfUUZn9h89lku9FuHrFjKt1LlvLEWploUiaME8VZKyJagV599nFuKrUvs0GFmz6QvK1AETPARhKZAOKDMxYGJjNgHAkTphv9olxc6BrdROuf6mAkOg8IIEnw3RmEh36HSIRQ26mVw6DPfufA=="
livestreamid = "qgOKtdiChxA"
page_id = "oJXJ-inRH9qBJa6S_1600832567708"
kwaiId = "3xz4msjkmvucqc6"
unique_name = "222656694"
# unique_name = 1111111111
# token = sys.argv[1]
# livestreamid = sys.argv[2]
# unique_name = sys.argv[3]
pid = os.getpid()
r.update_hash_filed(unique_name, {'pid': pid})
asyncio.run(main(token, livestreamid, unique_name))
