# Spiders ReadMe
- videoapp
    - [videoapp项目说明](./.github/videoapp.md)
- bilibili
    - [bilibili项目说明](.github/bilibili.md)
- docker_bilibili
   - [docker_bilibili项目说明](.github/docker-bilibili.md)
- scripts
   - [scripts文件说明](.github/scripts.md)
- jsparse
   - [jsparse文件说明](.github/jsparse.md)


### 同时执行所有 spider 的实现
```
    1.新建命令文件夹commands,目录下新建crawlall.py
    2.需在settings里配置 COMMANDS_MODULE = 'project.commands'
    3.命令行中执行启动所有spider：scrapy crawlall
 
    原理:
        通过加载用户初始化的 crawler_process.spiders 获取列表下的所有spider的name,然后遍历list 分别crawl
```
### scrapy 命令行实现断点续爬
```
    断点续爬 scrapy crawl spider_name -s JOBDIR=crawls/spider_name
    详细见开发者文档：
    https://doc.scrapy.org/en/latest/topics/jobs.html?highlight=jobdir
```