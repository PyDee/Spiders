"""YY 直播数据采集"""
import json
import requests
import re


class YY:
    def __init__(self):
        # 吃鸡端游
        self.chicken_pc = "http://www.yy.com/more/page.action?biz=chicken&subBiz=jdqs&page=1&moduleId=1473&pageSize=60"
        # 吃鸡手游
        self.chicken_phone = 'http://www.yy.com/more/page.action?biz=chicken&subBiz=cjzc&page=2&moduleId=1776&pageSize=60'
        # 王者荣耀
        self.honor_url = 'https://www.yy.com/more/page.action?biz=game&subBiz=idx&page=2&moduleId=1180&pageSize=60'
        # 主机热游
        self.hot_url = 'https://www.yy.com/more/page.action?biz=djry&subBiz=idx&page=2&moduleId=1180&pageSize=60'
        # 工会
        self.labor_union = 'https://www.yy.com/zone/microservice/guild-rank/queryGuildInfo?yyno={}'
        # 用户信息 users-users-uid
        self.user_info = 'https://www.yy.com/api/liveInfoDetail/{}/{}/{}'

    def get_user_info(self, sid, ssid, uid):
        """获取用户信息"""
        ret = requests.get(self.user_info.format(sid, ssid, uid))
        ret = ret.text
        print("user_info:", ret)

    @staticmethod
    def get_live_page(live_url):
        """获取直播页面内容，提取工会 yy_num"""
        url = 'https://www.yy.com{}'.format(live_url)
        ret = requests.get(url)
        yy_no = re.search("yynum: (.*?),", ret.text).group(1).strip('"')
        return yy_no

    def get_labor_union(self, live_url):
        #  todo 需要获取yyno
        """获取工会信息, 需要提取页面内容，即get_live_info"""
        live_dict = dict()
        yy_no = self.get_live_page(live_url)
        ret = requests.get(self.labor_union.format(yy_no))
        result = ret.json()
        live_dict['lavor_name'] = result.get('data').get('name')
        live_dict['lavor_rank'] = result.get('data').get('rank')
        live_dict['lavor_type'] = result.get('data').get('type')
        live_dict['lavor_yy_num'] = result.get('data').get('yy_num')
        print("labor_info:", live_dict)

    @staticmethod
    def get_live_list(url):
        """直播列表"""
        ret = requests.get(url)
        result = json.loads(ret.text)
        data = result.get('data')
        return data

    def parse_live(self, data):
        total_count = data.get('totalCount')
        items = data.get('data')
        for item in items:
            live_dict = dict()
            # todo 构造字典，保存入库
            live_dict['uid'] = item.get('uid')
            live_dict['name'] = item.get('name')
            live_dict['desc'] = item.get('desc')
            live_dict['users'] = item.get('users')
            live_dict['biz'] = item.get('biz')
            live_dict['liveUrl'] = item.get('liveUrl')
            # self.get_user_info(item.get('sid'), item.get('ssid'), item.get('uid'))
            self.get_labor_union(item.get('liveUrl'))
            print("live_dict:", live_dict)
            break

    def run(self):
        result = self.get_live_list(self.chicken_pc)
        self.parse_live(result)


if __name__ == '__main__':
    yy = YY()
    yy.run()
