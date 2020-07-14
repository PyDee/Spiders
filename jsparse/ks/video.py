# 快手 直播监控
# -*- coding:utf-8 -*-
"""
@author: Bossen Cheung
@file: video.py
@time: 2020/07/10
@function:
"""

import time
import hashlib
from selenium import webdriver
import subprocess
import sys


class MonitorKS:
    def __init__(self):
        chrome_options = webdriver.ChromeOptions()
        # 使用headless无界面浏览器模式
        # chrome_options.add_argument('--headless')
        # chrome_options.add_argument('--disable-gpu')
        self.driver = webdriver.Chrome('../chromedriver.exe', chrome_options=chrome_options)
        pass

    @staticmethod
    def print_info(string, is_print=True):
        if is_print:
            print(string)

    def do_filter(self, comment_filter, comment_info):
        encrypt_comment = self.get_str_sha1_secret_str(str(comment_info))
        pre_length = len(comment_filter)
        comment_filter.add(encrypt_comment)
        ofter_length = len(comment_filter)
        if ofter_length > pre_length:
            self.print_info(comment_info)
        else:
            pass

    @staticmethod
    def get_str_sha1_secret_str(res: str):
        """
        使用sha1加密算法，返回str加密后的字符串
        :param res:待加密字符串
        :return:加密完成的字符串
        """
        sha = hashlib.sha1(res.encode('utf-8'))
        encrypts = sha.hexdigest()
        return encrypts

    def _is_alive(self):
        """判断是否开播"""
        try:
            # 当直播进行时可能无法获取到内容，需要捕获一下
            live_detail = self.driver.find_element_by_xpath('//p[@class="no-live-detail-tip"]').text
            if "主播尚未开播" in live_detail:
                return False
            else:
                return True
        except:
            return True

    def get_comment_info(self, user_id):
        """获取聊天室内容"""
        k = 0
        comment_filter = set()
        while True:

            time.sleep(3)
            k += 2
            print(k)
            if k == 100:
                break
            try:
                lists = self.driver.find_elements_by_xpath('//ul[@class="chat-history"]/li/div')
            except:
                time.sleep(5)
                continue
            for li in lists:
                comment_info = dict()
                comment_info["user_id"] = user_id
                comment_info['username'] = li.find_element_by_xpath('./span[@class="username"]').text
                if comment_info['username'] == '快手官方帐号：':
                    continue
                try:
                    comment_info['comment_mr'] = li.find_element_by_xpath('./span[@class="comment mr"]').text
                except:
                    pass
                try:
                    comment_info['img'] = li.find_element_by_xpath('./img').get_attribute('src')
                except:
                    pass
                try:
                    comment_info['comment'] = li.find_element_by_xpath(
                        './span[@class="comment"]//span | ./span[@class="comment"]').text
                except:
                    pass
                self.do_filter(comment_filter, comment_info)

    def refresh_live_page(self, url, user_id):
        """刷新直播页面，清空聊天室内容"""
        self.driver.get(url)
        self.get_comment_info(user_id)

    def request_video(self, user_id):
        url = "https://live.kuaishou.com/u/" + user_id
        self.driver.get(url)
        time.sleep(3)
        self.driver.get(url)
        while True:
            if self._is_alive():
                pass
            else:
                self.print_info("当前主播已下线！！！！！！！！！！")
                break
            self.print_info("刷新页面，清空聊天室……")
            self.refresh_live_page(url, user_id)
        self.driver.quit()

    def main(self):
        subprocess.call('python ./video.py', creationflags=subprocess.CREATE_NEW_CONSOLE)


if __name__ == '__main__':
    user_id = sys.argv[1]
    mks = MonitorKS()
    mks.request_video(user_id)
