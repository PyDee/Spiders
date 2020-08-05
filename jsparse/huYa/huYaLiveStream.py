import requests


class HuYa:
    def __init__(self):
        # 直播列表
        self.live_list_url = 'https://www.huya.com/cache.php?m=LiveList&do=getLiveListByPage&tagAll=0&page={}'
        # 贵宾席
        self.vip_url = 'https://www.huya.com/cache1min.php?m=VipBarList&tid={}&sid={}'
        # 周贡榜
        self.week_rank = 'https://www.huya.com/cache5min.php?m=WeekRank&do=getItemsByPid&pid={}'

    def get_week_rank(self, pid):
        res = requests.get(self.week_rank.format(pid))
        response = res.json()
        result = response.get('data').get('vWeekRankItem')
        return result

    @staticmethod
    def parse_week_rank(week_list):
        for item in week_list:
            week_rank_dict = dict()
            week_rank_dict['nick_name'] = item['sNickName']
            week_rank_dict['iScore'] = item['iScore']
            week_rank_dict['iNobleLevel'] = item['iNobleLevel']
            week_rank_dict['lUid'] = item['lUid']
            week_rank_dict['iUserLevel'] = item['iUserLevel']
            print(week_rank_dict)

    def get_vip_list(self, tid):
        sid = tid
        res = requests.get(self.vip_url.format(tid, sid))
        response = res.json()
        result = response.get('result').get('items')
        return result

    @staticmethod
    def parse_vip_list(vip_list):
        for element in vip_list:
            vip_info = dict()
            vip_info['nick_name'] = element.get('sNickName')
            vip_info['level'] = element.get('iUserLevel')  # 后边的等级？
            vip_info['sNobleName'] = element.get('tNobleInfo').get('sNobleName')  # 等级中文名？
            vip_info['iBadgeLevel'] = element.get('tFansInfo').get('iBadgeLevel')  # 前边的等级？
            # print(vip_info)

    def deal_vip_week(self, one_element):
        vip_list = self.get_vip_list(one_element['channel'])
        self.parse_vip_list(vip_list)
        week_list = self.get_week_rank(one_element['channel'])
        self.parse_week_rank(week_list)

        pass

    def get_live_list(self, page=0):
        while True:
            res = requests.get(self.live_list_url.format(page))
            response = res.json()
            artists = response['data']['datas']

            if artists is None or artists == []:
                break
            self.parse_live_list(artists)
            print("第%s页结束" % page)
            page += 1
            break

    def parse_live_list(self, artists):
        """解析全部直播列表"""
        for i in artists:
            one_element_dict = dict()
            one_element_dict['nick'] = i['nick']
            one_element_dict['totalCount'] = int(i['totalCount'])  # 人气
            one_element_dict['classify'] = i['gameFullName']
            one_element_dict['profileRoom'] = i['profileRoom']
            one_element_dict['channel'] = i['channel']  # 获取直播时的贵宾数据
            one_element_dict['uid'] = i['uid']
            # 解析当前直播用户的贵宾-周贡榜等信息
            # todo 直接输出，需要存库处理
            self.deal_vip_week(one_element_dict)
            break


if __name__ == '__main__':
    hy = HuYa()
    hy.get_live_list()
