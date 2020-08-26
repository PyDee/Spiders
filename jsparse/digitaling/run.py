import pickle
import codecs
from digitalIngClass import DigitalIng
from read_all_urls import read_all_urls

if __name__ == '__main__':
    dig = DigitalIng()
    result = read_all_urls()
    for index, item in enumerate(result):
        page_source = dig.get_article_list(item[1])
        article_urls = dig.parse_article_list(page_source)
        for article_url in article_urls:
            print(index + 1, item[0], article_url)
            article_detail_page_source = dig.get_article_detail(article_url)
            dig.parse_article_page(article_detail_page_source)
