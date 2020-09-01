# 部分弹幕功能代码来自项目：https://github.com/IsoaSFlus/danmaku，感谢大佬
# 快手弹幕代码来源及思路：https://github.com/py-wuhao/ks_barrage，感谢大佬

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


async def main(token, livestreamid):
    """
    开启socket连接，开始任务
    :param url:websocket url
    :return:
    """
    # 实例化一个异步队列
    q = asyncio.Queue()
    # 实例化获取弹幕的类，具体到某一个网站， dmc实例对象
    dmc = danmaku.DanmakuClient(token, livestreamid, q)
    # 创建异步任务，执行输出弹幕
    asyncio.create_task(printer(q))
    # 启动socket 连接获取任务
    await dmc.start()


# ws_request_url = input('请输入直播间地址：\n')
token = 'Ds4f89bdMcDjECgYkXi4L09xXnTuMdf6rlyWVajlSRVtGygfUxYHTSfExzAPpObg8MK97dYoomjMn/mOJGqO9r3iEQGpG3h3Fj2Lmeb7opJ0X4e1th9Yz/x2MJCzShNWthlEnmJvXiPtMaVM19NM/A=='
livestreamid = 'Qc04mxukNbI'
asyncio.run(main(token, livestreamid))
