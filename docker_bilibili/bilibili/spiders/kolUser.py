# -*- coding: utf-8 -*-
""" 
@Time : 2020/10/28 15:05
@Author : PyDee
@File : kolUser.py
@description : 哔哩哔哩 kol 数据抓取程序 用户基础信息相关
"""
import json
import scrapy
from items import KolUser
from scrapy_redis.spiders import RedisSpider


class KolUserSpider(RedisSpider):
    name = 'kol_user'
    allowed_domains = ['space.bilibili.com', 'api.bilibili.com', 'api.vc.bilibili.com']
    redis_key = "kol_user"
    # 用户信息
    # user_info = 'https://api.bilibili.com/x/space/acc/info?mid={}&jsonp=jsonp'

    # 关注相关
    follow_info = 'https://api.bilibili.com/x/relation/stat?vmid={}&jsonp=jsonp'

    # audio 获取发布音频数量
    audio_url = 'https://api.bilibili.com/audio/music-service/web/song/upper?uid={}&pn=1&ps=30&order=1&jsonp=jsonp'

    # article 文章发布数量
    article_url = "https://api.bilibili.com/x/article/up/lists?mid={}&sort=0&jsonp=jsonp"

    # album 相簿发布数量
    album_url = "https://api.vc.bilibili.com/link_draw/v1/doc/upload_count?uid={}"

    def parse(self, response):
        """
        用户基本信息 ： 昵称-个性签名-官方认证
        https://api.bilibili.com/x/space/acc/info?mid=2920960&jsonp=jsonp
        :param response:
        :return:
        """
        # 构建用户信息存储结构
        item = KolUser()

        html = json.loads(response.body)
        data = html.get('data')

        # 账号信息
        item["mid"] = data.get('mid')  # 用户id
        item["name"] = data.get('name')  # 昵称
        item["introduction"] = data.get('sign')  # 个性签名
        item["official"] = data.get('official').get('title')  # bilibili 官方认证
        response.meta['item'] = item
        yield scrapy.Request(url=self.follow_info.format(item.get('mid')),
                             meta=response.meta,
                             callback=self.following_follower,
                             )

    def following_follower(self, response):
        """
        获取用户数据：关注数-粉丝数
        https://api.bilibili.com/x/relation/stat?vmid=2920960&jsonp=jsonp
        following:关注数
        follower： 粉丝数
        :param response:
        :return:
        """
        item = response.meta['item']
        html = json.loads(response.body)
        data = html.get('data')
        item["focus"] = data.get('following')  # 关注数
        item["following"] = data.get('follower')  # 粉丝数
        response.meta['item'] = item
        yield scrapy.Request(url=self.audio_url.format(item.get('mid')),
                             meta=response.meta,
                             callback=self.audio_count,
                             )

    def audio_count(self, response):
        """
        音频总数
        https://api.bilibili.com/audio/music-service/web/song/upper?uid=423895&pn=1&ps=30&order=1&jsonp=jsonp
        :return:
        """
        item = response.meta['item']
        html = json.loads(response.body)
        data = html.get('data')
        item["audio_count"] = data.get('totalSize')
        response.meta['item'] = item
        yield scrapy.Request(url=self.article_url.format(item.get('mid')),
                             meta=response.meta,
                             callback=self.article_count,
                             )

    def article_count(self, response):
        """
        获取专栏（文章）的总数
        https://api.bilibili.com/x/article/up/lists?mid=423895&sort=0&jsonp=jsonp&callback=__jp9
        :param response:
        :return:
        """
        item = response.meta['item']
        html = json.loads(response.body)
        data = html.get('data')
        item["article_total"] = data.get('total')
        response.meta['item'] = item
        yield scrapy.Request(url=self.album_url.format(item.get('mid')),
                             meta=response.meta,
                             callback=self.album_count,
                             )

    def album_count(self, response):
        """
        获取相册的总数
        https://api.vc.bilibili.com/link_draw/v1/doc/upload_count?uid=423895
        :param response:
        :return:
        """
        item = response.meta['item']
        html = json.loads(response.body)
        data = html.get('data')
        item['album_count'] = data.get('all_count')
        yield item
