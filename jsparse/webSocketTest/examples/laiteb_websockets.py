# coding:utf-8
"""
websockets 和 aiowebsocket 发起 websocket请求类似
websocket_client 非异步-不同于以上两种
"""
import asyncio
import websockets


async def start_up(uri):
    async with websockets.connect(uri) as websocket:
        await websocket.send('{"action": "subscribe","args": ['
                             '"Ticker:BTC/USDT", "Ticker:ETH/USDT", "Ticker:BCH/USDT", "Ticker:BSV/USDT", "Ticker:LTC/USDT",'
                             '"Ticker:XRP/USDT", "Ticker:ETC/USDT", "Ticker:EOS/USDT", "Ticker:TRX/USDT", "Ticker:ADA/USDT",'
                             '"Ticker:LINK/USDT", "Ticker:OKB/USDT", "Ticker:ALGO/USDT", "Ticker:ELF/USDT", "Ticker:AMBC/USDT",'
                             '"Ticker:XDAG/USDT", "Ticker:DOGE/USDT", "Ticker:PRA/USDT", "Ticker:QSD/USDT" ]}')
        while True:
            recv = await websocket.recv()
            print(recv)


if __name__ == '__main__':
    ws_url = 'wss://api.bbx.com/v1/ifspot/realTime'
    asyncio.get_event_loop().run_until_complete(start_up(ws_url))
