# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class UserInfo(scrapy.Item):
    mid = scrapy.Field()
    name = scrapy.Field()
    level = scrapy.Field()
    sex = scrapy.Field()
    face = scrapy.Field()
    follower = scrapy.Field()
    following = scrapy.Field()


class VideosItem(scrapy.Item):
    video_aid = scrapy.Field()  # 评论所需的oid的值
    video_android_url = scrapy.Field()  # 评论url
    video_bid = scrapy.Field()  # 视频播放页视频id
    video_web_url = scrapy.Field()  # 视频播放url
    video_author = scrapy.Field()  # 视频作者
    author_id = scrapy.Field()  # 作者id
    comment_count = scrapy.Field()  # 评论总数
    video_id = scrapy.Field() # 视频
    play_count = scrapy.Field()
    description = scrapy.Field()
    title = scrapy.Field()
    created = scrapy.Field()
    video_length = scrapy.Field()
