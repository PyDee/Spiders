import time
import re
import requests
from lxml import etree
from multiprocessing import Process
from dbmongo import DBMongo
from dbredis import RedisDB


def get_response(url):
    ret = requests.get(url, timeout=10)
    site_encode = pick_charset(ret.text)
    ret = ret.content.decode(site_encode)
    html = etree.HTML(ret)
    title = html.xpath('//title/text()')
    return title[0]


def pick_charset(html):
    """
    从文本中提取 meta charset
    :param html:
    :return:
    """
    charset = None
    m = re.compile('<meta .*(http-equiv="?Content-Type"?.*)?charset="?([a-zA-Z0-9_-]+)"?', re.I).search(html)
    if m and m.lastindex == 2:
        charset = m.group(2).lower()
    return charset


def run():
    mdb = DBMongo()
    rdb = RedisDB()
    while True:
        url = rdb.fetch_one_element()
        if url is None:
            break
        try:
            title = get_response(url)
            item = dict()
            item['result'] = "{}\t{}".format(url.strip("'http://"), title.strip())
            mdb.insert_2_xt(item, 'has')
        except Exception as e:
            item = dict()
            item['url'] = url
            mdb.insert_2_xt(item, 'loss')


if __name__ == '__main__':
    for i in range(30):
        p = Process(target=run)
        p.start()
        time.sleep(1)
    print('执行主进程的内容了')
