# -*- coding: utf-8 -*-
""" 
@Time : 2020/10/19 16:29
@Author : PyDee
@File : aboutLaunch.py
@description : 关于 launch 的基本内容
    pyppeteer 使用了 Python 异步协程库 asyncio，可整合 Scrapy 进行分布式爬虫。
"""
import time
import random
import tkinter
import asyncio
import pyppeteer


class PyppeTeerUsage:
    def __init__(self):
        # 屏蔽知乎对 webdriver 的检测的js脚本
        self.zhi_hu_js1 = '''() =>{

                   Object.defineProperties(navigator,{
                     webdriver:{
                       get: () => false
                     }
                   })
                }'''
        self.zhi_hu_js2 = '''() => {
                alert (
                    window.navigator.webdriver
                )
            }'''
        self.zhi_hu_js3 = '''() => {
                window.navigator.chrome = {
            runtime: {},
            // etc.
          };
            }'''
        self.zhi_hu_js4 = '''() =>{
        Object.defineProperty(navigator, 'languages', {
              get: () => ['en-US', 'en']
            });
                }'''
        self.zhi_hu_js5 = '''() =>{
        Object.defineProperty(navigator, 'plugins', {
            get: () => [1, 2, 3, 4, 5,6],
          });
                }'''
        pass

    # 查看版本号
    @staticmethod
    def check_version():
        print(pyppeteer.__chromium_revision__)

    # 查看 Chromium 存放路径
    @staticmethod
    def check_path():
        print(pyppeteer.executablePath())

    # 获取电脑分辨率
    @staticmethod
    def screen_size():
        tk = tkinter.Tk()
        width = tk.winfo_screenwidth()
        height = tk.winfo_screenheight()
        tk.quit()
        return {'width': width, 'height': height}

    # 请求百度首页
    async def baidu(self):
        browser = await pyppeteer.launch(
            headless=False,
            # defaultViewport={"width": 1920, "height": 1080},
            args=['--start-maximized'],
        )
        page = await browser.newPage()
        await page.setViewport(self.screen_size())  # 内容全屏
        await page.goto('https://www.baidu.com/')  # 跳转
        await page.screenshot({'path': 'example.png'})  # 截图
        await browser.close()  # 关闭

    def run(self):
        asyncio.get_event_loop().run_until_complete(self.baidu())


class ZhiHu(PyppeTeerUsage):
    def __init__(self):
        super(ZhiHu).__init__()

    def input_time_random(self):
        return random.randint(100, 151)

    async def get_cookie(self, page):
        res = await page.content()
        cookies_list = await page.cookies()
        cookies = ''
        for cookie in cookies_list:
            str_cookie = '{0}={1};'
            str_cookie = str_cookie.format(cookie.get('name'), cookie.get('value'))
            cookies += str_cookie
        print('cookies:', cookies)
        return cookies

    async def login(self, username, pd, url):
        browser = await pyppeteer.launch({'headless': False, 'args': ['--no-sandbox'], })
        page = await browser.newPage()
        await page.setUserAgent(
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299')
        await page.goto(url)
        # await page.evaluate(self.zhi_hu_js1)  # 在网页中执行js代码
        # await page.evaluate(self.zhi_hu_js3)
        # await page.evaluate(self.zhi_hu_js4)
        # await page.evaluate(self.zhi_hu_js5)
        await page.click('div.SignFlow-tabs >  div:nth-child(2)')
        await page.type('.SignFlow-account .Input', username, {'delay': self.input_time_random() - 50})
        await page.type('.SignFlow-password .Input', pd, {'daelay': self.input_time_random()})
        time.sleep(2)
        await page.click('.Button.SignFlow-submitButton.Button--primary.Button--blue')
        # page.mouse.click()  # 鼠标模拟点击
        await page.waitFor(20)
        await page.waitForNavigation()
        print(page.url)
        await self.get_cookie(page)

    def run(self):
        username = 'sukangshou4@163.com'
        pd = 'niangu98'
        url = 'https://www.zhihu.com/signin?next=%2Fhot'
        loop = asyncio.get_event_loop()
        loop.run_until_complete(self.login(username, pd, url))


class WebDriverTest:
    # 绕过 webdriver 检测
    # 测试检测webdriver
    async def main(self):
        browser = await pyppeteer.launch(headless=False, args=['--disable-infobars'])
        page = await browser.newPage()

        # evaluateOnNewDocument()，该方法是将一段 js 代码加载到页面文档中，
        # 当发生页面导航、页面内嵌框架导航的时候加载的 js 代码会自动执行，
        # 那么当页面刷新的时候该 js 也会执行，这样就保证了修改网站的属性持久化的目的。
        await page.evaluateOnNewDocument('() =>{ Object.defineProperties(navigator,'
                                         '{ webdriver:{ get: () => false } }) }')
        await page.setUserAgent(
            "Mozilla/5.0 (Windows NT 6.0) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.36 Safari/536.5")
        await page.setViewport(viewport={'width': 1536, 'height': 768})
        await page.goto('https://intoli.com/blog/not-possible-to-block-chrome-headless/chrome-headless-test.html')
        await asyncio.sleep(25)
        await browser.close()

    def run(self):
        asyncio.get_event_loop().run_until_complete(self.main())


class ParseClass(PyppeTeerUsage):
    """
    pyppeteer 的页面解析总结
    CSS.Selector与Xpath进行页面解析
    """

    async def main(self):
        browser = await pyppeteer.launch(headless=False, args=['--disable-infobars'])
        page = await browser.newPage()

        await page.evaluateOnNewDocument('() =>{ Object.defineProperties(navigator,'
                                         '{ webdriver:{ get: () => false } }) }')
        await page.setUserAgent(
            "Mozilla/5.0 (Windows NT 6.0) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.36 Safari/536.5")
        await page.setViewport(viewport=self.screen_size())
        await page.goto('https://www.baidu.com')

        # waitForSelector(selector[, options])
        # 等待指定的选择器匹配的元素出现在页面中，如果调用此方法时已经有匹配的元素，立即返回。 如果指定的选择器在超时后不出现则抛出异常。
        # 也可用waitForXPath()使用xpath选择器
        await page.waitForSelector('#su', {'timeout': 3000})
        # 点击搜索框，css选择器
        await page.click('#kw')
        # 输入搜索内容，css选择器
        await page.type('#kw', 'pyppeteer')
        # 点击 百度一下 css 选择器
        # await page.click('#su')

        # 利用xpath选择器选择出登录按钮
        # 下面的两行代码不可合并为一行，因为await 返回为携程，携程需要被执行
        longin_key = await page.Jx('//*[@id="su"]')
        # 点击
        await longin_key[0].click()
        await asyncio.sleep(10)

    def run(self):
        asyncio.get_event_loop().run_until_complete(self.main())


if __name__ == '__main__':
    # 百度
    # pu = PyppeTeerUsage()
    # pu.run()

    # 知乎
    # zhihu = ZhiHu()
    # zhihu.run()

    # webDriver 检测
    # wdt = WebDriverTest()
    # wdt.run()

    # pyppeteer 的页面解析示例
    pc = ParseClass()
    pc.run()

    pass
