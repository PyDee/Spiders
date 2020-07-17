import time
import sys
import tqdm


def progress_bar_normal():
    """普通进度条"""
    for i in range(1, 101):
        print('\r', end="")
        print("Download progress:{}%:".format(i), "▋" * (i // 2), end="")
        sys.stdout.flush()
        time.sleep(0.05)


def progress_bar_time():
    """时间进度条"""
    scale = 50
    start = time.perf_counter()
    for i in range(scale + 1):
        a = "*" * i
        b = "." * (scale - i)
        c = (i / scale) * 100
        dur = time.perf_counter() - start
        print("\r{:^3.0f}%[{}->{}]{:.2f}s".format(c, a, b, dur), end="")
        time.sleep(0.1)


def progress_bar_tqdm():
    """tqdm 进度条工具包"""
    for i in tqdm.tqdm(range(1, 500)):
        time.sleep(0.01)
    time.sleep(0.5)


# progress_bar_normal()
# progress_bar_time()
progress_bar_tqdm()
