import scrapy
import json
from scrapy_redis.spiders import RedisSpider
from ..items import CommentItem


class CommentSpider(RedisSpider):
    """
    start_urls = ['https://api.bilibili.com/x/v2/reply?jsonp=jsonp&pn=1&type=1&oid=370937646&sort=2', ]
    """
    name = 'comment'
    allowed_domains = ['api.bilibili.md.com']
    redis_key = "bili_comment:start_urls"

    def parse(self, response):
        ret_dict = json.loads(response.text)
        status_code = ret_dict.get('code')
        if not status_code:
            if 'data' in ret_dict.keys():
                info_dict = ret_dict.get('data')
                page = info_dict.get('page')
                page_size = page.get('size')
                count = page.get('count')
                comment_count = page.get('acount')  # 评论数
                page_count = comment_count // page_size + 1
                print(page_size, count, comment_count)

                # 将剩余url添加到start_urls 中
                if 'pn=1' in response.url:
                    for page_num in range(2, page_count):
                        page_url = response.url.replace('pn=1', 'pn={}'.format(page_num))
                        yield scrapy.Request(page_url, self.parse, dont_filter=True, meta=response.meta)
                replies = info_dict.get('replies')
                self.parse_replies(replies)

    def parse_replies(self, replies):
        """解析评论以及评论的评论"""
        if replies is not None:
            for item in replies:
                comment_item = CommentItem()
                comment_item['comment_msg'] = item.get('content').get('message')
                comment_item['comment_user'] = item.get('member').get('uname')
                comment_item['comment_user_mid'] = item.get('member').get('mid')
                comment_item['comment_id'] = item.get('rpid')
                comment_item['comment_root'] = item.get('root')
                comment_item['comment_parent'] = item.get('parent')
                comment_item['comment_like'] = item.get('like')
                print(comment_item)
                comment_replies = item.get('replies')
                self.parse_replies(comment_replies)
                # commented_count = item.get('count')
                # commented_recount = item.get('rcount')
