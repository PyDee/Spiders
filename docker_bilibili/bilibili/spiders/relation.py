# -*- coding: utf-8 -*-
import scrapy
import json
import redis
from items import Relationship


class RelationSpider(scrapy.Spider):
    name = 'relation'
    r = redis.Redis(host="redis")
    allowed_domains = ['api.bilibili.com', 'api.bilibili.com']
    redis_key = "bili_relation:start_urls"

    def parse(self, response):
        ret_dict = json.loads(response.text)
        status_code = ret_dict.get('code')
        if not status_code:
            if 'data' in ret_dict.keys():
                info_dict = ret_dict.get('data')
                total = info_dict.get('total')
                focus_list = info_dict.get('list')
                user_id = response.url.strip('https://api.bilibili.com/x/relation/followings?vmid=').split('&')[0]
                for focus_item in focus_list:
                    focus_info = Relationship()
                    focus_info['total'] = total
                    focus_info['user_id'] = user_id
                    focus_info['focus_id'] = focus_item.get('mid')
                    focus_info['focus_name'] = focus_item.get('uname')
                    focus_info['focus_face'] = focus_item.get('face')
                    focus_info['introduction'] = focus_item.get('sign')

                    focus_url = 'https://api.bilibili.com/x/relation/stat?vmid={}&jsonp=jsonp'
                    focus_url = focus_url.format(focus_info.get('focus_id'))
                    self.r.lpush('bili_focus:start_urls', focus_url)
                    yield focus_info
