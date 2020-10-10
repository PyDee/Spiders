"""莱特币"""
import asyncio
import logging
from datetime import datetime
from aiowebsocket.converses import AioWebSocket


async def startup(uri):
    async with AioWebSocket(uri) as aws:
        converse = aws.manipulator
        # 客户端给服务端发送消息
        await converse.send(
            '{"action": "subscribe","args": ['
            '"Ticker:BTC/USDT", "Ticker:ETH/USDT", "Ticker:BCH/USDT", "Ticker:BSV/USDT", "Ticker:LTC/USDT",'
            '"Ticker:XRP/USDT", "Ticker:ETC/USDT", "Ticker:EOS/USDT", "Ticker:TRX/USDT", "Ticker:ADA/USDT",'
            '"Ticker:LINK/USDT", "Ticker:OKB/USDT", "Ticker:ALGO/USDT", "Ticker:ELF/USDT", "Ticker:AMBC/USDT",'
            '"Ticker:XDAG/USDT", "Ticker:DOGE/USDT", "Ticker:PRA/USDT", "Ticker:QSD/USDT" ]}')
        while True:
            mes = await converse.receive()
            print('{time}-Client receive: {rec}'.format(time=datetime.now().strftime('%Y-%m-%d %H:%M:%S'), rec=mes))


if __name__ == '__main__':
    remote = 'wss://api.bbx.com/v1/ifspot/realTime'
    try:
        asyncio.get_event_loop().run_until_complete(startup(remote))
    except KeyboardInterrupt as exc:
        logging.info('Quit.')
