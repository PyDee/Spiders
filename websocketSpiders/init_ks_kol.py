"""
初始化监控对象信息到redis数据库
"""
from monitor import Monitor
from db import RedisDB


def create_item(data):
    item = dict()
    item['origin_user_id'] = data.get('userId')
    item['is_live'] = 1 if data.get('isLive') else 0
    item['nick_name'] = data.get('userName')
    item['live_stream_id'] = data.get('liveStreamId')
    item['token'] = data.get('token')
    item['is_monitor'] = 0
    return item


def insert_into_db(origin_user_id=None, kwai_Id=None):
    """
    初始化待抓取信息
    :param origin_user_id:其实就是origin_user_id,快手给用户的id
    :param kwai_Id:连接中的id
    :return:
    """
    m = Monitor()
    rdb = RedisDB()
    if kwai_Id is None:
        data = m.judge_is_alive(origin_user_id)
    else:
        page_source = m.get_uid(kwai_Id)
        origin_user_id = m.parse_uid_response(page_source)
        data = m.judge_is_alive(origin_user_id)
    if data is None:
        print("当前用户未开播")
    else:
        data = create_item(data)
        data['KWai_id'] = kwai_Id
        rdb.init_one_kol(
            unique_name="HASH_" + origin_user_id,
            key_value_dict=data
        )


if __name__ == '__main__':
    insert_into_db(kwai_Id='KPL704668133')
