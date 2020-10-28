import scrapy


class UserInfo(scrapy.Item):
    # 公有字段
    mid = scrapy.Field()  # 用户id
    name = scrapy.Field()  # 用户昵称
    introduction = scrapy.Field()  # 用户签名
    focus = scrapy.Field()  # 用户关注了多少人
    following = scrapy.Field()  # 用户有多少粉丝

    # 粉丝数据相关字段
    level = scrapy.Field()  # 用户等级
    sex = scrapy.Field()  # 用户性别
    face = scrapy.Field()  # 用户头图
    video_play_count = scrapy.Field()  # 视频播放量
    article_play_count = scrapy.Field()  # 文章阅读量
    like = scrapy.Field()  # 点赞数
    video_count = scrapy.Field()  # 点赞数

    # KOL 字段
    official = scrapy.Field()  # 官方认证
    audio_count = scrapy.Field()  # 音频总数
    article_total = scrapy.Field()  # 专栏（文章）总数
    album_count = scrapy.Field()  # 相册总数


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


class Video(scrapy.Item):
    """用户发布视频相关字段"""
    # 列表页视频数据
    mid = scrapy.Field()  # KOL 用户id
    title = scrapy.Field()  # 标题
    play = scrapy.Field()  # 播放数
    video_review = scrapy.Field()  # 弹幕数
    comment = scrapy.Field()  # 评论
    bvid = scrapy.Field()  # 英文id
    aid = scrapy.Field()  # 数字id
    created = scrapy.Field()  # 发布时间

    # 播放页数据
    pubdate = scrapy.Field()  # 发布时间
    lower_view = scrapy.Field()  # 播放量
    danmaku = scrapy.Field()  # 弹幕数
    reply = scrapy.Field()  # 评论数
    coin = scrapy.Field()  # 投币数
    share = scrapy.Field()  # 分享数
    like = scrapy.Field()  # 点赞数量
    staff = scrapy.Field()  # 创作团队
