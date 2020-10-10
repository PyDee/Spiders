import execjs


class RunJs:
    """
    解析百度指数
    '''
        decrypt(password, data) {
        let arr = password.split('');
        let dataArr = data.split('');
        let objPass = {};
        let notInNames = [];
        for (let i = 0; i < arr.length / 2; i++) {
            objPass[arr[i]] = arr[arr.length / 2 + i];
        }
        // 数据解密转换
        for (let i = 0; i < data.length; i++) {
            notInNames.push(objPass[dataArr[i]]);
        }
        return notInNames.join('');
    },
    '''

    """
    def __init__(self):
        self.js = '''function decrypt(t, e) {
            for (var n = t.split(""), i = e.split(""), a = {}, r = [], o = 0; o < n.length / 2; o++) a[n[o]] = n[n.length / 2 + o];
            for (var s = 0; s < e.length; s++) r.push(a[i[s]]);
            return r.join("")
        }'''

        self.js_handler = self.get_js_handler(self.js)

    def decrypt(self, key, data):
        # 若因环境问题无法运行，替换此方法即可
        return self.js_handler.call('decrypt', key, data)

    @staticmethod
    def get_js_handler(js):
        return execjs.compile(js)
