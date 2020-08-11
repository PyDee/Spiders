"""
获取快手单个用户基础信息
包含用户名，id，ori_id，fans， follower， product等
"""
import requests
import json
from pprint import pprint


class KsUserInfo:
    def __init__(self):
        self.url = "https://live.kuaishou.com/m_graphql"

        self.headers = {
            'accept': '*/*',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            'Connection': 'keep-alive',
            'content-type': 'application/json',
            'Cookie': 'did=web_2a570a791d027ad80fa7fc88874a4d65; didv=1596786114425; kuaishou.live.bfb1s=7206d814e5c089a58c910ed8bf52ace5; clientid=3; client_key=65890b29; Hm_lvt_86a27b7db2c5c0ae37fee4a8a35033ee=1596786179; Hm_lpvt_86a27b7db2c5c0ae37fee4a8a35033ee=1596786179; userId=2045309168; userId=2045309168; kuaishou.live.web_st=ChRrdWFpc2hvdS5saXZlLndlYi5zdBKgAeL4NPrP5FNGryC6wYA4QKKD484ibNUBWRkjFDr3m6F68XMfkvuU5xpomv82UUX0bi_-t_rhgnKwtc7nY4wcOlHQ3JGb4ubUbtBYuBG83ghqRFUZowpdMX-8p_3qYJXjOnACY3KHSJV6jeTj5AZemlMJXEz7yk3qzAeduXSv1sjGnCM4AVhc-cEa8dtB01QtfCFKY--FIMtV_56h8SbMevcaEgCrAu8bFEUPixNgRvVq1Nb0ZSIggR5hZF2KwqUp2EdjADSb_HOVVsoytvjZd3LsSbXaQgooBTAB; kuaishou.live.web_ph=11928f643cc4cfe86dc863987a0d36e63444',
            'Host': 'live.kuaishou.com',
            'Origin': 'https://live.kuaishou.com',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
        }

    def get_response(self, body, key):
        ret = requests.post(self.url, headers=self.headers, json=body)
        result = json.loads(ret.text)
        data = result.get("data")
        result = data.get(key)
        return result

    def get_user_info(self, user_id):
        body = {
            "operationName": "sensitiveUserInfoQuery",
            "variables": {
                "principalId": user_id
            },
            "query": "query sensitiveUserInfoQuery($principalId: String) {\n  sensitiveUserInfo(principalId: $principalId) {\n    kwaiId\n    originUserId\n    constellation\n    cityName\n    counts {\n      fan\n      follow\n      photo\n      liked\n      open\n      playback\n      private\n      __typename\n    }\n    __typename\n  }\n}\n"
        }
        key = "sensitiveUserInfo"
        return self.get_response(body, key)

    @staticmethod
    def parse_response(user_dict):
        user_info = dict()
        user_info['city_name'] = user_dict.get('cityName')
        user_info['constellation'] = user_dict.get('constellation')
        user_info['kwaiId'] = user_dict.get('kwaiId')
        user_info['originUserId'] = user_dict.get('originUserId')
        user_info['fan'] = user_dict.get('counts').get('fan')
        user_info['follow'] = user_dict.get('counts').get('follow')
        user_info['open'] = user_dict.get('counts').get('open')
        user_info['photo'] = user_dict.get('counts').get('photo')
        user_info['liked'] = user_dict.get('counts').get('liked')
        pprint(user_info)

    def run(self):
        response = self.get_user_info("3xsey959k2h932y")
        self.parse_response(response)


if __name__ == '__main__':
    kui = KsUserInfo()
    kui.run()
