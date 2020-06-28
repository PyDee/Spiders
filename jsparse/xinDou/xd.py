import requests
import pymongo
import json
import time
import hashlib

MONGO_HOST = "127.0.0.1"
MONGO_PORT = 27017
import redis


class RedisDB:
    def __init__(self):
        self.r = redis.StrictRedis(host='localhost',
                                   port=6379,
                                   db=0,
                                   decode_responses=True
                                   )

    def add_to_set(self, key, value):
        self.r.sadd(key, value)

    def get_from_set(self, key):
        result = self.r.smembers(key)
        return result


class MongoDB:
    def __init__(self):
        self.client = pymongo.MongoClient(MONGO_HOST, MONGO_PORT)
        self.md = self.client['mcn']

    def insert_item(self, success_item):
        try:
            collection = self.md['xd_mcn']
            collection.insert_one(success_item)  # 数据写入mongoDB
            # print('success!!!')
        except:
            print('写入数据失败')

    @staticmethod
    def update_info(key, add_state, collection):
        """
        :param key: 此处表示 user_id
        :param add_state: {'$addToSet': {'list': {"focus": 5, 'name': '小明', 'age': 66}}}
        :param collection: 集合对象
        :return:
        """
        try:
            # 不存在时插入数据
            collection.update_one(key, add_state, upsert=True)
            # print("{}:更新成功".format(key.get('mcn_name')))
        except Exception as e:
            print("更新失败:{}".format(e))

    def run(self, item):
        xdUserInfo = self.md["xd_author"]

        key = {"mcn_id": item.get('mcn_id'),
               'mcn_name': item.get('mcn_name'),
               'fans': item.get('fans'),
               'user_count': item.get('user_count'),
               }
        add_state = {'$addToSet': {'user_list': {"unique_id": item.get('unique_id'),
                                                 'uid': item.get('uid'),
                                                 'type': item.get('type'),
                                                 'nickname': item.get('nickname'),
                                                 'introduction': item.get('follower_count')
                                                 }}}
        self.update_info(key, add_state, xdUserInfo)


