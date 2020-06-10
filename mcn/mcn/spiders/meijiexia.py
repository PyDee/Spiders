"""
微博
小红书
抖音
快手
"""
import scrapy


class MeijiexiaSpider(scrapy.Spider):
    name = 'meijiexia'
    allowed_domains = ['www.meijiexia.com']
    start_urls = [
        'https://www.meijiexia.com/medias-76-0-0-0_0.html?time=&fans=&price=&pro=&per_page=63',
    ]

    def parse(self, response):
        tr_list = response.xpath('//tbody[@id="qu-con"]/tr')
        for tr in tr_list:
            item = dict()
            user_id = tr.xpath('./td[@class="td1"]/input/@value').extract_first()
            nick_name = tr.xpath('./td[@class="td2"]/div[@class="itemMsg"]//a/text()').extract_first()
            place = tr.xpath('./td[@class="td3"]/text()').extract_first()
            price_list = tr.xpath('./td[@class="td4"]/p')
            for price_element in price_list:
                classify = price_element.xpath(
                    './span[@class="money"]/preceding-sibling::span[1]/text()').extract_first()
                price = price_element.xpath('./span[@class="money"]/text()').extract_first()
                item[classify.strip()] = price.strip()

            fans_num = tr.xpath('./td[@class="td6"]/p[@class="num"]/text()').extract_first()
            item['fans_num'] = fans_num.strip()

            item['user_id'] = user_id.strip()
            item['nick_name'] = nick_name.strip()
            item['place'] = place.strip()
            print(item)
