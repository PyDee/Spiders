# 部分弹幕功能代码来自项目：https://github.com/IsoaSFlus/danmaku，感谢大佬
# 快手弹幕代码来源及思路：https://github.com/py-wuhao/ks_barrage，感谢大佬
# 仅抓取用户弹幕，不包括入场提醒、礼物赠送等。

import asyncio
import danmaku


async def printer(q):
    """
    输出弹幕信息
    :param q: 输出异步队列中 put 的弹幕
    :return:
    """
    while True:
        m = await q.get()
        if m['msg_type'] == 'danmaku':
            print(f'{m["name"]}：{m["content"]}')


async def main(url):
    """
    开启socket连接，开始任务
    :param url:websocket url
    :return:
    """
    # 实例化一个异步队列
    q = asyncio.Queue()
    # 实例化获取弹幕的类，具体到某一个网站， dmc实例对象
    dmc = danmaku.DanmakuClient(url, q)
    # 创建异步任务，执行输出弹幕
    asyncio.create_task(printer(q))
    # 启动socket 连接获取任务
    await dmc.start()


# ws_request_url = input('请输入直播间地址：\n')
ws_request_url = 'https://live.kuaishou.com/u/jjworld126'
asyncio.run(main(ws_request_url))

# 斗鱼直播：https://www.douyu.com/85894
# B站直播：https://live.bilibili.com/70155
# 快手直播：https://live.kuaishou.com/u/jjworld126
