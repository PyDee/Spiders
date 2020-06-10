import requests
import time
import random
import hashlib
import json


class XinGTu:
    def __init__(self):
        self.url = 'https://starsp.toutiao.com/h/api/gateway/handler_get'
        self.params = {
            'mcn_id': '6596968698823573508',
            'page': '1',
            'limit': '20',
            'service_name': 'mcn.AdStarMcnService',
            'service_method': 'McnMainPageAuthorList',
            'sign': 'e3dab9a326c1de7a3c9f706b90653a26',
        }

    def get_response(self):
        response = ''
        return response

    def parse_response(self):
        pass

    def func_k(self, t):
        """
        t 是字典
        :param t:
        :return:
        """
        e = sorted(t.keys())
        a = ""
        n = len(e)
        for i in range(n):
            r = e[i]
            s = t[r]


"""
          , K = function(t) {
            for (var e = Object.keys(t).sort(), a = "", i = 0, n = e.length; i < n; i++) {
                var r = e[i], s = t[r];
                void 0 === s || null === s ? delete t[r] : ["string", "number"].includes(Object(l["a"])(s)) ? a += r + s : a += r + r
            }
            return p()(a + J)
        }
"""
