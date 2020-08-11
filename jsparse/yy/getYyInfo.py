import json
import requests
from lxml import etree


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

    def get_live_info(self, users):
        """请求直播页面， 解析工会 num 和用户 uid """
        url = 'https://www.yy.com/{}/{}'.format(users, users)
        ret = requests.get(url).text
        doc = etree.HTML(ret)
        uid = doc.xpath('//span[@class="w-liveplayer-head__follow-btn"]/@data-uid')
        yyno = doc.xpath('//a[@class="anchor-name"]/@href')
        self.get_labor_union(yyno=yyno)
        return uid, yyno

    def get_user_info(self, users, uid):
        """获取用户信息"""
        ret = requests.get(self.user_info.format(users, users, uid)).text
        print(ret)

    def get_labor_union(self, yyno
                        ):
        """获取工会信息, 需要提取页面内容，即get_live_info"""
        ret = requests.get(self.labor_union.format(yyno)).text
        print(ret)

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
            live_dict['id'] = item.get('id')
            live_dict['uid'] = item.get('uid')
            live_dict['sid'] = item.get('sid')
            live_dict['ssid'] = item.get('ssid')
            live_dict['pid'] = item.get('pid')
            live_dict['name'] = item.get('name')
            live_dict['users'] = item.get('users')
            live_dict['biz'] = item.get('biz')
            user_id, yyno = self.get_live_info(item.get('users'))
            live_dict['user_id'] = user_id
            live_dict['yyno'] = yyno
            print(live_dict)
            self.get_user_info(item.get('users'), user_id)
            self.get_labor_union(yyno)
            break

    def run(self):
        result = self.get_live_list(self.chicken_pc)
        self.parse_live(result)


if __name__ == '__main__':
    yy = YY()
    yy.run()
