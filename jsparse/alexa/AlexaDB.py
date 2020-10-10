import datetime
import pymysql


class AlexaDb:
    def __init__(self):
        self.conn = pymysql.Connection(
            host="10.10.5.1",
            user="baosheng.zhang@qm.cn",
            password="l43mTsvQRzM61GqM",
            database="QM_AD_V2",
            port=1300,
        )
        self.cursor = self.conn.cursor()

    def insert_data(self, domain, uv, pv):
        "id, domain,uv, pv, date"
        date = ''
        sql = "insert into alexa_day_zbs set domain='%s', uv='%d', pv='%d', date='%s'" % (domain, uv, pv, date)
        try:
            self.cursor.execute(sql)
            self.conn.commit()
        except Exception as e:
            print("插入数据出错：", e)
            self.conn.rollback()

    def select_data(self):
        sql = "select * from alexa_day_zbs"
        self.cursor.execute(sql)
        result = self.cursor.fetchall()
        print(result)


if __name__ == '__main__':
    adb = AlexaDb()
    adb.select_data()
