import time
import json
import requests
from config import headers
from run_js import RunJs


class BaiDuIndex:
    def __init__(self):
        self.headers = headers
        self.keys = keys = ["all", "pc", "wise"]
        self.uniqid_url = 'https://index.baidu.com/Interface/ptbk?uniqid={}'
        self.rjs = RunJs()

    # 以下几个方法为和获取搜索指数相关
    @staticmethod
    def __base_index(headers, uniqid_url, area_code, app_name, start_date, end_date, data_type):
        """
        :param area_code:代表地区的编号
        :param app_name: 软件名称
        :param start_date:开始时间
        :param end_date:结束时间
        :return:
        """
        url = 'http://index.baidu.com/api/SearchApi/index'
        params = {
            "area": area_code,
            "word": json.dumps([[{"name": app_name, "wordType": 1}]]),
            "startDate": start_date,
            "endDate": end_date,
        }
        time.sleep(1)
        response = requests.get(url=url, params=params, headers=headers)
        content = response.content.decode()
        json_result = json.loads(content)  # 把byte类型转换为字典类型

        uniqid = str(json_result['data']['uniqid'])
        time.sleep(1)
        uniqid = json.loads(requests.get(uniqid_url.format(uniqid), headers=headers).text).get('data')
        if json_result["status"] != 0:
            raise ValueError(f"返回值错误：{json_result}")

        # 返回值为全国还是某地区，取决于 area_code 如果为 0，表示全国，其他为具体地区
        if data_type == "pc_avg":
            # pc 端平均搜索指数
            return str(json_result['data']['generalRatio'][0]['pc']['avg'])
        elif data_type == "wise_avg":
            # 移动端平均搜索指数
            return str(json_result['data']['generalRatio'][0]['wise']['avg'])
        elif data_type == "pc_daily":
            # pc 端每日搜索指数
            return uniqid, str(json_result['data']['userIndexes'][0]['pc']['data'])
        elif data_type == 'wise_daily':
            # 移动端每日搜索指数
            return uniqid, str(json_result['data']['userIndexes'][0]['wise']['data'])

    def get_pc_daily_search_index(self, area_code, app_name, start_date, end_date):
        """
        获取某关键词（比如：汽车之家）PC 端的每日搜索指数
        :return:
        """
        data_type = "pc_daily"
        uniqid, pc_daily = self.__base_index(self.headers, self.uniqid_url, area_code, app_name, start_date, end_date,
                                             data_type)
        pc_daily_data = self.rjs.decrypt(uniqid, pc_daily)
        return pc_daily_data

    def get_wise_daily_search_index(self, area_code, app_name, start_date, end_date):
        """
        获取某关键词（比如：汽车之家）移动端的每日搜索指数
        :return:
        """
        data_type = "wise_daily"
        uniqid, pc_daily = self.__base_index(self.headers, self.uniqid_url, area_code, app_name, start_date, end_date,
                                             data_type)
        wise_daily_data = self.rjs.decrypt(uniqid, pc_daily)
        return wise_daily_data

    def get_pc_average_search_index(self, area_code, app_name, start_date, end_date):
        """
        获取某关键词（比如：汽车之家）PC 端，在某一段时间内的平均搜索指数
        :return:
        """
        data_type = "pc_avg"
        pc_avg = self.__base_index(self.headers, self.uniqid_url, area_code, app_name, start_date, end_date,
                                   data_type)
        return pc_avg

    def get_wise_average_search_index(self, area_code, app_name, start_date, end_date):
        """
        获取某关键词（比如：汽车之家）移动端端，在某一段时间内的平均搜索指数
        :return:
        """
        data_type = "wise_avg"
        wise_avg = self.__base_index(self.headers, self.uniqid_url, area_code, app_name, start_date, end_date,
                                     data_type)
        return wise_avg

    # 以下几个方法均和人群画像数据相关
    @staticmethod
    def __base_user_portrait(base_url, headers, typeid, wordlist):
        """
        获取某关键词的人群画像（性别、年龄、兴趣偏好）。PS：兴趣偏好，可到二级行业
        http://index.baidu.com/api/SocialApi/interest?wordlist%5B%5D=%E6%B1%BD%E8%BD%A6%E4%B9%8B%E5%AE%B6&typeid=&callback=_jsonpoflq0hve7dd
        typeid 用来区分二级行业
        兴趣分布
        params ：    wordlist[]: 汽车之家
                    typeid:
                    callback: _jsonpoflq0hve7dd
        兴趣二级
        http://index.baidu.com/api/SocialApi/interest?wordlist%5B%5D=%E6%B1%BD%E8%BD%A6%E4%B9%8B%E5%AE%B6&typeid=10000000&callback=_jsonpjeh38rthm3
        wordlist[]: 汽车之家
        typeid: 10000000
        callback: _jsonpjeh38rthm3

        params 年龄分布--性别分布
                http://index.baidu.com/api/SocialApi/baseAttributes?wordlist%5B%5D=%E6%B1%BD%E8%BD%A6%E4%B9%8B%E5%AE%B6
                wordlist[]: 汽车之家

        :return:

        """
        if typeid is None:
            params = {
                "wordlist[]": wordlist,
            }
        else:
            params = {
                "wordlist[]": wordlist,
                "typeid": typeid,
            }
        time.sleep(1)
        ret = requests.get(base_url, params=params, headers=headers)
        print(ret.text)

    def get_interest(self, *app_names):
        """
        获取兴趣的一级行业数据
        :param app_name: App 名称
        :return:
        """
        base_url = 'http://index.baidu.com/api/SocialApi/interest'
        for app_name in app_names:
            self.__base_user_portrait(base_url, self.headers, None, app_name)

    def get_sub_interest(self, type_id, app_name):
        """
        获取兴趣的二级行业数据
        :param type_id:一级行业数据返回内容
        :param app_name:App名称
        :return:
        """
        base_url = 'http://index.baidu.com/api/SocialApi/interest'
        self.__base_user_portrait(base_url, self.headers, type_id, app_name)

    def get_age_gender(self, *app_names):
        """
        获取关键词人群画像，性别年龄相关数据
        :param app_name:App 名称
        :return:
        """
        base_url = 'http://index.baidu.com/api/SocialApi/baseAttributes'
        for app_name in app_names:
            self.__base_user_portrait(base_url, self.headers, None, app_name)


if __name__ == '__main__':
    bdi = BaiDuIndex()
    bdi.get_pc_daily_search_index(0, '王者荣耀', "2020-07-01", "2020-07-31")
