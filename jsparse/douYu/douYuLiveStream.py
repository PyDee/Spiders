import json
import requests
import time


class DouYu(object):

    def __init__(self):
        # 'https://www.douyu.com/betard/52319'  # 帖子相关url， room_gift
        self.url = 'https://www.douyu.com/gapi/rkc/directory/0_0/'
        self.page = 1
        self.num = 1
        self.artist_info = {}
        self.total_hot = 0
        self.flag = 1

    def __get_response(self):  # 请求接口，返回响应
        res = requests.get(self.url + str(self.page))
        response = res.json()
        return response

    def __get_first_name(self):  # 拿到第一页第一个的主播姓名，用来判断循环重复
        # url = 'https://www.douyu.com/gapi/rkc/directory/0_0/1'
        url = 'https://www.douyu.com/gapi/rkc/directory/mixList/0_0/1'
        res = requests.get(url)
        response = res.json()
        first_name = response['data']['rl'][0]['nn']
        return first_name

    def get_artist_info(self):
        first_name = self.__get_first_name()  # 得到当前排名第一个主播姓名，用来判断循环结束

        while DouYu.flag == 1:
            response = self.__get_response()
            self.info = response['data']['rl']
            for i in range(len(self.info)):
                self.info = response['data']['rl']
                name = self.info[i]['nn']
                game = self.info[i]['c2name']
                room_id = self.info[i]['rid']  # 房间号
                user_id = self.info[i]['uid']  # 用户id
                rn = self.info[i]['rn']  # 描述
                hot = int(self.info[i]['ol'])  # 粉丝数
                if self.num > 300:
                    if first_name == name:
                        self.flag = 0
                        break
                game_and_hot = []
                game_and_hot.append(game)
                game_and_hot.append(hot)
                self.artist_info[name] = game_and_hot
                self.num += 1  # 计算直播数量
                print("{}.主播姓名:{}, 人气:{:,},直播类型:{}".format(self.num, name, hot, game))
            DouYu.page += 1
        return self.artist_info

    def analyze_info(self, artist_info):
        game_num = {}
        info = sorted(artist_info.items(), key=lambda x: x[1][1], reverse=True)
        print("\n==统计时间为:{}".format(time.strftime("%Y-%m-%d %X", time.localtime())))
        print("当前直播人数:{:,}".format(self.num))
        print("当前斗鱼人气排名前十的主播是：")
        for i in range(10):
            print("{}，【{}】 - 人气热度:{:,} - 【{}】".format(i + 1, info[i][0], info[i][1][1], info[i][1][0]))
        game_list = {}
        for l in info:
            game = l[1][0]
            hot = l[1][1]
            self.total_hot += hot  # 统计总热度
            game_list[game] = game_list.get(game, 0) + hot
            game_num[game] = game_num.get(game, 0) + 1
        game_num = sorted(game_num.items(), key=lambda x: x[1], reverse=True)
        game_list = sorted(game_list.items(), key=lambda x: x[1], reverse=True)
        print("\n当前斗鱼直播类型热度排名前十:")
        for k in range(10):
            game_name = game_list[k][0]
            game_hot = game_list[k][1]
            print(
                "{}，【{}】 - 人气热度:{} - 占比:{:.2f}%".format(k + 1, game_name, game_hot, (game_hot / self.total_hot) * 100))
        print("\n当前斗鱼最多人在直播的类型前十:")
        for p in range(10):
            game_name = game_num[p][0]
            game_number = game_num[p][1]
            print(
                "{},当前共有{}人正在直播【{}】 - 占比:{:.2f}%".format(p + 1, game_number, game_name, (game_number / self.num) * 100))

    def get_room_info(self):
        url = 'https://www.douyu.com/betard/46000'
        ret = requests.get(url).text
        result = json.loads(ret)
        room_info = result.get('room')
        print(room_info.get('room_name'))
        print(room_info.get('room_id'))
        print(room_info.get('nickname'))
        print(room_info.get('second_lvl_name'))
        print(room_info.get('levelInfo').get('level'))
        print(room_info.get('levelInfo').get('upgrade_exp'))
        print(room_info.get('levelInfo').get('min_exp'))
        print(room_info.get('levelInfo').get('experience'))
        print(room_info.get('levelInfo').get('keep_exp'))


if __name__ == '__main__':
    dy = DouYu()
    # info_list = dy.get_artist_info()
    # dy.analyze_info(info_list)
    dy.get_room_info()
