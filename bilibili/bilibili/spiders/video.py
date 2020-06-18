"""获取用户视频列表"""
import json
import scrapy
from scrapy_redis.spiders import RedisSpider
from ..items import VideoItem


class VideoSpider(RedisSpider):
    """
    start_urls = ['https://api.bilibili.com/x/space/arc/search?mid=8170242&pn=1&ps=25&jsonp=jsonp']
    """
    name = 'videos'
    allowed_domains = ['api.bilibili.md.com']
    redis_key = 'bili_videos:start_urls'
    # 需要视频的id
    comment_URL = 'https://api.bilibili.com/x/v2/reply?pn=1&type=1&oid={}&sort=2'

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
