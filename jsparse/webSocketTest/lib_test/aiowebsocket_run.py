"""
请求aiowebsocket官方网站
测试 websocket 数据请求

aiowebsocket处理流程：
首先，aiowebsocket 根据 WebSocket 地址，向指定的服务端发送握手请求，并校验握手结果。
然后，在确认握手成功后，将数据发送给服务端。
整个过程中为了保持连接不断开，aiowebsocket 会自动与服务端响应 ping pong。
最后，aiowebsocket 读取服务端推送的消息
"""
import asyncio
import logging
from datetime import datetime
from aiowebsocket.converses import AioWebSocket


async def startup(uri):
    async with AioWebSocket(uri) as aws:
        converse = aws.manipulator
        message = b'AioWebSocket - Async WebSocket Client'
        while True:
            await converse.send(message)
            print('{time}-Client send: {message}'
                  .format(time=datetime.now().strftime('%Y-%m-%d %H:%M:%S'), message=message))
            mes = await converse.receive()
            print('{time}-Client receive: {rec}'
                  .format(time=datetime.now().strftime('%Y-%m-%d %H:%M:%S'), rec=mes))


if __name__ == '__main__':
    remote = 'ws://echo.websocket.org'
    try:
        asyncio.get_event_loop().run_until_complete(startup(remote))
    except KeyboardInterrupt as exc:
        logging.info('Quit.')
