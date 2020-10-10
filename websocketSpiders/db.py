import base64
import datetime
import pymysql
import redis


class RedisDB:
    def __init__(self):
        self.db = redis.Redis(
            host='49.233.3.214',
            port=6379,
            db=2,
            password='Qm20200427',
        )

    def init_one_kol(self, unique_name, key_value_dict):
        """
        将单个需要采集信息的用户初始化的redis中
        :param unique_name:用于取值的kol用户的唯一键
        :param key_value_dict:用户的键值对信息
        :return:
        """
        try:
            self.db.hmset(unique_name, mapping=key_value_dict)
        except Exception as e:
            print(e)

    def get_hash_keys(self, unique_name, filed_key):
        """
        根据hash表的name 和对应字段名字，获取对应字段的值
        :param unique_name:hash表中保存的对象的唯一键（kwaId）
        :param filed_key:一般是status字段或者是token，live_stream_id等
        :return:对应的值
        """
        # 获取所有的hash key，即所有kol 的唯一键
        result = self.db.hget(unique_name, filed_key).decode()
        return result

    def update_hash_filed(self, unique_name, key_value_dict):
        self.db.hmset(name=unique_name, mapping=key_value_dict)


class MysqlClass:
    def __init__(self):
        self.conn = pymysql.Connection(
            host="49.233.3.214",
            user="bossen_spider",
            password="Qm20200427",
            database="bossen_spider",
            port=3306,
        )
        self.cursor = self.conn.cursor()

    def insert_comment(self, mapping):
        """
        CREATE TABLE IF NOT EXISTS `comments`(
        `live_user` VARCHAR(100) NOT NULL,
        `comment_author` VARCHAR(100) NOT NULL,
        `comment_time` DATE,
        `comment_text` VARCHAR(255) NOT NULL
        )ENGINE=InnoDB DEFAULT CHARSET=utf8;

        :param mapping:
        :return:
        """
        dt = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        sql = 'insert into comments () values ("{}","{}","{}","{}")'.format(
            mapping.get('live_user'),
            mapping.get('comment_author'),
            dt,
            mapping.get('comment_text'),
        )
        try:
            self.cursor.execute(sql)
            self.conn.commit()
        except RuntimeError as e:
            print("当前sql执行错误：", sql)
            self.conn.rollback()

    def read_data(self):
        sql = 'select * from comments'
        self.cursor.execute(sql)
        result = self.cursor.fetchall()
        for item in result:
            print(
                "name:{}".format(base64.decodebytes(eval(item[1].replace('\n', ''))).decode()),
                "comments:{}".format(base64.decodebytes(eval(item[3].replace('\n', ''))).decode()),
            )
