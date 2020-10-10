import json
from aiowebsocket.converses import AioWebSocket
import asyncio


async def start_up(ws_url):
    async with AioWebSocket(ws_url) as ws:
        converse = ws.manipulator
        await converse.send('{"event": "ticker", "params": {"ids": [49653, 49654]}}')
        while True:
            recv = await converse.receive()
            print(recv)


if __name__ == '__main__':
    ws_url = 'wss://list.ws.mytokenapi.com/ticker'
    asyncio.get_event_loop().run_until_complete(start_up(ws_url))
