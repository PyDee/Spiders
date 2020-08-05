import requests
import time

page, count, num, lis, game_list, hot_list = 1, 0, 0, {}, {}, {}
url = "https://www.huya.com/cache.php?m=LiveList&do=getLiveListByPage&tagAll=0&page="
while True:
    res = requests.get(url + str(page))
    response = res.json()
    artists = response['data']['datas']

    # 如果响应为空的话，代表遍历结束，数据分析打印
    if artists == None or artists == []:
        lis = sorted(lis.items(), key=lambda x: x[1][0], reverse=True)
        print("\n==统计时间为:{}\n当前虎牙排行前十的主播是:".format(time.strftime("%Y-%m-%d %X", time.localtime())))
        for i in range(10):
            print("{},{},人气:{:,},类型:{}".format(i + 1, lis[i][0], lis[i][1][0], lis[i][1][1]))
        print("\n当前共有%s位主播在直播：" % num)
        game_list = sorted(game_list.items(), key=lambda x: x[1], reverse=True)
        for game in game_list:
            if int(game[1]) > 500:
                print("共有{}人直播{},比例为{:.2f}%".format(game[1], game[0], (int(game[1]) / num) * 100))
            else:
                print("其余数量太少不统计了")
                break
        hot_list = sorted(hot_list.items(), key=lambda x: x[1], reverse=True)
        print("\n当前直播类型人气排名:")
        for hot in range(10):
            print("{},{},总人气{},比例为{:.2f}%".format(hot + 1, hot_list[hot][0], hot_list[hot][1],
                                                  (int(hot_list[hot][1]) / count) * 100))
        break

    for i in artists:
        one_element_dict = dict()
        store = []
        nick = i['nick']
        introduction = i['introduction']
        totalCount = int(i['totalCount'])  # 人气
        gamename = i['gameFullName']
        profileRoom = i['profileRoom']
        channel = i['channel']  # 获取直播时的贵宾数据
        uid = i['uid']
        one_element_dict['nick'] = nick
        one_element_dict['totalCount'] = totalCount
        one_element_dict['classify'] = gamename
        one_element_dict['profileRoom'] = profileRoom
        one_element_dict['channel'] = channel
        one_element_dict['uid'] = uid

        count += int(totalCount)
        num += 1
        # print("{}.主播姓名:{}人气:{:,}".format(num, nick, int(totalCount)))
        print(one_element_dict)
        store.append(totalCount)
        store.append(gamename)
        lis[nick] = store
        game_list[gamename] = game_list.get(gamename, 0) + 1
        hot_list[gamename] = hot_list.get(gamename, 0) + totalCount
    print("第%s页结束" % page)
    page += 1
