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
