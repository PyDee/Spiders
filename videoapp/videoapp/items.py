# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class VideoItem(scrapy.Item):
    platform = scrapy.Field()  # 视频平台
    classify = scrapy.Field()  # 节目分类
    title = scrapy.Field()  # 视频名称
    issued_date = scrapy.Field()  # 视频上映时间
    play_count = scrapy.Field()  # 节目播放量
    comment_count = scrapy.Field()  # 节目评论数
    heat = scrapy.Field()  # 视频热度


class QqItem(VideoItem):
    """腾讯视频"""
    data_float = scrapy.Field()  # 腾讯视频video 唯一标识


class IqiyiItem(VideoItem):
    """爱奇艺"""
    tvID = scrapy.Field()  # 获取热度的url参数，tvid
    hot = scrapy.Field()  # 获取到的热度
    playUrl = scrapy.Field()  # 获取评论数


class MgItem(VideoItem):
    """芒果TV"""
    vid = scrapy.Field()


class YouKuItem(VideoItem):
    """优酷视频"""
    videoId = scrapy.Field()
    pass
