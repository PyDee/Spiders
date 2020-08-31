import asyncio
import re

import aiohttp
from .kuaishou import KuaiShou

__all__ = ['DanmakuClient']


class DanmakuClient:
    """
    实例化 某个网站的 类，不用单独去实现，可以用统一的方法实例化
    """

    def __init__(self, url, q):
        self.__url = ''
        self.__site = None
        self.__hs = None
        self.__ws = None
        self.__stop = False
        self.__dm_queue = q
        self.__link_status = True
        if 'http://' == url[:7] or 'https://' == url[:8]:
            self.__url = url
        else:
            self.__url = 'http://' + url
        for u, s in {
            'kuaishou.com': KuaiShou,
        }.items():
            if re.match(r'^(?:http[s]?://)?.*?%s/(.+?)$' % u, url):
                # 表示的是类
                self.__site = s
                # 表示的是？
                self.__u = u
                break
        if self.__site is None:
            print('Invalid link!')
            exit()
        self.__hs = aiohttp.ClientSession()
        # 实例化之后再main文件中会调用start 方法

    async def init_ws(self):
        ws_url, reg_datas = await self.__site.get_ws_info(self.__url)
        self.__ws = await self.__hs.ws_connect(ws_url)
        if reg_datas:
            for reg_data in reg_datas:
                await self.__ws.send_bytes(reg_data)

    async def heartbeats(self):
        while not self.__stop and self.__site.heartbeat:
            await asyncio.sleep(self.__site.heartbeatInterval)
            try:
                await self.__ws.send_bytes(self.__site.heartbeat)
            except:
                pass

    async def fetch_danmaku(self):
        while not self.__stop:
            async for msg in self.__ws:
                self.__link_status = True
                # 根据快手或者其他网站的解析代码来获取到socket 的响应信息
                ms = self.__site.decode_msg(msg.data)
                for m in ms:
                    # 将数据放入队列
                    await self.__dm_queue.put(m)
            await asyncio.sleep(1)
            await self.init_ws()
            await asyncio.sleep(1)

    async def start(self):
        await self.init_ws()
        await asyncio.gather(
            self.heartbeats(),
            self.fetch_danmaku(),
        )

    async def stop(self):
        self.__stop = True
        await self.__hs.close()
