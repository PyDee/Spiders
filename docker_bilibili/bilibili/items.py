import scrapy


class UserInfo(scrapy.Item):
    mid = scrapy.Field()  # 用户id
    name = scrapy.Field()  # 用户昵称
    level = scrapy.Field()  # 用户等级
    sex = scrapy.Field()  # 用户性别
    introduction = scrapy.Field()  # 用户性别
    face = scrapy.Field()  # 用户头图
    focus = scrapy.Field()  # 用户关注了多少人
    following = scrapy.Field()  # 用户有多少粉丝
    video_play_count = scrapy.Field()  # 视频播放量
    article_play_count = scrapy.Field()  # 文章阅读量
    like = scrapy.Field()  # 点赞数
    video_count = scrapy.Field()  # 点赞数


class Relationship(scrapy.Item):
    total = scrapy.Field()  # 用户关注总数
    user_id = scrapy.Field()  # 用户id
    focus_id = scrapy.Field()  # 用户关注的id
    focus_name = scrapy.Field()  # 关注者的昵称
    focus_face = scrapy.Field()  # 用户关注的id
    introduction = scrapy.Field()  # 关注者的昵称


class UserFocus(scrapy.Item):
    """用户关注者信息"""
    focus_id = scrapy.Field()  # 关注者的id
    focus_fans = scrapy.Field()  # 关注者的粉丝
    focus_focus = scrapy.Field()  # 关注者的关注
