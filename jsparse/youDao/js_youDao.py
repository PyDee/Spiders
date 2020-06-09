"""
js解析有道翻译
    多次测试 ts 和 salt 可以判断为时间戳
    除此外仅 sign 为变化参数
    在所有 js 请求中查找 sign 关键字，最终找到 fanyi.min.js 文件
    在 fanyi.min.js 文件的 9167 行找到对应的 body 参数
    ts 为 13 位时间戳
    salt 为  ts 后添加一位 10 以内 的随机数
    sign 为 （"fanyideskweb" + word + salt + "Nw(nmmbP%A-r6U3EUn]Aj"） md5 加密后的值
"""
import requests
import time
import random
import hashlib
import json


class SelfMd5:
    md5 = hashlib.md5()

    @classmethod
    def encryption(cls, word: str):
        """
        将 md5 加密简单实现
        :param word:待加密内容
        :return:已经加密的内容
        """
        encoded_word = word.encode(encoding='utf-8')
        cls.md5.update(encoded_word)
        encrypted_word = cls.md5.hexdigest()
        return encrypted_word


class YouDao:
    def __init__(self):
        self.url = 'http://fanyi.youdao.com/translate_o?smartresult=dict&smartresult=rule'
        self.params = {
            'i': 'china',
            'from': 'AUTO',
            'to': 'AUTO',
            'smartresult': 'dict',
            'client': 'fanyideskweb',
            'salt': '15916982427810',
            'sign': '3b51ddfc84c1b25fcb8a83f4877c2dc9',
            'ts': '1591698242781',
            'bv': 'c74c03c52496795b65595fdc27140f0f',
            'doctype': 'json',
            'version': '2.1',
            'keyfrom': 'fanyi.web',
            'action': 'FY_BY_REALTlME',
        }
        self.headers = {
            'Host': 'fanyi.youdao.com',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:69.0) Gecko/20100101 Firefox/69.0',
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2',
            'Accept-Encoding': 'gzip, deflate', 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'X-Requested-With': 'XMLHttpRequest', 'Content-Length': '262', 'Connection': 'keep-alive',
            'Referer': 'http://fanyi.youdao.com/',
            'Cookie': 'YOUDAO_MOBILE_ACCESS_TYPE=1; OUTFOX_SEARCH_USER_ID=1378414660@10.108.160.19; JSESSIONID=aaaBTGxpwV4EQfnO_Oy1w; ___rl__test__cookies=1569154996426; OUTFOX_SEARCH_USER_ID_NCOO=752434577.0207007'
        }

    @staticmethod
    def create_ts():
        temp = time.time()
        str_temp = str(temp).replace('.', '')
        ts = str_temp[0:13]
        return ts

    @staticmethod
    def create_salt(ts):
        random_int = random.randint(0, 10)
        salt = "{}{}".format(ts, random_int)
        return salt

    @staticmethod
    def create_sign(word, salt):
        sign = SelfMd5.encryption("fanyideskweb{}{}Nw(nmmbP%A-r6U3EUn]Aj".format(word, salt))
        return sign

    def parse_you_dao(self, word):
        ts = self.create_ts()
        salt = self.create_salt(ts)
        sign = self.create_sign(word, salt)
        self.params['i'] = word
        self.params['ts'] = ts
        self.params['salt'] = salt
        self.params['sign'] = sign
        ret = requests.post(self.url, headers=self.headers,
                            data=self.params)
        print(ret.text)


if __name__ == '__main__':
    yd = YouDao()
    yd.parse_you_dao('china')
