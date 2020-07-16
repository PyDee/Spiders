import re
import requests
from lxml import etree
from fake_useragent import UserAgent
from multiprocessing import Process
from deal_redis import RedisDB
from deal_mongo import MongoDB

rdb = RedisDB()
mdb = MongoDB()
headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Connection': 'keep-alive',
    'Cookie': 'SUB=_2AkMoUmz0f8NxqwJRmP4Rz2zka45_ww7EieKeDp0vJRMxHRl-yT9kqhRatRB6A9JCG9Kk7jauQttEWYin_a8rgqKo9WZO; SUBP=0033WrSXqPxfM72-Ws9jqgMF55529P9D9W5l0erZTYOvMhfcesKEgrlL; _s_tentry=passport.weibo.com; Apache=6611138971153.541.1594811333268; SINAGLOBAL=6611138971153.541.1594811333268; ULV=1594811333340:1:1:1:6611138971153.541.1594811333268:; YF-Page-G0=b7e3c62ec2c0b957a92ff634c16e7b3f|1594811341|1594811328',
    'Host': 'weibo.com',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'none',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
}


def get_response(url):
    result = '<div id="response">{}</div>'
    proxies = {
        # "http": "http://183.155.198.239:48219",
        "https": "https://139.208.114.204:20119",
    }
    ret = requests.get(url, headers=headers)
    response = ret.text
    elements = re.findall("<script>FM.view\((.*?)\)</script>", response, re.M)
    if len(elements) <= 0:
        raise ValueError('Response is None')
    for element in elements:
        dict_ele = eval(element)
        if dict_ele.get('domid') == "Pl_Official_PersonalInfo__57":
            result = result.format(dict_ele.get('html').replace(r"\/", '/'))
            break

    return result


def parse(html):
    result = etree.HTML(html)
    elements = result.xpath('//*[@id="response"]/div')
    if len(elements) <= 0:
        pass
    item_dict = dict()

    for element in elements:
        classify = element.xpath('./div[1]/div/div/h2/text()')[0]
        if classify == "基本信息":
            li_elements = element.xpath('//ul[@class="clearfix"]/li')
            for li in li_elements:
                span_1 = li.xpath('./span[1]/text()')[0]
                try:
                    span_2 = li.xpath('./span[2]/text()')[0].strip()
                except:
                    span_2 = ""
                item_key = deal_item(span_1)
                if len(item_key) <= 0:
                    continue
                item_dict[item_key] = span_2
        break
    if 'nickname' not in item_dict.keys():
        pass
    else:
        mdb.insert_item(item_dict, 'info')
        # print(item_dict)


def deal_item(item1):
    item_key = str()
    if item1 == "昵称：":
        item_key = "nickname"
    if item1 == "所在地：":
        item_key = "Location"
    if item1 == "性别：":
        item_key = "sex"
    if item1 == "生日：":
        item_key = 'birthday'
    if item1 == "注册时间：":
        item_key = "regdate"
    return item_key


def run():
    while True:
        user_id = rdb.fetch_one_element()
        if user_id is None:
            break
        home_url = "https://weibo.com/p/100505{}/info"
        k = 0
        fail = 0
        try:
            result = get_response(home_url.format(user_id))
            parse(result)
            k += 1
        except BaseException as e:
            fail += 1
            print(f"{user_id}获取失败-----------{e}", fail)


if __name__ == '__main__':
    run()
