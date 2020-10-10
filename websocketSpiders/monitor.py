# coding:utf-8
"""
根据直播连接获取到uid
根据uid 判断直播状态
"""
import os
import json
import time
import subprocess
import requests

from multiprocessing import Process
from db import RedisDB


class Monitor:
    """
    快手监控
    自动开启监控
    自动停止监控
    自动监控直播状态，判断是否需要开启或停止弹幕监控
    获取直播token，page_id, live_stream_id
    添加记录日志，记录抓取状态
    """

    def __init__(self):
        self.r = RedisDB()

    @staticmethod
    def decode_method(str):
        s = u'{}'.format(str)
        a = s.encode('raw_unicode_escape').decode()
        print(a)
        b = repr(a)
        print(b)
        # print(unicode(eval(b), "gbk").encode('utf8'))

    @staticmethod
    def kill(pid):
        """
        本函数用于中止传入pid所对应的进程
        被 stop_monitor 调用，用来结束已经停播的监控
        :param pid:开播后启动监控的进程 id
        :return:目前没有返回值，后期需要添加终止成功与否
        """
        if os.name == 'nt':
            # Windows系统
            cmd = 'taskkill /pid ' + str(pid) + ' /f'
            try:
                os.system(cmd)
                print(pid, 'killed')
            except Exception as e:
                print(e)
        elif os.name == 'posix':
            # Linux系统
            cmd = 'kill ' + str(pid)
            try:
                os.system(cmd)
                print(pid, 'killed')
            except Exception as e:
                print(e)
        else:
            print('Undefined os.name')

    @staticmethod
    def run_another_module(token, live_stream_id, unique_name):
        subprocess.call([
            "C:\\Users\\Administrator\\Envs\\vbvenv\\Scripts\\python.exe",
            "C:\\Users\\Administrator\\qmproject\\Spiders\\websocketSpiders\\danmu\\main.py",
            token,
            live_stream_id,
            unique_name,
        ],
            creationflags=subprocess.CREATE_NEW_CONSOLE
        )

    @staticmethod
    def get_uid(kwaiId):
        """
        通过请求：https://live.kuaishou.com/u/3xz4msjkmvucqc6  直播页获取到用户在快手的 uid
        :param kwaiId: 3xz4msjkmvucqc6
        :return: page_source
        """
        url = 'https://live.kuaishou.com/m_graphql'
        headers = {
            "accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "Connection": "keep-alive",
            "Content-Length": "417",
            "content-type": "application/json",
            "Cookie": "did=web_2a570a791d027ad80fa7fc88874a4d65; didv=1596786114425; clientid=3; client_key=65890b29; Hm_lvt_86a27b7db2c5c0ae37fee4a8a35033ee=1597738922,1598841613; kuaishou.live.bfb1s=3e261140b0cf7444a0ba411c6f227d88; userId=2045309168; kuaishou.live.web_st=ChRrdWFpc2hvdS5saXZlLndlYi5zdBKgAStZ486KZd6y99Rs0dGKN8yzS06ngEwOLfXF1EUM72dziI2Vb7WCgVCER1W57aoxckIb3E22j3G9PeMR7yjVikb-vYtgriunnqDv-qdXnW1Nd644_DRnec780Suk4iNDklrhPNHINWK_mMieF2-WXOrF3xb04HgiaVHIgpn3hw14cyy7LXxW6H8yYXfsE8s4PiYn2ZFYGMv7yv4LCfxabPwaEtjNYCqMvUVZmp6WeyTUfct3aCIgOcAr9_EGbKP8TYr7Xjq0eE1ZM0zrGMTPOWgDKxUwWEAoBTAB; kuaishou.live.web_ph=c396317b69924b6259066d3bcebb5374bba3; userId=2045309168; WEBLOGGER_HTTP_SEQ_ID=109779; WEBLOGGER_INCREAMENT_ID_KEY=53498",
            "Host": "live.kuaishou.com",
            "Origin": "https://live.kuaishou.com",
            "Referer": "https://live.kuaishou.com/",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36",
        }
        data = {"operationName": "sensitiveUserInfoQuery", "variables": {"principalId": kwaiId},
                "query": "query sensitiveUserInfoQuery($principalId: String) {\n  sensitiveUserInfo(principalId: $principalId) {\n    kwaiId\n    originUserId\n    constellation\n    cityName\n    counts {\n      fan\n      follow\n      photo\n      liked\n      open\n      playback\n      private\n      __typename\n    }\n    __typename\n  }\n}\n"}
        ret = requests.post(url, headers=headers, json=data)
        return ret.text

    def get_origin_user_id(self, file_name, search_name):
        # 通过用户昵称来获取相关人的originUserId
        url = 'https://live.kuaishou.com/m_graphql'
        headers = {
            "accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "Connection": "keep-alive",
            "Content-Length": "1511",
            "content-type": "application/json",
            "Cookie": "did=web_2a570a791d027ad80fa7fc88874a4d65; didv=1596786114425; clientid=3; client_key=65890b29; userId=2045309168; Hm_lvt_86a27b7db2c5c0ae37fee4a8a35033ee=1597738922,1598841613; kuaishou.live.bfb1s=3e261140b0cf7444a0ba411c6f227d88; kuaishou.live.web_st=ChRrdWFpc2hvdS5saXZlLndlYi5zdBKgAWqmFOXWGBr6H1VmldRmdmtV7-XCW89GUFe_YSGvfJlgkz7b5OObKswx_RN7eQZRg6nVQfRQ1AceC5Z3CI26PrfUqB0nYbpbwoV-Ai-lZtabaRhQzTkXQN7woVTwYXErhO4k3nBs3a2dsqxN0KGR-CRFCpD7DPByn9p0WLYRZxAQ6fQcMaUtP7MuzXEjsxE9IzXHbZJksi-MenaEoya29h4aEqVj6czba05AmU7FMveU3Qsu3iIgEYwfpeY9ZRF4N4hs4IxC4Y_IqCX_W0l8L5odoAVUTxcoBTAB; kuaishou.live.web_ph=46c404804aa45e069c522025c0a9a9a1a120; userId=2045309168; WEBLOGGER_HTTP_SEQ_ID=105223; WEBLOGGER_INCREAMENT_ID_KEY=53071",
            "Host": "live.kuaishou.com",
            "Origin": "https://live.kuaishou.com",
            "Referer": "https://live.kuaishou.com/search/?keyword=%E5%BF%AB%E4%B9%90%E5%A4%A7%E6%9C%AC%E8%90%A5",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
        }
        data = {"operationName": "SearchOverviewQuery", "variables": {"keyword": search_name, "ussid": "null"},
                "query": "query SearchOverviewQuery($keyword: String, $ussid: String) {\n  pcSearchOverview(keyword: $keyword, ussid: $ussid) {\n    list {\n      ... on SearchCategoryList {\n        type\n        list {\n          categoryId\n          categoryAbbr\n          title\n          src\n          __typename\n        }\n        __typename\n      }\n      ... on SearchUserList {\n        type\n        ussid\n        list {\n          id\n          name\n          living\n          avatar\n          sex\n          description\n          counts {\n            fan\n            follow\n            photo\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      ... on SearchLivestreamList {\n        type\n        lssid\n        list {\n          user {\n            id\n            avatar\n            name\n            __typename\n          }\n          poster\n          coverUrl\n          caption\n          id\n          playUrls {\n            quality\n            url\n            __typename\n          }\n          quality\n          gameInfo {\n            category\n            name\n            pubgSurvival\n            type\n            kingHero\n            __typename\n          }\n          hasRedPack\n          liveGuess\n          expTag\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"}
        ret = requests.post(url, headers=headers, json=data)
        text = ret.content.decode("utf-8")
        json_dict = json.loads(text)
        data = json_dict.get('data')
        pcSearchOverview = data.get('pcSearchOverview')
        result_list = pcSearchOverview.get('list')
        author_list = result_list[1].get('list')
        for item in author_list:
            author_name = item.get('name')
            print("待入库：", author_name)
            author_kwai_id = item.get('id')
            page = self.get_uid(author_kwai_id)
            uid = self.parse_uid_response(page)
            with open(file_name, 'a+', encoding="utf-8") as f:
                f.write(author_name + ',' + author_kwai_id + ',' + uid)
                f.write('\n')

    @staticmethod
    def parse_uid_response(response):
        """
        解析 get_uid 方法返回的 page_source，提取 uid
        :param response:页面源码 get_uid 的返回值 page_source
        :return: 判断直播状态所需的 uid
        """
        json_dict = json.loads(response)
        data = json_dict.get('data')
        sensitiveUserInfo = data.get('sensitiveUserInfo')
        uid = sensitiveUserInfo.get('originUserId')
        return uid

    @staticmethod
    def judge_is_alive(uid):
        """
        判断直播状态的函数
        :param uid: 用户在快手平台的 uid
        :return: 直播状态，token， live_stream_id 等信息
        """
        url = f'http://bee.qmlog.cn/qm-mm/open/collect/live/kwai/stream-info/{uid.strip("HASH_")}'
        headers = {
            "token": "bbf09b58-b3b0-46e2-ae5c-7599cb77c04c",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36",
        }
        ret = requests.get(url, headers=headers)
        text = json.loads(ret.text)
        data = text.get("data")
        if not data.get('isLive'):
            return None
        else:
            return data

    def start_monitor(self, item, unique_name):
        """
        启动获取弹幕监控程序
        :return:
        """
        p = Process(target=self.run_another_module, args=(
            item.get("token"),
            item.get("live_stream_id"),
            unique_name,
        ))
        p.start()

    def stop_monitor(self, pid):
        """
        终止获取弹幕监控程序
        :return:
        """
        # todo 需要被启动的子程序将自己的进程id保存到指定位置
        # todo 需要从某个地方获取到程序的pid
        # todo 后期可能需要增强健壮性，判断是否成功
        self.kill(pid)

    def test_is_live(self, kawiId):
        """
        测试获取token的接口
        :param kawiId:KPL704668133
        :return:
        """
        page = self.get_uid(kawiId)
        uid = self.parse_uid_response(page)
        print(uid)
        result = self.judge_is_alive(uid)
        print(result)

    def judge(self, action_time, all_sub_monitor_process):
        """
        1. 确保当前的监控不会终止，需要开启无限循环
        2. 判断当前是否有子程序在进行监控
            2.1 若有， 跳入步骤 3
            2.2 若无，主进程无限循环
        3. 当前有监控中子程序，根据is_live 关键字，筛选监控中的子程序（状态关键字），遍历未监控账号
        4. 判断未监控账号状态
            4.1 若已开播-并且未监控：调用start方法，开启直播监控
            4.2 若已开播-已监控：跳过，不予处理
            4.3 若尚未开播： 跳过不予处理
            4.4 若已停播：终止当前监控程序， 判断是否有子程序运行中，
                4.3.1 若有：执行下一步
                4.3.2 若无： 进入主程序无限循环
        :param： all_sub_monitor_process: 所有子监控程序的相关信息
        :return:
        """

        for sub in all_sub_monitor_process:
            # print(11111111111111, all_sub_monitor_process)
            # 0 表示没有
            unique_name = sub.decode()
            is_live = self.judge_is_alive(unique_name)
            if is_live is None:
                is_live = False
                self.r.update_hash_filed(unique_name, {'is_live': 0})
            else:
                is_live = True
                self.r.update_hash_filed(unique_name, {'is_live': 1})

            is_monitor = int(self.r.get_hash_keys(unique_name, 'is_monitor'))
            # 开播未监控
            if is_live and not is_monitor:
                print(f'[{action_time}]----开启{unique_name}监控……')
                item = dict()
                item['token'] = self.r.get_hash_keys(unique_name, 'token')
                item['live_stream_id'] = self.r.get_hash_keys(unique_name, 'live_stream_id')
                self.start_monitor(item, unique_name)
                self.r.update_hash_filed(unique_name, {'is_monitor': 1})
            # 开播已监控
            elif is_live and is_monitor:
                print(f'[{action_time}]----{unique_name}--开播已监控……')
                continue
            elif not is_live and not is_monitor:
                print(f'[{action_time}]----{unique_name}--停播未监控……')
                continue
            # 已停播还在监控中
            elif not is_live and is_monitor:
                print(f'[{action_time}]----{unique_name}--监控中，已停播，关闭监控……')
                try:
                    pid = self.r.get_hash_keys(unique_name, "pid")
                    self.stop_monitor(pid)
                    self.r.update_hash_filed(unique_name, {"is_monitor": 0, 'pid': 0})
                except:
                    pass
                continue
                # 假设当前停止的是最后一个子程序，暂时来看没有什么问题，会不断进行轮询判断

    def run(self):
        while True:
            # 每隔 5 分钟进行一次扫描
            action_time = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(time.time()))
            print(f'[{action_time}]----主程序循环监控……')
            unique_list = self.r.db.keys()
            if len(unique_list) <= 0:
                continue
            else:
                self.judge(action_time, unique_list)
            time.sleep(1 * 60)


if __name__ == '__main__':
    m = Monitor()
    # m.run()
    m.test_is_live('jiutianhu')
