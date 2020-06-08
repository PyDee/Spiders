BOT_NAME = 'bilibili'

SPIDER_MODULES = ['bilibili.spiders']
NEWSPIDER_MODULE = 'bilibili.spiders'

# Obey robots.txt rules
ROBOTSTXT_OBEY = False

# Configure maximum concurrent requests performed by Scrapy (default: 16)
CONCURRENT_REQUESTS = 5
DOWNLOAD_DELAY = 0.01

# Enable or disable downloader middlewares
DOWNLOADER_MIDDLEWARES = {
    'bilibili.middlewares.ProxiesMiddleware': 100,
    'scrapy.downloadermiddlewares.httpproxy.HttpProxyMiddleware': 101,
    'bilibili.middlewares.RandomUserAgentMiddleware': 543,
}

# Configure item pipelines
ITEM_PIPELINES = {
    'bilibili.pipelines.BiLiBiLiPipeline': 300,
}

proxy_url = 'http://ip.ipjldl.com/index.php/api/entry?method=proxyServer.hdtiqu_api_url&packid=0&fa=0&groupid=0&fetch_key=&time=100&qty=10&port=1&format=json&ss=5&css=&dt=0&pro=&city=&usertype=4'

MONGO_HOST = 'mongo'
MONGO_PORT = 27017

REDIS_HOST = "redis"
REDIS_PORT = 6379

# 配置scrapy-redis调度器
SCHEDULER = "scrapy_redis.scheduler.Scheduler"
# 配置url去重
DUPEFILTER_CLASS = "scrapy_redis.dupefilter.RFPDupeFilter"
SCHEDULER_QUEUE_CLASS = 'scrapy_redis.queue.PriorityQueue'