class XinDou:
    def __init__(self):
        self.rd = RedisDB()
        self.md = MongoDB()
        self.mcn_url = "https://xd.newrank.cn/xdnphb/nr/cloud/douyin/mcn/search?xyz=85fb585fa423a62e6528106fbf8185fd&nonce=fb1c58647"
        self.author_url = "https://xd.newrank.cn/xdnphb/nr/cloud/douyin/mcn/userType?xyz=8fbd365b0ec608a2222fc8dfc2403c13&nonce=2568f0cde"
        self.headers = {
            "cookie": "Hm_lvt_e20c9ff085f402c8cfc53a441378ca86=1591672412,1591684073,1592469229,1593310236; Hm_lpvt_e20c9ff085f402c8cfc53a441378ca86=1593310236; token=039CCD6AFB5D4DAABCE37E78B0E2A048",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36",
        }
        self.current_cookie = 0

    @staticmethod
    def get_str_sha1_secret_str(res: str):
        """
        使用sha1加密算法，返回str加密后的字符串
        """
        sha = hashlib.sha1(res.encode('utf-8'))
        encrypts = sha.hexdigest()
        return encrypts

    def xd_filter(self, filter_name, value):
        """
        判断当前值是否已经请求过，若已经请求过，则返回True，未请求过返回False
        :param filter_name:
        :param value:
        :return:
        """
        result = self.rd.get_from_set(filter_name)
        if value in result:
            return True
        else:
            return False

    @staticmethod
    def get_response(url, headers, body):

        time.sleep(5)
        """获取响应"""
        ret = requests.post(url,
                            headers=headers,
                            json=body
                            )
        return ret.text

    @staticmethod
    def create_mcn_body(start=1):
        """构建mcn机构请求体"""
        data = {"keyword": "", "city": "", "flower_count_tag": "", "user_count_tag": "", "sort": "flower_count",
                "start": start, "size": 20}
        return data

    @staticmethod
    def create_author_body(mcn_id, start):
        """构建达人请求体"""
        data = {"mcn_id": mcn_id, "start": start, "size": 30}
        return data

    def get_mcn(self, page):
        """获取机构信息"""
        data = self.create_mcn_body(page)
        result = self.get_response(self.mcn_url, self.headers, data)
        response = json.loads(result)
        data = response.get('data')
        mcn_list = data.get('list')
        return mcn_list

    @staticmethod
    def parse_mcn(mcn_element):
        """解析mcn机构"""
        mcn_item = dict()
        mcn_item['mcn_id'] = mcn_element.get('mcn_id')
        mcn_item['mcn_name'] = mcn_element.get('mcn_name')
        mcn_item['fans'] = mcn_element.get('flower_count')
        mcn_item['user_count'] = mcn_element.get('user_count')
        mcn_item["user_list"] = list()
        return mcn_item

    def get_author(self, mcn_id, start=1):
        """获取达人信息"""
        # for index, cookie in enumerate(self.cookie_list):
        #     if index <= len(self.cookie_list):
        #         if cookie[1] <= 100:
        #             self.current_cookie = index
        #             self.headers['cookie'] = cookie[0]
        #             cookie[1] += 1
        #     else:
        #         exit()
        author_response = dict()
        data = self.create_author_body(mcn_id, start)
        print('当前请求：', data)
        secret_data = self.get_str_sha1_secret_str(str(data))
        is_exist = self.xd_filter('author', secret_data)

        # 此时 is_exist 为 True，表示已经请求过
        if is_exist:
            author_response['author_list'] = None
            author_response['page_count'] = 0
            author_response['is_exist'] = is_exist
        else:
            result = self.get_response(self.author_url, self.headers, data)
            self.rd.add_to_set('author', secret_data)
            response = json.loads(result)
            print(response)
            data = response.get('data')
            author_count = data.get('count')
            page_count = author_count // 30 + 1
            author_list = data.get('list')
            author_response['author_list'] = author_list
            author_response['page_count'] = page_count
            author_response['is_exist'] = is_exist
        return author_response

    @staticmethod
    def parse_author(author_element, mcn_item):
        author_item = dict()
        author_item['mcn_id'] = mcn_item.get('mcn_id')
        author_item['mcn_name'] = mcn_item.get('mcn_name')
        author_item['fans'] = mcn_item.get('fans')
        author_item['user_count'] = mcn_item.get('user_count')

        author_item['unique_id'] = author_element.get('unique_id')
        author_item['uid'] = author_element.get('uid')
        author_item['type'] = author_element.get('type')
        author_item['nickname'] = author_element.get('nickname')
        author_item['follower_count'] = author_element.get('follower_count')
        return author_item

    def write_mcn_item(self):
        """保存新抖 MCN 机构数据"""
        for page in range(1, 32):
            mcn_list = self.get_mcn(page)
            for mcn in mcn_list:
                mcn_item = self.parse_mcn(mcn)
                mcn_item.pop('user_list')
                self.md.insert_item(mcn_item)

    def run(self):

        # 机构页码
        for page in range(1, 32):
            mcn_list = self.get_mcn(page)
            # 当前页机构 list
            for mcn in mcn_list:
                mcn_item = self.parse_mcn(mcn)
                author_response = self.get_author(mcn_item.get('mcn_id'))
                print('机构：{}\n达人数：{}\n页数：{}'.format(mcn_item.get('mcn_name'), mcn_item.get('user_count'),
                                                    author_response.get('page_count')))
                if author_response.get('is_exist'):
                    continue
                # 发起一次用户列表请求，请求次数 +1
                else:
                    for author in author_response.get('author_list'):
                        author_item = self.parse_author(author, mcn_item)
                        self.md.run(author_item)

                # 处理达人数
                if author_response.get('page_count') <= 1:
                    continue

                # 表示有后续页数
                else:
                    for author_page in range(2, author_response.get('page_count') + 1):
                        author_response = self.get_author(mcn_item.get('mcn_id'), start=author_page)
                        # 表示当前url 已经请求过了
                        if author_response.get('is_exist'):
                            continue
                        # 发起一次用户列表请求，请求次数 +1
                        for author in author_response.get('author_list'):
                            author_item = self.parse_author(author, mcn_item)
                            self.md.run(author_item)


if __name__ == '__main__':
    xd = XinDou()
    xd.run()
