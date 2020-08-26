import pickle


def read_all_urls(file_name="all_urls.txt"):
    with open(file_name, 'rb') as fw:
        result = pickle.load(fw)
    return result


if __name__ == "__main__":
    s = read_all_urls()
    for index, item in enumerate(s):
        print(index, item[0], item[1])
