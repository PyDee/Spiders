import json
import time
import re
import requests
from config import domains
from AlexaDB import AlexaDb


class Alexa:
    def __init__(self):
        self.adb = AlexaDb()
        self.history_url = 'http://www.alexa.cn/traffic/day_charts?domain={}'
        self.token_url = 'http://www.alexa.cn/traffic/{}'
        self.token_headers = {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            'Cache-Control': 'max-age=0',
            'Connection': 'keep-alive',
            'Cookie': 'Hm_lvt_e2d6533b8d3c86a8202250d4989a2fe5=1601002076; UM_distinctid=174c328f91b68c-0ff713c97f5af3-f7b1332-e1000-174c328f91c12c; PHPSESSID=p9blc0eqjgbgn2j74i59nu32u7; exi_users=FdLV8dEa4MfOudRv6t-DwE3nPcSRu4NXmb0krjwplcCULs-HMW3ykqOWm4zm1dwAMTQzu8-DfDFZdXTxP8YGPYTIJ1o9PkHO5aUSmaJIIi4Kg4sTat7DDHVbRdBHgmlR29TUv8QfPETtivGysZAKKRufrfub4VD2LDFI5g7lYKrySuSSFRSF75a-H2QkgNZKx-D9GHXMQRieOZZVimd65FzhIcW0Z2zSWHLuYmLovGxaj3uCQAmbE625MbfggFqmoy-DRrDiIodqmHvj7sSBFVtzAmfoFb2MkvISqXMYmQEH8Kzs-D2s8L1qkA1QuFa80R4cKCEzA90U9Oz-Hn8OB-DuJlorJPIR16Hyuqsuexy2ui7PwLFKUSsPqF3x13VM0FszbOkicUf9aCUZlXF4hQw-HJYKkkMsWgQPdKfPmsqgwCAE5n2QE-K; CNZZDATA1276361993=708373658-1600997182-%7C1601358580; exi_query_history=Z-BwY1gDKjfOIIfTC9xRQVGH2AwgTqp5tTtFPWTHGyJJLcRH0Q1mjjwncnxGS78N9pfgj-BwjEQAnk1ElSET2ias7u0xOlHNtUsDV98fENfrbjNOQWoVsNIjb0sXcZ-HUYXSltFG4DIJavXHCSP0vZgap4f7gzmc53Ux-B5gSQbnj49AHvNzgZ8q2QZaajD6Z0cyeZIKXYdil0-BfWwZZA9ECFg-M-M; Hm_lpvt_e2d6533b8d3c86a8202250d4989a2fe5=1601359977',
            'Host': 'www.alexa.cn',
            'Referer': 'http://www.alexa.cn/traffic/',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
        }
        # 获取日（周，月，三月）uv，日（周，月，三月）pv
        # 需要token， 和当前domain
        self.reach_url = "http://www.alexa.cn/api/alexa/charge?token={}&url={}"
        self.headers = {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "Connection": "keep-alive",
            "Cookie": "Hm_lvt_e2d6533b8d3c86a8202250d4989a2fe5=1601002076; UM_distinctid=174c328f91b68c-0ff713c97f5af3-f7b1332-e1000-174c328f91c12c; PHPSESSID=p9blc0eqjgbgn2j74i59nu32u7; exi_users=FdLV8dEa4MfOudRv6t-DwE3nPcSRu4NXmb0krjwplcCULs-HMW3ykqOWm4zm1dwAMTQzu8-DfDFZdXTxP8YGPYTIJ1o9PkHO5aUSmaJIIi4Kg4sTat7DDHVbRdBHgmlR29TUv8QfPETtivGysZAKKRufrfub4VD2LDFI5g7lYKrySuSSFRSF75a-H2QkgNZKx-D9GHXMQRieOZZVimd65FzhIcW0Z2zSWHLuYmLovGxaj3uCQAmbE625MbfggFqmoy-DRrDiIodqmHvj7sSBFVtzAmfoFb2MkvISqXMYmQEH8Kzs-D2s8L1qkA1QuFa80R4cKCEzA90U9Oz-Hn8OB-DuJlorJPIR16Hyuqsuexy2ui7PwLFKUSsPqF3x13VM0FszbOkicUf9aCUZlXF4hQw-HJYKkkMsWgQPdKfPmsqgwCAE5n2QE-K; CNZZDATA1276361993=708373658-1600997182-%7C1601198032; exi_query_history=GR2HUySt7-Ff0bse-Cw85-FSdKg40gVkLv4wvG6-FqcTRchR6r-CLFjlrk-Fe6fkeJHj2-CvfJ542lgr2gnHKxjjwoVSI3AJ9-CHKHL47Y6wMy55BWSHK2AtX2kifpv0VsofWbtFPmdRQUIgf5dZf9fmf7DrbC1LdpQceZ3xlt2wunXjk-FQWfVwc9pOTyz87CAmDTyC8AyxoRRi6aUJNHqga3qNTpg-O-O; Hm_lpvt_e2d6533b8d3c86a8202250d4989a2fe5=1601198603",
            "Host": "www.alexa.cn",
            "Referer": "http://www.alexa.cn/traffic/baidu.com",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
        }

    @staticmethod
    def _uv(million):
        """
        根据算法获取日 UV
        :param million:获取 UV 的集数
        3200 ：js 文件中的参数: syscfg.alexa_ip_times
        :return:
        """
        return million * 3200

    @staticmethod
    def _pv(day_uv, pv_per_user):
        """
        根据算法获取日 PV
        :param day_uv: 当日的 UV
        :param pv_per_user:  平均每个user 查看page 数
        :return: pv
        """
        _pv = day_uv * pv_per_user
        return (_pv / 1000) * 1000

    @staticmethod
    def get_token(url, headers):
        """
        http://www.alexa.cn/traffic/ci123.com
        从类似以上的页面中提取出获取self.reach_url 所需要的token参数
        :param url: 类似此类的页面的：http://www.alexa.cn/traffic/ci123.com
        :param headers:请求头
        :return:token的值
        """
        ret = requests.get(url, headers=headers)
        token_element = re.search("token : '(.*?)',", ret.text)
        token = token_element.group(1)
        return token

    def request_daily_data(self, url, headers):
        """
        获取 self.reach_url 所得到的数据
        :param url:self.reach_url
        :param headers:请求头
        :return:日 UV， 日 PV
        """
        html = requests.get(url, headers=headers)
        res = json.loads(html.text)
        day_million = int(res.get('data').get('reach').get('day').get('million'))
        pv_per_user = int(res.get('data').get('reach').get('day').get('pv_per_user'))
        uv = int(self._uv(day_million))
        pv = int(self._pv(uv, pv_per_user))
        return uv, pv

    @staticmethod
    def get_history_data(url, headers):
        html = requests.get(url, headers=headers)
        cate = eval(re.search('cate : (.*?]),', html.text).group(1))
        series = eval(re.search('series : (.*?]),', html.text).group(1))
        uv = series[0].get('data')
        pv = series[1].get('data')
        return [x for x in zip(cate, uv, pv)]

    def run(self):
        for index, domain in enumerate(domains):
            token = self.get_token(self.token_url.format(domain), self.token_headers)
            uv, pv = self.request_daily_data(self.reach_url.format(token, domain), self.token_headers)
            print(domain, uv, pv)
            self.adb.insert_data(domain, uv, pv)
            time.sleep(1)


if __name__ == '__main__':
    # todo 数据库连接出现问题
    a = Alexa()
    a.run()
