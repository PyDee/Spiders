import json
import requests
import pymongo
import time


class DBMongo:
    def __init__(self):
        self.my_client = pymongo.MongoClient("mongodb://localhost:27017/")

        # 连接数据库
        self.xinGTu = self.my_client["mcn"]

    def insert_2_xt(self, success_item):
        try:
            collection = self.xinGTu["xt_mcn"]
            collection.insert_one(success_item)  # 数据写入mongoDB
            print('success!!!')
        except:
            print('写入数据失败')


class XinGTuMCN:
    def __init__(self):
        self.db = DBMongo()
        self.headers = {
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'zh-CN,zh;q=0.9',
            'cache-control': 'max-age=0',
            'cookie': 'tt_webid=6836176036058678798; gr_user_id=46a272bb-5f21-4bd7-ae38-ceb087f83d22; grwng_uid=4a69a371-b2ed-4567-9f94-88f3296319fd; csrftoken=Oony5HDvfNjMlpVqLKCtvj6snqlLaRzl; sid_guard=baccd0a0056c2659ab3debf4b03ebde7%7C1591960849%7C5184000%7CTue%2C+11-Aug-2020+11%3A20%3A49+GMT; uid_tt=a87ddac33388a9d87a702d41ea279d3e; uid_tt_ss=a87ddac33388a9d87a702d41ea279d3e; sid_tt=baccd0a0056c2659ab3debf4b03ebde7; sessionid=baccd0a0056c2659ab3debf4b03ebde7; sessionid_ss=baccd0a0056c2659ab3debf4b03ebde7; 8632e941eb705978_gr_session_id=f1551560-65ae-4bfb-9f93-c9cffab70f6a; 8632e941eb705978_gr_session_id_f1551560-65ae-4bfb-9f93-c9cffab70f6a=true; star_sessionid=9b44f9717fad8b2045524d1fe545564d; SLARDAR_WEB_ID=3da5545a-9e8b-43be-8f8a-1574d6df68b9',
            'referer': 'https://starsp.toutiao.com/',
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-user': '?1',
            'upgrade-insecure-requests': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36',
        }
        self.urls = [
            'https://starsp.toutiao.com/h/api/gateway/handler_get/?page=2&limit=20&order_by=author_num&service_name=mcn.AdStarMcnService&service_method=DemanderMcnList&sign=85c7f4b3ed7cd5fce8d169893f252e0d',
            'https://starsp.toutiao.com/h/api/gateway/handler_get/?page=1&limit=20&order_by=author_num&service_name=mcn.AdStarMcnService&service_method=DemanderMcnList&sign=66541b5f636669bad9128c5bd6c6ecd6',
            'https://starsp.toutiao.com/h/api/gateway/handler_get/?page=3&limit=20&order_by=author_num&service_name=mcn.AdStarMcnService&service_method=DemanderMcnList&sign=4bc3b79992273cecdeeca6832705d8dc',
            'https://starsp.toutiao.com/h/api/gateway/handler_get/?page=4&limit=20&order_by=author_num&service_name=mcn.AdStarMcnService&service_method=DemanderMcnList&sign=09ec749d6e1a7ac62908a3ddd7ca12d8',
            'https://starsp.toutiao.com/h/api/gateway/handler_get/?page=5&limit=20&order_by=author_num&service_name=mcn.AdStarMcnService&service_method=DemanderMcnList&sign=c63306d96953f15a5b75cde8c939b1cc',

            'https://starsp.toutiao.com/h/api/gateway/handler_get/?page=6&limit=20&order_by=author_num&service_name=mcn.AdStarMcnService&service_method=DemanderMcnList&sign=279687803f3ee6936c6ff1b17c32f791',
            'https://starsp.toutiao.com/h/api/gateway/handler_get/?page=7&limit=20&order_by=author_num&service_name=mcn.AdStarMcnService&service_method=DemanderMcnList&sign=d161a39c9191aacfc0480abc0703b748',
            'https://starsp.toutiao.com/h/api/gateway/handler_get/?page=8&limit=20&order_by=author_num&service_name=mcn.AdStarMcnService&service_method=DemanderMcnList&sign=2b7ce3220ec244bd4ff2820e0fd3dc28',
            'https://starsp.toutiao.com/h/api/gateway/handler_get/?page=9&limit=20&order_by=author_num&service_name=mcn.AdStarMcnService&service_method=DemanderMcnList&sign=accdaf190ac7957f9c9bab9f837bb100',
            'https://starsp.toutiao.com/h/api/gateway/handler_get/?page=10&limit=20&order_by=author_num&service_name=mcn.AdStarMcnService&service_method=DemanderMcnList&sign=ef5cd394824f7e855f3f0e271e3256a2',

            'https://starsp.toutiao.com/h/api/gateway/handler_get/?page=11&limit=20&order_by=author_num&service_name=mcn.AdStarMcnService&service_method=DemanderMcnList&sign=34072b96bf9b1c335eb9f575e0c246b7',
            'https://starsp.toutiao.com/h/api/gateway/handler_get/?page=12&limit=20&order_by=author_num&service_name=mcn.AdStarMcnService&service_method=DemanderMcnList&sign=bdd4e381b19476cd310525e7fe419486',
            'https://starsp.toutiao.com/h/api/gateway/handler_get/?page=13&limit=20&order_by=author_num&service_name=mcn.AdStarMcnService&service_method=DemanderMcnList&sign=6ed97174621948b9666e7fe72571e6e4',
            'https://starsp.toutiao.com/h/api/gateway/handler_get/?page=14&limit=20&order_by=author_num&service_name=mcn.AdStarMcnService&service_method=DemanderMcnList&sign=05398b88e4072775bff6db9c880e5294',
            'https://starsp.toutiao.com/h/api/gateway/handler_get/?page=15&limit=20&order_by=author_num&service_name=mcn.AdStarMcnService&service_method=DemanderMcnList&sign=a9ae363dcf87f9f315be8d1461dc1be2',

            'https://starsp.toutiao.com/h/api/gateway/handler_get/?page=16&limit=20&order_by=author_num&service_name=mcn.AdStarMcnService&service_method=DemanderMcnList&sign=392dccbfcef654340c83b0da92b6dfc9',
            'https://starsp.toutiao.com/h/api/gateway/handler_get/?page=17&limit=20&order_by=author_num&service_name=mcn.AdStarMcnService&service_method=DemanderMcnList&sign=bafd4a4c7207a8c95371f071e657465a',
            'https://starsp.toutiao.com/h/api/gateway/handler_get/?page=18&limit=20&order_by=author_num&service_name=mcn.AdStarMcnService&service_method=DemanderMcnList&sign=cab38223b8c47decabb969b688a22300',
            'https://starsp.toutiao.com/h/api/gateway/handler_get/?page=19&limit=20&order_by=author_num&service_name=mcn.AdStarMcnService&service_method=DemanderMcnList&sign=5f8996ed3025648f8997bd7a019bf278',
            'https://starsp.toutiao.com/h/api/gateway/handler_get/?page=20&limit=20&order_by=author_num&service_name=mcn.AdStarMcnService&service_method=DemanderMcnList&sign=87cc8a6eeffc4aee68ca1128b7623813',

            'https://starsp.toutiao.com/h/api/gateway/handler_get/?page=21&limit=20&order_by=author_num&service_name=mcn.AdStarMcnService&service_method=DemanderMcnList&sign=6af3ede42b04913a233b3107e40e469d',
            'https://starsp.toutiao.com/h/api/gateway/handler_get/?page=22&limit=20&order_by=author_num&service_name=mcn.AdStarMcnService&service_method=DemanderMcnList&sign=bd0ed0fb7f3ffa226a09ec9764393478',
            'https://starsp.toutiao.com/h/api/gateway/handler_get/?page=23&limit=20&order_by=author_num&service_name=mcn.AdStarMcnService&service_method=DemanderMcnList&sign=60e4bba9a572ffad9fff8f0784c604bb',
            'https://starsp.toutiao.com/h/api/gateway/handler_get/?page=24&limit=20&order_by=author_num&service_name=mcn.AdStarMcnService&service_method=DemanderMcnList&sign=9bbc1761c1015f5867070e90884cfc6d',
            'https://starsp.toutiao.com/h/api/gateway/handler_get/?page=25&limit=20&order_by=author_num&service_name=mcn.AdStarMcnService&service_method=DemanderMcnList&sign=342e6f731777455d6f878b3331508d9d',

            'https://starsp.toutiao.com/h/api/gateway/handler_get/?page=26&limit=20&order_by=author_num&service_name=mcn.AdStarMcnService&service_method=DemanderMcnList&sign=92200077030c820eb1d777679467f80d',
            'https://starsp.toutiao.com/h/api/gateway/handler_get/?page=27&limit=20&order_by=author_num&service_name=mcn.AdStarMcnService&service_method=DemanderMcnList&sign=c13bdac08a1f3deb565b633fad1df715',
            'https://starsp.toutiao.com/h/api/gateway/handler_get/?page=28&limit=20&order_by=author_num&service_name=mcn.AdStarMcnService&service_method=DemanderMcnList&sign=822ad088e071f6c6c58179b9c3236c67',
            'https://starsp.toutiao.com/h/api/gateway/handler_get/?page=29&limit=20&order_by=author_num&service_name=mcn.AdStarMcnService&service_method=DemanderMcnList&sign=e511f92047568ea0b6e3f2852280fde4',
            'https://starsp.toutiao.com/h/api/gateway/handler_get/?page=30&limit=20&order_by=author_num&service_name=mcn.AdStarMcnService&service_method=DemanderMcnList&sign=988352046cc5232be93bd94eeaeb68d2',
            'https://starsp.toutiao.com/h/api/gateway/handler_get/?page=31&limit=20&order_by=author_num&service_name=mcn.AdStarMcnService&service_method=DemanderMcnList&sign=6cc30434d34e72383827854cef1f9933',

        ]

    @staticmethod
    def get_mcn(db, urls, headers):
        for index, url in enumerate(urls):
            ret = requests.get(url, headers=headers)
            print(index, ret.status_code)
            result = json.loads(ret.text)
            data = result.get('data')
            mcns = data.get('mcns')
            time.sleep(3)
            for mcn in mcns:
                item = dict()
                item['mcn_id'] = mcn.get('user_id')
                item['mcn_name'] = mcn.get('name')
                item['author_num'] = mcn.get('author_num')
                item['fans_count'] = mcn.get('sum_follower')
                item['introduction'] = mcn.get('introduction')
                db.insert_2_xt(item)

    def run(self):
        self.get_mcn(self.db, self.urls, self.headers)


if __name__ == '__main__':
    xt = XinGTuMCN()
    xt.run()
