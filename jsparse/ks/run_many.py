import os
from threading import Thread
from multiprocessing import Process
import subprocess


def func(user_id):
    # os.system("python ./test2.py")
    # os.system("gnome-terminal -e 'bash -c \"ls; exec bash\"'")
    # subprocess.call_in_new_window('python ./test2.py', shell=True)
    # subprocess.call(['gnome-terminal', '-x', 'python ./test2.py'])
    subprocess.call('python ./video.py  %s' % user_id, creationflags=subprocess.CREATE_NEW_CONSOLE)


if __name__ == '__main__':
    # t = Thread(target=func)
    # t.start()

    user_ids = [
        "Dabei6888",
        "DJ686868",
        "xiaokeaihanhan",
    ]
    for user_id in user_ids:
        p = Process(target=func, args=(user_id,))
        p.start()
