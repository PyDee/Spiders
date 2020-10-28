import os
import sys
from scrapy.crawler import CrawlerProcess
from scrapy.utils.project import get_project_settings
from spiders.focus import FocusSpider
from spiders.user import UserSpider
from spiders.relation import RelationSpider
from spiders.kolUser import KolUserSpider
from spiders.kolVideo import KolVideoSpider

if __name__ == '__main__':
    mode = sys.argv[1]
    os.environ['SCRAPY_SETTINGS_MODULE'] = f'settings'
    settings = get_project_settings()
    process = CrawlerProcess(settings)
    mode_to_spider = {
        'focus': FocusSpider,
        'user': UserSpider,
        'relation': RelationSpider,
        'kol_user': KolUserSpider,
        'kol_video': KolVideoSpider,
    }
    process.crawl(mode_to_spider[mode])
    # the script will block here until the crawling is finished
    process.start()
