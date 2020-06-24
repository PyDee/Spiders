# -*- coding: utf-8 -*-
"""
Created on Fri May 18 17:34:20 2018
@author: peter
"""
import sqlite3
import requests
import time

startid = 35365573
user = [startid]


def create():
    # 创建数据库
    global conn
    conn = sqlite3.connect('data.db')
    conn.execute("""
                create table if not exists user(
                id INTEGER PRIMARY KEY ,
                mid int DEFAULT NULL,
                name varchar DEFAULT NULL,
                sign varchar DEFAULT NULL)""")
    conn.execute("""
                create table if not exists relation(
                id INTEGER PRIMARY KEY ,
                master int,
                following int 
                )""")
    conn.commit()


def save(result=[], master=0):
    # 将数据保存至本地
    global conn, user
    if result == [] or master == 0:
        print("save error!")
        return
    command1 = "insert into user \
             (mid,name,sign) values (?,?,?);"
    command2 = "insert into relation\
             (master,following)values(?,?)"
    for row in result:
        try:
            temp = (master, row[0])
            if row[0] not in user:
                user.append(row[0])
                conn.execute(command1, row)
                conn.execute(command2, temp)
            else:
                conn.execute(command2, temp)
        except Exception as e:
            print(e)
            print("insert error!")
            conn.rollback()
    conn.commit()
    result = []


def func(startid=0):
    global user
    if startid == 0:
        return
    i = 0
    result = []
    ref_url = "https://space.bilibili.com/" + str(startid) + "/#/fans/follow"
    head = {
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'DNT': '1',
        'Host': 'api.bilibili.com',
        'Pragma': 'no-cache',
        'Referer': ref_url,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) \
        AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.170 Safari/537.36'
    }
    while 1:
        i += 1
        if i >= 6:
            break
        url = "https://api.bilibili.com/x/relation/followings?vmid=" + \
              str(startid) + "&pn=" + str(i) + \
              "&ps=20&order=desc&jsonp=jsonp&callback=__jp5"
        try:
            r = requests.get(url, headers=head, timeout=10).text
            r2 = eval(r[6:-1].replace('null', 'None'))
            list1 = r2['data']['list']
            if list1 == []:
                break
            else:
                for user1 in list1:
                    result.append(
                        [user1["mid"], user1["uname"], user1["sign"]])
        except Exception as e:
            print(e)
    if result != []:
        save(result, startid)


if __name__ == "__main__":
    create()
    cycle = 0
    recordids = 0
    time0 = time.time()
    while 1:
        cycle += 1
        if recordids == 0:
            users = [startid]
        else:
            users = user[recordids:len(user)]
        for i in users:
            recordids += 1
            func(i)
            time1 = time.time()
            print("\r已爬取{0}个用户，正在第{1}层 ，总花费时间:{2:.2f}s".format(
                recordids, cycle, time1 - time0), end="")
