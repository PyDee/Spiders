import json
import pprint
import urllib.request
import urllib.parse
from lxml import etree


def read_file(file_name):
    with open(file_name, 'r', encoding='utf-8') as file:
        for line in file:
            yield line.strip()


def get_famous_info(name):
    # 请求地址
    url = 'https://baike.baidu.com/item/' + urllib.parse.quote(name)
    # 请求头部
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36'
    }
    # 利用请求地址和请求头部构造请求对象
    req = urllib.request.Request(url=url, headers=headers, method='GET')
    # 发送请求，获得响应
    response = urllib.request.urlopen(req)
    # 读取响应，获得文本
    text = response.read().decode('utf-8')
    # 构造 _Element 对象
    html = etree.HTML(text)
    # 使用 xpath 匹配数据，得到匹配字符串列表
    sen_list = html.xpath('//div[@class="basic-info cmn-clearfix"]/dl')
    famous_info = dict()
    for part in sen_list:
        for i in range(int(len(part) / 2)):
            i = i * 2
            name = part[i].xpath('string(.)').replace('\xa0', '').strip('\n')
            value = part[i + 1].xpath('string(.)').replace('\xa0', '').strip('\n')
            famous_info[name] = value
    with open('result.json', 'a+') as f:
        f.write(json.dumps(famous_info))
        f.write('\n')


if __name__ == '__main__':
    result = read_file('famousName')
    while True:
        try:
            name = next(result)
        except:
            break
        birthday = get_famous_info(name)
