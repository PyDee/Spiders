import base64
import pickle
import requests
import codecs
from urllib.parse import quote
from lxml import etree


class DigitalIng:
    def __init__(self):
        self.kw_names = []

    def get_all_urls(self, file_name):
        """
        获取类别关键词
        :return:
        """
        all_page_url = "https://www.digitaling.com/search/articles/{}?kw={}"
        kw_url = "https://www.digitaling.com/articles"
        result = requests.get(kw_url).text
        doc = etree.HTML(result)
        kw_names = doc.xpath('//div[@id="con_nav"]/div/div/div/div[2]/a')
        for name in kw_names:
            page_count = self.get_classify_count_page(name.xpath('./@href')[0])
            for page in range(1, page_count + 1):
                self.kw_names.append([name.text, all_page_url.format(page, quote(name.text))])
        with open(file_name, 'wb') as fw:
            pickle.dump(self.kw_names, fw, -1)

    @staticmethod
    def get_classify_count_page(url):
        """
        获取分类的总页数
        :return:
        :param:url:分类首页url
        """
        ret = requests.get(url)
        text = ret.text
        doc = etree.HTML(text)
        page_count = doc.xpath('//a[@class="next_btn"]/following-sibling::div[1]/label[1]/text()')
        page_count = 0 if len(page_count) <= 0 else int(page_count[0].strip("共").strip('页'))
        return page_count

    @staticmethod
    def get_article_list(url):
        """
        获取分类当前页的所有文章列表
        :param url:分类页url
        :return:
        """
        ret = requests.get(url)
        text = ret.text
        return text

    @staticmethod
    def parse_article_list(page_source):
        """
        解析分类文章列表
        :param page_source: 分类文章列表
        :return:
        """
        doc = etree.HTML(page_source)
        article_urls = doc.xpath('//li[@class="clearfix"]/div[2]/h3/a/@href')
        return article_urls

    @staticmethod
    def get_article_detail(url):
        """
        请求文章详情页
        :param url:文章url
        :return:文章page_source
        """
        article_result = requests.get(url)
        text = article_result.text
        return text

    @staticmethod
    def parse_article_page(page_source):
        """
        解析文章内容
        :param page_source:文章网页源代码
        :return:
        """
        doc = etree.HTML(page_source)

        # 标题
        # title_text = doc.xpath('//div[@id="article_con"]/../div[@class="article_title pd_b_20 clearfix"]/h1/text()')
        title_text = doc.xpath('//div[@id="article_con"]/preceding-sibling::div[2]/h1/text()')
        title_text = None if len(title_text) <= 0 else title_text[0]
        # 分类
        article_classify = doc.xpath(
            '//div[@id="article_con"]/preceding-sibling::div[1]/div[@class="f_l"]/p/span[1]/span[1]/text()')
        article_classify = 0 if len(article_classify) <= 0 else article_classify[0]
        # 发布时间
        article_created = doc.xpath(
            '//div[@id="article_con"]/preceding-sibling::div[1]/div[@class="f_l"]/p/span[1]/span[2]/text()')
        article_created = 0 if len(article_created) <= 0 else article_created[0]
        # 评论
        comment_count_top = doc.xpath('//*[@id="commentCount_top"]/text()')
        comment_count_top = 0 if len(comment_count_top) <= 0 else comment_count_top[0]
        # 收藏
        collect_count_top = doc.xpath('//*[@id="collectCount_top"]/text()')
        collect_count_top = 0 if len(collect_count_top) <= 0 else collect_count_top[0]
        # 获赞
        zan_top = doc.xpath('//*[@id="zan_top"]/text()')
        zan_top = 0 if len(zan_top) <= 0 else zan_top[0]
        # 文本
        article_text = doc.xpath('string(//div[@id="article_con"])').strip()
        article_text = article_text.replace("\n", '')
        with codecs.open('article.txt', 'a+', 'utf-8') as file:
            file.write("{}\t{}\t{}\t{}\t{}\t{}\t{}\n".format(
                str(base64.b64encode(title_text.encode('utf-8')), "utf-8"),
                comment_count_top,
                article_created,
                str(base64.b64encode(article_classify.encode('utf-8')), "utf-8"),
                collect_count_top,
                zan_top,
                str(base64.b64encode(article_text.encode('utf-8')), "utf-8"),
            ))
