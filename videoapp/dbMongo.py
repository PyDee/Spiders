import os

import pymongo
import pandas as pd
from openpyxl import load_workbook


class ReadMongo:
    MONGO_HOST = '127.0.0.1'
    MONGO_PORT = 27017
    client = pymongo.MongoClient(MONGO_HOST, MONGO_PORT)

    def write_2_excel(self, collection, sheet, df2):
        """
        数据写入到Excel,可以写入不同的sheet
        """
        writer = pd.ExcelWriter(r'.\excels\{}.xlsx'.format(collection), engine='openpyxl')

        if not os.path.exists(r'.\excels\{}.xlsx'.format(collection)):
            df2.to_excel(writer, sheet_name=sheet, index=None)
        else:
            book = load_workbook(writer.path)
            writer.book = book
        df2.to_excel(writer, index=False, sheet_name=sheet)
        writer.save()
        writer.close()

    def read_2_data(self, collection, private_date, classify, date, db_name='video'):
        """
        读取mongo中的数据，返回dataFrame格式的数据
        :param collection:集合
        :param private_date:当前平台不同于其他平台的数据
        :param classify:需要获取的分类
        :param date:过滤日期
        :param db_name:数据库
        :return:dataFrame
        """
        clint = self.client[db_name][collection]
        data = clint.find({"classify": "{}".format(classify), "issued_date": {"$regex": "{}".format(date)}})
        data = list(data)  # 在转换成列表时，可以根据情况只过滤出需要的数据。(for遍历过滤)
        df = pd.DataFrame(data)  # 读取整张表 (DataFrame)
        df = df[['classify', 'title', 'issued_date', 'comment_count', private_date]]
        return df

    def main(self):
        platforms = [
            # ['mg', 'play_count'],
            # ['youku', 'heat'],
            # ['iqiyi', 'hot'],
            ['tencent', 'play_count'],
        ]
        dates = [
            '2020-02', '2020-03'
        ]

        classifys = ['movie', 'doco', 'cartoon', 'tv', 'variety']
        for platform, private_date in platforms:
            for date in dates:
                for classify in classifys:
                    print(platform, private_date, date, classify)
                    try:
                        df = self.read_2_data(platform, private_date, classify, date)
                        self.write_2_excel(platform, '{}-{}'.format(classify, date), df)
                    except:
                        continue

    def read_2_excel(self):
        clint = self.client['video']['tencent']
        data = clint.find()
        data = list(data)  # 在转换成列表时，可以根据情况只过滤出需要的数据。(for遍历过滤)
        df = pd.DataFrame(data)  # 读取整张表 (DataFrame)
        df.to_excel(r'.\excels\tencent_all.xlsx')


if __name__ == '__main__':
    """db.mg.find({"classify":"doco","issued_date":{"$regex":"2019-01"}})"""
    db = ReadMongo()
    db.read_2_excel()
    db.main()
