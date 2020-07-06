"""由于线上的reids 产生的文件太大，暂时需要手动进行处理"""
import sys
import six
import os
import redis


def bytes_to_str(s, encoding='utf-8'):
    """Returns a str if a bytes object is given."""
    if six.PY3 and isinstance(s, bytes):
        return s.decode(encoding)
    return s


def get_from_list(key, start=0, end=-1):
    """从队列中读取数据"""

    r = redis.Redis(host='redis')
    result = r.lrange(key, start, end)
    name = key.split(":")[0]
    with open(name, 'w+')as f:
        for item in result:
            text = bytes_to_str(item.strip())
            f.write(text)
            f.write('\n')


def print_list(key, start=0, end=1000):
    """从队列中读取数据"""
    r = redis.Redis(host='redis')
    result = r.lrange(key, start, end)
    for item in result:
        print(item.strip())


def redis_init(key):
    r = redis.Redis(host='redis')
    name = key.split(":")[0]
    file_path = os.getcwd() + '\\{}'.format(name)
    count = 0
    with open(file_path, 'r') as file_to_read:
        while True:
            lines = file_to_read.readline()
            lines = lines.replace("\n", "")
            if not lines:
                break
                pass
            r.lpush(f'{key}:start_urls', lines)
            count = count + 1
            if count % 10000 == 0:
                print("execute insert! count is %d" % count)


"""
批量解除network 的关系
for i in ` docker network inspect -f '{{range .Containers}}{{.Name}} {{end}}' weibo_default`; do docker network disconnect -f weibo_default $i; done;
docker network rm weibo_default
"""

if __name__ == '__main__':
    mode = sys.argv[1]
    mode_to_fun = {
        'write': print_list,
        'print': get_from_list,
        "init": redis_init,
    }
    for key in [
        "user_spider:start_urls",
        "phone_user:item"
        "tweet_spider:start_urls",
    ]:
        mode_to_fun[mode](key)
