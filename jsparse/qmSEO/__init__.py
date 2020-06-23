import pymongo


class MongoDB:
    def __init__(self):
        self.client = pymongo.MongoClient('127.0.0.1', 27017)
        self.md = self.client['mcn']

