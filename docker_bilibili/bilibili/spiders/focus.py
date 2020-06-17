import json
from scrapy.http import Request
from scrapy_redis.spiders import RedisSpider


class FocusSpider(RedisSpider):
    name = 'focus'
    allowed_domains = ['api.bilibili.com']
    redis_key = "bili_focus:start_urls"
    second_page_url = 'https://api.bilibili.com/x/relation/followings?vmid={}&pn=2&ps=50&order=desc&jsonp=jsonp'
    # 获取用户关注数，粉丝数 的接口
    follow_info_url = 'https://api.bilibili.com/x/relation/stat?vmid={}&jsonp=jsonp'

    # 获取用户关注数，粉丝数 的接口
    def parse(self, response):
        ret_dict = json.loads(response.text)
        status_code = ret_dict.get('code')
        if not status_code:
            if 'data' in ret_dict.keys():
                info_dict = ret_dict.get('data')
                total = info_dict.get('total')
                focus_list = info_dict.get('list')
                user_id = response.url.strip('https://api.bilibili.com/x/relation/followings?vmid=').split('&')[0]
                item = list()
                if total <= 50:
                    for focus_item in focus_list:
                        focus = dict()
                        focus['total'] = total
                        focus['user_id'] = user_id
                        focus['focus_id'] = focus_item.get('mid')
                        focus['focus_name'] = focus_item.get('uname')
                        focus['focus_face'] = focus_item.get('face')
                        focus['introduction'] = focus_item.get('sign')
                        response.meta['item'] = focus
                        # yield 请求focus内容
                        yield Request(url=self.follow_info_url.format(focus.get('focus_id')),
                                      meta=response.meta,
                                      callback=self.get_follow_info)

                else:
                    for focus_item in focus_list:
                        focus = dict()
                        focus['total'] = total
                        focus['user_id'] = user_id
                        focus['focus_id'] = focus_item.get('mid')
                        focus['focus_name'] = focus_item.get('uname')
                        focus['focus_face'] = focus_item.get('face')
                        focus['introduction'] = focus_item.get('sign')
                        item.append(focus)
                        response.meta['item'] = item
                    # yield 直接放第二页的url
                    yield Request(url=self.second_page_url.format(user_id),
                                  meta=response.meta,
                                  callback=self.parse_second_page)

    def parse_second_page(self, response):
        """
        处理第二页,将 focus item 放到列表中在循环获取
        :param response:
        :return:
        """
        item = response.meta['item']
        ret_dict = json.loads(response.text)
        status_code = ret_dict.get('code')
        if not status_code:
            if 'data' in ret_dict.keys():
                info_dict = ret_dict.get('data')
                total = info_dict.get('total')
                user_id = response.url.strip('https://api.bilibili.com/x/relation/followings?vmid=').split('&')[0]
                focus_list = info_dict.get('list')
                for focus_item in focus_list:
                    focus = dict()
                    focus['total'] = total
                    focus['user_id'] = user_id
                    focus['focus_id'] = focus_item.get('mid')
                    focus['focus_name'] = focus_item.get('uname')
                    focus['focus_face'] = focus_item.get('face')
                    focus['introduction'] = focus_item.get('sign')
                    item.append(focus)

                for element in item:
                    response.meta['item'] = element
                    # yield 请求focus内容
                    yield Request(url=self.follow_info_url.format(element.get('focus_id')),
                                  meta=response.meta,
                                  callback=self.get_follow_info)

    def get_follow_info(self, response):
        focus_item = response.meta["item"]
        ret_dict = json.loads(response.text)
        status_code = ret_dict.get('code')
        if not status_code:
            if 'data' in ret_dict.keys():
                info_dict = ret_dict['data']
                focus_item['focus_fans'] = info_dict.get('following')
                focus_item['focus_focus'] = info_dict.get('follower')
                yield focus_item
