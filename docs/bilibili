# _哔哩哔哩 ReadMe_

### 项目名称
    - bilibili

### 项目功能
    - user.py : 抓取用户信息 spider
    - focus.py : 抓取用户关注者信息 spider 所有关注者信息保存在列表中
    - fans.py : 功能尚未完成，需要用户将获取的粉丝 id 组合为 url 保存的队列中
    - video.py : 获取用户发布到平台的视频列表，并构造 comment 所需的 url
    - comment.py : 初始 start_urls 为 video 的 video_android_url， 需要获取用户 video 数据后才会启动
    
### 文件说明
    1. data_init/redis_init.py : 用来初始化需要获取的内容的 start_urls
        已实现: 
            - 执行: python redis_init.py user 获取用户信息 
            - 执行: python redis_init.py focus 获取用户关注人信息列表
        未实现: 
            - 执行: python redis_init.py video 获取用户视频列表，及 comment url 保存  
            - 执行: python redis_init.py fans 获取用户粉丝信息列表 

### 启动命令
    
    1. 本程序支持同时开启全部数据采集脚本:
        scrapy run_all
    2. 获取用户信息:
        scrapy crawl user
    3.其他:
        ……