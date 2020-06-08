import json
import random
import requests
import time
from twisted.internet.error import TimeoutError, DNSLookupError, ConnectionRefusedError, ConnectionDone, ConnectError, \
    ConnectionLost, TCPTimedOutError
from scrapy.core.downloader.handlers.http11 import TunnelError
from twisted.internet import defer
from twisted.web.client import ResponseFailed
from fake_useragent import UserAgent
from settings import proxy_url


class RandomUserAgentMiddleware(object):
    """随机更换 User-Agent"""

    def __init__(self, crawler):
        super(RandomUserAgentMiddleware, self).__init__()
        self.ua = UserAgent()
        self.ua_type = crawler.settings.get('RANDOM_UA_TYPE', 'random')

    @classmethod
    def from_crawler(cls, crawler):
        return cls(crawler)

    def process_request(self, request, spider):
        def get_ua():
            return getattr(self.ua, self.ua_type)

        request.headers.setdefault('User-Agent', get_ua())


def random_proxy():
    """获取一个随机代理"""
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


class ProxiesMiddleware:
    ALL_EXCEPTIONS = (defer.TimeoutError, TimeoutError, DNSLookupError,
                      ConnectionRefusedError, ConnectionDone, ConnectError,
                      ConnectionLost, TCPTimedOutError, ResponseFailed,
                      IOError, TunnelError)

    def __init__(self):
        try:
            self.proxy = random_proxy()  # 随机获取一个代理方法
        except:
            self.proxy = random_proxy()  # 随机获取一个代理方法

        self.count = 0

    def process_request(self, request, spider):
        if self.count % 500 == 0:
            self.proxy = random_proxy()
        self.count += 1
        spider.logger.info("[proxy]   {}".format(self.proxy))
        request.meta["proxy"] = self.proxy

    def process_response(self, request, response, spider):
        # 因为遇到过那种返回状态码是200但是是一个被反扒的界面，界面固定都是小于3000字符
        # if len(response.text) < 3000 or response.status in [403, 400, 405, 301, 302, 418]:
        if response.status in [403, 400, 405, 301, 302, 402, 418]:
            spider.logger.info("[此代理报错]   {}".format(self.proxy))
            new_proxy = random_proxy()
            self.proxy = new_proxy
            spider.logger.info("[更的的新代理为]   {}".format(self.proxy))
            # break
            new_request = request.copy()
            new_request_l = new_request.replace(url=request.url)
            return new_request_l
        return response

    def process_exception(self, request, exception, spider):
        # 捕获几乎所有的异常
        if isinstance(exception, self.ALL_EXCEPTIONS):
            # 在日志中打印异常类型
            spider.logger.info("[Got exception]   {}".format(exception))
            spider.logger.info("[需要更换代理重试]   {}".format(self.proxy))
            new_proxy = random_proxy()
            self.proxy = new_proxy
            spider.logger.info("[更换后的代理为]   {}".format(self.proxy))
            new_request = request.copy()
            new_request_l = new_request.replace(url=request.url)
            return new_request_l
        # 打印出未捕获到的异常
        spider.logger.info("[not contained exception]   {}".format(exception))
