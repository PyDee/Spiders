## _哔哩哔哩 docker 版本 ReadMe_

### 项目名称
    - dockerbilibili

### 项目功能
    - user.py : 抓取用户信息 spider
    - focus.py : 抓取用户关注者信息 spider 所有关注者信息保存在列表中
    
### 文件说明
    1. data_init/redis_init.py : 用来初始化需要获取的内容的 start_urls
        - 执行: python redis_init.py user 初始化用户信息 
        - 执行: python redis_init.py focus 初始化用户关注人信息列表
    2. docker-compose.yml 
        项目启动了五个服务 : 
        - 其中 bili-focus 和 bili-user 为获取内容的服务
        - 其中 bili-account 中以命令行格式进入，在 data_init 目录下进行初始化
### 命令
    启动-进入到项目目录下：docker-compose up
    终止-进入到项目目录下：docker-compose down
    
### docker 地址
 - [项目的docker地址](https://hub.docker.com/repository/docker/bossen/bilibili)

---
