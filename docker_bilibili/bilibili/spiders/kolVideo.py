# -*- coding: utf-8 -*-
""" 
@Time : 2020/10/28 15:06
@Author : PyDee
@File : kolVideo.py
@description : 哔哩哔哩 kol 数据抓取程序  获取用户发布视频列表及视频相关数据

"""
import re
import json
import time
import logging
import scrapy
from scrapy_redis.spiders import RedisSpider
from items import KolVideo


class KolVideoSpider(RedisSpider):
    """
    start_urls = ['https://api.bilibili.com/x/space/arc/search?mid=8170242&pn=1&ps=25&jsonp=jsonp']
    """
    name = 'kol_video'
    allowed_domains = ['api.bilibili.com']
    redis_key = "kol_video"
    custom_settings = {
        "RETRY_TIMES": 5,
        "DOWNLOAD_TIMEOUT": 3,
        "DOWNLOAD_DELAY": 0.1,

    }
    # 作者视频列表url: 用户id-页数
    video_list_url = 'https://api.bilibili.com/x/space/arc/search?mid={}&ps=30&tid=0&pn={}&order=pubdate&jsonp=jsonp'

    # 单个视频的点赞-投币-分享-收藏等数据
    video_detail_url = "https://api.bilibili.com/x/web-interface/view/detail?bvid={}&aid={}"

    def parse(self, response):
        """
        获取当前账号下视频列表
        https://api.bilibili.com/x/space/arc/search?mid=423895&ps=30&tid=0&pn=1&keyword=&order=pubdate&jsonp=jsonp
        :param response:
        :return:
        """
        html = json.loads(response.body)
        data = html.get('data')
        list_obj = data.get('list')

        # video 发布数量相关数据
        page_info = data.get('page')
        total = page_info.get('count')

        current_page = page_info.get('pn')
        kol_uid = re.search("mid=(.*?)&ps", response.url).group(1)
        # 处理多页
        page_count = total // 30 + 1
        if current_page < page_count:
            yield scrapy.Request(
                url=self.video_list_url.format(kol_uid, current_page + 1),
                callback=self.parse
            )

        # video列表相关数据
        video_list = list_obj.get('vlist')
        for video in video_list:
            video_item = KolVideo()
            video_item["mid"] = video.get('mid')  # KOL 用户id
            video_item["title"] = video.get('title')  # 标题
            video_item["play"] = video.get('play')  # 播放数
            video_item["video_review"] = video.get('video_review')  # 弹幕
            video_item["comment"] = video.get('comment')  # 评论
            video_item["bvid"] = video.get('bvid')  # 英文id
            video_item["aid"] = video.get('aid')  # 数字id
            video_item["created"] = self.temp_to_time(video.get('created'))  # 上传时间
            video_item["total"] = total  # 视频总数

            # 根据 投稿视频列表获取视频的点赞，投币，分享，收藏等详细数据
            yield scrapy.Request(
                url=self.video_detail_url.format(video_item.get('bvid'), video_item.get('aid')),
                callback=self.video_detail,
                meta=({'item': video_item}),
            )

    def video_detail(self, response):
        """
        获取视频相关参数：点赞-投币-收藏-分享
        https://api.bilibili.com/x/web-interface/view/detail?bvid=BV1fz4y1R76S&aid=583145673
        :param response:
        :return:
        """
        item = response.meta['item']
        staff = dict()
        detail_item = dict()
        # 逐层获取到视频detail 相关数据
        html = json.loads(response.body)
        data = html.get('data')
        up_view = data.get('View')

        try:
            staff = up_view.get('staff')
        except ValueError:
            self.log('当前视频不存在创作团队', level=logging.INFO)
            pass

        # 发布时间
        pubdate = up_view.get('pubdate')

        # 详细视频相关数据，pre级
        stat = up_view.get('stat')

        # 详细视频相关数据，sub级
        detail_item["lower_view"] = stat.get('view')  # 播放量
        detail_item["danmaku"] = stat.get('danmaku')  # 弹幕
        detail_item["reply"] = stat.get('reply')  # 评论
        detail_item["coin"] = stat.get('coin')  # 投币数
        detail_item["share"] = stat.get('share')  # 分享数
        detail_item["like"] = stat.get('like')  # 点赞
        detail_item["staff"] = staff  # 创作团队
        detail_item["pubdate"] = self.temp_to_time(pubdate)  # 提交时间
        item.update(detail_item)
        yield item

    @staticmethod
    def temp_to_time(temp: int) -> str:
        """
        时间戳转化为年月日分时秒
        :param temp:
        :return:
        """
        st = time.localtime(temp)
        ft = time.strftime('%Y-%m-%d %H:%M:%S', st)
        return ft
