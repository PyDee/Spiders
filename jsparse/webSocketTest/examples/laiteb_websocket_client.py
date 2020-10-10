# coding:utf-8
from datetime import datetime
import time

try:
    import thread
except ImportError:
    import _thread as thread
import websocket

ws_url = 'wss://api.bbx.com/v1/ifspot/realTime'


def one_connect():
    ws = websocket.create_connection(ws_url, timeout=10)
    ws.send('{"action": "subscribe","args": ['
            '"Ticker:BTC/USDT", "Ticker:ETH/USDT", "Ticker:BCH/USDT", "Ticker:BSV/USDT", "Ticker:LTC/USDT",'
            '"Ticker:XRP/USDT", "Ticker:ETC/USDT", "Ticker:EOS/USDT", "Ticker:TRX/USDT", "Ticker:ADA/USDT",'
            '"Ticker:LINK/USDT", "Ticker:OKB/USDT", "Ticker:ALGO/USDT", "Ticker:ELF/USDT", "Ticker:AMBC/USDT",'
            '"Ticker:XDAG/USDT", "Ticker:DOGE/USDT", "Ticker:PRA/USDT", "Ticker:QSD/USDT" ]}')  # 订阅交易数据
    while True:
        content = ws.recv()
        print(content)
        ws.close()


# 保持长连接，持续获取服务端数据
def on_message(ws, message):
    message = eval(message)
    time_str = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    group = message.get('group')
    data = message.get('data')
    timestamp = data.get('timestamp')
    amount24 = data.get('amount24')
    volume_day = data.get('volume_day')
    print(f"time_str:{time_str}-group:{group}-timestamp:{timestamp}-amount24:{amount24}-volume_day:{volume_day}")


def on_error(ws, error):
    print(error)


def on_close(ws):
    print("### closed ###")


def on_open(ws):
    def run(*args):
        # for i in range(3):
        ws.send('{"action": "subscribe","args": ['
                '"Ticker:BTC/USDT", "Ticker:ETH/USDT", "Ticker:BCH/USDT", "Ticker:BSV/USDT", "Ticker:LTC/USDT",'
                '"Ticker:XRP/USDT", "Ticker:ETC/USDT", "Ticker:EOS/USDT", "Ticker:TRX/USDT", "Ticker:ADA/USDT",'
                '"Ticker:LINK/USDT", "Ticker:OKB/USDT", "Ticker:ALGO/USDT", "Ticker:ELF/USDT", "Ticker:AMBC/USDT",'
                '"Ticker:XDAG/USDT", "Ticker:DOGE/USDT", "Ticker:PRA/USDT", "Ticker:QSD/USDT" ]}')
        while 1:
            time.sleep(10)
            ws.send('{"action": "ping"}')
            # ws.send('{"action": "subscribe","args": ['
            #         '"Ticker:BTC/USDT", "Ticker:ETH/USDT", "Ticker:BCH/USDT", "Ticker:BSV/USDT", "Ticker:LTC/USDT",'
            #         '"Ticker:XRP/USDT", "Ticker:ETC/USDT", "Ticker:EOS/USDT", "Ticker:TRX/USDT", "Ticker:ADA/USDT",'
            #         '"Ticker:LINK/USDT", "Ticker:OKB/USDT", "Ticker:ALGO/USDT", "Ticker:ELF/USDT", "Ticker:AMBC/USDT",'
            #         '"Ticker:XDAG/USDT", "Ticker:DOGE/USDT", "Ticker:PRA/USDT", "Ticker:QSD/USDT" ]}')
        # time.sleep(1)
        # ws.close()
        # print("thread terminating...")

    thread.start_new_thread(run, ())


if __name__ == "__main__":
    websocket.enableTrace(True)
    ws = websocket.WebSocketApp(ws_url,
                                on_message=on_message,
                                on_error=on_error,
                                on_close=on_close
                                )
    ws.on_open = on_open
    ws.run_forever()
