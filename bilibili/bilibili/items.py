# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class UserInfo(scrapy.Item):
    mid = scrapy.Field()  # 用户id
    name = scrapy.Field()  # 用户昵称
    level = scrapy.Field()  # 用户等级
    sex = scrapy.Field()  # 用户性别
    introduction = scrapy.Field()  # 用户性别
    face = scrapy.Field()  # 用户头图
    focus = scrapy.Field()  # 用户关注了多少人
    following = scrapy.Field()  # 用户有多少粉丝
    video_play_count = scrapy.Field()  # 视频播放量
    article_play_count = scrapy.Field()  # 文章阅读量
    like = scrapy.Field()  # 点赞数
    video_count = scrapy.Field()  # 点赞数


class VideoItem(scrapy.Item):
    """用户发布视频列表信息"""
    video_aid = scrapy.Field()  # 评论所需的oid的值
    video_android_url = scrapy.Field()  # 评论url
    video_bid = scrapy.Field()  # 视频播放页视频id
    video_web_url = scrapy.Field()  # 视频播放url
    video_author = scrapy.Field()  # 视频作者
    author_id = scrapy.Field()  # 作者id
    comment_count = scrapy.Field()  # 评论总数
    play_count = scrapy.Field()  # 视频播放量
    description = scrapy.Field()  # 作者描述
    title = scrapy.Field()  # 视频标题
    created = scrapy.Field()  # 视频上传时间
    video_length = scrapy.Field()  # 视频时长


class CommentItem(scrapy.Item):
    """视频评论信息"""
    comment_msg = scrapy.Field()
    comment_user = scrapy.Field()
    comment_user_mid = scrapy.Field()
    comment_id = scrapy.Field()
    comment_root = scrapy.Field()
    comment_parent = scrapy.Field()
    comment_like = scrapy.Field()
    # comment_text = scrapy.Field()
    # comment_text = scrapy.Field()
