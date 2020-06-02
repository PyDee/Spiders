"""获取用户视频列表"""
import json
import scrapy
from ..items import VideoItem


class VideoSpider(scrapy.Spider):
    name = 'videos'
    allowed_domains = ['api.bilibili.com']
    start_urls = ['https://api.bilibili.com/x/space/arc/search?mid=8170242&pn=1&ps=25&jsonp=jsonp']
    # 需要视频的id
    comment_URL = 'https://api.bilibili.com/x/v2/reply?pn=1&type=1&oid={}&sort=2'

    # https://api.bilibili.com/x/v2/reply?jsonp=jsonp&pn=1&type=1&oid=370492501&sort=2

    def parse(self, response):
        ret_dict = json.loads(response.text)
        status_code = ret_dict.get('code')
        if not status_code:
            if 'data' in ret_dict.keys():
                info_dict = ret_dict.get('data')
                video_list = info_dict.get('list').get('vlist')
                for video in video_list:
                    video_info = VideoItem()
                    video_info['video_aid'] = video.get('aid')
                    video_info[
                        'video_android_url'] = 'https://api.bilibili.com/x/v2/reply?jsonp=jsonp&pn=1&type=1&oid={}&sort=2'.format(
                        video.get('aid'))
                    video_info['video_bid'] = video.get('bvid')
                    video_info['video_web_url'] = 'https://www.bilibili.com/video/{}'.format(video.get('bvid'))
                    video_info['video_author'] = video.get('author')
                    video_info['author_id'] = video.get('mid')
                    video_info['comment_count'] = video.get('comment')
                    video_info['play_count'] = video.get('play')
                    video_info['description'] = video.get('description')
                    video_info['title'] = video.get('title')
                    video_info['created'] = video.get('created')
                    video_info['video_length'] = video.get('length')
                    print(video_info)
                    # """
                    # "comment": 56,
                    # "typeid": 138,
                    # "play": 4751,
                    # "pic": "//i2.hdslb.com/bfs/archive/59a0b5f2c2331df02706687e78db39623e2b57ce.jpg",
                    # "subtitle": "",
                    # "description": "但是怕你们直接抢在我之前关了视频，所以剩下的话写在这里了哈哈哈！\n\np2是尊妈，融合，游梦还有汐瑶梦语的投稿，很.....感动啊，看完拎起了刀子，并打算再也不布置作业了。\n你们是我带的最...的一届。\n\n——————————————————————————————————————\n视频：云玉鸾\n封面：云玉鸾\n打轴：YY今天出去买家具了",
                    # "copyright": "",
                    # "title": "【粉丝投稿】不开播的时间，每天真的吃了睡睡了吃吗？   【云玉鸾】",
                    # "review": 0,
                    # "author": "云玉鸾",
                    # "mid": 8170242,
                    # "created": 1588235515,
                    # "length": "10:18",
                    # "video_review": 54,
                    # "aid": 370492501,
                    # "bvid": "BV1dZ4y1W7mE",
                    # "hide_click": false,
                    # "is_pay": 0,
                    # "is_union_video": 0
                    # """
# todo 将视频id或者评论url放到start_urls 中，开启comment的爬虫
