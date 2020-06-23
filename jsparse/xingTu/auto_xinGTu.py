"""
plant：巨量星图
introduction：获取mcn机构信息，获取mcn机构下作者信息
function:我的方法是使用selenium + 手动获取前六页内容，后面作者少于20人的机构由程序完成
改进： 121 行内容可修改为点击坐标（下箭头），代替手工。我的电脑坐标定位不准，总说超出，所以手动上了
"""
import time
from selenium import webdriver
from selenium.webdriver import ChromeOptions
import pymongo


class DBMongo:
    def __init__(self):
        self.my_client = pymongo.MongoClient("mongodb://localhost:27017/")

        # 连接数据库
        self.xinGTu = self.my_client["mcn"]

    def insert_2_xt(self, success_item):
        try:
            collection = self.xinGTu["xt_author"]
            collection.insert_one(success_item)  # 数据写入mongoDB
            print('success!!!')
        except:
            print('写入数据失败')


class XinGTu:
    def __init__(self):
        self.db = DBMongo()
        chrome_options = ChromeOptions()
        chrome_options.add_argument('--headless')
        self.driver = webdriver.Chrome('..\\chromedriver.exe')
        self.driver.maximize_window()
        self.home_url = 'https://starsp.toutiao.com'
        self.mcn_url = 'https://starsp.toutiao.com/ad#/market/mcn'

    def get_home_page(self):
        """1. 请求首页"""
        self.driver.get(self.home_url)
        time.sleep(10)

    def roll_to_bottom(self):
        """2.首页滑动到底部"""
        for i in range(5):
            self.driver.execute_script("window.scrollBy(0, 1000)")
            time.sleep(1)

    def click_try(self):
        """3. 进入客户体验入口"""
        self.driver.find_element_by_xpath(
            '//div[@class="button-box"]/div[1]/div[@class="experience-account"]/a').click()
        time.sleep(10)

    def click_mcn(self):
        """4. 进入mcn机构入口"""
        # a = self.driver.find_element_by_xpath('//div[@class="left-wrapper"]/ul/li[-1]/text()')
        self.driver.get(self.mcn_url)
        time.sleep(10)

    def get_mcn_detail(self):
        """5.点击进入机构详情页"""
        # introduction：留出时间来进入指定页
        time.sleep(6)
        mcns = self.driver.find_elements_by_xpath(
            '//p[@class="mcn-name"]')
        mcn_names = set()

        # 遍历一页的mcn机构
        for mcn in mcns:
            # 获取单一机构下 author 信息
            time.sleep(2)
            if mcn.text in mcn_names:
                continue
            else:
                mcn.click()
                mcn_names.add(mcn.text)
                self.change_to_mcn_detail(mcn.text)
                # 当一页遍历完成后，点击下一页
            if len(mcn_names) == 20:
                # 进入下一页
                windows = self.driver.window_handles
                self.driver.switch_to.window(windows[0])
                time.sleep(3)
                self.driver.find_element_by_xpath('//button[@class="btn-next"]').click()
                time.sleep(3)
                windows = self.driver.window_handles
                # 切换到最后一个标签页，也就是刚打开的这个标签页
                self.driver.switch_to.window(windows[0])
                time.sleep(3)
                self.driver.execute_script('window.scrollBy(0,200)')
                # 下一页置顶
                js_top = "var q=document.documentElement.scrollTop=0"
                self.driver.execute_script(js_top)

                # 获取下一页内容信息
                self.get_mcn_detail()

            windows = self.driver.window_handles
            # 切换到最后一个标签页，也就是刚打开的这个标签页
            self.driver.switch_to.window(windows[0])
            time.sleep(3)
            self.driver.execute_script('window.scrollBy(0,200)')

    def change_to_mcn_detail(self, mcn_name):
        """6. 切换到新的标签页，获取mcn机构用户信息"""
        # 获取所有标签页的句柄
        windows = self.driver.window_handles
        # 切换到最后一个标签页，也就是刚打开的这个标签页
        self.driver.switch_to.window(windows[-1])
        time.sleep(3)
        author_num = int(self.driver.find_element_by_xpath('//div[@class="authors-num"]/span[@class="num"]').text)
        print(author_num)
        self.driver.find_element_by_xpath('//div[@class="to-more-autho"]/a').click()
        time.sleep(2)

        elements = self.driver.find_elements_by_xpath(
            '//div[@class="all-author-item"]/div/div[@class="info"]/div')
        if len(elements) < author_num:
            # introduction: 留出时间来拉取流加载内容
            sleep = 2 * author_num // 10
            print('等待{}秒钟'.format(sleep))
            time.sleep(sleep)

        elements = self.driver.find_elements_by_xpath(
            '//div[@class="all-author-item"]/div/div[@class="info"]/div')
        for element in elements:
            item = dict()
            try:
                name = element.find_element_by_xpath('./p').text
                fans = element.find_element_by_xpath('./div[@class="datas"]//span[@class="num"]').text
                classify = element.find_element_by_xpath(
                    './div[@class="platform-and-tag"]//div[@class="tag"]/span/span').text
                item['mcn_name'] = mcn_name
                item['author_name'] = name
                item['author_fans'] = fans
                item['author_classify'] = classify
                self.db.insert_2_xt(item)
                print(name, fans, classify)
            except:
                continue
        self.driver.close()

    def run(self):
        self.get_home_page()
        self.roll_to_bottom()
        self.click_try()
        self.click_mcn()
        # MCN 机构列表页
        self.get_mcn_detail()


if __name__ == '__main__':
    xt = XinGTu()
    xt.run()
