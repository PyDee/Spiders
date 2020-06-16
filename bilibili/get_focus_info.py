import requests
import json
import random


class FocusSpider():
    def __init__(self):
        self.url = 'https://api.bilibili.com/x/relation/followings?vmid=416523954&pn=1&ps=50&order=desc&jsonp=jsonp'

        # 获取用户关注数，粉丝数 的接口
        self.follow_info_url = 'https://api.bilibili.com/x/relation/stat?vmid={}&jsonp=jsonp'
        self.proxies = self.get_proxy()

    @staticmethod
    def get_proxy():
        url = 'http://ip.ipjldl.com/index.php/api/entry?method=proxyServer.hdtiqu_api_url&packid=0&fa=0&groupid=0&fetch_key=&time=100&qty=5&port=1&format=json&ss=5&css=&dt=0&pro=&city=&usertype=4'
        ret = requests.get(url).text
        result = json.loads(ret)
        proxy_item = random.choice(result.get('data'))
        IP = proxy_item.get('IP')
        Port = proxy_item.get('Port')
        proxy = {
            'https': "https://{}:{}".format(IP, Port),
            'http': "https://{}:{}".format(IP, Port)
        }
        return proxy

    def parse(self):
        response = requests.get(self.url)
        ret_dict = json.loads(response.text)
        status_code = ret_dict.get('code')
        if not status_code:
            if 'data' in ret_dict.keys():
                info_dict = ret_dict.get('data')
                total = info_dict.get('total')

                focus_list = info_dict.get('list')
                user_id = response.url.strip('https://api.bilibili.com/x/relation/followings?vmid=').split('&')[0]
                item = dict()
                item['user_id'] = user_id
                item['focus_info'] = list()
                for focus_item in focus_list:
                    focus = dict()
                    focus['focus_id'] = focus_item.get('mid')
                    focus['focus_name'] = focus_item.get('uname')
                    focus['focus_face'] = focus_item.get('face')
                    focus['introduction'] = focus_item.get('sign')
                    try:
                        focus = self.get_follow_info(focus)
                    except:
                        self.proxies = self.get_proxy()
                        focus = self.get_follow_info(focus)
                    item['focus_info'].append(focus)

                if total <= 50:
                    # 直接一次获取用户的数据
                    print(item)

                else:
                    # yield 直接放第二页的url
                    self.parse_second_page(item)

    def parse_second_page(self, item):
        """
        处理第二页,将 focus item 放到列表中在循环获取
        :param response:
        :return:
        """
        url = 'https://api.bilibili.com/x/relation/followings?vmid=416523954&pn=2&ps=50&order=desc&jsonp=jsonp'
        response = requests.get(url)
        ret_dict = json.loads(response.text)
        status_code = ret_dict.get('code')
        if not status_code:
            if 'data' in ret_dict.keys():
                info_dict = ret_dict.get('data')
                focus_list = info_dict.get('list')
                for focus_item in focus_list:
                    focus = dict()
                    focus['focus_id'] = focus_item.get('mid')
                    focus['focus_name'] = focus_item.get('uname')
                    focus['focus_face'] = focus_item.get('face')
                    focus['introduction'] = focus_item.get('sign')
                    try:
                        focus = self.get_follow_info(focus)
                    except:
                        self.proxies = self.get_proxy()
                        focus = self.get_follow_info(focus)
                    item['focus_info'].append(focus)
                print(item)

    def get_follow_info(self, focus_item, proxies=None):
        focus_info_url = self.follow_info_url.format(focus_item.get('focus_id'))
        ret = requests.get(focus_info_url, proxies=proxies).text
        ret_dict = json.loads(ret)
        status_code = ret_dict.get('code')
        if not status_code:
            if 'data' in ret_dict.keys():
                info_dict = ret_dict['data']
                focus_item['focus_fans'] = info_dict.get('following')
                focus_item['focus_focus'] = info_dict.get('follower')
                return focus_item


if __name__ == '__main__':
    fs = FocusSpider()
    fs.parse()
