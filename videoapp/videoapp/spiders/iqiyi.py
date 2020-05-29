# -*- coding: utf-8 -*-
"""
introduce: 爱奇艺：评论数----热度

"""
import scrapy
from scrapy import Request
from ..items import IqiyiItem


def check_classify(channelID):
    classify = ''
    if channelID == 1:
        classify = 'movie'
    if channelID == 2:
        classify = 'tv'
    if channelID == 6:
        classify = 'variety'
    if channelID == 4:
        classify = 'cartoon'
    if channelID == 3:
        classify = 'doco'

    return classify


class IqiyiSpider(scrapy.Spider):
    flag = True
    name = 'iqiyi'
    allowed_domains = ['www.iqiyi.com', 'pcw-api.iqiyi.com']
    start_urls = [
        # 电影
        'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=1&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=2020&mode=24&pageNum=1&pageSize=48&site=iqiyi&source_type=&three_category_id=&without_qipu=1',
        'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=1&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=2020&mode=24&pageNum=2&pageSize=48&site=iqiyi&source_type=&three_category_id=&without_qipu=1',
        'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=1&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=2020&mode=24&pageNum=3&pageSize=48&site=iqiyi&source_type=&three_category_id=&without_qipu=1',
        'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=1&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=2020&mode=24&pageNum=4&pageSize=48&site=iqiyi&source_type=&three_category_id=&without_qipu=1',

        # 电视剧
        'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=2&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=2020&mode=24&pageNum=1&pageSize=48&site=iqiyi&source_type=&three_category_id=&without_qipu=1',
        'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=2&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=2020&mode=24&pageNum=2&pageSize=48&site=iqiyi&source_type=&three_category_id=&without_qipu=1',

        # 动漫
        'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=4&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=2020&mode=24&pageNum=1&pageSize=48&site=iqiyi&source_type=&three_category_id=&without_qipu=1',
        'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=4&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=2020&mode=24&pageNum=2&pageSize=48&site=iqiyi&source_type=&three_category_id=&without_qipu=1',
        'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=4&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=2020&mode=24&pageNum=3&pageSize=48&site=iqiyi&source_type=&three_category_id=&without_qipu=1',

        # 综艺
        'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=6&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=2020&mode=24&pageNum=1&pageSize=48&site=iqiyi&source_type=&three_category_id=&without_qipu=1',
        'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=6&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=2020&mode=24&pageNum=2&pageSize=48&site=iqiyi&source_type=&three_category_id=&without_qipu=1',
        'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=6&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=2020&mode=24&pageNum=3&pageSize=48&site=iqiyi&source_type=&three_category_id=&without_qipu=1',
        'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=6&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=2020&mode=24&pageNum=4&pageSize=48&site=iqiyi&source_type=&three_category_id=&without_qipu=1',
        'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=6&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=2020&mode=24&pageNum=5&pageSize=48&site=iqiyi&source_type=&three_category_id=&without_qipu=1',
        'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=6&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=2020&mode=24&pageNum=6&pageSize=48&site=iqiyi&source_type=&three_category_id=&without_qipu=1',
        'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=6&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=2020&mode=24&pageNum=7&pageSize=48&site=iqiyi&source_type=&three_category_id=&without_qipu=1',
        'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=6&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=2020&mode=24&pageNum=8&pageSize=48&site=iqiyi&source_type=&three_category_id=&without_qipu=1',
        'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=6&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=2020&mode=24&pageNum=9&pageSize=48&site=iqiyi&source_type=&three_category_id=&without_qipu=1',
        'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=6&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=2020&mode=24&pageNum=10&pageSize=48&site=iqiyi&source_type=&three_category_id=&without_qipu=1',
        'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=6&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=2020&mode=24&pageNum=11&pageSize=48&site=iqiyi&source_type=&three_category_id=&without_qipu=1',
        'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=6&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=2020&mode=24&pageNum=12&pageSize=48&site=iqiyi&source_type=&three_category_id=&without_qipu=1',
        'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=6&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=2020&mode=24&pageNum=13&pageSize=48&site=iqiyi&source_type=&three_category_id=&without_qipu=1',
        'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=6&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=2020&mode=24&pageNum=14&pageSize=48&site=iqiyi&source_type=&three_category_id=&without_qipu=1',

        # 纪录片
        'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=3&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=2020&mode=24&pageNum=1&pageSize=48&site=iqiyi&source_type=&three_category_id=&without_qipu=1',
        'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=3&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=2020&mode=24&pageNum=2&pageSize=48&site=iqiyi&source_type=&three_category_id=&without_qipu=1',
        'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=3&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=2020&mode=24&pageNum=3&pageSize=48&site=iqiyi&source_type=&three_category_id=&without_qipu=1',
        'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=3&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=2020&mode=24&pageNum=4&pageSize=48&site=iqiyi&source_type=&three_category_id=&without_qipu=1',
        'https://pcw-api.iqiyi.com/search/video/videolists?access_play_control_platform=14&channel_id=3&data_type=1&from=pcw_list&is_album_finished=&is_purchase=&key=&market_release_date_level=2020&mode=24&pageNum=5&pageSize=48&site=iqiyi&source_type=&three_category_id=&without_qipu=1',

    ]

    def parse(self, response):
        result = eval(response.body.decode(response.encoding).replace('true', 'True').replace('false', 'False'))
        page_count = result.get('data').get('pageTotal')
        if page_count > 1 and self.flag:
            self.flag = False
            for page_num in range(1, page_count + 1):
                page_url = response.url.replace('pageNum=1', 'pageNum={}'.format(page_num))
                yield Request(page_url, self.parse, dont_filter=True, meta=response.meta)
        element_list = result.get('data').get('list')
        hot_url = 'https://pcw-api.iqiyi.com/video/video/hotplaytimes/{}'
        for element in element_list:
            item = IqiyiItem()
            item['platform'] = self.name
            item['classify'] = check_classify(element.get('channelId'))
            item['title'] = element.get('name')
            item['issued_date'] = element.get('formatPeriod')
            item['playUrl'] = element.get('playUrl')
            item['tvID'] = element.get('tvId')

            request_meta = response.meta
            request_meta['item'] = item

            yield Request(hot_url.format(item['tvID']), meta=request_meta, callback=self.get_hot)

    def get_hot(self, response):
        """视频热度"""
        item = response.meta['item']
        result = eval(response.body.decode(response.encoding))
        item['hot'] = result.get('data')[0].get('hot')

        request_meta = response.meta
        request_meta['item'] = item

        yield Request(item['playUrl'], meta=request_meta, callback=self.comment_count)

    def comment_count(self, response):
        item = response.meta['item']
        item['comment_count'] = response.xpath('//div[@id="block-E"]/div/div/div/@*')[3].extract()

        yield item

    # todo 综艺存在部分获取不到上映日期，还有电视剧
