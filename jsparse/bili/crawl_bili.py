import redis
import requests
import json
import pymongo

user_id_list = [
    '100004470',
    '100004989',
    '100012099',
    '100012471',
    '100015726',
    '100017751',
    '100018921',
    '10002030',
    '100020355',
    '10002255',
    '100023481',
    '10002549',
    '100027426',
    '100027543',
    '100030195',
    '10003542',
    '10003698',
    '100039840',
    '10006776',
    '10007583',
    '10008087',
    '100098616',
    '10010784',
    '100110226',
    '100112359',
    '10011954',
    '100143736',
    '10016637',
    '100168060',
    '100182379',
    '100187317',
    '10018800',
    '100190635',
    '100196947',
    '10019715',
    '100200898',
    '10020234',
    '100210348',
    '100214869',
    '100214938',
    '100216915',
    '10022142',
    '100229167',
    '100236136',
    '10024569',
    '10024707',
    '100248892',
    '100254985',
    '10026546',
    '100270528',
]
relation_url = 'https://api.bilibili.com/x/relation/followings?vmid={}&pn=1&ps=50&order=desc&jsonp=jsonp'

r = redis.Redis(host="127.0.0.1")


class BiLiBiLiPipeline(object):
    def __init__(self):
        client = pymongo.MongoClient('127.0.0.1', 27017)
        self.db = client['bili']
        # self.User = db["user"]
        # self.Focus = db["focus"]

    def insert_item(self, collection_name, item):
        collection = self.db[collection_name]
        try:
            collection.insert(dict(item))
        except:
            pass


def get_relation(user_id):
    response = requests.get(relation_url.format(user_id))
    ret_dict = json.loads(response.text)
    status_code = ret_dict.get('code')
    if not status_code:
        if 'data' in ret_dict.keys():
            info_dict = ret_dict.get('data')
            total = info_dict.get('total')
            focus_list = info_dict.get('list')
            for focus_item in focus_list:
                focus_info = dict()
                focus_info['user_id'] = user_id
                focus_info['total'] = total
                focus_info['focus_id'] = focus_item.get('mid')
                focus_info['focus_name'] = focus_item.get('uname')
                focus_info['focus_face'] = focus_item.get('face')
                focus_info['introduction'] = focus_item.get('sign')

                print(focus_info)
                focus_url = 'https://api.bilibili.com/x/relation/stat?vmid={}&jsonp=jsonp'
                focus_url = focus_url.format(focus_info.get('focus_id'))
                r.lpush('test_focus_list', focus_url)


def get_focus_info(url):
    response = requests.get(url)
    ret_dict = json.loads(response.text)
    status_code = ret_dict.get('code')
    focus_item = dict()
    if not status_code:
        if 'data' in ret_dict.keys():
            info_dict = ret_dict['data']
            focus_item['mid'] = info_dict.get('mid')
            focus_item['focus_fans'] = info_dict.get('following')
            focus_item['focus_focus'] = info_dict.get('follower')
            print(focus_item)


def main():
    # for user_id in user_id_list:
    #     get_relation(user_id)
    get_focus_info('https://api.bilibili.com/x/relation/stat?vmid=125269176&jsonp=jsonp')


if __name__ == '__main__':
    main()
