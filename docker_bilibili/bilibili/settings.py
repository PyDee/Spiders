BOT_NAME = 'bilibili'

SPIDER_MODULES = ['spiders']
NEWSPIDER_MODULE = 'spiders'

# Obey robots.txt rules
ROBOTSTXT_OBEY = False

# Configure maximum concurrent requests performed by Scrapy (default: 16)
CONCURRENT_REQUESTS = 5
DOWNLOAD_DELAY = 0.01

# Enable or disable downloader middlewares
DOWNLOADER_MIDDLEWARES = {
    # 规避 retry 代理失效
    'bilibili.middlewares.ProxiesMiddleware': 551,
    'bilibili.middlewares.RandomUserAgentMiddleware': 543,
    'scrapy.downloadermiddlewares.httpproxy.HttpProxyMiddleware': 101,
    'scrapy.downloadermiddlewares.useragent.UserAgentMiddleware': None,
}

# Configure item pipelines
ITEM_PIPELINES = {
    # 'pipelines.BiLiBiLiPipeline': 300,
    'pipelines.BiLiPipeline': 300,
    'scrapy_redis.pipelines.RedisPipeline': 301,
}

proxy_url = 'http://ip.ipjldl.com/index.php/api/entry?method=proxyServer.hdtiqu_api_url&packid=0&fa=0&groupid=0&fetch_key=&time=100&qty=10&port=1&format=json&ss=5&css=&dt=0&pro=&city=&usertype=4'

MONGO_HOST = 'localhost'
MONGO_PORT = 27017

REDIS_HOST = "localhost"
REDIS_PORT = 6379
REDIS_URL = 'redis://{}:{}'.format(REDIS_HOST, REDIS_PORT)

# 配置scrapy-redis调度器
SCHEDULER = "scrapy_redis.scheduler.Scheduler"
# 配置url去重
DUPEFILTER_CLASS = "scrapy_redis.dupefilter.RFPDupeFilter"
# SCHEDULER_QUEUE_CLASS = 'scrapy_redis.queue.PriorityQueue'

RANDOM_UA_TYPE = 'random'
# Persist
SCHEDULER_PERSIST = True

RETRY_TIMES = 20

DOWNLOAD_TIMEOUT = 3
