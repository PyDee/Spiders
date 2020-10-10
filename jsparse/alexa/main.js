var _HREF_ = encodeURIComponent(location.href),
    syscfg = {
        base_url: '/',
        site_url: '/',
        upimg_url: '/plugin/upload/images',
        maindomain: 'http://www.alexa.cn',
        icpdomain: 'http://icp.alexa.cn',
        mdomain: 'http://m.alexa.cn',
        whoisdomain: 'http://whois.alexa.cn',
        blank_url: 'http://www.alexa.cn/plugin/blank/index',
        loading_img: 'http://www.alexa.cn/loading.gif',
        api_alexa_free_url: '/api/alexa/free?token={token}&url={url}',
        api_alexa_charge_url: '/api/alexa/charge?token={token}&url={url}',
        api_icp_info_url: '/api/icp/info?token={token}&url={url}&host={host}&vcode={vcode}',
        api_icp_simple_info_url: '/api/icp/simple_info?token={token}&url={url}',
        api_icp_related_url: '/api/icp/related_list?token={token}&icp={icp}',
        api_server_get_url: '/api/server/get?token={token}&url={url}&force_update={force_update}',
        api_whois_get_url: '/api/who_is/get?token={token}&url={url}&force_update={force_update}',
        api_whois_ajax_url: '/api/who_is/ajaxget?token={token}&url={url}&force_update={force_update}',
        attention_url: '/user/attention/att/{user_id}',
        unattention_url: '/user/attention/unatt/{user_id}',
        alexa_charts_url: 'http://www.alexa.cn/home/alexa_chart?url={domain}&type={type}&token={token}',
        api_json_demo_url: 'http://www.alexa.cn/api_service/index/json_{id}',
        api_key_reset_url: 'http://www.alexa.cn/api_service/index/reset_apikey',
        api_buy_log_url: 'http://www.alexa.cn/api_service/index/buy_list',
        alexa_ip_times: 3200,
        user_login_link: 'user_qrcode_login()',
        api_doc_base_url: 'http://www.alexa.cn/apiservice/',
        traffic_base_url: 'http://www.alexa.cn/traffic/',
        user_login_ping_url: '/api/wechat_api/qrcode_login_ping',
        user_login_url: '/api/wechat_api/qrcode_login?action=' + _HREF_,
        user_login_url_base: '/api/wechat_api/qrcode_login',
        buy_vip_url: 'http://www.alexa.cn/user/vip/get_fee',
        whois_reverse: 'http://whois.alexa.cn/home/reverse/ajaxreverse',
        m_whois_reverse: 'http://m.alexa.cn/home/whois_reverse/ajaxreverse',
        open_login_url: 'http://www.alexa.cn/api/wechat_api/open_login?action=' + _HREF_,
        country_data: {
            AF: {
                code: "AF",
                flag: "public\/flag\/AF.png",
                name_en: "Afghanistan",
                name_cn: "\u963f\u5bcc\u6c57"
            },
            AX: {
                code: "AX",
                flag: "public\/flag\/AX.png",
                name_en: "Aland Islands",
                name_cn: "\u5965\u5170\u7fa4\u5c9b"
            },
            AL: {
                code: "AL",
                flag: "public\/flag\/AL.png",
                name_en: "Albania",
                name_cn: "\u963f\u5c14\u5df4\u5c3c\u4e9a"
            },
            DZ: {
                code: "DZ",
                flag: "public\/flag\/DZ.png",
                name_en: "Algeria",
                name_cn: "\u963f\u5c14\u53ca\u5229\u4e9a"
            },
            AS: {
                code: "AS",
                flag: "public\/flag\/AS.png",
                name_en: "American Samoa",
                name_cn: "\u7f8e\u5c5e\u8428\u6469\u4e9a"
            },
            AD: {
                code: "AD",
                flag: "public\/flag\/AD.png",
                name_en: "Andorra",
                name_cn: "\u5b89\u9053\u5c14"
            },
            AO: {
                code: "AO",
                flag: "public\/flag\/AO.png",
                name_en: "Angola",
                name_cn: "\u5b89\u54e5\u62c9"
            },
            AI: {
                code: "AI",
                flag: "public\/flag\/AI.png",
                name_en: "Anguilla",
                name_cn: "\u5b89\u572d\u62c9"
            },
            AQ: {
                code: "AQ",
                flag: "public\/flag\/AQ.png",
                name_en: "Antarctica",
                name_cn: "\u5357\u6781\u6d32"
            },
            AG: {
                code: "AG",
                flag: "public\/flag\/AG.png",
                name_en: "Antigua and Barbuda",
                name_cn: "\u5b89\u63d0\u74dc\u548c\u5df4\u5e03\u8fbe"
            },
            AR: {
                code: "AR",
                flag: "public\/flag\/AR.png",
                name_en: "Argentina",
                name_cn: "\u963f\u6839\u5ef7"
            },
            AM: {
                code: "AM",
                flag: "public\/flag\/AM.png",
                name_en: "Armenia",
                name_cn: "\u4e9a\u7f8e\u5c3c\u4e9a"
            },
            AW: {
                code: "AW",
                flag: "public\/flag\/AW.png",
                name_en: "Aruba",
                name_cn: "\u963f\u9c81\u5df4"
            },
            AU: {
                code: "AU",
                flag: "public\/flag\/AU.png",
                name_en: "Australia",
                name_cn: "\u6fb3\u5927\u5229\u4e9a"
            },
            AT: {
                code: "AT",
                flag: "public\/flag\/AT.png",
                name_en: "Austria",
                name_cn: "\u5965\u5730\u5229"
            },
            AZ: {
                code: "AZ",
                flag: "public\/flag\/AZ.png",
                name_en: "Azerbaijan",
                name_cn: "\u963f\u585e\u62dc\u7586"
            },
            BS: {
                code: "BS",
                flag: "public\/flag\/BS.png",
                name_en: "Bahamas",
                name_cn: "\u5df4\u54c8\u9a6c"
            },
            BH: {
                code: "BH",
                flag: "public\/flag\/BH.png",
                name_en: "Bahrain",
                name_cn: "\u5df4\u6797"
            },
            BD: {
                code: "BD",
                flag: "public\/flag\/BD.png",
                name_en: "Bangladesh",
                name_cn: "\u5b5f\u52a0\u62c9\u56fd"
            },
            BB: {
                code: "BB",
                flag: "public\/flag\/BB.png",
                name_en: "Barbados",
                name_cn: "\u5df4\u5df4\u591a\u65af"
            },
            BY: {
                code: "BY",
                flag: "public\/flag\/BY.png",
                name_en: "Belarus",
                name_cn: "\u767d\u4fc4\u7f57\u65af"
            },
            BE: {
                code: "BE",
                flag: "public\/flag\/BE.png",
                name_en: "Belgium",
                name_cn: "\u6bd4\u5229\u65f6"
            },
            BZ: {
                code: "BZ",
                flag: "public\/flag\/BZ.png",
                name_en: "Belize",
                name_cn: "\u4f2f\u5229\u5179"
            },
            BJ: {
                code: "BJ",
                flag: "public\/flag\/BJ.png",
                name_en: "Benin",
                name_cn: "\u8d1d\u5b81"
            },
            BM: {
                code: "BM",
                flag: "public\/flag\/BM.png",
                name_en: "Bermuda",
                name_cn: "\u767e\u6155\u5927"
            },
            BT: {
                code: "BT",
                flag: "public\/flag\/BT.png",
                name_en: "Bhutan",
                name_cn: "\u4e0d\u4e39"
            },
            BO: {
                code: "BO",
                flag: "public\/flag\/BO.png",
                name_en: "Bolivia",
                name_cn: "\u73bb\u5229\u7ef4\u4e9a"
            },
            BQ: {
                code: "BQ",
                flag: "public\/flag\/BQ.png",
                name_en: "Bonaire Sint Eustatius and Saba",
                name_cn: "\u8377\u5170\u52a0\u52d2\u6bd4\u533a"
            },
            BA: {
                code: "BA",
                flag: "public\/flag\/BA.png",
                name_en: "Bosnia and Herzegovina",
                name_cn: "\u6ce2\u65af\u5c3c\u4e9a\u548c\u9ed1\u585e\u54e5\u7ef4\u90a3"
            },
            BW: {
                code: "BW",
                flag: "public\/flag\/BW.png",
                name_en: "Botswana",
                name_cn: "\u535a\u8328\u74e6\u7eb3"
            },
            BV: {
                code: "BV",
                flag: "public\/flag\/BV.png",
                name_en: "Bouvet Island",
                name_cn: "\u5e03\u97e6\u5c9b"
            },
            BR: {
                code: "BR",
                flag: "public\/flag\/BR.png",
                name_en: "Brazil",
                name_cn: "\u5df4\u897f"
            },
            IO: {
                code: "IO",
                flag: "public\/flag\/IO.png",
                name_en: "British Indian Ocean Territory",
                name_cn: "\u82f1\u5c5e\u5370\u5ea6\u6d0b\u9886\u5730"
            },
            VG: {
                code: "VG",
                flag: "public\/flag\/VG.png",
                name_en: "British Virgin Islands",
                name_cn: "\u82f1\u5c5e\u7ef4\u5c14\u4eac\u7fa4\u5c9b"
            },
            BN: {
                code: "BN",
                flag: "public\/flag\/BN.png",
                name_en: "Brunei",
                name_cn: "\u6587\u83b1"
            },
            BG: {
                code: "BG",
                flag: "public\/flag\/BG.png",
                name_en: "Bulgaria",
                name_cn: "\u4fdd\u52a0\u5229\u4e9a"
            },
            BF: {
                code: "BF",
                flag: "public\/flag\/BF.png",
                name_en: "Burkina Faso",
                name_cn: "\u5e03\u57fa\u7eb3\u6cd5\u7d22"
            },
            BI: {
                code: "BI",
                flag: "public\/flag\/BI.png",
                name_en: "Burundi",
                name_cn: "\u5e03\u9686\u8fea"
            },
            KH: {
                code: "KH",
                flag: "public\/flag\/KH.png",
                name_en: "Cambodia",
                name_cn: "\u67ec\u57d4\u5be8"
            },
            CM: {
                code: "CM",
                flag: "public\/flag\/CM.png",
                name_en: "Cameroon",
                name_cn: "\u5580\u9ea6\u9686"
            },
            CA: {
                code: "CA",
                flag: "public\/flag\/CA.png",
                name_en: "Canada",
                name_cn: "\u52a0\u62ff\u5927"
            },
            CV: {
                code: "CV",
                flag: "public\/flag\/CV.png",
                name_en: "Cape Verde",
                name_cn: "\u4f5b\u5f97\u89d2"
            },
            KY: {
                code: "KY",
                flag: "public\/flag\/KY.png",
                name_en: "Cayman Islands",
                name_cn: "\u5f00\u66fc\u7fa4\u5c9b"
            },
            CF: {
                code: "CF",
                flag: "public\/flag\/CF.png",
                name_en: "Central African Republic",
                name_cn: "\u4e2d\u975e"
            },
            TD: {
                code: "TD",
                flag: "public\/flag\/TD.png",
                name_en: "Chad",
                name_cn: "\u4e4d\u5f97"
            },
            CL: {
                code: "CL",
                flag: "public\/flag\/CL.png",
                name_en: "Chile",
                name_cn: "\u667a\u5229"
            },
            CN: {
                code: "CN",
                flag: "public\/flag\/CN.png",
                name_en: "China",
                name_cn: "\u4e2d\u56fd"
            },
            CX: {
                code: "CX",
                flag: "public\/flag\/CX.png",
                name_en: "Christmas Island",
                name_cn: "\u5723\u8bde\u5c9b"
            },
            CC: {
                code: "CC",
                flag: "public\/flag\/CC.png",
                name_en: "Cocos (Keeling) Islands",
                name_cn: "\u79d1\u79d1\u65af\u7fa4\u5c9b"
            },
            CO: {
                code: "CO",
                flag: "public\/flag\/CO.png",
                name_en: "Colombia",
                name_cn: "\u54e5\u4f26\u6bd4\u4e9a"
            },
            KM: {
                code: "KM",
                flag: "public\/flag\/KM.png",
                name_en: "Comoros",
                name_cn: "\u79d1\u6469\u7f57"
            },
            CG: {
                code: "CG",
                flag: "public\/flag\/CG.png",
                name_en: "Congo",
                name_cn: "\u521a\u679c\uff08\u5e03\uff09"
            },
            CD: {
                code: "CD",
                flag: "public\/flag\/CD.png",
                name_en: "Congo (Dem. Rep.)",
                name_cn: "\u521a\u679c\uff08\u91d1\uff09"
            },
            CK: {
                code: "CK",
                flag: "public\/flag\/CK.png",
                name_en: "Cook Islands",
                name_cn: "\u5e93\u514b\u7fa4\u5c9b"
            },
            CR: {
                code: "CR",
                flag: "public\/flag\/CR.png",
                name_en: "Costa Rica",
                name_cn: "\u54e5\u65af\u8fbe\u9ece\u52a0"
            },
            CI: {
                code: "CI",
                flag: "public\/flag\/CI.png",
                name_en: "C?te d'Ivoire",
                name_cn: "\u79d1\u7279\u8fea\u74e6"
            },
            HR: {
                code: "HR",
                flag: "public\/flag\/HR.png",
                name_en: "Croatia",
                name_cn: "\u514b\u7f57\u5730\u4e9a"
            },
            CU: {
                code: "CU",
                flag: "public\/flag\/CU.png",
                name_en: "Cuba",
                name_cn: "\u53e4\u5df4"
            },
            CW: {
                code: "CW",
                flag: "public\/flag\/CW.png",
                name_en: "Cura?ao",
                name_cn: "\u5e93\u62c9\u7d22"
            },
            CY: {
                code: "CY",
                flag: "public\/flag\/CY.png",
                name_en: "Cyprus",
                name_cn: "\u585e\u6d66\u8def\u65af"
            },
            CZ: {
                code: "CZ",
                flag: "public\/flag\/CZ.png",
                name_en: "Czech Republic",
                name_cn: "\u6377\u514b"
            },
            DK: {
                code: "DK",
                flag: "public\/flag\/DK.png",
                name_en: "Denmark",
                name_cn: "\u4e39\u9ea6"
            },
            DJ: {
                code: "DJ",
                flag: "public\/flag\/DJ.png",
                name_en: "Djibouti",
                name_cn: "\u5409\u5e03\u63d0"
            },
            DM: {
                code: "DM",
                flag: "public\/flag\/DM.png",
                name_en: "Dominica",
                name_cn: "\u591a\u7c73\u5c3c\u514b"
            },
            DO: {
                code: "DO",
                flag: "public\/flag\/DO.png",
                name_en: "Dominican Republic",
                name_cn: "\u591a\u7c73\u5c3c\u52a0"
            },
            EC: {
                code: "EC",
                flag: "public\/flag\/EC.png",
                name_en: "Ecuador",
                name_cn: "\u5384\u74dc\u591a\u5c14"
            },
            EG: {
                code: "EG",
                flag: "public\/flag\/EG.png",
                name_en: "Egypt",
                name_cn: "\u57c3\u53ca"
            },
            SV: {
                code: "SV",
                flag: "public\/flag\/SV.png",
                name_en: "El Salvador",
                name_cn: "\u8428\u5c14\u74e6\u591a"
            },
            GQ: {
                code: "GQ",
                flag: "public\/flag\/GQ.png",
                name_en: "Equatorial Guinea",
                name_cn: "\u8d64\u9053\u51e0\u5185\u4e9a"
            },
            ER: {
                code: "ER",
                flag: "public\/flag\/ER.png",
                name_en: "Eritrea",
                name_cn: "\u5384\u7acb\u7279\u91cc\u4e9a"
            },
            EE: {
                code: "EE",
                flag: "public\/flag\/EE.png",
                name_en: "Estonia",
                name_cn: "\u7231\u6c99\u5c3c\u4e9a"
            },
            ET: {
                code: "ET",
                flag: "public\/flag\/ET.png",
                name_en: "Ethiopia",
                name_cn: "\u57c3\u585e\u4fc4\u6bd4\u4e9a"
            },
            FK: {
                code: "FK",
                flag: "public\/flag\/FK.png",
                name_en: "Falkland Islands (Malvinas)",
                name_cn: "\u9a6c\u5c14\u7ef4\u7eb3\u65af\u7fa4\u5c9b\uff08\u798f\u514b\u5170\uff09"
            },
            FO: {
                code: "FO",
                flag: "public\/flag\/FO.png",
                name_en: "Faroe Islands",
                name_cn: "\u6cd5\u7f57\u7fa4\u5c9b"
            },
            FJ: {
                code: "FJ",
                flag: "public\/flag\/FJ.png",
                name_en: "Fiji",
                name_cn: "\u6590\u6d4e\u7fa4\u5c9b"
            },
            FI: {
                code: "FI",
                flag: "public\/flag\/FI.png",
                name_en: "Finland",
                name_cn: "\u82ac\u5170"
            },
            FR: {
                code: "FR",
                flag: "public\/flag\/FR.png",
                name_en: "France",
                name_cn: "\u6cd5\u56fd"
            },
            GF: {
                code: "GF",
                flag: "public\/flag\/GF.png",
                name_en: "French Guiana",
                name_cn: "\u6cd5\u5c5e\u572d\u4e9a\u90a3"
            },
            PF: {
                code: "PF",
                flag: "public\/flag\/PF.png",
                name_en: "French Polynesia",
                name_cn: "\u6cd5\u5c5e\u6ce2\u5229\u5c3c\u897f\u4e9a"
            },
            TF: {
                code: "TF",
                flag: "public\/flag\/TF.png",
                name_en: "French Southern Territories",
                name_cn: "\u6cd5\u5c5e\u5357\u90e8\u9886\u5730"
            },
            GA: {
                code: "GA",
                flag: "public\/flag\/GA.png",
                name_en: "Gabon",
                name_cn: "\u52a0\u84ec"
            },
            GM: {
                code: "GM",
                flag: "public\/flag\/GM.png",
                name_en: "Gambia",
                name_cn: "\u5188\u6bd4\u4e9a"
            },
            GE: {
                code: "GE",
                flag: "public\/flag\/GE.png",
                name_en: "Georgia",
                name_cn: "\u683c\u9c81\u5409\u4e9a"
            },
            DE: {
                code: "DE",
                flag: "public\/flag\/DE.png",
                name_en: "Germany",
                name_cn: "\u5fb7\u56fd"
            },
            GH: {
                code: "GH",
                flag: "public\/flag\/GH.png",
                name_en: "Ghana",
                name_cn: "\u52a0\u7eb3"
            },
            GI: {
                code: "GI",
                flag: "public\/flag\/GI.png",
                name_en: "Gibraltar",
                name_cn: "\u76f4\u5e03\u7f57\u9640"
            },
            GR: {
                code: "GR",
                flag: "public\/flag\/GR.png",
                name_en: "Greece",
                name_cn: "\u5e0c\u814a"
            },
            GL: {
                code: "GL",
                flag: "public\/flag\/GL.png",
                name_en: "Greenland",
                name_cn: "\u683c\u9675\u5170"
            },
            GD: {
                code: "GD",
                flag: "public\/flag\/GD.png",
                name_en: "Grenada",
                name_cn: "\u683c\u6797\u7eb3\u8fbe"
            },
            GP: {
                code: "GP",
                flag: "public\/flag\/GP.png",
                name_en: "Guadeloupe",
                name_cn: "\u74dc\u5fb7\u7f57\u666e"
            },
            GU: {
                code: "GU",
                flag: "public\/flag\/GU.png",
                name_en: "Guam",
                name_cn: "\u5173\u5c9b"
            },
            GT: {
                code: "GT",
                flag: "public\/flag\/GT.png",
                name_en: "Guatemala",
                name_cn: "\u5371\u5730\u9a6c\u62c9"
            },
            GG: {
                code: "GG",
                flag: "public\/flag\/GG.png",
                name_en: "Guernsey",
                name_cn: "\u6839\u897f\u5c9b"
            },
            GN: {
                code: "GN",
                flag: "public\/flag\/GN.png",
                name_en: "Guinea",
                name_cn: "\u51e0\u5185\u4e9a"
            },
            GW: {
                code: "GW",
                flag: "public\/flag\/GW.png",
                name_en: "Guinea-Bissau",
                name_cn: "\u51e0\u5185\u4e9a\u6bd4\u7ecd"
            },
            GY: {
                code: "GY",
                flag: "public\/flag\/GY.png",
                name_en: "Guyana",
                name_cn: "\u572d\u4e9a\u90a3"
            },
            HT: {
                code: "HT",
                flag: "public\/flag\/HT.png",
                name_en: "Haiti",
                name_cn: "\u6d77\u5730"
            },
            HM: {
                code: "HM",
                flag: "public\/flag\/HM.png",
                name_en: "Heard Island and McDonald Islands",
                name_cn: "\u8d6b\u5fb7\u5c9b\u548c\u9ea6\u514b\u5510\u7eb3\u7fa4\u5c9b"
            },
            HN: {
                code: "HN",
                flag: "public\/flag\/HN.png",
                name_en: "Honduras",
                name_cn: "\u6d2a\u90fd\u62c9\u65af"
            },
            HK: {
                code: "HK",
                flag: "public\/flag\/HK.png",
                name_en: "Hong Kong",
                name_cn: "\u9999\u6e2f"
            },
            HU: {
                code: "HU",
                flag: "public\/flag\/HU.png",
                name_en: "Hungary",
                name_cn: "\u5308\u7259\u5229"
            },
            IS: {
                code: "IS",
                flag: "public\/flag\/IS.png",
                name_en: "Iceland",
                name_cn: "\u51b0\u5c9b"
            },
            IN: {
                code: "IN",
                flag: "public\/flag\/IN.png",
                name_en: "India",
                name_cn: "\u5370\u5ea6"
            },
            ID: {
                code: "ID",
                flag: "public\/flag\/ID.png",
                name_en: "Indonesia",
                name_cn: "\u5370\u5ea6\u5c3c\u897f\u4e9a"
            },
            IR: {
                code: "IR",
                flag: "public\/flag\/IR.png",
                name_en: "Iran",
                name_cn: "\u4f0a\u6717"
            },
            IQ: {
                code: "IQ",
                flag: "public\/flag\/IQ.png",
                name_en: "Iraq",
                name_cn: "\u4f0a\u62c9\u514b"
            },
            IE: {
                code: "IE",
                flag: "public\/flag\/IE.png",
                name_en: "Ireland",
                name_cn: "\u7231\u5c14\u5170"
            },
            IM: {
                code: "IM",
                flag: "public\/flag\/IM.png",
                name_en: "Isle of Man",
                name_cn: "\u9a6c\u6069\u5c9b"
            },
            IL: {
                code: "IL",
                flag: "public\/flag\/IL.png",
                name_en: "Israel",
                name_cn: "\u4ee5\u8272\u5217"
            },
            IT: {
                code: "IT",
                flag: "public\/flag\/IT.png",
                name_en: "Italy",
                name_cn: "\u610f\u5927\u5229"
            },
            JM: {
                code: "JM",
                flag: "public\/flag\/JM.png",
                name_en: "Jamaica",
                name_cn: "\u7259\u4e70\u52a0"
            },
            JP: {
                code: "JP",
                flag: "public\/flag\/JP.png",
                name_en: "Japan",
                name_cn: "\u65e5\u672c"
            },
            JE: {
                code: "JE",
                flag: "public\/flag\/JE.png",
                name_en: "Jersey",
                name_cn: "\u6cfd\u897f\u5c9b"
            },
            JO: {
                code: "JO",
                flag: "public\/flag\/JO.png",
                name_en: "Jordan",
                name_cn: "\u7ea6\u65e6"
            },
            KZ: {
                code: "KZ",
                flag: "public\/flag\/KZ.png",
                name_en: "Kazakhstan",
                name_cn: "\u54c8\u8428\u514b\u65af\u5766"
            },
            KE: {
                code: "KE",
                flag: "public\/flag\/KE.png",
                name_en: "Kenya",
                name_cn: "\u80af\u5c3c\u4e9a"
            },
            KI: {
                code: "KI",
                flag: "public\/flag\/KI.png",
                name_en: "Kiribati",
                name_cn: "\u57fa\u91cc\u5df4\u65af"
            },
            KP: {
                code: "KP",
                flag: "public\/flag\/KP.png",
                name_en: "Korea (North)",
                name_cn: "\u671d\u9c9c"
            },
            KR: {
                code: "KR",
                flag: "public\/flag\/KR.png",
                name_en: "Korea (South)",
                name_cn: "\u97e9\u56fd"
            },
            XK: {
                code: "XK",
                flag: "public\/flag\/XK.png",
                name_en: "Kosovo",
                name_cn: "\u79d1\u7d22\u6c83"
            },
            KW: {
                code: "KW",
                flag: "public\/flag\/KW.png",
                name_en: "Kuwait",
                name_cn: "\u79d1\u5a01\u7279"
            },
            KG: {
                code: "KG",
                flag: "public\/flag\/KG.png",
                name_en: "Kyrgyzstan",
                name_cn: "\u5409\u5c14\u5409\u65af\u65af\u5766"
            },
            LA: {
                code: "LA",
                flag: "public\/flag\/LA.png",
                name_en: "Laos",
                name_cn: "\u8001\u631d"
            },
            LV: {
                code: "LV",
                flag: "public\/flag\/LV.png",
                name_en: "Latvia",
                name_cn: "\u62c9\u8131\u7ef4\u4e9a"
            },
            LB: {
                code: "LB",
                flag: "public\/flag\/LB.png",
                name_en: "Lebanon",
                name_cn: "\u9ece\u5df4\u5ae9"
            },
            LS: {
                code: "LS",
                flag: "public\/flag\/LS.png",
                name_en: "Lesotho",
                name_cn: "\u83b1\u7d22\u6258"
            },
            LR: {
                code: "LR",
                flag: "public\/flag\/LR.png",
                name_en: "Liberia",
                name_cn: "\u5229\u6bd4\u91cc\u4e9a"
            },
            LY: {
                code: "LY",
                flag: "public\/flag\/LY.png",
                name_en: "Libya",
                name_cn: "\u5229\u6bd4\u4e9a"
            },
            LI: {
                code: "LI",
                flag: "public\/flag\/LI.png",
                name_en: "Liechtenstein",
                name_cn: "\u5217\u652f\u6566\u58eb\u767b"
            },
            LT: {
                code: "LT",
                flag: "public\/flag\/LT.png",
                name_en: "Lithuania",
                name_cn: "\u7acb\u9676\u5b9b"
            },
            LU: {
                code: "LU",
                flag: "public\/flag\/LU.png",
                name_en: "Luxembourg",
                name_cn: "\u5362\u68ee\u5821"
            },
            MO: {
                code: "MO",
                flag: "public\/flag\/MO.png",
                name_en: "Macao",
                name_cn: "\u6fb3\u95e8"
            },
            MK: {
                code: "MK",
                flag: "public\/flag\/MK.png",
                name_en: "Macedonia",
                name_cn: "\u9a6c\u5176\u987f"
            },
            MG: {
                code: "MG",
                flag: "public\/flag\/MG.png",
                name_en: "Madagascar",
                name_cn: "\u9a6c\u8fbe\u52a0\u65af\u52a0"
            },
            MW: {
                code: "MW",
                flag: "public\/flag\/MW.png",
                name_en: "Malawi",
                name_cn: "\u9a6c\u62c9\u7ef4"
            },
            MY: {
                code: "MY",
                flag: "public\/flag\/MY.png",
                name_en: "Malaysia",
                name_cn: "\u9a6c\u6765\u897f\u4e9a"
            },
            MV: {
                code: "MV",
                flag: "public\/flag\/MV.png",
                name_en: "Maldives",
                name_cn: "\u9a6c\u5c14\u4ee3\u592b"
            },
            ML: {
                code: "ML",
                flag: "public\/flag\/ML.png",
                name_en: "Mali",
                name_cn: "\u9a6c\u91cc"
            },
            MT: {
                code: "MT",
                flag: "public\/flag\/MT.png",
                name_en: "Malta",
                name_cn: "\u9a6c\u8033\u4ed6"
            },
            MH: {
                code: "MH",
                flag: "public\/flag\/MH.png",
                name_en: "Marshall Islands",
                name_cn: "\u9a6c\u7ecd\u5c14\u7fa4\u5c9b"
            },
            MQ: {
                code: "MQ",
                flag: "public\/flag\/MQ.png",
                name_en: "Martinique",
                name_cn: "\u9a6c\u63d0\u5c3c\u514b"
            },
            MR: {
                code: "MR",
                flag: "public\/flag\/MR.png",
                name_en: "Mauritania",
                name_cn: "\u6bdb\u91cc\u5854\u5c3c\u4e9a"
            },
            MU: {
                code: "MU",
                flag: "public\/flag\/MU.png",
                name_en: "Mauritius",
                name_cn: "\u6bdb\u91cc\u6c42\u65af"
            },
            YT: {
                code: "YT",
                flag: "public\/flag\/YT.png",
                name_en: "Mayotte",
                name_cn: "\u9a6c\u7ea6\u7279"
            },
            MX: {
                code: "MX",
                flag: "public\/flag\/MX.png",
                name_en: "Mexico",
                name_cn: "\u58a8\u897f\u54e5"
            },
            FM: {
                code: "FM",
                flag: "public\/flag\/FM.png",
                name_en: "Micronesia",
                name_cn: "\u5bc6\u514b\u7f57\u5c3c\u897f\u4e9a\u8054\u90a6"
            },
            MD: {
                code: "MD",
                flag: "public\/flag\/MD.png",
                name_en: "Moldova",
                name_cn: "\u6469\u5c14\u591a\u74e6"
            },
            MC: {
                code: "MC",
                flag: "public\/flag\/MC.png",
                name_en: "Monaco",
                name_cn: "\u6469\u7eb3\u54e5"
            },
            MN: {
                code: "MN",
                flag: "public\/flag\/MN.png",
                name_en: "Mongolia",
                name_cn: "\u8499\u53e4\u56fd"
            },
            ME: {
                code: "ME",
                flag: "public\/flag\/ME.png",
                name_en: "Montenegro",
                name_cn: "\u9ed1\u5c71"
            },
            MS: {
                code: "MS",
                flag: "public\/flag\/MS.png",
                name_en: "Montserrat",
                name_cn: "\u8499\u585e\u62c9\u7279\u5c9b"
            },
            MA: {
                code: "MA",
                flag: "public\/flag\/MA.png",
                name_en: "Morocco",
                name_cn: "\u6469\u6d1b\u54e5"
            },
            MZ: {
                code: "MZ",
                flag: "public\/flag\/MZ.png",
                name_en: "Mozambique",
                name_cn: "\u83ab\u6851\u6bd4\u514b"
            },
            MM: {
                code: "MM",
                flag: "public\/flag\/MM.png",
                name_en: "Myanmar",
                name_cn: "\u7f05\u7538"
            },
            NA: {
                code: "NA",
                flag: "public\/flag\/NA.png",
                name_en: "Namibia",
                name_cn: "\u7eb3\u7c73\u6bd4\u4e9a"
            },
            NR: {
                code: "NR",
                flag: "public\/flag\/NR.png",
                name_en: "Nauru",
                name_cn: "\u7459\u9c81"
            },
            NP: {
                code: "NP",
                flag: "public\/flag\/NP.png",
                name_en: "Nepal",
                name_cn: "\u5c3c\u6cca\u5c14"
            },
            NL: {
                code: "NL",
                flag: "public\/flag\/NL.png",
                name_en: "Netherlands",
                name_cn: "\u8377\u5170"
            },
            NC: {
                code: "NC",
                flag: "public\/flag\/NC.png",
                name_en: "New Caledonia",
                name_cn: "\u65b0\u5580\u91cc\u591a\u5c3c\u4e9a"
            },
            NZ: {
                code: "NZ",
                flag: "public\/flag\/NZ.png",
                name_en: "New Zealand",
                name_cn: "\u65b0\u897f\u5170"
            },
            NI: {
                code: "NI",
                flag: "public\/flag\/NI.png",
                name_en: "Nicaragua",
                name_cn: "\u5c3c\u52a0\u62c9\u74dc"
            },
            NE: {
                code: "NE",
                flag: "public\/flag\/NE.png",
                name_en: "Niger",
                name_cn: "\u5c3c\u65e5\u5c14"
            },
            NG: {
                code: "NG",
                flag: "public\/flag\/NG.png",
                name_en: "Nigeria",
                name_cn: "\u5c3c\u65e5\u5229\u4e9a"
            },
            NU: {
                code: "NU",
                flag: "public\/flag\/NU.png",
                name_en: "Niue",
                name_cn: "\u7ebd\u57c3"
            },
            NF: {
                code: "NF",
                flag: "public\/flag\/NF.png",
                name_en: "Norfolk Island",
                name_cn: "\u8bfa\u798f\u514b\u5c9b"
            },
            MP: {
                code: "MP",
                flag: "public\/flag\/MP.png",
                name_en: "Northern Mariana Islands",
                name_cn: "\u5317\u9a6c\u91cc\u4e9a\u90a3\u7fa4\u5c9b"
            },
            NO: {
                code: "NO",
                flag: "public\/flag\/NO.png",
                name_en: "Norway",
                name_cn: "\u632a\u5a01"
            },
            OM: {
                code: "OM",
                flag: "public\/flag\/OM.png",
                name_en: "Oman",
                name_cn: "\u963f\u66fc"
            },
            PK: {
                code: "PK",
                flag: "public\/flag\/PK.png",
                name_en: "Pakistan",
                name_cn: "\u5df4\u57fa\u65af\u5766"
            },
            PW: {
                code: "PW",
                flag: "public\/flag\/PW.png",
                name_en: "Palau",
                name_cn: "\u5e15\u52b3"
            },
            PS: {
                code: "PS",
                flag: "public\/flag\/PS.png",
                name_en: "Palestine (state of)",
                name_cn: "\u5df4\u52d2\u65af\u5766"
            },
            PA: {
                code: "PA",
                flag: "public\/flag\/PA.png",
                name_en: "Panama",
                name_cn: "\u5df4\u62ff\u9a6c"
            },
            PG: {
                code: "PG",
                flag: "public\/flag\/PG.png",
                name_en: "Papua New Guinea",
                name_cn: "\u5df4\u5e03\u4e9a\u65b0\u51e0\u5185\u4e9a"
            },
            PY: {
                code: "PY",
                flag: "public\/flag\/PY.png",
                name_en: "Paraguay",
                name_cn: "\u5df4\u62c9\u572d"
            },
            PE: {
                code: "PE",
                flag: "public\/flag\/PE.png",
                name_en: "Peru",
                name_cn: "\u79d8\u9c81"
            },
            PH: {
                code: "PH",
                flag: "public\/flag\/PH.png",
                name_en: "Philippines",
                name_cn: "\u83f2\u5f8b\u5bbe"
            },
            PN: {
                code: "PN",
                flag: "public\/flag\/PN.png",
                name_en: "Pitcairn",
                name_cn: "\u76ae\u7279\u51ef\u6069\u7fa4\u5c9b"
            },
            PL: {
                code: "PL",
                flag: "public\/flag\/PL.png",
                name_en: "Poland",
                name_cn: "\u6ce2\u5170"
            },
            PT: {
                code: "PT",
                flag: "public\/flag\/PT.png",
                name_en: "Portugal",
                name_cn: "\u8461\u8404\u7259"
            },
            PR: {
                code: "PR",
                flag: "public\/flag\/PR.png",
                name_en: "Puerto Rico",
                name_cn: "\u6ce2\u591a\u9ece\u5404"
            },
            QA: {
                code: "QA",
                flag: "public\/flag\/QA.png",
                name_en: "Qatar",
                name_cn: "\u5361\u5854\u5c14"
            },
            RE: {
                code: "RE",
                flag: "public\/flag\/RE.png",
                name_en: "R\u00e9union",
                name_cn: "\u7559\u5c3c\u6c6a"
            },
            RO: {
                code: "RO",
                flag: "public\/flag\/RO.png",
                name_en: "Romania",
                name_cn: "\u7f57\u9a6c\u5c3c\u4e9a"
            },
            RU: {
                code: "RU",
                flag: "public\/flag\/RU.png",
                name_en: "Russia",
                name_cn: "\u4fc4\u7f57\u65af"
            },
            RW: {
                code: "RW",
                flag: "public\/flag\/RW.png",
                name_en: "Rwanda",
                name_cn: "\u5362\u65fa\u8fbe"
            },
            BL: {
                code: "BL",
                flag: "public\/flag\/BL.png",
                name_en: "Saint Barth\u00e9lemy",
                name_cn: "\u5723\u5df4\u6cf0\u52d2\u7c73\u5c9b"
            },
            SH: {
                code: "SH",
                flag: "public\/flag\/SH.png",
                name_en: "Saint Helena",
                name_cn: "\u5723\u8d6b\u52d2\u62ff"
            },
            KN: {
                code: "KN",
                flag: "public\/flag\/KN.png",
                name_en: "Saint Kitts and Nevis",
                name_cn: "\u5723\u57fa\u8328\u548c\u5c3c\u7ef4\u65af"
            },
            LC: {
                code: "LC",
                flag: "public\/flag\/LC.png",
                name_en: "Saint Lucia",
                name_cn: "\u5723\u5362\u897f\u4e9a"
            },
            MF: {
                code: "MF",
                flag: "public\/flag\/MF.png",
                name_en: "Saint Martin (French part)",
                name_cn: "\u6cd5\u5c5e\u5723\u9a6c\u4e01"
            },
            PM: {
                code: "PM",
                flag: "public\/flag\/PM.png",
                name_en: "Saint Pierre and Miquelon",
                name_cn: "\u5723\u76ae\u57c3\u5c14\u548c\u5bc6\u514b\u9686"
            },
            VC: {
                code: "VC",
                flag: "public\/flag\/VC.png",
                name_en: "Saint Vincent and the Grenadines",
                name_cn: "\u5723\u6587\u68ee\u7279\u548c\u683c\u6797\u7eb3\u4e01\u65af"
            },
            WS: {
                code: "WS",
                flag: "public\/flag\/WS.png",
                name_en: "Samoa",
                name_cn: "\u8428\u6469\u4e9a"
            },
            SM: {
                code: "SM",
                flag: "public\/flag\/SM.png",
                name_en: "San Marino",
                name_cn: "\u5723\u9a6c\u529b\u8bfa"
            },
            ST: {
                code: "ST",
                flag: "public\/flag\/ST.png",
                name_en: "Sao Tome and Principe",
                name_cn: "\u5723\u591a\u7f8e\u548c\u666e\u6797\u897f\u6bd4"
            },
            SA: {
                code: "SA",
                flag: "public\/flag\/SA.png",
                name_en: "Saudi Arabia",
                name_cn: "\u6c99\u7279\u963f\u62c9\u4f2f"
            },
            SN: {
                code: "SN",
                flag: "public\/flag\/SN.png",
                name_en: "Senegal",
                name_cn: "\u585e\u5185\u52a0\u5c14"
            },
            RS: {
                code: "RS",
                flag: "public\/flag\/RS.png",
                name_en: "Serbia",
                name_cn: "\u585e\u5c14\u7ef4\u4e9a"
            },
            SC: {
                code: "SC",
                flag: "public\/flag\/SC.png",
                name_en: "Seychelles",
                name_cn: "\u585e\u820c\u5c14"
            },
            SL: {
                code: "SL",
                flag: "public\/flag\/SL.png",
                name_en: "Sierra Leone",
                name_cn: "\u585e\u62c9\u5229\u6602"
            },
            SG: {
                code: "SG",
                flag: "public\/flag\/SG.png",
                name_en: "Singapore",
                name_cn: "\u65b0\u52a0\u5761"
            },
            SX: {
                code: "SX",
                flag: "public\/flag\/SX.png",
                name_en: "Sint Maarten (Dutch part)",
                name_cn: "\u8377\u5c5e\u5723\u9a6c\u4e01"
            },
            SK: {
                code: "SK",
                flag: "public\/flag\/SK.png",
                name_en: "Slovakia",
                name_cn: "\u65af\u6d1b\u4f10\u514b"
            },
            SI: {
                code: "SI",
                flag: "public\/flag\/SI.png",
                name_en: "Slovenia",
                name_cn: "\u65af\u6d1b\u6587\u5c3c\u4e9a"
            },
            SB: {
                code: "SB",
                flag: "public\/flag\/SB.png",
                name_en: "Solomon Islands",
                name_cn: "\u6240\u7f57\u95e8\u7fa4\u5c9b"
            },
            SO: {
                code: "SO",
                flag: "public\/flag\/SO.png",
                name_en: "Somalia",
                name_cn: "\u7d22\u9a6c\u91cc"
            },
            ZA: {
                code: "ZA",
                flag: "public\/flag\/ZA.png",
                name_en: "South Africa",
                name_cn: "\u5357\u975e"
            },
            GS: {
                code: "GS",
                flag: "public\/flag\/GS.png",
                name_en: "South Georgia and the South Sandwich Islands",
                name_cn: "\u5357\u4e54\u6cbb\u4e9a\u5c9b\u548c\u5357\u6851\u5a01\u5947\u7fa4\u5c9b"
            },
            SS: {
                code: "SS",
                flag: "public\/flag\/SS.png",
                name_en: "South Sudan",
                name_cn: "\u5357\u82cf\u4e39"
            },
            ES: {
                code: "ES",
                flag: "public\/flag\/ES.png",
                name_en: "Spain",
                name_cn: "\u897f\u73ed\u7259"
            },
            LK: {
                code: "LK",
                flag: "public\/flag\/LK.png",
                name_en: "Sri Lanka",
                name_cn: "\u65af\u91cc\u5170\u5361"
            },
            SD: {
                code: "SD",
                flag: "public\/flag\/SD.png",
                name_en: "Sudan",
                name_cn: "\u82cf\u4e39"
            },
            SR: {
                code: "SR",
                flag: "public\/flag\/SR.png",
                name_en: "Suriname",
                name_cn: "\u82cf\u91cc\u5357"
            },
            SJ: {
                code: "SJ",
                flag: "public\/flag\/SJ.png",
                name_en: "Svalbard and Jan Mayen",
                name_cn: "\u65af\u74e6\u5c14\u5df4\u7fa4\u5c9b\u548c\u626c\u9a6c\u5ef6\u5c9b"
            },
            SZ: {
                code: "SZ",
                flag: "public\/flag\/SZ.png",
                name_en: "Swaziland",
                name_cn: "\u65af\u5a01\u58eb\u5170"
            },
            SE: {
                code: "SE",
                flag: "public\/flag\/SE.png",
                name_en: "Sweden",
                name_cn: "\u745e\u5178"
            },
            CH: {
                code: "CH",
                flag: "public\/flag\/CH.png",
                name_en: "Switzerland",
                name_cn: "\u745e\u58eb"
            },
            SY: {
                code: "SY",
                flag: "public\/flag\/SY.png",
                name_en: "Syria",
                name_cn: "\u53d9\u5229\u4e9a"
            },
            TW: {
                code: "TW",
                flag: "public\/flag\/TW.png",
                name_en: "Taiwan",
                name_cn: "\u53f0\u6e7e"
            },
            TJ: {
                code: "TJ",
                flag: "public\/flag\/TJ.png",
                name_en: "Tajikistan",
                name_cn: "\u5854\u5409\u514b\u65af\u5766"
            },
            TZ: {
                code: "TZ",
                flag: "public\/flag\/TZ.png",
                name_en: "Tanzania",
                name_cn: "\u5766\u6851\u5c3c\u4e9a"
            },
            TH: {
                code: "TH",
                flag: "public\/flag\/TH.png",
                name_en: "Thailand",
                name_cn: "\u6cf0\u56fd"
            },
            TL: {
                code: "TL",
                flag: "public\/flag\/TL.png",
                name_en: "Timor-Leste",
                name_cn: "\u4e1c\u5e1d\u6c76"
            },
            TG: {
                code: "TG",
                flag: "public\/flag\/TG.png",
                name_en: "Togo",
                name_cn: "\u591a\u54e5"
            },
            TK: {
                code: "TK",
                flag: "public\/flag\/TK.png",
                name_en: "Tokelau",
                name_cn: "\u6258\u514b\u52b3"
            },
            TO: {
                code: "TO",
                flag: "public\/flag\/TO.png",
                name_en: "Tonga",
                name_cn: "\u6c64\u52a0"
            },
            TT: {
                code: "TT",
                flag: "public\/flag\/TT.png",
                name_en: "Trinidad and Tobago",
                name_cn: "\u7279\u7acb\u5c3c\u8fbe\u548c\u591a\u5df4\u54e5"
            },
            TN: {
                code: "TN",
                flag: "public\/flag\/TN.png",
                name_en: "Tunisia",
                name_cn: "\u7a81\u5c3c\u65af"
            },
            TR: {
                code: "TR",
                flag: "public\/flag\/TR.png",
                name_en: "Turkey",
                name_cn: "\u571f\u8033\u5176"
            },
            TM: {
                code: "TM",
                flag: "public\/flag\/TM.png",
                name_en: "Turkmenistan",
                name_cn: "\u571f\u5e93\u66fc\u65af\u5766"
            },
            TC: {
                code: "TC",
                flag: "public\/flag\/TC.png",
                name_en: "Turks and Caicos Islands",
                name_cn: "\u7279\u514b\u65af\u548c\u51ef\u79d1\u65af\u7fa4\u5c9b"
            },
            TV: {
                code: "TV",
                flag: "public\/flag\/TV.png",
                name_en: "Tuvalu",
                name_cn: "\u56fe\u74e6\u5362"
            },
            UM: {
                code: "UM",
                flag: "public\/flag\/UM.png",
                name_en: "U.S. Minor Outlying Islands",
                name_cn: "\u7f8e\u56fd\u672c\u571f\u5916\u5c0f\u5c9b\u5c7f"
            },
            UG: {
                code: "UG",
                flag: "public\/flag\/UG.png",
                name_en: "Uganda",
                name_cn: "\u4e4c\u5e72\u8fbe"
            },
            UA: {
                code: "UA",
                flag: "public\/flag\/UA.png",
                name_en: "Ukraine",
                name_cn: "\u4e4c\u514b\u5170"
            },
            AE: {
                code: "AE",
                flag: "public\/flag\/AE.png",
                name_en: "United Arab Emirates",
                name_cn: "\u963f\u8054\u914b"
            },
            GB: {
                code: "GB",
                flag: "public\/flag\/GB.png",
                name_en: "United Kingdom",
                name_cn: "\u82f1\u56fd"
            },
            US: {
                code: "US",
                flag: "public\/flag\/US.png",
                name_en: "United States of America",
                name_cn: "\u7f8e\u56fd"
            },
            UY: {
                code: "UY",
                flag: "public\/flag\/UY.png",
                name_en: "Uruguay",
                name_cn: "\u4e4c\u62c9\u572d"
            },
            UZ: {
                code: "UZ",
                flag: "public\/flag\/UZ.png",
                name_en: "Uzbekistan",
                name_cn: "\u4e4c\u5179\u522b\u514b\u65af\u5766"
            },
            VU: {
                code: "VU",
                flag: "public\/flag\/VU.png",
                name_en: "Vanuatu",
                name_cn: "\u74e6\u52aa\u963f\u56fe"
            },
            VA: {
                code: "VA",
                flag: "public\/flag\/VA.png",
                name_en: "Vatican",
                name_cn: "\u68b5\u8482\u5188"
            },
            VE: {
                code: "VE",
                flag: "public\/flag\/VE.png",
                name_en: "Venezuela",
                name_cn: "\u59d4\u5185\u745e\u62c9"
            },
            VN: {
                code: "VN",
                flag: "public\/flag\/VN.png",
                name_en: "Vietnam",
                name_cn: "\u8d8a\u5357"
            },
            VI: {
                code: "VI",
                flag: "public\/flag\/VI.png",
                name_en: "Virgin Islands of the USA",
                name_cn: "\u7f8e\u5c5e\u7ef4\u5c14\u4eac\u7fa4\u5c9b"
            },
            WF: {
                code: "WF",
                flag: "public\/flag\/WF.png",
                name_en: "Wallis and Futuna",
                name_cn: "\u74e6\u5229\u65af\u548c\u5bcc\u56fe\u7eb3"
            },
            EH: {
                code: "EH",
                flag: "public\/flag\/EH.png",
                name_en: "Western Sahara",
                name_cn: "\u897f\u6492\u54c8\u62c9"
            },
            YE: {
                code: "YE",
                flag: "public\/flag\/YE.png",
                name_en: "Yemen",
                name_cn: "\u4e5f\u95e8"
            },
            ZM: {
                code: "ZM",
                flag: "public\/flag\/ZM.png",
                name_en: "Zambia",
                name_cn: "\u8d5e\u6bd4\u4e9a"
            },
            ZW: {
                code: "ZW",
                flag: "public\/flag\/ZW.png",
                name_en: "Zimbabwe",
                name_cn: "\u6d25\u5df4\u5e03\u97e6"
            },
            OTHER: {
                code: "OTHER",
                flag: "public\/flag\/AQ.png",
                name_en: "Other",
                name_cn: "\u5176\u4ed6"
            }
        }
    };
eval(function (p, a, c, k, e, r) {
    e = function (c) {
        return (c < 62 ? '' : e(parseInt(c / 62))) + ((c = c % 62) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    }
    ;
    if ('0'.replace(0, e) == 0) {
        while (c--)
            r[e(c)] = k[c];
        k = [function (e) {
            return r[e] || e
        }
        ];
        e = function () {
            return '([67]|[\\da-b]\\w)'
        }
        ;
        c = 1
    }

    while (c--)
        if (k[c])
            p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
//     todo token 生成位置？
}('(12(E,B){12 ka(a,b,d){6(d===B&&a.1e===1){d=a.2b("1i-"+b);6(1g d==="1u"){1H{d=d==="1c"?1c:d==="1d"?1d:d==="1b"?1b:!c.46(d)?1N(d):Ja.1f(d)?c.6R(d):d}1I(e){}c.1i(a,b,d)}19 d=B}14 d}12 U(){14 1d}12 ca(){14 1c}12 la(a,b,d){d[0].1j=a;14 c.1n.27.1F(b,d)}12 Ka(a){17 b,d,e,f,h,l,k,o,x,r,A,C=[];f=[];h=c.1i(7,7.1e?"2h":"4I");6(1g h==="12")h=h.2h;6(!(a.4J===7||!h||!h.3a||a.2E&&a.1j==="47")){6(a.2Z)A=3H("(^|\\\\.)"+a.2Z.2k(".").3b("\\\\.(?:.*\\\\.)?")+"(\\\\.|$)");a.4J=7;17 J=h.3a.28(0);1a(k=0;k<J.18;k++){h=J[k];h.5C.1p(X,"")===a.1j?f.1v(h.1L):J.2y(k--,1)}f=c(a.2c).48(f,a.4K);o=0;1a(x=f.18;o<x;o++){r=f[o];1a(k=0;k<J.18;k++){h=J[k];6(r.1L===h.1L&&(!A||A.1f(h.2Z))){l=r.1w;e=1b;6(h.5D==="49"||h.5D==="4a"){a.1j=h.5D;e=c(a.4L).48(h.1L)[0]}6(!e||e!==l)C.1v({1w:l,4b:h,4M:r.4M})}}}o=0;1a(x=C.18;o<x;o++){f=C[o];6(d&&f.4M>d)1U;a.4K=f.1w;a.1i=f.4b.1i;a.4b=f.4b;A=f.4b.8I.1F(f.1w,1s);6(A===1d||a.5E()){d=f.4M;6(A===1d)b=1d;6(a.5F())1U}}14 b}}12 Y(a,b){14(a&&a!=="*"?a+".":"")+b.1p(La,"`").1p(Ma,"&")}12 ma(a,b,d){6(c.1x(b))14 c.4c(a,12(f,h){14!!b.1l(f,h,f)===d});19 6(b.1e)14 c.4c(a,12(f){14 f===b===d});19 6(1g b==="1u"){17 e=c.4c(a,12(f){14 f.1e===1});6(Na.1f(b))14 c.1D(b,e,!d);19 b=c.1D(b,e)}14 c.4c(a,12(f){14 c.3q(f,b)>=0===d})}12 na(a,b){17 d=0;b.1k(12(){6(7.1m===(a[d]&&a[d].1m)){17 e=c.1i(a[d++]),f=c.1i(7,e);6(e=e&&e.2h){2q f.27;f.2h={};1a(17 h in e)1a(17 l in e[h])c.1n.2r(7,h,e[h][l],e[h][l].1i)}}})}12 Oa(a,b){b.5G?c.4d({1A:b.5G,3I:1d,2s:"29"}):c.6V(b.1O||b.8N||b.2l||"");b.1o&&b.1o.2F(b)}12 oa(a,b,d){17 e=b==="2z"?a.4e:a.5H;6(d==="4f")14 e;c.1k(b==="2z"?Pa:Qa,12(){d||(e-=1N(c.1y(a,"4N"+7))||0);6(d==="4g")e+=1N(c.1y(a,"4g"+7))||0;19 e-=1N(c.1y(a,"4f"+7+"8Q"))||0});14 e}12 da(a,b,d,e){6(c.2t(b)&&b.18)c.1k(b,12(f,h){d||Ra.1f(a)?e(a,h):da(a+"["+(1g h==="1M"||c.2t(h)?f:"")+"]",h,d,e)});19 6(!d&&b!=1b&&1g b==="1M")c.4h(b)?e(a,""):c.1k(b,12(f,h){da(a+"["+f+"]",h,d,e)});19 e(a,b)}12 S(a,b){17 d={};c.1k(pa.5I.1F([],pa.28(0,b)),12(){d[7]=a});14 d}12 qa(a){6(!ea[a]){17 b=c("<"+a+">").8S("1V"),d=b.1y("1P");b.2d();6(d==="2G"||d==="")d="5J";ea[a]=d}14 ea[a]}12 fa(a){14 c.3J(a)?a:a.1e===9?a.4O||a.parentWindow:1d}17 t=E.3K,c=12(){12 a(){6(!b.4P){1H{t.1J.8T("1C")}1I(j){4Q(a,1);14}b.2A()}}17 b=12(j,s){14 3c b.fn.6Z(j,s)},d=E.4R,e=E.$,f,h=/^(?:[^<]*(<[\\w\\W]+>)[^>]*$|#([\\w\\-]+)$)/,l=/\\S/,k=/^\\s+/,o=/\\s+$/,x=/\\W/,r=/\\d/,A=/^<(\\w+)\\s*\\/?>(?:<\\/\\1>)?$/,C=/^[\\],:{}\\s]*$/,J=/\\\\(?:["\\\\\\/bfnrt]|u[0-9a-fA-F]{4})/g,w=/"[^"\\\\\\n\\r]*"|1c|1d|1b|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?/g,I=/(?:^|:|,)(?:\\s*\\[)+/g,L=/(8U)[ \\/]([\\w.]+)/,g=/(opera)(?:.*5L)?[ \\/]([\\w.]+)/,i=/(msie) ([\\w.]+)/,n=/(mozilla)(?:.*? rv:([\\w.]+))?/,m=navigator.userAgent,p=1d,q=[],u,y=5M.2e.70,F=5M.2e.hasOwnProperty,M=2M.2e.1v,N=2M.2e.28,O=71.2e.4S,D=2M.2e.1W,R={};b.fn=b.2e={6Z:12(j,s){17 v,z,H;6(!j)14 7;6(j.1e){7.1Q=7[0]=j;7.18=1;14 7}6(j==="1V"&&!s&&t.1V){7.1Q=t;7[0]=t.1V;7.1L="1V";7.18=1;14 7}6(1g j==="1u")6((v=h.1Z(j))&&(v[1]||!s))6(v[1]){H=s?s.21||s:t;6(z=A.1Z(j))6(b.5N(s)){j=[t.22(z[1])];b.fn.3r.1l(j,s,1c)}19 j=[H.22(z[1])];19{z=b.72([v[1]],[H]);j=(z.73?z.4T.3L(1c):z.4T).2H}14 b.3M(7,j)}19{6((z=t.4i(v[2]))&&z.1o){6(z.id!==v[2])14 f.1R(j);7.18=1;7[0]=z}7.1Q=t;7.1L=j;14 7}19 6(!s&&!x.1f(j)){7.1L=j;7.1Q=t;j=t.2a(j);14 b.3M(7,j)}19 14!s||s.4U?(s||f).1R(j):b(s).1R(j);19 6(b.1x(j))14 f.2A(j);6(j.1L!==B){7.1L=j.1L;7.1Q=j.1Q}14 b.30(j,7)},1L:"",4U:"1.4.4",18:0,size:12(){14 7.18},5O:12(){14 N.1l(7,0)},2u:12(j){14 j==1b?7.5O():j<0?7.28(j)[0]:7[j]},2B:12(j,s,v){17 z=b();b.2t(j)?M.1F(z,j):b.3M(z,j);z.74=7;z.1Q=7.1Q;6(s==="1R")z.1L=7.1L+(7.1L?" ":"")+v;19 6(s)z.1L=7.1L+"."+s+"("+v+")";14 z},1k:12(j,s){14 b.1k(7,j,s)},2A:12(j){b.75();6(b.4P)j.1l(t,b);19 q&&q.1v(j);14 7},eq:12(j){14 j===-1?7.28(j):7.28(j,+j+1)},4j:12(){14 7.eq(0)},4V:12(){14 7.eq(-1)},28:12(){14 7.2B(N.1F(7,1s),"28",N.1l(1s).3b(","))},2m:12(j){14 7.2B(b.2m(7,12(s,v){14 j.1l(s,v,s)}))},4k:12(){14 7.74||b(1b)},1v:M,3N:[].3N,2y:[].2y};b.fn.6Z.2e=b.fn;b.1t=b.fn.1t=12(){17 j,s,v,z,H,G=1s[0]||{},K=1,Q=1s.18,ga=1d;6(1g G==="5Q"){ga=G;G=1s[1]||{};K=2}6(1g G!=="1M"&&!b.1x(G))G={};6(Q===K){G=7;--K}1a(;K<Q;K++)6((j=1s[K])!=1b)1a(s in j){v=G[s];z=j[s];6(G!==z)6(ga&&z&&(b.5N(z)||(H=b.2t(z)))){6(H){H=1d;v=v&&b.2t(v)?v:[]}19 v=v&&b.5N(v)?v:{};G[s]=b.1t(ga,v,z)}19 6(z!==B)G[s]=z}14 G};b.1t({noConflict:12(j){E.$=e;6(j)E.4R=d;14 b},4P:1d,5R:1,2A:12(j){j===1c&&b.5R--;6(!b.5R||j!==1c&&!b.4P){6(!t.1V)14 4Q(b.2A,1);b.4P=1c;6(!(j!==1c&&--b.5R>0))6(q){17 s=0,v=q;1a(q=1b;j=v[s++];)j.1l(t,b);b.fn.2o&&b(t).2o("2A").4l("2A")}}},75:12(){6(!p){p=1c;6(t.3O==="2I")14 4Q(b.2A,1);6(t.3d){t.3d("8V",u,1d);E.3d("5S",b.2A,1d)}19 6(t.3e){t.3e("3P",u);E.3e("76",b.2A);17 j=1d;1H{j=E.8W==1b}1I(s){}t.1J.8T&&j&&a()}}},1x:12(j){14 b.1j(j)==="12"},2t:2M.2t||12(j){14 b.1j(j)==="array"},3J:12(j){14 j&&1g j==="1M"&&"8X"in j},46:12(j){14 j==1b||!r.1f(j)||46(j)},1j:12(j){14 j==1b?71(j):R[y.1l(j)]||"1M"},5N:12(j){6(!j||b.1j(j)!=="1M"||j.1e||b.3J(j))14 1d;6(j.77&&!F.1l(j,"77")&&!F.1l(j.77.2e,"isPrototypeOf"))14 1d;1a(17 s in j);14 s===B||F.1l(j,s)},4h:12(j){1a(17 s in j)14 1d;14 1c},2v:12(j){8Y j;},6R:12(j){6(1g j!=="1u"||!j)14 1b;j=b.4S(j);6(C.1f(j.1p(J,"@").1p(w,"]").1p(I,"")))14 E.5T&&E.5T.8Z?E.5T.8Z(j):(3c 78("14 "+j))();19 b.2v("Invalid 5T: "+j)},4W:12(){},6V:12(j){6(j&&l.1f(j)){17 s=t.2a("90")[0]||t.1J,v=t.22("29");v.1j="1O/3Q";6(b.1q.79)v.31(t.4X(j));19 v.1O=j;s.2N(v,s.1B);s.2F(v)}},1m:12(j,s){14 j.1m&&j.1m.5U()===s.5U()},1k:12(j,s,v){17 z,H=0,G=j.18,K=G===B||b.1x(j);6(v)6(K)1a(z in j){6(s.1F(j[z],v)===1d)1U}19 1a(;H<G;){6(s.1F(j[H++],v)===1d)1U}19 6(K)1a(z in j){6(s.1l(j[z],z,j[z])===1d)1U}19 1a(v=j[0];H<G&&s.1l(v,H,v)!==1d;v=j[++H]);14 j},4S:O?12(j){14 j==1b?"":O.1l(j)}:12(j){14 j==1b?"":j.70().1p(k,"").1p(o,"")},30:12(j,s){17 v=s||[];6(j!=1b){17 z=b.1j(j);j.18==1b||z==="1u"||z==="12"||z==="regexp"||b.3J(j)?M.1l(v,j):b.3M(v,j)}14 v},3q:12(j,s){6(s.1W)14 s.1W(j);1a(17 v=0,z=s.18;v<z;v++)6(s[v]===j)14 v;14-1},3M:12(j,s){17 v=j.18,z=0;6(1g s.18==="3t")1a(17 H=s.18;z<H;z++)j[v++]=s[z];19 1a(;s[z]!==B;)j[v++]=s[z++];j.18=v;14 j},4c:12(j,s,v){17 z=[],H;v=!!v;1a(17 G=0,K=j.18;G<K;G++){H=!!s(j[G],G);v!==H&&z.1v(j[G])}14 z},2m:12(j,s,v){1a(17 z=[],H,G=0,K=j.18;G<K;G++){H=s(j[G],G,v);6(H!=1b)z[z.18]=H}14 z.5I.1F([],z)},1S:1,4m:12(j,s,v){6(1s.18===2)6(1g s==="1u"){v=j;j=v[s];s=B}19 6(s&&!b.1x(s)){v=s;s=B}6(!s&&j)s=12(){14 j.1F(v||7,1s)};6(j)s.1S=j.1S=j.1S||s.1S||b.1S++;14 s},5V:12(j,s,v,z,H,G){17 K=j.18;6(1g s==="1M"){1a(17 Q in s)b.5V(j,Q,s[Q],z,H,v);14 j}6(v!==B){z=!G&&z&&b.1x(v);1a(Q=0;Q<K;Q++)H(j[Q],s,z?v.1l(j[Q],Q,H(j[Q],s)):v,G);14 j}14 K?H(j[0],s):B},2i:12(){14(3c 7a).91()},92:12(j){j=j.1E();j=L.1Z(j)||g.1Z(j)||i.1Z(j)||j.1W("compatible")<0&&n.1Z(j)||[];14{3u:j[1]||"",5L:j[2]||"0"}},3u:{}});b.1k("Boolean Number 71 78 2M 7a 3H 5M".2k(" "),12(j,s){R["[1M "+s+"]"]=s.1E()});m=b.92(m);6(m.3u){b.3u[m.3u]=1c;b.3u.5L=m.5L}6(b.3u.8U)b.3u.safari=1c;6(D)b.3q=12(j,s){14 D.1l(s,j)};6(!/\\s/.1f("\\u00a0")){k=/^[\\s\\93]+/;o=/[\\s\\93]+$/}f=b(t);6(t.3d)u=12(){t.4Y("8V",u,1d);b.2A()};19 6(t.3e)u=12(){6(t.3O==="2I"){t.5W("3P",u);b.2A()}};14 E.4R=E.$=b}();(12(){c.1q={};17 a=t.1J,b=t.22("29"),d=t.22("1K"),e="29"+c.2i();d.1h.1P="2G";d.2l="   <7b/><2f></2f><a 2O=\'/a\' 1h=\'94:95;7c:1C;23:.55;\'>a</a><3f 1j=\'3R\'/>";17 f=d.2a("*"),h=d.2a("a")[0],l=t.22("2p"),k=l.31(t.22("4n"));6(!(!f||!f.18||!h)){c.1q={7d:d.1B.1e===3,2w:!d.2a("2w").18,96:!!d.2a("7b").18,1h:/95/.1f(h.2b("1h")),97:h.2b("2O")==="/a",23:/^0.55$/.1f(h.1h.23),5X:!!h.1h.5X,98:d.2a("3f")[0].2J==="on",optSelected:k.4o,5Y:1c,7e:1d,5Z:1d,79:1d,7f:1c,4p:1b,7g:1d,7h:1d,4Z:1c};l.3g=1c;c.1q.7e=!k.3g;b.1j="1O/3Q";1H{b.31(t.4X("99."+e+"=1;"))}1I(o){}a.2N(b,a.1B);6(E[e]){c.1q.79=1c;2q E[e]}1H{2q b.1f}1I(x){c.1q.5Y=1d}a.2F(b);6(d.3e&&d.9b){d.3e("7i",12 r(){c.1q.7f=1d;d.5W("7i",r)});d.3L(1c).9b("7i")}d=t.22("1K");d.2l="<3f 1j=\'3v\' 2P=\'radiotest\' 34=\'34\'/>";a=t.9c();a.31(d.1B);c.1q.5Z=a.3L(1c).3L(1c).7j.34;c(12(){17 r=t.22("1K");r.1h.2z=r.1h.9d="3S";t.1V.31(r);c.4p=c.1q.4p=r.4e===2;6("50"in r.1h){r.1h.1P="4q";r.1h.50=1;c.1q.7g=r.4e===2;r.1h.1P="";r.2l="<1K 1h=\'2z:4px;\'></1K>";c.1q.7h=r.4e!==2}r.2l="<2f><tr><td 1h=\'4N:0;1P:2G\'></td><td>t</td></tr></2f>";17 A=r.2a("td");c.1q.4Z=A[0].5H===0;A[0].1h.1P="";A[1].1h.1P="2G";c.1q.4Z=c.1q.4Z&&A[0].5H===0;r.2l="";t.1V.2F(r).1h.1P="2G"});a=12(r){17 A=t.22("1K");r="on"+r;17 C=r in A;6(!C){A.7k(r,"14;");C=1g A[r]==="12"}14 C};c.1q.9e=a("3x");c.1q.9f=a("51");a=b=d=f=h=1b}})();17 ra={},Ja=/^(?:\\{.*\\}|\\[.*\\])$/;c.1t({2Q:{},9g:0,2K:"4R"+c.2i(),52:{7m:1c,1M:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:1c},1i:12(a,b,d){6(c.7n(a)){a=a==E?ra:a;17 e=a.1e,f=e?a[c.2K]:1b,h=c.2Q;6(!(e&&!f&&1g b==="1u"&&d===B)){6(e)f||(a[c.2K]=f=++c.9g);19 h=a;6(1g b==="1M")6(e)h[f]=c.1t(h[f],b);19 c.1t(h,b);19 6(e&&!h[f])h[f]={};a=e?h[f]:h;6(d!==B)a[b]=d;14 1g b==="1u"?a[b]:a}}},4r:12(a,b){6(c.7n(a)){a=a==E?ra:a;17 d=a.1e,e=d?a[c.2K]:a,f=c.2Q,h=d?f[e]:e;6(b){6(h){2q h[b];d&&c.4h(h)&&c.4r(a)}}19 6(d&&c.1q.5Y)2q a[c.2K];19 6(a.3T)a.3T(c.2K);19 6(d)2q f[e];19 1a(17 l in a)2q a[l]}},7n:12(a){6(a.1m){17 b=c.52[a.1m.1E()];6(b)14!(b===1c||a.2b("classid")!==b)}14 1c}});c.fn.1t({1i:12(a,b){17 d=1b;6(1g a==="2R"){6(7.18){17 e=7[0].7o,f;d=c.1i(7[0]);1a(17 h=0,l=e.18;h<l;h++){f=e[h].2P;6(f.1W("1i-")===0){f=f.53(5);ka(7[0],f,d[f])}}}14 d}19 6(1g a==="1M")14 7.1k(12(){c.1i(7,a)});17 k=a.2k(".");k[1]=k[1]?"."+k[1]:"";6(b===B){d=7.60("getData"+k[1]+"!",[k[0]]);6(d===B&&7.18){d=c.1i(7[0],a);d=ka(7[0],a,d)}14 d===B&&k[1]?7.1i(k[0]):d}19 14 7.1k(12(){17 o=c(7),x=[k[0],b];o.60("setData"+k[1]+"!",x);c.1i(7,a,b);o.60("changeData"+k[1]+"!",x)})},4r:12(a){14 7.1k(12(){c.4r(7,a)})}});c.1t({2L:12(a,b,d){6(a){b=(b||"fx")+"2L";17 e=c.1i(a,b);6(!d)14 e||[];6(!e||c.2t(d))e=c.1i(a,b,c.30(d));19 e.1v(d);14 e}},3y:12(a,b){b=b||"fx";17 d=c.2L(a,b),e=d.3i();6(e==="7p")e=d.3i();6(e){b==="fx"&&d.54("7p");e.1l(a,12(){c.3y(a,b)})}}});c.fn.1t({2L:12(a,b){6(1g a!=="1u"){b=a;a="fx"}6(b===B)14 c.2L(7[0],a);14 7.1k(12(){17 d=c.2L(7,a,b);a==="fx"&&d[0]!=="7p"&&c.3y(7,a)})},3y:12(a){14 7.1k(12(){c.3y(7,a)})},delay:12(a,b){a=c.fx?c.fx.56[a]||a:a;b=b||"fx";14 7.2L(b,12(){17 d=7;4Q(12(){c.3y(d,b)},a)})},clearQueue:12(a){14 7.2L(a||"fx",[])}});17 sa=/[\\n\\t]/g,ha=/\\s+/,Sa=/\\r/g,Ta=/^(?:2O|5G|1h)$/,Ua=/^(?:2E|3f)$/i,Va=/^(?:2E|3f|1M|2p|57)$/i,Wa=/^a(?:rea)?$/i,ta=/^(?:3v|3R)$/i;c.58={"1a":"9m","3j":"24",readonly:"9n",maxlength:"maxLength",9o:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"7s",usemap:"useMap",frameborder:"frameBorder"};c.fn.1t({3r:12(a,b){14 c.5V(7,a,b,1c,c.3r)},removeAttr:12(a){14 7.1k(12(){c.3r(7,a,"");7.1e===1&&7.3T(a)})},7t:12(a){6(c.1x(a))14 7.1k(12(x){17 r=c(7);r.7t(a.1l(7,x,r.3r("3j")))});6(a&&1g a==="1u")1a(17 b=(a||"").2k(ha),d=0,e=7.18;d<e;d++){17 f=7[d];6(f.1e===1)6(f.24){1a(17 h=" "+f.24+" ",l=f.24,k=0,o=b.18;k<o;k++)6(h.1W(" "+b[k]+" ")<0)l+=" "+b[k];f.24=c.4S(l)}19 f.24=a}14 7},7u:12(a){6(c.1x(a))14 7.1k(12(o){17 x=c(7);x.7u(a.1l(7,o,x.3r("3j")))});6(a&&1g a==="1u"||a===B)1a(17 b=(a||"").2k(ha),d=0,e=7.18;d<e;d++){17 f=7[d];6(f.1e===1&&f.24)6(a){1a(17 h=(" "+f.24+" ").1p(sa," "),l=0,k=b.18;l<k;l++)h=h.1p(" "+b[l]+" "," ");f.24=c.4S(h)}19 f.24=""}14 7},9p:12(a,b){17 d=1g a,e=1g b==="5Q";6(c.1x(a))14 7.1k(12(f){17 h=c(7);h.9p(a.1l(7,f,h.3r("3j"),b),b)});14 7.1k(12(){6(d==="1u")1a(17 f,h=0,l=c(7),k=b,o=a.2k(ha);f=o[h++];){k=e?k:!l.9q(f);l[k?"7t":"7u"](f)}19 6(d==="2R"||d==="5Q"){7.24&&c.1i(7,"9r",7.24);7.24=7.24||a===1d?"":c.1i(7,"9r")||""}})},9q:12(a){a=" "+a+" ";1a(17 b=0,d=7.18;b<d;b++)6((" "+7[b].24+" ").1p(sa," ").1W(a)>-1)14 1c;14 1d},3U:12(a){6(!1s.18){17 b=7[0];6(b){6(c.1m(b,"4n")){17 d=b.7o.2J;14!d||d.9s?b.2J:b.1O}6(c.1m(b,"2p")){17 e=b.62;d=[];17 f=b.1G;b=b.1j==="2p-59";6(e<0)14 1b;17 h=b?e:0;1a(e=b?e+1:f.18;h<e;h++){17 l=f[h];6(l.4o&&(c.1q.7e?!l.3g:l.2b("3g")===1b)&&(!l.1o.3g||!c.1m(l.1o,"9t"))){a=c(l).3U();6(b)14 a;d.1v(a)}}14 d}6(ta.1f(b.1j)&&!c.1q.98)14 b.2b("2J")===1b?"on":b.2J;14(b.2J||"").1p(Sa,"")}14 B}17 k=c.1x(a);14 7.1k(12(o){17 x=c(7),r=a;6(7.1e===1){6(k)r=a.1l(7,o,x.3U());6(r==1b)r="";19 6(1g r==="3t")r+="";19 6(c.2t(r))r=c.2m(r,12(C){14 C==1b?"":C+""});6(c.2t(r)&&ta.1f(7.1j))7.34=c.3q(x.3U(),r)>=0;19 6(c.1m(7,"2p")){17 A=c.30(r);c("4n",7).1k(12(){7.4o=c.3q(c(7).3U(),A)>=0});6(!A.18)7.62=-1}19 7.2J=r}})}});c.1t({63:{3U:1c,1y:1c,2S:1c,1O:1c,1i:1c,2z:1c,3k:1c,1Y:1c},3r:12(a,b,d,e){6(!a||a.1e===3||a.1e===8)14 B;6(e&&b in c.63)14 c(a)[b](d);e=a.1e!==1||!c.7v(a);17 f=d!==B;b=e&&c.58[b]||b;17 h=Ta.1f(b);6((b in a||a[b]!==B)&&e&&!h){6(f){b==="1j"&&Ua.1f(a.1m)&&a.1o&&c.2v("1j property can\'t be changed");6(d===1b)a.1e===1&&a.3T(b);19 a[b]=d}6(c.1m(a,"5a")&&a.3V(b))14 a.3V(b).64;6(b==="7s")14(b=a.3V("7s"))&&b.9s?b.2J:Va.1f(a.1m)||Wa.1f(a.1m)&&a.2O?0:B;14 a[b]}6(!c.1q.1h&&e&&b==="1h"){6(f)a.1h.9u=""+d;14 a.1h.9u}f&&a.7k(b,""+d);6(!a.7o[b]&&a.9v&&!a.9v(b))14 B;a=!c.1q.97&&e&&h?a.2b(b,2):a.2b(b);14 a===1b?B:a}});17 X=/\\.(.*)$/,ia=/^(?:57|3f|2p)$/i,La=/\\./g,Ma=/ /g,Xa=/[^\\w\\s.|`]/g,Ya=12(a){14 a.1p(Xa,"\\\\$&")},ua={66:0,4s:0};c.1n={2r:12(a,b,d,e){6(!(a.1e===3||a.1e===8)){6(c.3J(a)&&a!==E&&!a.8W)a=E;6(d===1d)d=U;19 6(!d)14;17 f,h;6(d.2x){f=d;d=f.2x}6(!d.1S)d.1S=c.1S++;6(h=c.1i(a)){17 l=a.1e?"2h":"4I",k=h[l],o=h.27;6(1g k==="12"){o=k.27;k=k.2h}19 6(!k){a.1e||(h[l]=h=12(){});h.2h=k={}}6(!o)h.27=o=12(){14 1g c!=="2R"&&!c.1n.7x?c.1n.27.1F(o.1w,1s):B};o.1w=a;b=b.2k(" ");1a(17 x=0,r;l=b[x++];){h=f?c.1t({},f):{2x:d,1i:e};6(l.1W(".")>-1){r=l.2k(".");l=r.3i();h.2Z=r.28(0).3N().3b(".")}19{r=[];h.2Z=""}h.1j=l;6(!h.1S)h.1S=d.1S;17 A=k[l],C=c.1n.35[l]||{};6(!A){A=k[l]=[];6(!C.3z||C.3z.1l(a,e,r,o)===1d)6(a.3d)a.3d(l,o,1d);19 a.3e&&a.3e("on"+l,o)}6(C.2r){C.2r.1l(a,h);6(!h.2x.1S)h.2x.1S=d.1S}A.1v(h);c.1n.2T[l]=1c}a=1b}}},2T:{},2d:12(a,b,d,e){6(!(a.1e===3||a.1e===8)){6(d===1d)d=U;17 f,h,l=0,k,o,x,r,A,C,J=a.1e?"2h":"4I",w=c.1i(a),I=w&&w[J];6(w&&I){6(1g I==="12"){w=I;I=I.2h}6(b&&b.1j){d=b.2x;b=b.1j}6(!b||1g b==="1u"&&b.charAt(0)==="."){b=b||"";1a(f in I)c.1n.2d(a,f+b)}19{1a(b=b.2k(" ");f=b[l++];){r=f;k=f.1W(".")<0;o=[];6(!k){o=f.2k(".");f=o.3i();x=3H("(^|\\\\.)"+c.2m(o.28(0).3N(),Ya).3b("\\\\.(?:.*\\\\.)?")+"(\\\\.|$)")}6(A=I[f])6(d){r=c.1n.35[f]||{};1a(h=e||0;h<A.18;h++){C=A[h];6(d.1S===C.1S){6(k||x.1f(C.2Z)){e==1b&&A.2y(h--,1);r.2d&&r.2d.1l(a,C)}6(e!=1b)1U}}6(A.18===0||e!=1b&&A.18===1){6(!r.3A||r.3A.1l(a,o)===1d)c.7y(a,f,w.27);2q I[f]}}19 1a(h=0;h<A.18;h++){C=A[h];6(k||x.1f(C.2Z)){c.1n.2d(a,r,C.2x,h);A.2y(h--,1)}}}6(c.4h(I)){6(b=w.27)b.1w=1b;2q w.2h;2q w.27;6(1g w==="12")c.4r(a,J);19 c.4h(w)&&c.4r(a)}}}}},2o:12(a,b,d,e){17 f=a.1j||a;6(!e){a=1g a==="1M"?a[c.2K]?a:c.1t(c.3W(f),a):c.3W(f);6(f.1W("!")>=0){a.1j=f=f.28(0,-1);a.9y=1c}6(!d){a.3X();c.1n.2T[f]&&c.1k(c.2Q,12(){7.2h&&7.2h[f]&&c.1n.2o(a,b,7.27.1w)})}6(!d||d.1e===3||d.1e===8)14 B;a.5b=B;a.2c=d;b=c.30(b);b.54(a)}a.4K=d;(e=d.1e?c.1i(d,"27"):(c.1i(d,"4I")||{}).27)&&e.1F(d,b);e=d.1o||d.21;1H{6(!(d&&d.1m&&c.52[d.1m.1E()]))6(d["on"+f]&&d["on"+f].1F(d,b)===1d){a.5b=1d;a.36()}}1I(h){}6(!a.5E()&&e)c.1n.2o(a,b,e,1c);19 6(!a.7z()){17 l;e=a.2c;17 k=f.1p(X,""),o=c.1m(e,"a")&&k==="47",x=c.1n.35[k]||{};6((!x.2U||x.2U.1l(d,a)===1d)&&!o&&!(e&&e.1m&&c.52[e.1m.1E()])){1H{6(e[k]){6(l=e["on"+k])e["on"+k]=1b;c.1n.7x=1c;e[k]()}}1I(r){}6(l)e["on"+k]=l;c.1n.7x=1d}}},27:12(a){17 b,d,e,f;d=[];17 h=c.30(1s);a=h[0]=c.1n.7A(a||E.1n);a.4K=7;b=a.1j.1W(".")<0&&!a.9y;6(!b){e=a.1j.2k(".");a.1j=e.3i();d=e.28(0).3N();e=3H("(^|\\\\.)"+d.3b("\\\\.(?:.*\\\\.)?")+"(\\\\.|$)")}a.2Z=a.2Z||d.3b(".");f=c.1i(7,7.1e?"2h":"4I");6(1g f==="12")f=f.2h;d=(f||{})[a.1j];6(f&&d){d=d.28(0);f=0;1a(17 l=d.18;f<l;f++){17 k=d[f];6(b||e.1f(k.2Z)){a.2x=k.2x;a.1i=k.1i;a.4b=k;k=k.2x.1F(7,h);6(k!==B){a.5b=k;6(k===1d){a.36();a.3X()}}6(a.5F())1U}}}14 a.5b},58:"altKey attrChange attrName bubbles 2E cancelable 67 7B 9z 7C 4K 1i detail eventPhase 68 2x 4t layerX layerY 7D newValue offsetX offsetY 7E 9A prevValue relatedNode 4L screenX screenY shiftKey 9B 2c 9C view wheelDelta 5c".2k(" "),7A:12(a){6(a[c.2K])14 a;17 b=a;a=c.3W(b);1a(17 d=7.58.18,e;d;){e=7.58[--d];a[e]=b[e]}6(!a.2c)a.2c=a.9B||t;6(a.2c.1e===3)a.2c=a.2c.1o;6(!a.4L&&a.68)a.4L=a.68===a.2c?a.9C:a.68;6(a.7E==1b&&a.7B!=1b){b=t.1J;d=t.1V;a.7E=a.7B+(b&&b.3B||d&&d.3B||0)-(b&&b.69||d&&d.69||0);a.9A=a.9z+(b&&b.3C||d&&d.3C||0)-(b&&b.6a||d&&d.6a||0)}6(a.5c==1b&&(a.67!=1b||a.4t!=1b))a.5c=a.67!=1b?a.67:a.4t;6(!a.7D&&a.7C)a.7D=a.7C;6(!a.5c&&a.2E!==B)a.5c=a.2E&1?1:a.2E&2?3:a.2E&4?2:0;14 a},1S:1E8,4m:c.4m,35:{2A:{3z:c.75,3A:c.4W},3a:{2r:12(a){c.1n.2r(7,Y(a.5C,a.1L),c.1t({},a,{2x:Ka,1S:a.2x.1S}))},2d:12(a){c.1n.2d(7,Y(a.5C,a.1L),a)}},beforeunload:{3z:12(a,b,d){6(c.3J(7))7.7F=d},3A:12(a,b){6(7.7F===b)7.7F=1b}}}};c.7y=t.4Y?12(a,b,d){a.4Y&&a.4Y(b,d,1d)}:12(a,b,d){a.5W&&a.5W("on"+b,d)};c.3W=12(a){6(!7.36)14 3c c.3W(a);6(a&&a.1j){7.7G=a;7.1j=a.1j}19 7.1j=a;7.timeStamp=c.2i();7[c.2K]=1c};c.3W.2e={36:12(){7.7z=ca;17 a=7.7G;6(a)6(a.36)a.36();19 a.returnValue=1d},3X:12(){7.5E=ca;17 a=7.7G;6(a){a.3X&&a.3X();a.cancelBubble=1c}},stopImmediatePropagation:12(){7.5F=ca;7.3X()},7z:U,5E:U,5F:U};17 va=12(a){17 b=a.4L;1H{1a(;b&&b!==7;)b=b.1o;6(b!==7){a.1j=a.1i;c.1n.27.1F(7,1s)}}1I(d){}},wa=12(a){a.1j=a.1i;c.1n.27.1F(7,1s)};c.1k({49:"7J",4a:"7K"},12(a,b){c.1n.35[a]={3z:12(d){c.1n.2r(7,b,d&&d.1L?wa:va,a)},3A:12(d){c.1n.2d(7,b,d&&d.1L?wa:va)}}});6(!c.1q.9e)c.1n.35.3x={3z:12(){6(7.1m.1E()!=="5a"){c.1n.2r(7,"47.7L",12(a){17 b=a.2c,d=b.1j;6((d==="3x"||d==="7M")&&c(b).48("5a").18){a.4J=B;14 la("3x",7,1s)}});c.1n.2r(7,"9D.7L",12(a){17 b=a.2c,d=b.1j;6((d==="1O"||d==="5d")&&c(b).48("5a").18&&a.4t===13){a.4J=B;14 la("3x",7,1s)}})}19 14 1d},3A:12(){c.1n.2d(7,".7L")}};6(!c.1q.9f){17 V,xa=12(a){17 b=a.1j,d=a.2J;6(b==="3v"||b==="3R")d=a.34;19 6(b==="2p-6b")d=a.62>-1?c.2m(a.1G,12(e){14 e.4o}).3b("-"):"";19 6(a.1m.1E()==="2p")d=a.62;14 d},Z=12(a,b){17 d=a.2c,e,f;6(!(!ia.1f(d.1m)||d.9n)){e=c.1i(d,"7O");f=xa(d);6(a.1j!=="4s"||d.1j!=="3v")c.1i(d,"7O",f);6(!(e===B||f===e))6(e!=1b||f){a.1j="51";a.4J=B;14 c.1n.2o(a,b,d)}}};c.1n.35.51={2V:{4s:Z,beforedeactivate:Z,47:12(a){17 b=a.2c,d=b.1j;6(d==="3v"||d==="3R"||b.1m.1E()==="2p")14 Z.1l(7,a)},9E:12(a){17 b=a.2c,d=b.1j;6(a.4t===13&&b.1m.1E()!=="57"||a.4t===32&&(d==="3R"||d==="3v")||d==="2p-6b")14 Z.1l(7,a)},9F:12(a){a=a.2c;c.1i(a,"7O",xa(a))}},3z:12(){6(7.1j==="5e")14 1d;1a(17 a in V)c.1n.2r(7,a+".9G",V[a]);14 ia.1f(7.1m)},3A:12(){c.1n.2d(7,".9G");14 ia.1f(7.1m)}};V=c.1n.35.51.2V;V.5f=V.9F}t.3d&&c.1k({5f:"66",6c:"4s"},12(a,b){12 d(e){e=c.1n.7A(e);e.1j=b;14 c.1n.2o(e,1b,e.2c)}c.1n.35[b]={3z:12(){ua[b]++===0&&t.3d(a,d,1c)},3A:12(){--ua[b]===0&&t.4Y(a,d,1c)}}});c.1k(["6d","59"],12(a,b){c.fn[b]=12(d,e,f){6(1g d==="1M"){1a(17 h in d)7[b](h,e,d[h],f);14 7}6(c.1x(e)||e===1d){f=e;e=B}17 l=b==="59"?c.4m(f,12(o){c(7).4l(o,l);14 f.1F(7,1s)}):f;6(d==="7P"&&b!=="59")7.59(d,e,f);19{h=0;1a(17 k=7.18;h<k;h++)c.1n.2r(7[h],d,l,e)}14 7}});c.fn.1t({4l:12(a,b){6(1g a==="1M"&&!a.36)1a(17 d in a)7.4l(d,a[d]);19{d=0;1a(17 e=7.18;d<e;d++)c.1n.2d(7[d],a,b)}14 7},delegate:12(a,b,d,e){14 7.3a(b,d,e,a)},undelegate:12(a,b,d){14 1s.18===0?7.4l("3a"):7.9H(b,1b,d,a)},2o:12(a,b){14 7.1k(12(){c.1n.2o(a,b,7)})},60:12(a,b){6(7[0]){17 d=c.3W(a);d.36();d.3X();c.1n.2o(d,b,7[0]);14 d.5b}},3D:12(a){1a(17 b=1s,d=1;d<b.18;)c.4m(a,b[d++]);14 7.47(c.4m(a,12(e){17 f=(c.1i(7,"9I"+a.1S)||0)%d;c.1i(7,"9I"+a.1S,f+1);e.36();14 b[f].1F(7,1s)||1d}))},9J:12(a,b){14 7.49(a).4a(b||a)}});17 ya={5f:"66",6c:"4s",49:"7J",4a:"7K"};c.1k(["3a","9H"],12(a,b){c.fn[b]=12(d,e,f,h){17 l,k=0,o,x,r=h||7.1L;h=h?7:c(7.1Q);6(1g d==="1M"&&!d.36){1a(l in d)h[b](l,e,d[l],r);14 7}6(c.1x(e)){f=e;e=B}1a(d=(d||"").2k(" ");(l=d[k++])!=1b;){o=X.1Z(l);x="";6(o){x=o[0];l=l.1p(X,"")}6(l==="9J")d.1v("49"+x,"4a"+x);19{o=l;6(l==="5f"||l==="6c"){d.1v(ya[l]+x);l+=x}19 l=(ya[l]||l)+x;6(b==="3a"){x=0;1a(17 A=h.18;x<A;x++)c.1n.2r(h[x],"3a."+Y(l,r),{1i:e,1L:r,2x:f,5C:l,8I:f,5D:o})}19 h.4l("3a."+Y(l,r),f)}}14 7}});c.1k("6c 5f 66 4s 5S resize 6e 7P 47 dblclick mousedown mouseup mousemove 7J 7K 49 4a 51 2p 3x 9E 9D keyup 2v".2k(" "),12(a,b){c.fn[b]=12(d,e){6(e==1b){e=d;d=1b}14 1s.18>0?7.6d(b,d,e):7.2o(b)};6(c.63)c.63[b]=1c});E.3e&&!E.3d&&c(E).6d("7P",12(){1a(17 a in c.2Q)6(c.2Q[a].27)1H{c.1n.2d(c.2Q[a].27.1w)}1I(b){}});(12(){12 a(g,i,n,m,p,q){p=0;1a(17 u=m.18;p<u;p++){17 y=m[p];6(y){17 F=1d;1a(y=y[g];y;){6(y.4u===n){F=m[y.6f];1U}6(y.1e===1&&!q){y.4u=n;y.6f=p}6(y.1m.1E()===i){F=y;1U}y=y[g]}m[p]=F}}}12 b(g,i,n,m,p,q){p=0;1a(17 u=m.18;p<u;p++){17 y=m[p];6(y){17 F=1d;1a(y=y[g];y;){6(y.4u===n){F=m[y.6f];1U}6(y.1e===1){6(!q){y.4u=n;y.6f=p}6(1g i!=="1u"){6(y===i){F=1c;1U}}19 6(k.1D(i,[y]).18>0){F=y;1U}}y=y[g]}m[p]=F}}}17 d=/((?:\\((?:\\([^()]+\\)|[^()]+)+\\)|\\[(?:\\[[^\\[\\]]*\\]|[\'"][^\'"]*[\'"]|[^\\[\\]\'"]+)+\\]|\\\\.|[^ >+~,(\\[\\\\]+)+|[>+~])(\\s*,\\s*)?((?:.|\\r|\\n)*)/g,e=0,f=5M.2e.70,h=1d,l=1c;[0,0].3N(12(){l=1d;14 0});17 k=12(g,i,n,m){n=n||[];17 p=i=i||t;6(i.1e!==1&&i.1e!==9)14[];6(!g||1g g!=="1u")14 n;17 q,u,y,F,M,N=1c,O=k.4v(i),D=[],R=g;do{d.1Z("");6(q=d.1Z(R)){R=q[3];D.1v(q[1]);6(q[2]){F=q[3];1U}}}while(q);6(D.18>1&&x.1Z(g))6(D.18===2&&o.37[D[0]])u=L(D[0]+D[1],i);19 1a(u=o.37[D[0]]?[i]:k(D.3i(),i);D.18;){g=D.3i();6(o.37[g])g+=D.3i();u=L(g,u)}19{6(!m&&D.18>1&&i.1e===9&&!O&&o.2g.ID.1f(D[0])&&!o.2g.ID.1f(D[D.18-1])){q=k.1R(D.3i(),i,O);i=q.25?k.1D(q.25,q.38)[0]:q.38[0]}6(i){q=m?{25:D.6g(),38:C(m)}:k.1R(D.6g(),D.18===1&&(D[0]==="~"||D[0]==="+")&&i.1o?i.1o:i,O);u=q.25?k.1D(q.25,q.38):q.38;6(D.18>0)y=C(u);19 N=1d;1a(;D.18;){q=M=D.6g();6(o.37[M])q=D.6g();19 M="";6(q==1b)q=i;o.37[M](y,q,O)}}19 y=[]}y||(y=u);y||k.2v(M||g);6(f.1l(y)==="[1M 2M]")6(N)6(i&&i.1e===1)1a(g=0;y[g]!=1b;g++){6(y[g]&&(y[g]===1c||y[g].1e===1&&k.2W(i,y[g])))n.1v(u[g])}19 1a(g=0;y[g]!=1b;g++)y[g]&&y[g].1e===1&&n.1v(u[g]);19 n.1v.1F(n,y);19 C(y,n);6(F){k(F,p,n,m);k.7R(n)}14 n};k.7R=12(g){6(w){h=l;g.3N(w);6(h)1a(17 i=1;i<g.18;i++)g[i]===g[i-1]&&g.2y(i--,1)}14 g};k.9K=12(g,i){14 k(g,1b,1b,i)};k.5g=12(g,i){14 k(i,1b,1b,[g]).18>0};k.1R=12(g,i,n){17 m;6(!g)14[];1a(17 p=0,q=o.6h.18;p<q;p++){17 u,y=o.6h[p];6(u=o.6i[y].1Z(g)){17 F=u[1];u.2y(1,1);6(F.53(F.18-1)!=="\\\\"){u[1]=(u[1]||"").1p(/\\\\/g,"");m=o.1R[y](u,i,n);6(m!=1b){g=g.1p(o.2g[y],"");1U}}}}m||(m=i.2a("*"));14{38:m,25:g}};k.1D=12(g,i,n,m){1a(17 p,q,u=g,y=[],F=i,M=i&&i[0]&&k.4v(i[0]);g&&i.18;){1a(17 N in o.1D)6((p=o.6i[N].1Z(g))!=1b&&p[2]){17 O,D,R=o.1D[N];D=p[1];q=1d;p.2y(1,1);6(D.53(D.18-1)!=="\\\\"){6(F===y)y=[];6(o.7S[N])6(p=o.7S[N](p,F,n,y,m,M)){6(p===1c)continue}19 q=O=1c;6(p)1a(17 j=0;(D=F[j])!=1b;j++)6(D){O=R(D,p,j,F);17 s=m^!!O;6(n&&O!=1b)6(s)q=1c;19 F[j]=1d;19 6(s){y.1v(D);q=1c}}6(O!==B){n||(F=y);g=g.1p(o.2g[N],"");6(!q)14[];1U}}}6(g===u)6(q==1b)k.2v(g);19 1U;u=g}14 F};k.2v=12(g){8Y"9L 2v, 9M 9N: "+g;};17 o=k.9O={6h:["ID","7T","4w"],2g:{ID:/#((?:[\\w\\4x-\\4y\\-]|\\\\.)+)/,5h:/\\.((?:[\\w\\4x-\\4y\\-]|\\\\.)+)/,7T:/\\[2P=[\'"]*((?:[\\w\\4x-\\4y\\-]|\\\\.)+)[\'"]*\\]/,7U:/\\[\\s*((?:[\\w\\4x-\\4y\\-]|\\\\.)+)\\s*(?:(\\S?=)\\s*([\'"]*)(.*?)\\3|)\\s*\\]/,4w:/^((?:[\\w\\4x-\\4y\\*\\-]|\\\\.)+)/,6j:/:(9P|3E|4V|4j)-child(?:\\((6k|6l|[\\dn+\\-]*)\\))?/,3Y:/:(3E|eq|gt|lt|4j|4V|6k|6l)(?:\\((\\d*)\\))?(?=[^\\-]|$)/,4z:/:((?:[\\w\\4x-\\4y\\-]|\\\\.)+)(?:\\(([\'"]?)((?:\\([^\\)]+\\)|[^\\(\\)]*)+)\\2\\))?/},6i:{},7V:{"3j":"24","1a":"9m"},6m:{2O:12(g){14 g.2b("2O")}},37:{"+":12(g,i){17 n=1g i==="1u",m=n&&!/\\W/.1f(i);n=n&&!m;6(m)i=i.1E();m=0;1a(17 p=g.18,q;m<p;m++)6(q=g[m]){1a(;(q=q.4A)&&q.1e!==1;);g[m]=n||q&&q.1m.1E()===i?q||1d:q===i}n&&k.1D(i,g,1c)},">":12(g,i){17 n,m=1g i==="1u",p=0,q=g.18;6(m&&!/\\W/.1f(i))1a(i=i.1E();p<q;p++){6(n=g[p]){n=n.1o;g[p]=n.1m.1E()===i?n:1d}}19{1a(;p<q;p++)6(n=g[p])g[p]=m?n.1o:n.1o===i;m&&k.1D(i,g,1c)}},"":12(g,i,n){17 m,p=e++,q=b;6(1g i==="1u"&&!/\\W/.1f(i)){m=i=i.1E();q=a}q("1o",i,p,g,m,n)},"~":12(g,i,n){17 m,p=e++,q=b;6(1g i==="1u"&&!/\\W/.1f(i)){m=i=i.1E();q=a}q("4A",i,p,g,m,n)}},1R:{ID:12(g,i,n){6(1g i.4i!=="2R"&&!n)14(g=i.4i(g[1]))&&g.1o?[g]:[]},7T:12(g,i){6(1g i.9S!=="2R"){1a(17 n=[],m=i.9S(g[1]),p=0,q=m.18;p<q;p++)m[p].2b("2P")===g[1]&&n.1v(m[p]);14 n.18===0?1b:n}},4w:12(g,i){14 i.2a(g[1])}},7S:{5h:12(g,i,n,m,p,q){g=" "+g[1].1p(/\\\\/g,"")+" ";6(q)14 g;q=0;1a(17 u;(u=i[q])!=1b;q++)6(u)6(p^(u.24&&(" "+u.24+" ").1p(/[\\t\\n]/g," ").1W(g)>=0))n||m.1v(u);19 6(n)i[q]=1d;14 1d},ID:12(g){14 g[1].1p(/\\\\/g,"")},4w:12(g){14 g[1].1E()},6j:12(g){6(g[1]==="3E"){17 i=/(-?)(\\d*)n((?:\\+|-)?\\d*)/.1Z(g[2]==="6k"&&"2n"||g[2]==="6l"&&"2n+1"||!/\\D/.1f(g[2])&&"0n+"+g[2]||g[2]);g[2]=i[1]+(i[2]||1)-0;g[3]=i[3]-0}g[0]=e++;14 g},7U:12(g,i,n,m,p,q){i=g[1].1p(/\\\\/g,"");6(!q&&o.7V[i])g[1]=o.7V[i];6(g[2]==="~=")g[4]=" "+g[4]+" ";14 g},4z:12(g,i,n,m,p){6(g[1]==="5i")6((d.1Z(g[3])||"").18>1||/^\\w/.1f(g[3]))g[3]=k(g[3],1b,1b,i);19{g=k.1D(g[3],i,n,1c^p);n||m.1v.1F(m,g);14 1d}19 6(o.2g.3Y.1f(g[0])||o.2g.6j.1f(g[0]))14 1c;14 g},3Y:12(g){g.54(1c);14 g}},2V:{enabled:12(g){14 g.3g===1d&&g.1j!=="2X"},3g:12(g){14 g.3g===1c},34:12(g){14 g.34===1c},4o:12(g){14 g.4o===1c},6n:12(g){14!!g.1B},5j:12(g){14!g.1B},9T:12(g,i,n){14!!k(n[3],g).18},header:12(g){14/h\\d/i.1f(g.1m)},1O:12(g){14"1O"===g.1j},3v:12(g){14"3v"===g.1j},3R:12(g){14"3R"===g.1j},5e:12(g){14"5e"===g.1j},5d:12(g){14"5d"===g.1j},3x:12(g){14"3x"===g.1j},7M:12(g){14"7M"===g.1j},9U:12(g){14"9U"===g.1j},2E:12(g){14"2E"===g.1j||g.1m.1E()==="2E"},3f:12(g){14/3f|2p|57|2E/i.1f(g.1m)}},9V:{4j:12(g,i){14 i===0},4V:12(g,i,n,m){14 i===m.18-1},6k:12(g,i){14 i%2===0},6l:12(g,i){14 i%2===1},lt:12(g,i,n){14 i<n[3]-0},gt:12(g,i,n){14 i>n[3]-0},3E:12(g,i,n){14 n[3]-0===i},eq:12(g,i,n){14 n[3]-0===i}},1D:{4z:12(g,i,n,m){17 p=i[1],q=o.2V[p];6(q)14 q(g,n,i,m);19 6(p==="2W")14(g.8N||g.innerText||k.6o([g])||"").1W(i[3])>=0;19 6(p==="5i"){i=i[3];n=0;1a(m=i.18;n<m;n++)6(i[n]===g)14 1d;14 1c}19 k.2v("9L 2v, 9M 9N: "+p)},6j:12(g,i){17 n=i[1],m=g;switch(n){6p"9P":6p"4j":1a(;m=m.4A;)6(m.1e===1)14 1d;6(n==="4j")14 1c;m=g;6p"4V":1a(;m=m.2Y;)6(m.1e===1)14 1d;14 1c;6p"3E":n=i[2];17 p=i[3];6(n===1&&p===0)14 1c;17 q=i[0],u=g.1o;6(u&&(u.4u!==q||!g.7W)){17 y=0;1a(m=u.1B;m;m=m.2Y)6(m.1e===1)m.7W=++y;u.4u=q}m=g.7W-p;14 n===0?m===0:m%n===0&&m/n>=0}},ID:12(g,i){14 g.1e===1&&g.2b("id")===i},4w:12(g,i){14 i==="*"&&g.1e===1||g.1m.1E()===i},5h:12(g,i){14(" "+(g.24||g.2b("3j"))+" ").1W(i)>-1},7U:12(g,i){17 n=i[1];n=o.6m[n]?o.6m[n](g):g[n]!=1b?g[n]:g.2b(n);17 m=n+"",p=i[2],q=i[4];14 n==1b?p==="!=":p==="="?m===q:p==="*="?m.1W(q)>=0:p==="~="?(" "+m+" ").1W(q)>=0:!q?m&&n!==1d:p==="!="?m!==q:p==="^="?m.1W(q)===0:p==="$="?m.53(m.18-q.18)===q:p==="|="?m===q||m.53(0,q.18+1)===q+"-":1d},3Y:12(g,i,n,m){17 p=o.9V[i[2]];6(p)14 p(g,n,i,m)}}},x=o.2g.3Y,r=12(g,i){14"\\\\"+(i-0+1)},A;1a(A in o.2g){o.2g[A]=3H(o.2g[A].6q+/(?![^\\[]*\\])(?![^\\(]*\\))/.6q);o.6i[A]=3H(/(^(?:.|\\r|\\n)*?)/.6q+o.2g[A].6q.1p(/\\\\(\\d+)/g,r))}17 C=12(g,i){g=2M.2e.28.1l(g,0);6(i){i.1v.1F(i,g);14 i}14 g};1H{2M.2e.28.1l(t.1J.2H,0)}1I(J){C=12(g,i){17 n=0,m=i||[];6(f.1l(g)==="[1M 2M]")2M.2e.1v.1F(m,g);19 6(1g g.18==="3t")1a(17 p=g.18;n<p;n++)m.1v(g[n]);19 1a(;g[n];n++)m.1v(g[n]);14 m}}17 w,I;6(t.1J.3Z)w=12(g,i){6(g===i){h=1c;14 0}6(!g.3Z||!i.3Z)14 g.3Z?-1:1;14 g.3Z(i)&4?-1:1};19{w=12(g,i){17 n,m,p=[],q=[];n=g.1o;m=i.1o;17 u=n;6(g===i){h=1c;14 0}19 6(n===m)14 I(g,i);19 6(n){6(!m)14 1}19 14-1;1a(;u;){p.54(u);u=u.1o}1a(u=m;u;){q.54(u);u=u.1o}n=p.18;m=q.18;1a(u=0;u<n&&u<m;u++)6(p[u]!==q[u])14 I(p[u],q[u]);14 u===n?I(g,q[u],-1):I(p[u],i,1)};I=12(g,i,n){6(g===i)14 n;1a(g=g.2Y;g;){6(g===i)14-1;g=g.2Y}14 1}}k.6o=12(g){1a(17 i="",n,m=0;g[m];m++){n=g[m];6(n.1e===3||n.1e===4)i+=n.64;19 6(n.1e!==8)i+=k.6o(n.2H)}14 i};(12(){17 g=t.22("1K"),i="29"+(3c 7a).91(),n=t.1J;g.2l="<a 2P=\'"+i+"\'/>";n.2N(g,n.1B);6(t.4i(i)){o.1R.ID=12(m,p,q){6(1g p.4i!=="2R"&&!q)14(p=p.4i(m[1]))?p.id===m[1]||1g p.3V!=="2R"&&p.3V("id").64===m[1]?[p]:B:[]};o.1D.ID=12(m,p){17 q=1g m.3V!=="2R"&&m.3V("id");14 m.1e===1&&q&&q.64===p}}n.2F(g);n=g=1b})();(12(){17 g=t.22("1K");g.31(t.createComment(""));6(g.2a("*").18>0)o.1R.4w=12(i,n){17 m=n.2a(i[1]);6(i[1]==="*"){1a(17 p=[],q=0;m[q];q++)m[q].1e===1&&p.1v(m[q]);m=p}14 m};g.2l="<a 2O=\'#\'></a>";6(g.1B&&1g g.1B.2b!=="2R"&&g.1B.2b("2O")!=="#")o.6m.2O=12(i){14 i.2b("2O",2)};g=1b})();t.5k&&12(){17 g=k,i=t.22("1K");i.2l="<p 3j=\'9W\'></p>";6(!(i.5k&&i.5k(".9W").18===0)){k=12(m,p,q,u){p=p||t;m=m.1p(/\\=\\s*([^\'"\\]]*)\\s*\\]/g,"=\'$1\']");6(!u&&!k.4v(p))6(p.1e===9)1H{14 C(p.5k(m),q)}1I(y){}19 6(p.1e===1&&p.1m.1E()!=="1M"){17 F=p.2b("id"),M=F||"__sizzle__";F||p.7k("id",M);1H{14 C(p.5k("#"+M+" "+m),q)}1I(N){}finally{F||p.3T("id")}}14 g(m,p,q,u)};1a(17 n in g)k[n]=g[n];i=1b}}();(12(){17 g=t.1J,i=g.5g||g.mozMatchesSelector||g.webkitMatchesSelector||g.msMatchesSelector,n=1d;1H{i.1l(t.1J,"[1f!=\'\']:sizzle")}1I(m){n=1c}6(i)k.5g=12(p,q){q=q.1p(/\\=\\s*([^\'"\\]]*)\\s*\\]/g,"=\'$1\']");6(!k.4v(p))1H{6(n||!o.2g.4z.1f(q)&&!/!=/.1f(q))14 i.1l(p,q)}1I(u){}14 k(q,1b,1b,[p]).18>0}})();(12(){17 g=t.22("1K");g.2l="<1K 3j=\'1f e\'></1K><1K 3j=\'1f\'></1K>";6(!(!g.5l||g.5l("e").18===0)){g.7j.24="e";6(g.5l("e").18!==1){o.6h.2y(1,0,"5h");o.1R.5h=12(i,n,m){6(1g n.5l!=="2R"&&!m)14 n.5l(i[1])};g=1b}}})();k.2W=t.1J.2W?12(g,i){14 g!==i&&(g.2W?g.2W(i):1c)}:t.1J.3Z?12(g,i){14!!(g.3Z(i)&16)}:12(){14 1d};k.4v=12(g){14(g=(g?g.21||g:0).1J)?g.1m!=="HTML":1d};17 L=12(g,i){1a(17 n,m=[],p="",q=i.1e?[i]:i;n=o.2g.4z.1Z(g);){p+=n[0];g=g.1p(o.2g.4z,"")}g=o.37[g]?g+"*":g;n=0;1a(17 u=q.18;n<u;n++)k(g,q[n],m);14 k.1D(p,m)};c.1R=k;c.25=k.9O;c.25[":"]=c.25.2V;c.6r=k.7R;c.1O=k.6o;c.7v=k.4v;c.2W=k.2W})();17 Za=/Until$/,$a=/^(?:9Y|9Z|a0)/,ab=/,/,Na=/^.[^:#\\[\\.,]*$/,bb=2M.2e.28,cb=c.25.2g.3Y;c.fn.1t({1R:12(a){1a(17 b=7.2B("","1R",a),d=0,e=0,f=7.18;e<f;e++){d=b.18;c.1R(a,7[e],b);6(e>0)1a(17 h=d;h<b.18;h++)1a(17 l=0;l<d;l++)6(b[l]===b[h]){b.2y(h--,1);1U}}14 b},9T:12(a){17 b=c(a);14 7.1D(12(){1a(17 d=0,e=b.18;d<e;d++)6(c.2W(7,b[d]))14 1c})},5i:12(a){14 7.2B(ma(7,a,1d),"5i",a)},1D:12(a){14 7.2B(ma(7,a,1c),"1D",a)},is:12(a){14!!a&&c.1D(a,7).18>0},48:12(a,b){17 d=[],e,f,h=7[0];6(c.2t(a)){17 l,k={},o=1;6(h&&a.18){e=0;1a(f=a.18;e<f;e++){l=a[e];k[l]||(k[l]=c.25.2g.3Y.1f(l)?c(l,b||7.1Q):l)}1a(;h&&h.21&&h!==b;){1a(l in k){e=k[l];6(e.4U?e.7X(h)>-1:c(h).is(e))d.1v({1L:l,1w:h,4M:o})}h=h.1o;o++}}14 d}l=cb.1f(a)?c(a,b||7.1Q):1b;e=0;1a(f=7.18;e<f;e++)1a(h=7[e];h;)6(l?l.7X(h)>-1:c.1R.5g(h,a)){d.1v(h);1U}19{h=h.1o;6(!h||!h.21||h===b)1U}d=d.18>1?c.6r(d):d;14 7.2B(d,"48",a)},7X:12(a){6(!a||1g a==="1u")14 c.3q(7[0],a?c(a):7.6n().a1());14 c.3q(a.4U?a[0]:a,7)},2r:12(a,b){17 d=1g a==="1u"?c(a,b||7.1Q):c.30(a),e=c.3M(7.2u(),d);14 7.2B(!d[0]||!d[0].1o||d[0].1o.1e===11||!e[0]||!e[0].1o||e[0].1o.1e===11?e:c.6r(e))},andSelf:12(){14 7.2r(7.74)}});c.1k({6n:12(a){14(a=a.1o)&&a.1e!==11?a:1b},9Y:12(a){14 c.40(a,"1o")},parentsUntil:12(a,b,d){14 c.40(a,"1o",d)},next:12(a){14 c.3E(a,2,"2Y")},prev:12(a){14 c.3E(a,2,"4A")},nextAll:12(a){14 c.40(a,"2Y")},a0:12(a){14 c.40(a,"4A")},nextUntil:12(a,b,d){14 c.40(a,"2Y",d)},9Z:12(a,b,d){14 c.40(a,"4A",d)},siblings:12(a){14 c.7Y(a.1o.1B,a)},a1:12(a){14 c.7Y(a.1B)},a2:12(a){14 c.1m(a,"iframe")?a.contentDocument||a.contentWindow.3K:c.30(a.2H)}},12(a,b){c.fn[a]=12(d,e){17 f=c.2m(7,b,d);Za.1f(a)||(e=d);6(e&&1g e==="1u")f=c.1D(e,f);f=7.18>1?c.6r(f):f;6((7.18>1||ab.1f(e))&&$a.1f(a))f=f.reverse();14 7.2B(f,a,bb.1l(1s).3b(","))}});c.1t({1D:12(a,b,d){6(d)a=":5i("+a+")";14 b.18===1?c.1R.5g(b[0],a)?[b[0]]:[]:c.1R.9K(a,b)},40:12(a,b,d){17 e=[];1a(a=a[b];a&&a.1e!==9&&(d===B||a.1e!==1||!c(a).is(d));){a.1e===1&&e.1v(a);a=a[b]}14 e},3E:12(a,b,d){b=b||1;1a(17 e=0;a;a=a[d])6(a.1e===1&&++e===b)1U;14 a},7Y:12(a,b){1a(17 d=[];a;a=a.2Y)a.1e===1&&a!==b&&d.1v(a);14 d}});17 za=/ 4R\\d+="(?:\\d+|1b)"/g,$=/^\\s+/,Aa=/<(?!a3|br|a4|7m|hr|img|3f|7b|meta|5n)(([\\w:]+)[^>]*)\\/>/ig,Ba=/<([\\w:]+)/,db=/<2w/i,eb=/<|&#?\\w+;/,Ca=/<(?:29|1M|7m|4n|1h)/i,Da=/34\\s*(?:[^=]|=\\s*.34.)/i,fb=/\\=([^="\'>\\s]+\\/)>/g,P={4n:[1,"<2p 6b=\'6b\'>","</2p>"],legend:[1,"<a7>","</a7>"],a8:[1,"<2f>","</2f>"],tr:[2,"<2f><2w>","</2w></2f>"],td:[3,"<2f><2w><tr>","</tr></2w></2f>"],a4:[2,"<2f><2w></2w><84>","</84></2f>"],a3:[1,"<2m>","</2m>"],2U:[0,"",""]};P.9t=P.4n;P.2w=P.tfoot=P.84=P.caption=P.a8;P.th=P.td;6(!c.1q.96)P.2U=[1,"1K<1K>","</1K>"];c.fn.1t({1O:12(a){6(c.1x(a))14 7.1k(12(b){17 d=c(7);d.1O(a.1l(7,b,d.1O()))});6(1g a!=="1M"&&a!==B)14 7.5j().3m((7[0]&&7[0].21||t).4X(a));14 c.1O(7)},6s:12(a){6(c.1x(a))14 7.1k(12(d){c(7).6s(a.1l(7,d))});6(7[0]){17 b=c(a,7[0].21).eq(0).85(1c);7[0].1o&&b.2N(7[0]);b.2m(12(){1a(17 d=7;d.1B&&d.1B.1e===1;)d=d.1B;14 d}).3m(7)}14 7},a9:12(a){6(c.1x(a))14 7.1k(12(b){c(7).a9(a.1l(7,b))});14 7.1k(12(){17 b=c(7),d=b.a2();d.18?d.6s(a):b.3m(a)})},wrap:12(a){14 7.1k(12(){c(7).6s(a)})},unwrap:12(){14 7.6n().1k(12(){c.1m(7,"1V")||c(7).5o(7.2H)}).4k()},3m:12(){14 7.41(1s,1c,12(a){7.1e===1&&7.31(a)})},ac:12(){14 7.41(1s,1c,12(a){7.1e===1&&7.2N(a,7.1B)})},6t:12(){6(7[0]&&7[0].1o)14 7.41(1s,1d,12(b){7.1o.2N(b,7)});19 6(1s.18){17 a=c(1s[0]);a.1v.1F(a,7.5O());14 7.2B(a,"6t",1s)}},86:12(){6(7[0]&&7[0].1o)14 7.41(1s,1d,12(b){7.1o.2N(b,7.2Y)});19 6(1s.18){17 a=7.2B(7,"86",1s);a.1v.1F(a,c(1s[0]).5O());14 a}},2d:12(a,b){1a(17 d=0,e;(e=7[d])!=1b;d++)6(!a||c.1D(a,[e]).18){6(!b&&e.1e===1){c.5p(e.2a("*"));c.5p([e])}e.1o&&e.1o.2F(e)}14 7},5j:12(){1a(17 a=0,b;(b=7[a])!=1b;a++)1a(b.1e===1&&c.5p(b.2a("*"));b.1B;)b.2F(b.1B);14 7},85:12(a){17 b=7.2m(12(){6(!c.1q.7f&&!c.7v(7)){17 d=7.outerHTML,e=7.21;6(!d){d=e.22("1K");d.31(7.3L(1c));d=d.2l}14 c.87([d.1p(za,"").1p(fb,\'="$1">\').1p($,"")],e)[0]}19 14 7.3L(1c)});6(a===1c){na(7,b);na(7.1R("*"),b.1R("*"))}14 b},2S:12(a){6(a===B)14 7[0]&&7[0].1e===1?7[0].2l.1p(za,""):1b;19 6(1g a==="1u"&&!Ca.1f(a)&&(c.1q.7d||!$.1f(a))&&!P[(Ba.1Z(a)||["",""])[1].1E()]){a=a.1p(Aa,"<$1></$2>");1H{1a(17 b=0,d=7.18;b<d;b++)6(7[b].1e===1){c.5p(7[b].2a("*"));7[b].2l=a}}1I(e){7.5j().3m(a)}}19 c.1x(a)?7.1k(12(f){17 h=c(7);h.2S(a.1l(7,f,h.2S()))}):7.5j().3m(a);14 7},5o:12(a){6(7[0]&&7[0].1o){6(c.1x(a))14 7.1k(12(b){17 d=c(7),e=d.2S();d.5o(a.1l(7,b,e))});6(1g a!=="1u")a=c(a).ad();14 7.1k(12(){17 b=7.2Y,d=7.1o;c(7).2d();b?c(b).6t(a):c(d).3m(a)})}19 14 7.2B(c(c.1x(a)?a():a),"5o",a)},ad:12(a){14 7.2d(a,1c)},41:12(a,b,d){17 e,f,h,l=a[0],k=[];6(!c.1q.5Z&&1s.18===3&&1g l==="1u"&&Da.1f(l))14 7.1k(12(){c(7).41(a,b,d,1c)});6(c.1x(l))14 7.1k(12(x){17 r=c(7);a[0]=l.1l(7,x,b?r.2S():B);r.41(a,b,d)});6(7[0]){e=l&&l.1o;e=c.1q.1o&&e&&e.1e===11&&e.2H.18===7.18?{4T:e}:c.72(a,7,k);h=e.4T;6(f=h.2H.18===1?h=h.1B:h.1B){b=b&&c.1m(f,"tr");f=0;1a(17 o=7.18;f<o;f++)d.1l(b?c.1m(7[f],"2f")?7[f].2a("2w")[0]||7[f].31(7[f].21.22("2w")):7[f]:7[f],f>0||e.73||7.18>1?h.3L(1c):h)}k.18&&c.1k(k,Oa)}14 7}});c.72=12(a,b,d){17 e,f,h;b=b&&b[0]?b[0].21||b[0]:t;6(a.18===1&&1g a[0]==="1u"&&a[0].18<512&&b===t&&!Ca.1f(a[0])&&(c.1q.5Z||!Da.1f(a[0]))){f=1c;6(h=c.88[a[0]])6(h!==1)e=h}6(!e){e=b.9c();c.87(a,b,e,d)}6(f)c.88[a[0]]=h?e:1;14{4T:e,73:f}};c.88={};c.1k({8S:"3m",prependTo:"ac",2N:"6t",insertAfter:"86",replaceAll:"5o"},12(a,b){c.fn[a]=12(d){17 e=[];d=c(d);17 f=7.18===1&&7[0].1o;6(f&&f.1e===11&&f.2H.18===1&&d.18===1){d[b](7[0]);14 7}19{f=0;1a(17 h=d.18;f<h;f++){17 l=(f>0?7.85(1c):7).2u();c(d[f])[b](l);e=e.5I(l)}14 7.2B(e,a,d.1L)}}});c.1t({87:12(a,b,d,e){b=b||t;6(1g b.22==="2R")b=b.21||b[0]&&b[0].21||t;1a(17 f=[],h=0,l;(l=a[h])!=1b;h++){6(1g l==="3t")l+="";6(l){6(1g l==="1u"&&!eb.1f(l))l=b.4X(l);19 6(1g l==="1u"){l=l.1p(Aa,"<$1></$2>");17 k=(Ba.1Z(l)||["",""])[1].1E(),o=P[k]||P.2U,x=o[0],r=b.22("1K");1a(r.2l=o[1]+l+o[2];x--;)r=r.7j;6(!c.1q.2w){x=db.1f(l);k=k==="2f"&&!x?r.1B&&r.1B.2H:o[1]==="<2f>"&&!x?r.2H:[];1a(o=k.18-1;o>=0;--o)c.1m(k[o],"2w")&&!k[o].2H.18&&k[o].1o.2F(k[o])}!c.1q.7d&&$.1f(l)&&r.2N(b.4X($.1Z(l)[0]),r.1B);l=r.2H}6(l.1e)f.1v(l);19 f=c.3M(f,l)}}6(d)1a(h=0;f[h];h++)6(e&&c.1m(f[h],"29")&&(!f[h].1j||f[h].1j.1E()==="1O/3Q"))e.1v(f[h].1o?f[h].1o.2F(f[h]):f[h]);19{f[h].1e===1&&f.2y.1F(f,[h+1,0].5I(c.30(f[h].2a("29"))));d.31(f[h])}14 f},5p:12(a){1a(17 b,d,e=c.2Q,f=c.1n.35,h=c.1q.5Y,l=0,k;(k=a[l])!=1b;l++)6(!(k.1m&&c.52[k.1m.1E()]))6(d=k[c.2K]){6((b=e[d])&&b.2h)1a(17 o in b.2h)f[o]?c.1n.2d(k,o):c.7y(k,o,b.27);6(h)2q k[c.2K];19 k.3T&&k.3T(c.2K);2q e[d]}}});17 Ea=/ae\\([^)]*\\)/i,gb=/23=([^)]*)/,hb=/-([a-z])/ig,ib=/([A-Z])/g,Fa=/^-?\\d+(?:px)?$/i,jb=/^-?\\d/,kb={2j:"5q",ak:"2X",1P:"5J"},Pa=["al","Right"],Qa=["am","Bottom"],W,Ga,aa,lb=12(a,b){14 b.5U()};c.fn.1y=12(a,b){6(1s.18===2&&b===B)14 7;14 c.5V(7,a,b,1c,12(d,e,f){14 f!==B?c.1h(d,e,f):c.1y(d,e)})};c.1t({5r:{23:{2u:12(a,b){6(b){17 d=W(a,"23","23");14 d===""?"1":d}19 14 a.1h.23}}},ao:{zIndex:1c,fontWeight:1c,23:1c,50:1c,lineHeight:1c},8c:{"7c":c.1q.5X?"5X":"styleFloat"},1h:12(a,b,d,e){6(!(!a||a.1e===3||a.1e===8||!a.1h)){17 f,h=c.6u(b),l=a.1h,k=c.5r[h];b=c.8c[h]||h;6(d!==B){6(!(1g d==="3t"&&46(d)||d==1b)){6(1g d==="3t"&&!c.ao[h])d+="px";6(!k||!("38"in k)||(d=k.38(a,d))!==B)1H{l[b]=d}1I(o){}}}19{6(k&&"2u"in k&&(f=k.2u(a,1d,e))!==B)14 f;14 l[b]}}},1y:12(a,b,d){17 e,f=c.6u(b),h=c.5r[f];b=c.8c[f]||f;6(h&&"2u"in h&&(e=h.2u(a,1c,d))!==B)14 e;19 6(W)14 W(a,b,f)},ap:12(a,b,d){17 e={},f;1a(f in b){e[f]=a.1h[f];a.1h[f]=b[f]}d.1l(a);1a(f in b)a.1h[f]=e[f]},6u:12(a){14 a.1p(hb,lb)}});c.curCSS=c.1y;c.1k(["3k","2z"],12(a,b){c.5r[b]={2u:12(d,e,f){17 h;6(e){6(d.4e!==0)h=oa(d,b,f);19 c.ap(d,kb,12(){h=oa(d,b,f)});6(h<=0){h=W(d,b,b);6(h==="8d"&&aa)h=aa(d,b,b);6(h!=1b)14 h===""||h==="6v"?"8d":h}6(h<0||h==1b){h=d.1h[b];14 h===""||h==="6v"?"8d":h}14 1g h==="1u"?h:h+"px"}},38:12(d,e){6(Fa.1f(e)){e=1N(e);6(e>=0)14 e+"px"}19 14 e}}});6(!c.1q.23)c.5r.23={2u:12(a,b){14 gb.1f((b&&a.3F?a.3F.1D:a.1h.1D)||"")?1N(3H.$1)/aq+"":b?"1":""},38:12(a,b){17 d=a.1h;d.50=1;17 e=c.46(b)?"":"ae(23="+b*aq+")",f=d.1D||"";d.1D=Ea.1f(f)?f.1p(Ea,e):d.1D+" "+e}};6(t.4O&&t.4O.6w)Ga=12(a,b,d){17 e;d=d.1p(ib,"-$1").1E();6(!(b=a.21.4O))14 B;6(b=b.6w(a,1b)){e=b.getPropertyValue(d);6(e===""&&!c.2W(a.21.1J,a))e=c.1h(a,d)}14 e};6(t.1J.3F)aa=12(a,b){17 d,e,f=a.3F&&a.3F[b],h=a.1h;6(!Fa.1f(f)&&jb.1f(f)){d=h.1C;e=a.8e.1C;a.8e.1C=a.3F.1C;h.1C=b==="fontSize"?"1em":f||0;f=h.pixelLeft+"px";h.1C=d;a.8e.1C=e}14 f===""?"6v":f};W=Ga||aa;6(c.25&&c.25.2V){c.25.2V.2X=12(a){17 b=a.5H;14 a.4e===0&&b===0||!c.1q.4Z&&(a.1h.1P||c.1y(a,"1P"))==="2G"};c.25.2V.ar=12(a){14!c.25.2V.2X(a)}}17 mb=c.2i(),nb=/<29\\b[^<]*(?:(?!<\\/29>)<[^<]*)*<\\/29>/gi,ob=/^(?:2p|57)/i,pb=/^(?:94|date|datetime|email|2X|month|3t|5d|range|search|tel|1O|time|1A|week)$/i,qb=/^(?:4B|HEAD)$/,Ra=/\\[\\]$/,T=/\\=\\?(&|$)/,ja=/\\?/,rb=/([?&])_=[^&]*/,sb=/^(\\w+:)?\\/\\/([^\\/?#]+)/,tb=/%20/g,ub=/#.*$/,Ha=c.fn.5S;c.fn.1t({5S:12(a,b,d){6(1g a!=="1u"&&Ha)14 Ha.1F(7,1s);19 6(!7.18)14 7;17 e=a.1W(" ");6(e>=0){17 f=a.28(e,a.18);a=a.28(0,e)}e="4B";6(b)6(c.1x(b)){d=b;b=1b}19 6(1g b==="1M"){b=c.5n(b,c.42.8g);e="aB"}17 h=7;c.4d({1A:a,1j:e,2s:"2S",1i:b,2I:12(l,k){6(k==="3G"||k==="8h")h.2S(f?c("<1K>").3m(l.6y.1p(nb,"")).1R(f):l.6y);d&&h.1k(d,[l.6y,k,l])}});14 7},serialize:12(){14 c.5n(7.aC())},aC:12(){14 7.2m(12(){14 7.aD?c.30(7.aD):7}).1D(12(){14 7.2P&&!7.3g&&(7.34||ob.1f(7.1m)||pb.1f(7.1j))}).2m(12(a,b){17 d=c(7).3U();14 d==1b?1b:c.2t(d)?c.2m(d,12(e){14{2P:b.2P,2J:e}}):{2P:b.2P,2J:d}}).2u()}});c.1k("aE 8i aF aG aH aI".2k(" "),12(a,b){c.fn[b]=12(d){14 7.6d(b,d)}});c.1t({2u:12(a,b,d,e){6(c.1x(b)){e=e||d;d=b;b=1b}14 c.4d({1j:"4B",1A:a,1i:b,3G:d,2s:e})},getScript:12(a,b){14 c.2u(a,1b,b,"29")},getJSON:12(a,b,d){14 c.2u(a,b,d,"43")},post:12(a,b,d,e){6(c.1x(b)){e=e||d;d=b;b={}}14 c.4d({1j:"aB",1A:a,1i:b,3G:d,2s:e})},ajaxSetup:12(a){c.1t(c.42,a)},42:{1A:5s.2O,2T:1c,1j:"4B",8j:"6z/x-www-5a-urlencoded",aJ:1c,3I:1c,6A:12(){14 3c E.8k},6B:{5t:"6z/5t, 1O/5t",2S:"1O/2S",29:"1O/3Q, 6z/3Q",43:"6z/43, 1O/3Q",1O:"1O/plain",2U:"*/*"}},4d:12(a){17 b=c.1t(1c,{},c.42,a),d,e,f,h=b.1j.5U(),l=qb.1f(h);b.1A=b.1A.1p(ub,"");b.1Q=a&&a.1Q!=1b?a.1Q:b;6(b.1i&&b.aJ&&1g b.1i!=="1u")b.1i=c.5n(b.1i,b.8g);6(b.2s==="6C"){6(h==="4B")T.1f(b.1A)||(b.1A+=(ja.1f(b.1A)?"&":"?")+(b.6C||"aK")+"=?");19 6(!b.1i||!T.1f(b.1i))b.1i=(b.1i?b.1i+"&":"")+(b.6C||"aK")+"=?";b.2s="43"}6(b.2s==="43"&&(b.1i&&T.1f(b.1i)||T.1f(b.1A))){d=b.jsonpCallback||"6C"+mb++;6(b.1i)b.1i=(b.1i+"").1p(T,"="+d+"$1");b.1A=b.1A.1p(T,"="+d+"$1");b.2s="29";17 k=E[d];E[d]=12(m){6(c.1x(k))k(m);19{E[d]=B;1H{2q E[d]}1I(p){}}f=m;c.6D(b,w,e,f);c.4C(b,w,e,f);r&&r.2F(A)}}6(b.2s==="29"&&b.2Q===1b)b.2Q=1d;6(b.2Q===1d&&l){17 o=c.2i(),x=b.1A.1p(rb,"$1_="+o);b.1A=x+(x===b.1A?(ja.1f(b.1A)?"&":"?")+"_="+o:"")}6(b.1i&&l)b.1A+=(ja.1f(b.1A)?"&":"?")+b.1i;b.2T&&c.6E++===0&&c.1n.2o("aE");o=(o=sb.1Z(b.1A))&&(o[1]&&o[1].1E()!==5s.8l||o[2].1E()!==5s.host);6(b.2s==="29"&&h==="4B"&&o){17 r=t.2a("90")[0]||t.1J,A=t.22("29");6(b.aL)A.charset=b.aL;A.5G=b.1A;6(!d){17 C=1d;A.76=A.3P=12(){6(!C&&(!7.3O||7.3O==="loaded"||7.3O==="2I")){C=1c;c.6D(b,w,e,f);c.4C(b,w,e,f);A.76=A.3P=1b;r&&A.1o&&r.2F(A)}}}r.2N(A,r.1B);14 B}17 J=1d,w=b.6A();6(w){b.aM?w.aN(h,b.1A,b.3I,b.aM,b.5d):w.aN(h,b.1A,b.3I);1H{6(b.1i!=1b&&!l||a&&a.8j)w.5u("Content-Type",b.8j);6(b.aO){c.6F[b.1A]&&w.5u("If-aQ-Since",c.6F[b.1A]);c.6G[b.1A]&&w.5u("If-None-Match",c.6G[b.1A])}o||w.5u("X-Requested-With","8k");w.5u("Accept",b.2s&&b.6B[b.2s]?b.6B[b.2s]+", */*; q=0.01":b.6B.2U)}1I(I){}6(b.aR&&b.aR.1l(b.1Q,w,b)===1d){b.2T&&c.6E--===1&&c.1n.2o("8i");w.4D();14 1d}b.2T&&c.5v(b,"aI",[w,b]);17 L=w.3P=12(m){6(!w||w.3O===0||m==="4D"){J||c.4C(b,w,e,f);J=1c;6(w)w.3P=c.4W}19 6(!J&&w&&(w.3O===4||m==="44")){J=1c;w.3P=c.4W;e=m==="44"?"44":!c.aS(w)?"2v":b.aO&&c.aT(w,b.1A)?"8h":"3G";17 p;6(e==="3G")1H{f=c.aU(w,b.2s,b)}1I(q){e="8m";p=q}6(e==="3G"||e==="8h")d||c.6D(b,w,e,f);19 c.8n(b,w,e,p);d||c.4C(b,w,e,f);m==="44"&&w.4D();6(b.3I)w=1b}};1H{17 g=w.4D;w.4D=12(){w&&78.2e.1l.1l(g,w);L("4D")}}1I(i){}b.3I&&b.44>0&&4Q(12(){w&&!J&&L("44")},b.44);1H{w.send(l||b.1i==1b?1b:b.1i)}1I(n){c.8n(b,w,1b,n);c.4C(b,w,e,f)}b.3I||L();14 w}},5n:12(a,b){17 d=[],e=12(h,l){l=c.1x(l)?l():l;d[d.18]=aV(h)+"="+aV(l)};6(b===B)b=c.42.8g;6(c.2t(a)||a.4U)c.1k(a,12(){e(7.2P,7.2J)});19 1a(17 f in a)da(f,a[f],b,e);14 d.3b("&").1p(tb,"+")}});c.1t({6E:0,6F:{},6G:{},8n:12(a,b,d,e){a.2v&&a.2v.1l(a.1Q,b,d,e);a.2T&&c.5v(a,"aG",[b,a,e])},6D:12(a,b,d,e){a.3G&&a.3G.1l(a.1Q,e,d,b);a.2T&&c.5v(a,"aH",[b,a])},4C:12(a,b,d){a.2I&&a.2I.1l(a.1Q,b,d);a.2T&&c.5v(a,"aF",[b,a]);a.2T&&c.6E--===1&&c.1n.2o("8i")},5v:12(a,b,d){(a.1Q&&a.1Q.1A==1b?c(a.1Q):c.1n).2o(b,d)},aS:12(a){1H{14!a.4E&&5s.8l==="5e:"||a.4E>=aW&&a.4E<300||a.4E===aX||a.4E===1223}1I(b){}14 1d},aT:12(a,b){17 d=a.8o("Last-aQ"),e=a.8o("Etag");6(d)c.6F[b]=d;6(e)c.6G[b]=e;14 a.4E===aX},aU:12(a,b,d){17 e=a.8o("content-1j")||"",f=b==="5t"||!b&&e.1W("5t")>=0;a=f?a.responseXML:a.6y;f&&a.1J.1m==="8m"&&c.2v("8m");6(d&&d.aY)a=d.aY(a,b);6(1g a==="1u")6(b==="43"||!b&&e.1W("43")>=0)a=c.6R(a);19 6(b==="29"||!b&&e.1W("3Q")>=0)c.6V(a);14 a}});6(E.aZ)c.42.6A=12(){6(E.5s.8l!=="5e:")1H{14 3c E.8k}1I(a){}1H{14 3c E.aZ("Microsoft.XMLHTTP")}1I(b){}};c.1q.4d=!!c.42.6A();17 ea={},vb=/^(?:3D|2C|2D)$/,wb=/^([+\\-]=)?([\\d+.\\-]+)(.*)$/,ba,pa=[["3k","6H","marginBottom","paddingTop","paddingBottom"],["2z","8p","marginRight","9d","paddingRight"],["23"]];c.fn.1t({2C:12(a,b,d){6(a||a===0)14 7.4F(S("2C",3),a,b,d);19{d=0;1a(17 e=7.18;d<e;d++){a=7[d];b=a.1h.1P;6(!c.1i(a,"6I")&&b==="2G")b=a.1h.1P="";b===""&&c.1y(a,"1P")==="2G"&&c.1i(a,"6I",qa(a.1m))}1a(d=0;d<e;d++){a=7[d];b=a.1h.1P;6(b===""||b==="2G")a.1h.1P=c.1i(a,"6I")||""}14 7}},2D:12(a,b,d){6(a||a===0)14 7.4F(S("2D",3),a,b,d);19{a=0;1a(b=7.18;a<b;a++){d=c.1y(7[a],"1P");d!=="2G"&&c.1i(7[a],"6I",d)}1a(a=0;a<b;a++)7[a].1h.1P="2G";14 7}},b2:c.fn.3D,3D:12(a,b,d){17 e=1g a==="5Q";6(c.1x(a)&&c.1x(b))7.b2.1F(7,1s);19 a==1b||e?7.1k(12(){17 f=e?a:c(7).is(":2X");c(7)[f?"2C":"2D"]()}):7.4F(S("3D",3),a,b,d);14 7},fadeTo:12(a,b,d,e){14 7.1D(":2X").1y("23",0).2C().4k().4F({23:b},a,d,e)},4F:12(a,b,d,e){17 f=c.b3(b,d,e);6(c.4h(a))14 7.1k(f.2I);14 7[f.2L===1d?"1k":"2L"](12(){17 h=c.1t({},f),l,k=7.1e===1,o=k&&c(7).is(":2X"),x=7;1a(l in a){17 r=c.6u(l);6(l!==r){a[r]=a[l];2q a[l];l=r}6(a[l]==="2D"&&o||a[l]==="2C"&&!o)14 h.2I.1l(7);6(k&&(l==="3k"||l==="2z")){h.3o=[7.1h.3o,7.1h.overflowX,7.1h.overflowY];6(c.1y(7,"1P")==="4q"&&c.1y(7,"7c")==="2G")6(c.1q.7g)6(qa(7.1m)==="4q")7.1h.1P="4q-5J";19{7.1h.1P="4q";7.1h.50=1}19 7.1h.1P="4q-5J"}6(c.2t(a[l])){(h.6J=h.6J||{})[l]=a[l][1];a[l]=a[l][0]}}6(h.3o!=1b)7.1h.3o="2X";h.5w=c.1t({},a);c.1k(a,12(A,C){17 J=3c c.fx(x,h,A);6(vb.1f(C))J[C==="3D"?o?"2C":"2D":C](a);19{17 w=wb.1Z(C),I=J.5x()||0;6(w){17 L=1N(w[2]),g=w[3]||"px";6(g!=="px"){c.1h(x,A,(L||1)+g);I=(L||1)/J.5x()*I;c.1h(x,A,I+g)}6(w[1])L=(w[1]==="-="?-1:1)*L+I;J.5y(I,L,g)}19 J.5y(I,C,"")}});14 1c})},8q:12(a,b){17 d=c.5z;a&&7.2L([]);7.1k(12(){1a(17 e=d.18-1;e>=0;e--)6(d[e].1w===7){b&&d[e](1c);d.2y(e,1)}});b||7.3y();14 7}});c.1k({slideDown:S("2C",1),slideUp:S("2D",1),slideToggle:S("3D",1),fadeIn:{23:"2C"},fadeOut:{23:"2D"},fadeToggle:{23:"3D"}},12(a,b){c.fn[a]=12(d,e,f){14 7.4F(b,d,e,f)}});c.1t({b3:12(a,b,d){17 e=a&&1g a==="1M"?c.1t({},a):{2I:d||!d&&b||c.1x(a)&&a,3p:a,5A:d&&b||b&&!c.1x(b)&&b};e.3p=c.fx.off?0:1g e.3p==="3t"?e.3p:e.3p in c.fx.56?c.fx.56[e.3p]:c.fx.56.2U;e.8r=e.2I;e.2I=12(){e.2L!==1d&&c(7).3y();c.1x(e.8r)&&e.8r.1l(7)};14 e},5A:{b4:12(a,b,d,e){14 d+e*a},8s:12(a,b,d,e){14(-4G.cos(a*4G.PI)/2+0.5)*e+d}},5z:[],fx:12(a,b,d){7.1G=b;7.1w=a;7.26=d;6(!b.5B)b.5B={}}});c.fx.2e={8t:12(){7.1G.45&&7.1G.45.1l(7.1w,7.2i,7);(c.fx.45[7.26]||c.fx.45.2U)(7)},5x:12(){6(7.1w[7.26]!=1b&&(!7.1w.1h||7.1w.1h[7.26]==1b))14 7.1w[7.26];17 a=1N(c.1y(7.1w,7.26));14 a&&a>-1E4?a:0},5y:12(a,b,d){12 e(l){14 f.45(l)}17 f=7,h=c.fx;7.8u=c.2i();7.6K=a;7.4k=b;7.8v=d||7.8v||"px";7.2i=7.6K;7.6L=7.6M=0;e.1w=7.1w;6(e()&&c.5z.1v(e)&&!ba)ba=8X(h.b5,h.b6)},2C:12(){7.1G.5B[7.26]=c.1h(7.1w,7.26);7.1G.2C=1c;7.5y(7.26==="2z"||7.26==="3k"?1:0,7.5x());c(7.1w).2C()},2D:12(){7.1G.5B[7.26]=c.1h(7.1w,7.26);7.1G.2D=1c;7.5y(7.5x(),0)},45:12(a){17 b=c.2i(),d=1c;6(a||b>=7.1G.3p+7.8u){7.2i=7.4k;7.6L=7.6M=1;7.8t();7.1G.5w[7.26]=1c;1a(17 e in 7.1G.5w)6(7.1G.5w[e]!==1c)d=1d;6(d){6(7.1G.3o!=1b&&!c.1q.7h){17 f=7.1w,h=7.1G;c.1k(["","X","Y"],12(k,o){f.1h["3o"+o]=h.3o[k]})}7.1G.2D&&c(7.1w).2D();6(7.1G.2D||7.1G.2C)1a(17 l in 7.1G.5w)c.1h(7.1w,l,7.1G.5B[l]);7.1G.2I.1l(7.1w)}14 1d}19{a=b-7.8u;7.6M=a/7.1G.3p;b=7.1G.5A||(c.5A.8s?"8s":"b4");7.6L=c.5A[7.1G.6J&&7.1G.6J[7.26]||b](7.6M,a,0,1,7.1G.3p);7.2i=7.6K+(7.4k-7.6K)*7.6L;7.8t()}14 1c}};c.1t(c.fx,{b5:12(){1a(17 a=c.5z,b=0;b<a.18;b++)a[b]()||a.2y(b--,1);a.18||c.fx.8q()},b6:13,8q:12(){clearInterval(ba);ba=1b},56:{slow:600,fast:aW,2U:400},45:{23:12(a){c.1h(a.1w,"23",a.2i)},2U:12(a){6(a.1w.1h&&a.1w.1h[a.26]!=1b)a.1w.1h[a.26]=(a.26==="2z"||a.26==="3k"?4G.6N(0,a.2i):a.2i)+a.8v;19 a.1w[a.26]=a.2i}}});6(c.25&&c.25.2V)c.25.2V.animated=12(a){14 c.4c(c.5z,12(b){14 a===b.1w}).18};17 xb=/^t(?:able|d|h)$/i,Ia=/^(?:1V|2S)$/i;c.fn.1Y="b8"in t.1J?12(a){17 b=7[0],d;6(a)14 7.1k(12(l){c.1Y.8x(7,a,l)});6(!b||!b.21)14 1b;6(b===b.21.1V)14 c.1Y.8y(b);1H{d=b.b8()}1I(e){}17 f=b.21,h=f.1J;6(!d||!c.2W(h,b))14 d||{1T:0,1C:0};b=f.1V;f=fa(f);14{1T:d.1T+(f.b9||c.1q.4p&&h.3C||b.3C)-(h.6a||b.6a||0),1C:d.1C+(f.8z||c.1q.4p&&h.3B||b.3B)-(h.69||b.69||0)}}:12(a){17 b=7[0];6(a)14 7.1k(12(x){c.1Y.8x(7,a,x)});6(!b||!b.21)14 1b;6(b===b.21.1V)14 c.1Y.8y(b);c.1Y.6O();17 d,e=b.4H,f=b.21,h=f.1J,l=f.1V;d=(f=f.4O)?f.6w(b,1b):b.3F;1a(17 k=b.39,o=b.6P;(b=b.1o)&&b!==l&&b!==h;){6(c.1Y.8A&&d.2j==="8B")1U;d=f?f.6w(b,1b):b.3F;k-=b.3C;o-=b.3B;6(b===e){k+=b.39;o+=b.6P;6(c.1Y.bc&&!(c.1Y.bd&&xb.1f(b.1m))){k+=1N(d.8C)||0;o+=1N(d.8D)||0}e=b.4H}6(c.1Y.bf&&d.3o!=="ar"){k+=1N(d.8C)||0;o+=1N(d.8D)||0}d=d}6(d.2j==="37"||d.2j==="8E"){k+=l.39;o+=l.6P}6(c.1Y.8A&&d.2j==="8B"){k+=4G.6N(h.3C,l.3C);o+=4G.6N(h.3B,l.3B)}14{1T:k,1C:o}};c.1Y={6O:12(){17 a=t.1V,b=t.22("1K"),d,e,f,h=1N(c.1y(a,"6H"))||0;c.1t(b.1h,{2j:"5q",1T:0,1C:0,4g:0,4f:0,2z:"3S",3k:"3S",ak:"2X"});b.2l="<1K 1h=\'2j:5q;1T:0;1C:0;4g:0;4f:bg bh #bi;4N:0;2z:3S;3k:3S;\'><1K></1K></1K><2f 1h=\'2j:5q;1T:0;1C:0;4g:0;4f:bg bh #bi;4N:0;2z:3S;3k:3S;\' cellpadding=\'0\' 9o=\'0\'><tr><td></td></tr></2f>";a.2N(b,a.1B);d=b.1B;e=d.1B;f=d.2Y.1B.1B;7.bc=e.39!==5;7.bd=f.39===5;e.1h.2j="8B";e.1h.1T="20px";7.8A=e.39===20||e.39===15;e.1h.2j=e.1h.1T="";d.1h.3o="2X";d.1h.2j="37";7.bf=e.39===-5;7.bj=a.39!==h;a.2F(b);c.1Y.6O=c.4W},8y:12(a){17 b=a.39,d=a.6P;c.1Y.6O();6(c.1Y.bj){b+=1N(c.1y(a,"6H"))||0;d+=1N(c.1y(a,"8p"))||0}14{1T:b,1C:d}},8x:12(a,b,d){17 e=c.1y(a,"2j");6(e==="8E")a.1h.2j="37";17 f=c(a),h=f.1Y(),l=c.1y(a,"1T"),k=c.1y(a,"1C"),o=e==="5q"&&c.3q("6v",[l,k])>-1;e={};17 x={};6(o)x=f.2j();l=o?x.1T:bk(l,10)||0;k=o?x.1C:bk(k,10)||0;6(c.1x(b))b=b.1l(a,d,h);6(b.1T!=1b)e.1T=b.1T-h.1T+l;6(b.1C!=1b)e.1C=b.1C-h.1C+k;"bl"in b?b.bl.1l(a,e):f.1y(e)}};c.fn.1t({2j:12(){6(!7[0])14 1b;17 a=7[0],b=7.4H(),d=7.1Y(),e=Ia.1f(b[0].1m)?{1T:0,1C:0}:b.1Y();d.1T-=1N(c.1y(a,"6H"))||0;d.1C-=1N(c.1y(a,"8p"))||0;e.1T+=1N(c.1y(b[0],"8C"))||0;e.1C+=1N(c.1y(b[0],"8D"))||0;14{1T:d.1T-e.1T,1C:d.1C-e.1C}},4H:12(){14 7.2m(12(){1a(17 a=7.4H||t.1V;a&&!Ia.1f(a.1m)&&c.1y(a,"2j")==="8E";)a=a.4H;14 a})}});c.1k(["al","am"],12(a,b){17 d="6e"+b;c.fn[d]=12(e){17 f=7[0],h;6(!f)14 1b;6(e!==B)14 7.1k(12(){6(h=fa(7))h.scrollTo(!a?e:c(h).3B(),a?e:c(h).3C());19 7[d]=e});19 14(h=fa(f))?"8z"in h?h[a?"b9":"8z"]:c.1q.4p&&h.3K.1J[d]||h.3K.1V[d]:f[d]}});c.1k(["Height","8Q"],12(a,b){17 d=b.1E();c.fn["inner"+b]=12(){14 7[0]?1N(c.1y(7[0],d,"4N")):1b};c.fn["outer"+b]=12(e){14 7[0]?1N(c.1y(7[0],d,e?"4g":"4f")):1b};c.fn[d]=12(e){17 f=7[0];6(!f)14 e==1b?1b:7;6(c.1x(e))14 7.1k(12(l){17 k=c(7);k[d](e.1l(7,l,k[d]()))});6(c.3J(f))14 f.3K.compatMode==="CSS1Compat"&&f.3K.1J["8F"+b]||f.3K.1V["8F"+b];19 6(f.1e===9)14 4G.6N(f.1J["8F"+b],f.1V["6e"+b],f.1J["6e"+b],f.1V["1Y"+b],f.1J["1Y"+b]);19 6(e===B){f=c.1y(f,d);17 h=1N(f);14 c.46(h)?f:h}19 14 7.1y(d,1g e==="1u"?e:e+"px")}})})(99);', [], 704, '||||||if|this|||||||||||||||||||||||||||||||||||||||||||||||||||||||||function||return|||var|length|else|for|null|true|false|nodeType|test|typeof|style|data|type|each|call|nodeName|event|parentNode|replace|support||arguments|extend|string|push|elem|isFunction|css||url|firstChild|left|filter|toLowerCase|apply|options|try|catch|documentElement|div|selector|object|parseFloat|text|display|context|find|guid|top|break|body|indexOf||offset|exec||ownerDocument|createElement|opacity|className|expr|prop|handle|slice|script|getElementsByTagName|getAttribute|target|remove|prototype|table|match|events|now|position|split|innerHTML|map||trigger|select|delete|add|dataType|isArray|get|error|tbody|handler|splice|width|ready|pushStack|show|hide|button|removeChild|none|childNodes|complete|value|expando|queue|Array|insertBefore|href|name|cache|undefined|html|global|_default|filters|contains|hidden|nextSibling|namespace|makeArray|appendChild|||checked|special|preventDefault|relative|set|offsetTop|live|join|new|addEventListener|attachEvent|input|disabled||shift|class|height||append||overflow|duration|inArray|attr||number|browser|radio||submit|dequeue|setup|teardown|scrollLeft|scrollTop|toggle|nth|currentStyle|success|RegExp|async|isWindow|document|cloneNode|merge|sort|readyState|onreadystatechange|javascript|checkbox|1px|removeAttribute|val|getAttributeNode|Event|stopPropagation|POS|compareDocumentPosition|dir|domManip|ajaxSettings|json|timeout|step|isNaN|click|closest|mouseenter|mouseleave|handleObj|grep|ajax|offsetWidth|border|margin|isEmptyObject|getElementById|first|end|unbind|proxy|option|selected|boxModel|inline|removeData|focusout|keyCode|sizcache|isXML|TAG|u00c0|uFFFF|PSEUDO|previousSibling|GET|handleComplete|abort|status|animate|Math|offsetParent|__events__|liveFired|currentTarget|relatedTarget|level|padding|defaultView|isReady|setTimeout|jQuery|trim|fragment|jquery|last|noop|createTextNode|removeEventListener|reliableHiddenOffsets|zoom|change|noData|substr|unshift||speeds|textarea|props|one|form|result|which|password|file|focus|matchesSelector|CLASS|not|empty|querySelectorAll|getElementsByClassName||param|replaceWith|cleanData|absolute|cssHooks|location|xml|setRequestHeader|triggerGlobal|curAnim|cur|custom|timers|easing|orig|origType|preType|isPropagationStopped|isImmediatePropagationStopped|src|offsetHeight|concat|block||version|Object|isPlainObject|toArray||boolean|readyWait|load|JSON|toUpperCase|access|detachEvent|cssFloat|deleteExpando|checkClone|triggerHandler||selectedIndex|attrFn|nodeValue||focusin|charCode|fromElement|clientLeft|clientTop|multiple|blur|bind|scroll|sizset|pop|order|leftMatch|CHILD|even|odd|attrHandle|parent|getText|case|source|unique|wrapAll|before|camelCase|auto|getComputedStyle||responseText|application|xhr|accepts|jsonp|handleSuccess|active|lastModified|etag|marginTop|olddisplay|specialEasing|start|pos|state|max|initialize|offsetLeft||parseJSON||||globalEval||||init|toString|String|buildFragment|cacheable|prevObject|bindReady|onload|constructor|Function|scriptEval|Date|link|float|leadingWhitespace|optDisabled|noCloneEvent|inlineBlockNeedsLayout|shrinkWrapBlocks|onclick|lastChild|setAttribute||embed|acceptData|attributes|inprogress|||tabIndex|addClass|removeClass|isXMLDoc||triggered|removeEvent|isDefaultPrevented|fix|clientX|ctrlKey|metaKey|pageX|onbeforeunload|originalEvent|||mouseover|mouseout|specialSubmit|image||_change_data|unload||uniqueSort|preFilter|NAME|ATTR|attrMap|nodeIndex|index|sibling||||||colgroup|clone|after|clean|fragments||||cssProps|0px|runtimeStyle||traditional|notmodified|ajaxStop|contentType|XMLHttpRequest|protocol|parsererror|handleError|getResponseHeader|marginLeft|stop|old|swing|update|startTime|unit||setOffset|bodyOffset|pageXOffset|supportsFixedPosition|fixed|borderTopWidth|borderLeftWidth|static|client|||origHandler|||||textContent|||Width||appendTo|doScroll|webkit|DOMContentLoaded|frameElement|setInterval|throw|parse|head|getTime|uaMatch|xA0|color|red|htmlSerialize|hrefNormalized|checkOn|window||fireEvent|createDocumentFragment|paddingLeft|submitBubbles|changeBubbles|uuid||||||htmlFor|readOnly|cellspacing|toggleClass|hasClass|__className__|specified|optgroup|cssText|hasAttribute|||exclusive|clientY|pageY|srcElement|toElement|keypress|keydown|beforeactivate|specialChange|die|lastToggle|hover|matches|Syntax|unrecognized|expression|selectors|only|||getElementsByName|has|reset|setFilters|TEST||parents|prevUntil|prevAll|children|contents|area|col|||fieldset|thead|wrapInner|||prepend|detach|alpha||||||visibility|Left|Top||cssNumber|swap|100|visible||||||||||POST|serializeArray|elements|ajaxStart|ajaxComplete|ajaxError|ajaxSuccess|ajaxSend|processData|callback|scriptCharset|username|open|ifModified||Modified|beforeSend|httpSuccess|httpNotModified|httpData|encodeURIComponent|200|304|dataFilter|ActiveXObject|||_toggle|speed|linear|tick|interval||getBoundingClientRect|pageYOffset|||doesNotAddBorder|doesAddBorderForTableAndCells||subtractsBorderForOverflowNotVisible|5px|solid|000|doesNotIncludeMarginInBodyOffset|parseInt|using'.split('|'), 0, {}));


(function (E, B) {
    function ka(a, b, d) {
        if (d === B && a.nodeType === 1) {
            d = a.getAttribute("data-" + b);
            if (typeof d === "string") {
                try {
                    d = d === "true" ? true : d === "false" ? false : d === "null" ? null : !c.isNaN(d) ? parseFloat(d) : Ja.test(d) ? c.parseJSON(d) : d
                } catch (e) {
                }
                c.data(a, b, d)
            } else d = B
        }
        return d
    }

    function U() {
        return false
    }

    function ca() {
        return true
    }

    function la(a, b, d) {
        d[0].type = a;
        return c.event.handle.apply(b, d)
    }

    function Ka(a) {
        var b, d, e, f, h, l, k, o, x, r, A, C = [];
        f = [];
        h = c.data(this, this.nodeType ? "events" : "__events__");
        if (typeof h === "function") h = h.events;
        if (!(a.liveFired === this || !h || !h.live || a.button && a.type === "click")) {
            if (a.namespace) A = RegExp("(^|\\.)" + a.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)");
            a.liveFired = this;
            var J = h.live.slice(0);
            for (k = 0; k < J.length; k++) {
                h = J[k];
                h.origType.replace(X, "") === a.type ? f.push(h.selector) : J.splice(k--, 1)
            }
            f = c(a.target).closest(f, a.currentTarget);
            o = 0;
            for (x = f.length; o < x; o++) {
                r = f[o];
                for (k = 0; k < J.length; k++) {
                    h = J[k];
                    if (r.selector === h.selector && (!A || A.test(h.namespace))) {
                        l = r.elem;
                        e = null;
                        if (h.preType === "mouseenter" || h.preType === "mouseleave") {
                            a.type = h.preType;
                            e = c(a.relatedTarget).closest(h.selector)[0]
                        }
                        if (!e || e !== l) C.push({elem: l, handleObj: h, level: r.level})
                    }
                }
            }
            o = 0;
            for (x = C.length; o < x; o++) {
                f = C[o];
                if (d && f.level > d) break;
                a.currentTarget = f.elem;
                a.data = f.handleObj.data;
                a.handleObj = f.handleObj;
                A = f.handleObj.origHandler.apply(f.elem, arguments);
                if (A === false || a.isPropagationStopped()) {
                    d = f.level;
                    if (A === false) b = false;
                    if (a.isImmediatePropagationStopped()) break
                }
            }
            return b
        }
    }

    function Y(a, b) {
        return (a && a !== "*" ? a + "." : "") + b.replace(La, "`").replace(Ma, "&")
    }

    function ma(a, b, d) {
        if (c.isFunction(b)) return c.grep(a, function (f, h) {
            return !!b.call(f, h, f) === d
        }); else if (b.nodeType) return c.grep(a, function (f) {
            return f === b === d
        }); else if (typeof b === "string") {
            var e = c.grep(a, function (f) {
                return f.nodeType === 1
            });
            if (Na.test(b)) return c.filter(b, e, !d); else b = c.filter(b, e)
        }
        return c.grep(a, function (f) {
            return c.inArray(f, b) >= 0 === d
        })
    }

    function na(a, b) {
        var d = 0;
        b.each(function () {
            if (this.nodeName === (a[d] && a[d].nodeName)) {
                var e = c.data(a[d++]), f = c.data(this, e);
                if (e = e && e.events) {
                    delete f.handle;
                    f.events = {};
                    for (var h in e) for (var l in e[h]) c.event.add(this, h, e[h][l], e[h][l].data)
                }
            }
        })
    }

    function Oa(a, b) {
        b.src ? c.ajax({
            url: b.src,
            async: false,
            dataType: "script"
        }) : c.globalEval(b.text || b.textContent || b.innerHTML || "");
        b.parentNode && b.parentNode.removeChild(b)
    }

    function oa(a, b, d) {
        var e = b === "width" ? a.offsetWidth : a.offsetHeight;
        if (d === "border") return e;
        c.each(b === "width" ? Pa : Qa, function () {
            d || (e -= parseFloat(c.css(a, "padding" + this)) || 0);
            if (d === "margin") e += parseFloat(c.css(a, "margin" + this)) || 0; else e -= parseFloat(c.css(a, "border" + this + "Width")) || 0
        });
        return e
    }

    function da(a, b, d, e) {
        if (c.isArray(b) && b.length) c.each(b, function (f, h) {
            d || Ra.test(a) ? e(a, h) : da(a + "[" + (typeof h === "object" || c.isArray(h) ? f : "") + "]", h, d, e)
        }); else if (!d && b != null && typeof b === "object") c.isEmptyObject(b) ? e(a, "") : c.each(b, function (f, h) {
            da(a + "[" + f + "]", h, d, e)
        }); else e(a, b)
    }

    function S(a, b) {
        var d = {};
        c.each(pa.concat.apply([], pa.slice(0, b)), function () {
            d[this] = a
        });
        return d
    }

    function qa(a) {
        if (!ea[a]) {
            var b = c("<" + a + ">").appendTo("body"), d = b.css("display");
            b.remove();
            if (d === "none" || d === "") d = "block";
            ea[a] = d
        }
        return ea[a]
    }

    function fa(a) {
        return c.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : false
    }

    var t = E.document, c = function () {
        function a() {
            if (!b.isReady) {
                try {
                    t.documentElement.doScroll("left")
                } catch (j) {
                    setTimeout(a, 1);
                    return
                }
                b.ready()
            }
        }

        var b = function (j, s) {
                return new b.fn.init(j, s)
            }, d = E.jQuery, e = E.$, f, h = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/, l = /\S/, k = /^\s+/, o = /\s+$/,
            x = /\W/, r = /\d/, A = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, C = /^[\],:{}\s]*$/,
            J = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
            w = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, I = /(?:^|:|,)(?:\s*\[)+/g,
            L = /(webkit)[ \/]([\w.]+)/, g = /(opera)(?:.*version)?[ \/]([\w.]+)/, i = /(msie) ([\w.]+)/,
            n = /(mozilla)(?:.*? rv:([\w.]+))?/, m = navigator.userAgent, p = false, q = [], u,
            y = Object.prototype.toString, F = Object.prototype.hasOwnProperty, M = Array.prototype.push,
            N = Array.prototype.slice, O = String.prototype.trim, D = Array.prototype.indexOf, R = {};
        b.fn = b.prototype = {
            init: function (j, s) {
                var v, z, H;
                if (!j) return this;
                if (j.nodeType) {
                    this.context = this[0] = j;
                    this.length = 1;
                    return this
                }
                if (j === "body" && !s && t.body) {
                    this.context = t;
                    this[0] = t.body;
                    this.selector = "body";
                    this.length = 1;
                    return this
                }
                if (typeof j === "string") if ((v = h.exec(j)) && (v[1] || !s)) if (v[1]) {
                    H = s ? s.ownerDocument || s : t;
                    if (z = A.exec(j)) if (b.isPlainObject(s)) {
                        j = [t.createElement(z[1])];
                        b.fn.attr.call(j, s, true)
                    } else j = [H.createElement(z[1])]; else {
                        z = b.buildFragment([v[1]], [H]);
                        j = (z.cacheable ? z.fragment.cloneNode(true) : z.fragment).childNodes
                    }
                    return b.merge(this, j)
                } else {
                    if ((z = t.getElementById(v[2])) && z.parentNode) {
                        if (z.id !== v[2]) return f.find(j);
                        this.length = 1;
                        this[0] = z
                    }
                    this.context = t;
                    this.selector = j;
                    return this
                } else if (!s && !x.test(j)) {
                    this.selector = j;
                    this.context = t;
                    j = t.getElementsByTagName(j);
                    return b.merge(this, j)
                } else return !s || s.jquery ? (s || f).find(j) : b(s).find(j); else if (b.isFunction(j)) return f.ready(j);
                if (j.selector !== B) {
                    this.selector = j.selector;
                    this.context = j.context
                }
                return b.makeArray(j, this)
            }, selector: "", jquery: "1.4.4", length: 0, size: function () {
                return this.length
            }, toArray: function () {
                return N.call(this, 0)
            }, get: function (j) {
                return j == null ? this.toArray() : j < 0 ? this.slice(j)[0] : this[j]
            }, pushStack: function (j, s, v) {
                var z = b();
                b.isArray(j) ? M.apply(z, j) : b.merge(z, j);
                z.prevObject = this;
                z.context = this.context;
                if (s === "find") z.selector = this.selector + (this.selector ? " " : "") + v; else if (s) z.selector = this.selector + "." + s + "(" + v + ")";
                return z
            }, each: function (j, s) {
                return b.each(this, j, s)
            }, ready: function (j) {
                b.bindReady();
                if (b.isReady) j.call(t, b); else q && q.push(j);
                return this
            }, eq: function (j) {
                return j === -1 ? this.slice(j) : this.slice(j, +j + 1)
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, slice: function () {
                return this.pushStack(N.apply(this, arguments), "slice", N.call(arguments).join(","))
            }, map: function (j) {
                return this.pushStack(b.map(this, function (s, v) {
                    return j.call(s, v, s)
                }))
            }, end: function () {
                return this.prevObject || b(null)
            }, push: M, sort: [].sort, splice: [].splice
        };
        b.fn.init.prototype = b.fn;
        b.extend = b.fn.extend = function () {
            var j, s, v, z, H, G = arguments[0] || {}, K = 1, Q = arguments.length, ga = false;
            if (typeof G === "boolean") {
                ga = G;
                G = arguments[1] || {};
                K = 2
            }
            if (typeof G !== "object" && !b.isFunction(G)) G = {};
            if (Q === K) {
                G = this;
                --K
            }
            for (; K < Q; K++) if ((j = arguments[K]) != null) for (s in j) {
                v = G[s];
                z = j[s];
                if (G !== z) if (ga && z && (b.isPlainObject(z) || (H = b.isArray(z)))) {
                    if (H) {
                        H = false;
                        v = v && b.isArray(v) ? v : []
                    } else v = v && b.isPlainObject(v) ? v : {};
                    G[s] = b.extend(ga, v, z)
                } else if (z !== B) G[s] = z
            }
            return G
        };
        b.extend({
            noConflict: function (j) {
                E.$ = e;
                if (j) E.jQuery = d;
                return b
            }, isReady: false, readyWait: 1, ready: function (j) {
                j === true && b.readyWait--;
                if (!b.readyWait || j !== true && !b.isReady) {
                    if (!t.body) return setTimeout(b.ready, 1);
                    b.isReady = true;
                    if (!(j !== true && --b.readyWait > 0)) if (q) {
                        var s = 0, v = q;
                        for (q = null; j = v[s++];) j.call(t, b);
                        b.fn.trigger && b(t).trigger("ready").unbind("ready")
                    }
                }
            }, bindReady: function () {
                if (!p) {
                    p = true;
                    if (t.readyState === "complete") return setTimeout(b.ready, 1);
                    if (t.addEventListener) {
                        t.addEventListener("DOMContentLoaded", u, false);
                        E.addEventListener("load", b.ready, false)
                    } else if (t.attachEvent) {
                        t.attachEvent("onreadystatechange", u);
                        E.attachEvent("onload", b.ready);
                        var j = false;
                        try {
                            j = E.frameElement == null
                        } catch (s) {
                        }
                        t.documentElement.doScroll && j && a()
                    }
                }
            }, isFunction: function (j) {
                return b.type(j) === "function"
            }, isArray: Array.isArray || function (j) {
                return b.type(j) === "array"
            }, isWindow: function (j) {
                return j && typeof j === "object" && "setInterval" in j
            }, isNaN: function (j) {
                return j == null || !r.test(j) || isNaN(j)
            }, type: function (j) {
                return j == null ? String(j) : R[y.call(j)] || "object"
            }, isPlainObject: function (j) {
                if (!j || b.type(j) !== "object" || j.nodeType || b.isWindow(j)) return false;
                if (j.constructor && !F.call(j, "constructor") && !F.call(j.constructor.prototype, "isPrototypeOf")) return false;
                for (var s in j) ;
                return s === B || F.call(j, s)
            }, isEmptyObject: function (j) {
                for (var s in j) return false;
                return true
            }, error: function (j) {
                throw j;
            }, parseJSON: function (j) {
                if (typeof j !== "string" || !j) return null;
                j = b.trim(j);
                if (C.test(j.replace(J, "@").replace(w, "]").replace(I, ""))) return E.JSON && E.JSON.parse ? E.JSON.parse(j) : (new Function("return " + j))(); else b.error("Invalid JSON: " + j)
            }, noop: function () {
            }, globalEval: function (j) {
                if (j && l.test(j)) {
                    var s = t.getElementsByTagName("head")[0] || t.documentElement, v = t.createElement("script");
                    v.type = "text/javascript";
                    if (b.support.scriptEval) v.appendChild(t.createTextNode(j)); else v.text = j;
                    s.insertBefore(v, s.firstChild);
                    s.removeChild(v)
                }
            }, nodeName: function (j, s) {
                return j.nodeName && j.nodeName.toUpperCase() === s.toUpperCase()
            }, each: function (j, s, v) {
                var z, H = 0, G = j.length, K = G === B || b.isFunction(j);
                if (v) if (K) for (z in j) {
                    if (s.apply(j[z], v) === false) break
                } else for (; H < G;) {
                    if (s.apply(j[H++], v) === false) break
                } else if (K) for (z in j) {
                    if (s.call(j[z], z, j[z]) === false) break
                } else for (v = j[0]; H < G && s.call(v, H, v) !== false; v = j[++H]) ;
                return j
            }, trim: O ? function (j) {
                return j == null ? "" : O.call(j)
            } : function (j) {
                return j == null ? "" : j.toString().replace(k, "").replace(o, "")
            }, makeArray: function (j, s) {
                var v = s || [];
                if (j != null) {
                    var z = b.type(j);
                    j.length == null || z === "string" || z === "function" || z === "regexp" || b.isWindow(j) ? M.call(v, j) : b.merge(v, j)
                }
                return v
            }, inArray: function (j, s) {
                if (s.indexOf) return s.indexOf(j);
                for (var v = 0, z = s.length; v < z; v++) if (s[v] === j) return v;
                return -1
            }, merge: function (j, s) {
                var v = j.length, z = 0;
                if (typeof s.length === "number") for (var H = s.length; z < H; z++) j[v++] = s[z]; else for (; s[z] !== B;) j[v++] = s[z++];
                j.length = v;
                return j
            }, grep: function (j, s, v) {
                var z = [], H;
                v = !!v;
                for (var G = 0, K = j.length; G < K; G++) {
                    H = !!s(j[G], G);
                    v !== H && z.push(j[G])
                }
                return z
            }, map: function (j, s, v) {
                for (var z = [], H, G = 0, K = j.length; G < K; G++) {
                    H = s(j[G], G, v);
                    if (H != null) z[z.length] = H
                }
                return z.concat.apply([], z)
            }, guid: 1, proxy: function (j, s, v) {
                if (arguments.length === 2) if (typeof s === "string") {
                    v = j;
                    j = v[s];
                    s = B
                } else if (s && !b.isFunction(s)) {
                    v = s;
                    s = B
                }
                if (!s && j) s = function () {
                    return j.apply(v || this, arguments)
                };
                if (j) s.guid = j.guid = j.guid || s.guid || b.guid++;
                return s
            }, access: function (j, s, v, z, H, G) {
                var K = j.length;
                if (typeof s === "object") {
                    for (var Q in s) b.access(j, Q, s[Q], z, H, v);
                    return j
                }
                if (v !== B) {
                    z = !G && z && b.isFunction(v);
                    for (Q = 0; Q < K; Q++) H(j[Q], s, z ? v.call(j[Q], Q, H(j[Q], s)) : v, G);
                    return j
                }
                return K ? H(j[0], s) : B
            }, now: function () {
                return (new Date).getTime()
            }, uaMatch: function (j) {
                j = j.toLowerCase();
                j = L.exec(j) || g.exec(j) || i.exec(j) || j.indexOf("compatible") < 0 && n.exec(j) || [];
                return {browser: j[1] || "", version: j[2] || "0"}
            }, browser: {}
        });
        b.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (j, s) {
            R["[object " + s + "]"] = s.toLowerCase()
        });
        m = b.uaMatch(m);
        if (m.browser) {
            b.browser[m.browser] = true;
            b.browser.version = m.version
        }
        if (b.browser.webkit) b.browser.safari = true;
        if (D) b.inArray = function (j, s) {
            return D.call(s, j)
        };
        if (!/\s/.test("\u00a0")) {
            k = /^[\s\xA0]+/;
            o = /[\s\xA0]+$/
        }
        f = b(t);
        if (t.addEventListener) u = function () {
            t.removeEventListener("DOMContentLoaded", u, false);
            b.ready()
        }; else if (t.attachEvent) u = function () {
            if (t.readyState === "complete") {
                t.detachEvent("onreadystatechange", u);
                b.ready()
            }
        };
        return E.jQuery = E.$ = b
    }();
    (function () {
        c.support = {};
        var a = t.documentElement, b = t.createElement("script"), d = t.createElement("div"), e = "script" + c.now();
        d.style.display = "none";
        d.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        var f = d.getElementsByTagName("*"), h = d.getElementsByTagName("a")[0], l = t.createElement("select"),
            k = l.appendChild(t.createElement("option"));
        if (!(!f || !f.length || !h)) {
            c.support = {
                leadingWhitespace: d.firstChild.nodeType === 3,
                tbody: !d.getElementsByTagName("tbody").length,
                htmlSerialize: !!d.getElementsByTagName("link").length,
                style: /red/.test(h.getAttribute("style")),
                hrefNormalized: h.getAttribute("href") === "/a",
                opacity: /^0.55$/.test(h.style.opacity),
                cssFloat: !!h.style.cssFloat,
                checkOn: d.getElementsByTagName("input")[0].value === "on",
                optSelected: k.selected,
                deleteExpando: true,
                optDisabled: false,
                checkClone: false,
                scriptEval: false,
                noCloneEvent: true,
                boxModel: null,
                inlineBlockNeedsLayout: false,
                shrinkWrapBlocks: false,
                reliableHiddenOffsets: true
            };
            l.disabled = true;
            c.support.optDisabled = !k.disabled;
            b.type = "text/javascript";
            try {
                b.appendChild(t.createTextNode("window." + e + "=1;"))
            } catch (o) {
            }
            a.insertBefore(b, a.firstChild);
            if (E[e]) {
                c.support.scriptEval = true;
                delete E[e]
            }
            try {
                delete b.test
            } catch (x) {
                c.support.deleteExpando = false
            }
            a.removeChild(b);
            if (d.attachEvent && d.fireEvent) {
                d.attachEvent("onclick", function r() {
                    c.support.noCloneEvent = false;
                    d.detachEvent("onclick", r)
                });
                d.cloneNode(true).fireEvent("onclick")
            }
            d = t.createElement("div");
            d.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
            a = t.createDocumentFragment();
            a.appendChild(d.firstChild);
            c.support.checkClone = a.cloneNode(true).cloneNode(true).lastChild.checked;
            c(function () {
                var r = t.createElement("div");
                r.style.width = r.style.paddingLeft = "1px";
                t.body.appendChild(r);
                c.boxModel = c.support.boxModel = r.offsetWidth === 2;
                if ("zoom" in r.style) {
                    r.style.display = "inline";
                    r.style.zoom = 1;
                    c.support.inlineBlockNeedsLayout = r.offsetWidth === 2;
                    r.style.display = "";
                    r.innerHTML = "<div style='width:4px;'></div>";
                    c.support.shrinkWrapBlocks = r.offsetWidth !== 2
                }
                r.innerHTML = "<table><tr><td style='padding:0;display:none'></td><td>t</td></tr></table>";
                var A = r.getElementsByTagName("td");
                c.support.reliableHiddenOffsets = A[0].offsetHeight === 0;
                A[0].style.display = "";
                A[1].style.display = "none";
                c.support.reliableHiddenOffsets = c.support.reliableHiddenOffsets && A[0].offsetHeight === 0;
                r.innerHTML = "";
                t.body.removeChild(r).style.display = "none"
            });
            a = function (r) {
                var A = t.createElement("div");
                r = "on" + r;
                var C = r in A;
                if (!C) {
                    A.setAttribute(r, "return;");
                    C = typeof A[r] === "function"
                }
                return C
            };
            c.support.submitBubbles = a("submit");
            c.support.changeBubbles = a("change");
            a = b = d = f = h = null
        }
    })();
    var ra = {}, Ja = /^(?:\{.*\}|\[.*\])$/;
    c.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + c.now(),
        noData: {embed: true, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: true},
        data: function (a, b, d) {
            if (c.acceptData(a)) {
                a = a == E ? ra : a;
                var e = a.nodeType, f = e ? a[c.expando] : null, h = c.cache;
                if (!(e && !f && typeof b === "string" && d === B)) {
                    if (e) f || (a[c.expando] = f = ++c.uuid); else h = a;
                    if (typeof b === "object") if (e) h[f] = c.extend(h[f], b); else c.extend(h, b); else if (e && !h[f]) h[f] = {};
                    a = e ? h[f] : h;
                    if (d !== B) a[b] = d;
                    return typeof b === "string" ? a[b] : a
                }
            }
        },
        removeData: function (a, b) {
            if (c.acceptData(a)) {
                a = a == E ? ra : a;
                var d = a.nodeType, e = d ? a[c.expando] : a, f = c.cache, h = d ? f[e] : e;
                if (b) {
                    if (h) {
                        delete h[b];
                        d && c.isEmptyObject(h) && c.removeData(a)
                    }
                } else if (d && c.support.deleteExpando) delete a[c.expando]; else if (a.removeAttribute) a.removeAttribute(c.expando); else if (d) delete f[e]; else for (var l in a) delete a[l]
            }
        },
        acceptData: function (a) {
            if (a.nodeName) {
                var b = c.noData[a.nodeName.toLowerCase()];
                if (b) return !(b === true || a.getAttribute("classid") !== b)
            }
            return true
        }
    });
    c.fn.extend({
        data: function (a, b) {
            var d = null;
            if (typeof a === "undefined") {
                if (this.length) {
                    var e = this[0].attributes, f;
                    d = c.data(this[0]);
                    for (var h = 0, l = e.length; h < l; h++) {
                        f = e[h].name;
                        if (f.indexOf("data-") === 0) {
                            f = f.substr(5);
                            ka(this[0], f, d[f])
                        }
                    }
                }
                return d
            } else if (typeof a === "object") return this.each(function () {
                c.data(this, a)
            });
            var k = a.split(".");
            k[1] = k[1] ? "." + k[1] : "";
            if (b === B) {
                d = this.triggerHandler("getData" + k[1] + "!", [k[0]]);
                if (d === B && this.length) {
                    d = c.data(this[0], a);
                    d = ka(this[0], a, d)
                }
                return d === B && k[1] ? this.data(k[0]) : d
            } else return this.each(function () {
                var o = c(this), x = [k[0], b];
                o.triggerHandler("setData" + k[1] + "!", x);
                c.data(this, a, b);
                o.triggerHandler("changeData" + k[1] + "!", x)
            })
        }, removeData: function (a) {
            return this.each(function () {
                c.removeData(this, a)
            })
        }
    });
    c.extend({
        queue: function (a, b, d) {
            if (a) {
                b = (b || "fx") + "queue";
                var e = c.data(a, b);
                if (!d) return e || [];
                if (!e || c.isArray(d)) e = c.data(a, b, c.makeArray(d)); else e.push(d);
                return e
            }
        }, dequeue: function (a, b) {
            b = b || "fx";
            var d = c.queue(a, b), e = d.shift();
            if (e === "inprogress") e = d.shift();
            if (e) {
                b === "fx" && d.unshift("inprogress");
                e.call(a, function () {
                    c.dequeue(a, b)
                })
            }
        }
    });
    c.fn.extend({
        queue: function (a, b) {
            if (typeof a !== "string") {
                b = a;
                a = "fx"
            }
            if (b === B) return c.queue(this[0], a);
            return this.each(function () {
                var d = c.queue(this, a, b);
                a === "fx" && d[0] !== "inprogress" && c.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                c.dequeue(this, a)
            })
        }, delay: function (a, b) {
            a = c.fx ? c.fx.speeds[a] || a : a;
            b = b || "fx";
            return this.queue(b, function () {
                var d = this;
                setTimeout(function () {
                    c.dequeue(d, b)
                }, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }
    });
    var sa = /[\n\t]/g, ha = /\s+/, Sa = /\r/g, Ta = /^(?:href|src|style)$/, Ua = /^(?:button|input)$/i,
        Va = /^(?:button|input|object|select|textarea)$/i, Wa = /^a(?:rea)?$/i, ta = /^(?:radio|checkbox)$/i;
    c.props = {
        "for": "htmlFor",
        "class": "className",
        readonly: "readOnly",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        rowspan: "rowSpan",
        colspan: "colSpan",
        tabindex: "tabIndex",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    c.fn.extend({
        attr: function (a, b) {
            return c.access(this, a, b, true, c.attr)
        }, removeAttr: function (a) {
            return this.each(function () {
                c.attr(this, a, "");
                this.nodeType === 1 && this.removeAttribute(a)
            })
        }, addClass: function (a) {
            if (c.isFunction(a)) return this.each(function (x) {
                var r = c(this);
                r.addClass(a.call(this, x, r.attr("class")))
            });
            if (a && typeof a === "string") for (var b = (a || "").split(ha), d = 0, e = this.length; d < e; d++) {
                var f = this[d];
                if (f.nodeType === 1) if (f.className) {
                    for (var h = " " + f.className + " ", l = f.className, k = 0, o = b.length; k < o; k++) if (h.indexOf(" " + b[k] + " ") < 0) l += " " + b[k];
                    f.className = c.trim(l)
                } else f.className = a
            }
            return this
        }, removeClass: function (a) {
            if (c.isFunction(a)) return this.each(function (o) {
                var x = c(this);
                x.removeClass(a.call(this, o, x.attr("class")))
            });
            if (a && typeof a === "string" || a === B) for (var b = (a || "").split(ha), d = 0, e = this.length; d < e; d++) {
                var f = this[d];
                if (f.nodeType === 1 && f.className) if (a) {
                    for (var h = (" " + f.className + " ").replace(sa, " "), l = 0, k = b.length; l < k; l++) h = h.replace(" " + b[l] + " ", " ");
                    f.className = c.trim(h)
                } else f.className = ""
            }
            return this
        }, toggleClass: function (a, b) {
            var d = typeof a, e = typeof b === "boolean";
            if (c.isFunction(a)) return this.each(function (f) {
                var h = c(this);
                h.toggleClass(a.call(this, f, h.attr("class"), b), b)
            });
            return this.each(function () {
                if (d === "string") for (var f, h = 0, l = c(this), k = b, o = a.split(ha); f = o[h++];) {
                    k = e ? k : !l.hasClass(f);
                    l[k ? "addClass" : "removeClass"](f)
                } else if (d === "undefined" || d === "boolean") {
                    this.className && c.data(this, "__className__", this.className);
                    this.className = this.className || a === false ? "" : c.data(this, "__className__") || ""
                }
            })
        }, hasClass: function (a) {
            a = " " + a + " ";
            for (var b = 0, d = this.length; b < d; b++) if ((" " + this[b].className + " ").replace(sa, " ").indexOf(a) > -1) return true;
            return false
        }, val: function (a) {
            if (!arguments.length) {
                var b = this[0];
                if (b) {
                    if (c.nodeName(b, "option")) {
                        var d = b.attributes.value;
                        return !d || d.specified ? b.value : b.text
                    }
                    if (c.nodeName(b, "select")) {
                        var e = b.selectedIndex;
                        d = [];
                        var f = b.options;
                        b = b.type === "select-one";
                        if (e < 0) return null;
                        var h = b ? e : 0;
                        for (e = b ? e + 1 : f.length; h < e; h++) {
                            var l = f[h];
                            if (l.selected && (c.support.optDisabled ? !l.disabled : l.getAttribute("disabled") === null) && (!l.parentNode.disabled || !c.nodeName(l.parentNode, "optgroup"))) {
                                a = c(l).val();
                                if (b) return a;
                                d.push(a)
                            }
                        }
                        return d
                    }
                    if (ta.test(b.type) && !c.support.checkOn) return b.getAttribute("value") === null ? "on" : b.value;
                    return (b.value || "").replace(Sa, "")
                }
                return B
            }
            var k = c.isFunction(a);
            return this.each(function (o) {
                var x = c(this), r = a;
                if (this.nodeType === 1) {
                    if (k) r = a.call(this, o, x.val());
                    if (r == null) r = ""; else if (typeof r === "number") r += ""; else if (c.isArray(r)) r = c.map(r, function (C) {
                        return C == null ? "" : C + ""
                    });
                    if (c.isArray(r) && ta.test(this.type)) this.checked = c.inArray(x.val(), r) >= 0; else if (c.nodeName(this, "select")) {
                        var A = c.makeArray(r);
                        c("option", this).each(function () {
                            this.selected = c.inArray(c(this).val(), A) >= 0
                        });
                        if (!A.length) this.selectedIndex = -1
                    } else this.value = r
                }
            })
        }
    });
    c.extend({
        attrFn: {
            val: true,
            css: true,
            html: true,
            text: true,
            data: true,
            width: true,
            height: true,
            offset: true
        }, attr: function (a, b, d, e) {
            if (!a || a.nodeType === 3 || a.nodeType === 8) return B;
            if (e && b in c.attrFn) return c(a)[b](d);
            e = a.nodeType !== 1 || !c.isXMLDoc(a);
            var f = d !== B;
            b = e && c.props[b] || b;
            var h = Ta.test(b);
            if ((b in a || a[b] !== B) && e && !h) {
                if (f) {
                    b === "type" && Ua.test(a.nodeName) && a.parentNode && c.error("type property can't be changed");
                    if (d === null) a.nodeType === 1 && a.removeAttribute(b); else a[b] = d
                }
                if (c.nodeName(a, "form") && a.getAttributeNode(b)) return a.getAttributeNode(b).nodeValue;
                if (b === "tabIndex") return (b = a.getAttributeNode("tabIndex")) && b.specified ? b.value : Va.test(a.nodeName) || Wa.test(a.nodeName) && a.href ? 0 : B;
                return a[b]
            }
            if (!c.support.style && e && b === "style") {
                if (f) a.style.cssText = "" + d;
                return a.style.cssText
            }
            f && a.setAttribute(b, "" + d);
            if (!a.attributes[b] && a.hasAttribute && !a.hasAttribute(b)) return B;
            a = !c.support.hrefNormalized && e && h ? a.getAttribute(b, 2) : a.getAttribute(b);
            return a === null ? B : a
        }
    });
    var X = /\.(.*)$/, ia = /^(?:textarea|input|select)$/i, La = /\./g, Ma = / /g, Xa = /[^\w\s.|`]/g,
        Ya = function (a) {
            return a.replace(Xa, "\\$&")
        }, ua = {focusin: 0, focusout: 0};
    c.event = {
        add: function (a, b, d, e) {
            if (!(a.nodeType === 3 || a.nodeType === 8)) {
                if (c.isWindow(a) && a !== E && !a.frameElement) a = E;
                if (d === false) d = U; else if (!d) return;
                var f, h;
                if (d.handler) {
                    f = d;
                    d = f.handler
                }
                if (!d.guid) d.guid = c.guid++;
                if (h = c.data(a)) {
                    var l = a.nodeType ? "events" : "__events__", k = h[l], o = h.handle;
                    if (typeof k === "function") {
                        o = k.handle;
                        k = k.events
                    } else if (!k) {
                        a.nodeType || (h[l] = h = function () {
                        });
                        h.events = k = {}
                    }
                    if (!o) h.handle = o = function () {
                        return typeof c !== "undefined" && !c.event.triggered ? c.event.handle.apply(o.elem, arguments) : B
                    };
                    o.elem = a;
                    b = b.split(" ");
                    for (var x = 0, r; l = b[x++];) {
                        h = f ? c.extend({}, f) : {handler: d, data: e};
                        if (l.indexOf(".") > -1) {
                            r = l.split(".");
                            l = r.shift();
                            h.namespace = r.slice(0).sort().join(".")
                        } else {
                            r = [];
                            h.namespace = ""
                        }
                        h.type = l;
                        if (!h.guid) h.guid = d.guid;
                        var A = k[l], C = c.event.special[l] || {};
                        if (!A) {
                            A = k[l] = [];
                            if (!C.setup || C.setup.call(a, e, r, o) === false) if (a.addEventListener) a.addEventListener(l, o, false); else a.attachEvent && a.attachEvent("on" + l, o)
                        }
                        if (C.add) {
                            C.add.call(a, h);
                            if (!h.handler.guid) h.handler.guid = d.guid
                        }
                        A.push(h);
                        c.event.global[l] = true
                    }
                    a = null
                }
            }
        },
        global: {},
        remove: function (a, b, d, e) {
            if (!(a.nodeType === 3 || a.nodeType === 8)) {
                if (d === false) d = U;
                var f, h, l = 0, k, o, x, r, A, C, J = a.nodeType ? "events" : "__events__", w = c.data(a),
                    I = w && w[J];
                if (w && I) {
                    if (typeof I === "function") {
                        w = I;
                        I = I.events
                    }
                    if (b && b.type) {
                        d = b.handler;
                        b = b.type
                    }
                    if (!b || typeof b === "string" && b.charAt(0) === ".") {
                        b = b || "";
                        for (f in I) c.event.remove(a, f + b)
                    } else {
                        for (b = b.split(" "); f = b[l++];) {
                            r = f;
                            k = f.indexOf(".") < 0;
                            o = [];
                            if (!k) {
                                o = f.split(".");
                                f = o.shift();
                                x = RegExp("(^|\\.)" + c.map(o.slice(0).sort(), Ya).join("\\.(?:.*\\.)?") + "(\\.|$)")
                            }
                            if (A = I[f]) if (d) {
                                r = c.event.special[f] || {};
                                for (h = e || 0; h < A.length; h++) {
                                    C = A[h];
                                    if (d.guid === C.guid) {
                                        if (k || x.test(C.namespace)) {
                                            e == null && A.splice(h--, 1);
                                            r.remove && r.remove.call(a, C)
                                        }
                                        if (e != null) break
                                    }
                                }
                                if (A.length === 0 || e != null && A.length === 1) {
                                    if (!r.teardown || r.teardown.call(a, o) === false) c.removeEvent(a, f, w.handle);
                                    delete I[f]
                                }
                            } else for (h = 0; h < A.length; h++) {
                                C = A[h];
                                if (k || x.test(C.namespace)) {
                                    c.event.remove(a, r, C.handler, h);
                                    A.splice(h--, 1)
                                }
                            }
                        }
                        if (c.isEmptyObject(I)) {
                            if (b = w.handle) b.elem = null;
                            delete w.events;
                            delete w.handle;
                            if (typeof w === "function") c.removeData(a, J); else c.isEmptyObject(w) && c.removeData(a)
                        }
                    }
                }
            }
        },
        trigger: function (a, b, d, e) {
            var f = a.type || a;
            if (!e) {
                a = typeof a === "object" ? a[c.expando] ? a : c.extend(c.Event(f), a) : c.Event(f);
                if (f.indexOf("!") >= 0) {
                    a.type = f = f.slice(0, -1);
                    a.exclusive = true
                }
                if (!d) {
                    a.stopPropagation();
                    c.event.global[f] && c.each(c.cache, function () {
                        this.events && this.events[f] && c.event.trigger(a, b, this.handle.elem)
                    })
                }
                if (!d || d.nodeType === 3 || d.nodeType === 8) return B;
                a.result = B;
                a.target = d;
                b = c.makeArray(b);
                b.unshift(a)
            }
            a.currentTarget = d;
            (e = d.nodeType ? c.data(d, "handle") : (c.data(d, "__events__") || {}).handle) && e.apply(d, b);
            e = d.parentNode || d.ownerDocument;
            try {
                if (!(d && d.nodeName && c.noData[d.nodeName.toLowerCase()])) if (d["on" + f] && d["on" + f].apply(d, b) === false) {
                    a.result = false;
                    a.preventDefault()
                }
            } catch (h) {
            }
            if (!a.isPropagationStopped() && e) c.event.trigger(a, b, e, true); else if (!a.isDefaultPrevented()) {
                var l;
                e = a.target;
                var k = f.replace(X, ""), o = c.nodeName(e, "a") && k === "click", x = c.event.special[k] || {};
                if ((!x._default || x._default.call(d, a) === false) && !o && !(e && e.nodeName && c.noData[e.nodeName.toLowerCase()])) {
                    try {
                        if (e[k]) {
                            if (l = e["on" + k]) e["on" + k] = null;
                            c.event.triggered = true;
                            e[k]()
                        }
                    } catch (r) {
                    }
                    if (l) e["on" + k] = l;
                    c.event.triggered = false
                }
            }
        },
        handle: function (a) {
            var b, d, e, f;
            d = [];
            var h = c.makeArray(arguments);
            a = h[0] = c.event.fix(a || E.event);
            a.currentTarget = this;
            b = a.type.indexOf(".") < 0 && !a.exclusive;
            if (!b) {
                e = a.type.split(".");
                a.type = e.shift();
                d = e.slice(0).sort();
                e = RegExp("(^|\\.)" + d.join("\\.(?:.*\\.)?") + "(\\.|$)")
            }
            a.namespace = a.namespace || d.join(".");
            f = c.data(this, this.nodeType ? "events" : "__events__");
            if (typeof f === "function") f = f.events;
            d = (f || {})[a.type];
            if (f && d) {
                d = d.slice(0);
                f = 0;
                for (var l = d.length; f < l; f++) {
                    var k = d[f];
                    if (b || e.test(k.namespace)) {
                        a.handler = k.handler;
                        a.data = k.data;
                        a.handleObj = k;
                        k = k.handler.apply(this, h);
                        if (k !== B) {
                            a.result = k;
                            if (k === false) {
                                a.preventDefault();
                                a.stopPropagation()
                            }
                        }
                        if (a.isImmediatePropagationStopped()) break
                    }
                }
            }
            return a.result
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function (a) {
            if (a[c.expando]) return a;
            var b = a;
            a = c.Event(b);
            for (var d = this.props.length, e; d;) {
                e = this.props[--d];
                a[e] = b[e]
            }
            if (!a.target) a.target = a.srcElement || t;
            if (a.target.nodeType === 3) a.target = a.target.parentNode;
            if (!a.relatedTarget && a.fromElement) a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement;
            if (a.pageX == null && a.clientX != null) {
                b = t.documentElement;
                d = t.body;
                a.pageX = a.clientX + (b && b.scrollLeft || d && d.scrollLeft || 0) - (b && b.clientLeft || d && d.clientLeft || 0);
                a.pageY = a.clientY + (b && b.scrollTop || d && d.scrollTop || 0) - (b && b.clientTop || d && d.clientTop || 0)
            }
            if (a.which == null && (a.charCode != null || a.keyCode != null)) a.which = a.charCode != null ? a.charCode : a.keyCode;
            if (!a.metaKey && a.ctrlKey) a.metaKey = a.ctrlKey;
            if (!a.which && a.button !== B) a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0;
            return a
        },
        guid: 1E8,
        proxy: c.proxy,
        special: {
            ready: {setup: c.bindReady, teardown: c.noop}, live: {
                add: function (a) {
                    c.event.add(this, Y(a.origType, a.selector), c.extend({}, a, {handler: Ka, guid: a.handler.guid}))
                }, remove: function (a) {
                    c.event.remove(this, Y(a.origType, a.selector), a)
                }
            }, beforeunload: {
                setup: function (a, b, d) {
                    if (c.isWindow(this)) this.onbeforeunload = d
                }, teardown: function (a, b) {
                    if (this.onbeforeunload === b) this.onbeforeunload = null
                }
            }
        }
    };
    c.removeEvent = t.removeEventListener ? function (a, b, d) {
        a.removeEventListener && a.removeEventListener(b, d, false)
    } : function (a, b, d) {
        a.detachEvent && a.detachEvent("on" + b, d)
    };
    c.Event = function (a) {
        if (!this.preventDefault) return new c.Event(a);
        if (a && a.type) {
            this.originalEvent = a;
            this.type = a.type
        } else this.type = a;
        this.timeStamp = c.now();
        this[c.expando] = true
    };
    c.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = ca;
            var a = this.originalEvent;
            if (a) if (a.preventDefault) a.preventDefault(); else a.returnValue = false
        }, stopPropagation: function () {
            this.isPropagationStopped = ca;
            var a = this.originalEvent;
            if (a) {
                a.stopPropagation && a.stopPropagation();
                a.cancelBubble = true
            }
        }, stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = ca;
            this.stopPropagation()
        }, isDefaultPrevented: U, isPropagationStopped: U, isImmediatePropagationStopped: U
    };
    var va = function (a) {
        var b = a.relatedTarget;
        try {
            for (; b && b !== this;) b = b.parentNode;
            if (b !== this) {
                a.type = a.data;
                c.event.handle.apply(this, arguments)
            }
        } catch (d) {
        }
    }, wa = function (a) {
        a.type = a.data;
        c.event.handle.apply(this, arguments)
    };
    c.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (a, b) {
        c.event.special[a] = {
            setup: function (d) {
                c.event.add(this, b, d && d.selector ? wa : va, a)
            }, teardown: function (d) {
                c.event.remove(this, b, d && d.selector ? wa : va)
            }
        }
    });
    if (!c.support.submitBubbles) c.event.special.submit = {
        setup: function () {
            if (this.nodeName.toLowerCase() !== "form") {
                c.event.add(this, "click.specialSubmit", function (a) {
                    var b = a.target, d = b.type;
                    if ((d === "submit" || d === "image") && c(b).closest("form").length) {
                        a.liveFired = B;
                        return la("submit", this, arguments)
                    }
                });
                c.event.add(this, "keypress.specialSubmit", function (a) {
                    var b = a.target, d = b.type;
                    if ((d === "text" || d === "password") && c(b).closest("form").length && a.keyCode === 13) {
                        a.liveFired = B;
                        return la("submit", this, arguments)
                    }
                })
            } else return false
        }, teardown: function () {
            c.event.remove(this, ".specialSubmit")
        }
    };
    if (!c.support.changeBubbles) {
        var V, xa = function (a) {
            var b = a.type, d = a.value;
            if (b === "radio" || b === "checkbox") d = a.checked; else if (b === "select-multiple") d = a.selectedIndex > -1 ? c.map(a.options, function (e) {
                return e.selected
            }).join("-") : ""; else if (a.nodeName.toLowerCase() === "select") d = a.selectedIndex;
            return d
        }, Z = function (a, b) {
            var d = a.target, e, f;
            if (!(!ia.test(d.nodeName) || d.readOnly)) {
                e = c.data(d, "_change_data");
                f = xa(d);
                if (a.type !== "focusout" || d.type !== "radio") c.data(d, "_change_data", f);
                if (!(e === B || f === e)) if (e != null || f) {
                    a.type = "change";
                    a.liveFired = B;
                    return c.event.trigger(a, b, d)
                }
            }
        };
        c.event.special.change = {
            filters: {
                focusout: Z, beforedeactivate: Z, click: function (a) {
                    var b = a.target, d = b.type;
                    if (d === "radio" || d === "checkbox" || b.nodeName.toLowerCase() === "select") return Z.call(this, a)
                }, keydown: function (a) {
                    var b = a.target, d = b.type;
                    if (a.keyCode === 13 && b.nodeName.toLowerCase() !== "textarea" || a.keyCode === 32 && (d === "checkbox" || d === "radio") || d === "select-multiple") return Z.call(this, a)
                }, beforeactivate: function (a) {
                    a = a.target;
                    c.data(a, "_change_data", xa(a))
                }
            }, setup: function () {
                if (this.type === "file") return false;
                for (var a in V) c.event.add(this, a + ".specialChange", V[a]);
                return ia.test(this.nodeName)
            }, teardown: function () {
                c.event.remove(this, ".specialChange");
                return ia.test(this.nodeName)
            }
        };
        V = c.event.special.change.filters;
        V.focus = V.beforeactivate
    }
    t.addEventListener && c.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        function d(e) {
            e = c.event.fix(e);
            e.type = b;
            return c.event.trigger(e, null, e.target)
        }

        c.event.special[b] = {
            setup: function () {
                ua[b]++ === 0 && t.addEventListener(a, d, true)
            }, teardown: function () {
                --ua[b] === 0 && t.removeEventListener(a, d, true)
            }
        }
    });
    c.each(["bind", "one"], function (a, b) {
        c.fn[b] = function (d, e, f) {
            if (typeof d === "object") {
                for (var h in d) this[b](h, e, d[h], f);
                return this
            }
            if (c.isFunction(e) || e === false) {
                f = e;
                e = B
            }
            var l = b === "one" ? c.proxy(f, function (o) {
                c(this).unbind(o, l);
                return f.apply(this, arguments)
            }) : f;
            if (d === "unload" && b !== "one") this.one(d, e, f); else {
                h = 0;
                for (var k = this.length; h < k; h++) c.event.add(this[h], d, l, e)
            }
            return this
        }
    });
    c.fn.extend({
        unbind: function (a, b) {
            if (typeof a === "object" && !a.preventDefault) for (var d in a) this.unbind(d, a[d]); else {
                d = 0;
                for (var e = this.length; d < e; d++) c.event.remove(this[d], a, b)
            }
            return this
        }, delegate: function (a, b, d, e) {
            return this.live(b, d, e, a)
        }, undelegate: function (a, b, d) {
            return arguments.length === 0 ? this.unbind("live") : this.die(b, null, d, a)
        }, trigger: function (a, b) {
            return this.each(function () {
                c.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            if (this[0]) {
                var d = c.Event(a);
                d.preventDefault();
                d.stopPropagation();
                c.event.trigger(d, b, this[0]);
                return d.result
            }
        }, toggle: function (a) {
            for (var b = arguments, d = 1; d < b.length;) c.proxy(a, b[d++]);
            return this.click(c.proxy(a, function (e) {
                var f = (c.data(this, "lastToggle" + a.guid) || 0) % d;
                c.data(this, "lastToggle" + a.guid, f + 1);
                e.preventDefault();
                return b[f].apply(this, arguments) || false
            }))
        }, hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var ya = {focus: "focusin", blur: "focusout", mouseenter: "mouseover", mouseleave: "mouseout"};
    c.each(["live", "die"], function (a, b) {
        c.fn[b] = function (d, e, f, h) {
            var l, k = 0, o, x, r = h || this.selector;
            h = h ? this : c(this.context);
            if (typeof d === "object" && !d.preventDefault) {
                for (l in d) h[b](l, e, d[l], r);
                return this
            }
            if (c.isFunction(e)) {
                f = e;
                e = B
            }
            for (d = (d || "").split(" "); (l = d[k++]) != null;) {
                o = X.exec(l);
                x = "";
                if (o) {
                    x = o[0];
                    l = l.replace(X, "")
                }
                if (l === "hover") d.push("mouseenter" + x, "mouseleave" + x); else {
                    o = l;
                    if (l === "focus" || l === "blur") {
                        d.push(ya[l] + x);
                        l += x
                    } else l = (ya[l] || l) + x;
                    if (b === "live") {
                        x = 0;
                        for (var A = h.length; x < A; x++) c.event.add(h[x], "live." + Y(l, r), {
                            data: e,
                            selector: r,
                            handler: f,
                            origType: l,
                            origHandler: f,
                            preType: o
                        })
                    } else h.unbind("live." + Y(l, r), f)
                }
            }
            return this
        }
    });
    c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function (a, b) {
        c.fn[b] = function (d, e) {
            if (e == null) {
                e = d;
                d = null
            }
            return arguments.length > 0 ? this.bind(b, d, e) : this.trigger(b)
        };
        if (c.attrFn) c.attrFn[b] = true
    });
    E.attachEvent && !E.addEventListener && c(E).bind("unload", function () {
        for (var a in c.cache) if (c.cache[a].handle) try {
            c.event.remove(c.cache[a].handle.elem)
        } catch (b) {
        }
    });
    (function () {
        function a(g, i, n, m, p, q) {
            p = 0;
            for (var u = m.length; p < u; p++) {
                var y = m[p];
                if (y) {
                    var F = false;
                    for (y = y[g]; y;) {
                        if (y.sizcache === n) {
                            F = m[y.sizset];
                            break
                        }
                        if (y.nodeType === 1 && !q) {
                            y.sizcache = n;
                            y.sizset = p
                        }
                        if (y.nodeName.toLowerCase() === i) {
                            F = y;
                            break
                        }
                        y = y[g]
                    }
                    m[p] = F
                }
            }
        }

        function b(g, i, n, m, p, q) {
            p = 0;
            for (var u = m.length; p < u; p++) {
                var y = m[p];
                if (y) {
                    var F = false;
                    for (y = y[g]; y;) {
                        if (y.sizcache === n) {
                            F = m[y.sizset];
                            break
                        }
                        if (y.nodeType === 1) {
                            if (!q) {
                                y.sizcache = n;
                                y.sizset = p
                            }
                            if (typeof i !== "string") {
                                if (y === i) {
                                    F = true;
                                    break
                                }
                            } else if (k.filter(i, [y]).length > 0) {
                                F = y;
                                break
                            }
                        }
                        y = y[g]
                    }
                    m[p] = F
                }
            }
        }

        var d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            e = 0, f = Object.prototype.toString, h = false, l = true;
        [0, 0].sort(function () {
            l = false;
            return 0
        });
        var k = function (g, i, n, m) {
            n = n || [];
            var p = i = i || t;
            if (i.nodeType !== 1 && i.nodeType !== 9) return [];
            if (!g || typeof g !== "string") return n;
            var q, u, y, F, M, N = true, O = k.isXML(i), D = [], R = g;
            do {
                d.exec("");
                if (q = d.exec(R)) {
                    R = q[3];
                    D.push(q[1]);
                    if (q[2]) {
                        F = q[3];
                        break
                    }
                }
            } while (q);
            if (D.length > 1 && x.exec(g)) if (D.length === 2 && o.relative[D[0]]) u = L(D[0] + D[1], i); else for (u = o.relative[D[0]] ? [i] : k(D.shift(), i); D.length;) {
                g = D.shift();
                if (o.relative[g]) g += D.shift();
                u = L(g, u)
            } else {
                if (!m && D.length > 1 && i.nodeType === 9 && !O && o.match.ID.test(D[0]) && !o.match.ID.test(D[D.length - 1])) {
                    q = k.find(D.shift(), i, O);
                    i = q.expr ? k.filter(q.expr, q.set)[0] : q.set[0]
                }
                if (i) {
                    q = m ? {
                        expr: D.pop(),
                        set: C(m)
                    } : k.find(D.pop(), D.length === 1 && (D[0] === "~" || D[0] === "+") && i.parentNode ? i.parentNode : i, O);
                    u = q.expr ? k.filter(q.expr, q.set) : q.set;
                    if (D.length > 0) y = C(u); else N = false;
                    for (; D.length;) {
                        q = M = D.pop();
                        if (o.relative[M]) q = D.pop(); else M = "";
                        if (q == null) q = i;
                        o.relative[M](y, q, O)
                    }
                } else y = []
            }
            y || (y = u);
            y || k.error(M || g);
            if (f.call(y) === "[object Array]") if (N) if (i && i.nodeType === 1) for (g = 0; y[g] != null; g++) {
                if (y[g] && (y[g] === true || y[g].nodeType === 1 && k.contains(i, y[g]))) n.push(u[g])
            } else for (g = 0; y[g] != null; g++) y[g] && y[g].nodeType === 1 && n.push(u[g]); else n.push.apply(n, y); else C(y, n);
            if (F) {
                k(F, p, n, m);
                k.uniqueSort(n)
            }
            return n
        };
        k.uniqueSort = function (g) {
            if (w) {
                h = l;
                g.sort(w);
                if (h) for (var i = 1; i < g.length; i++) g[i] === g[i - 1] && g.splice(i--, 1)
            }
            return g
        };
        k.matches = function (g, i) {
            return k(g, null, null, i)
        };
        k.matchesSelector = function (g, i) {
            return k(i, null, null, [g]).length > 0
        };
        k.find = function (g, i, n) {
            var m;
            if (!g) return [];
            for (var p = 0, q = o.order.length; p < q; p++) {
                var u, y = o.order[p];
                if (u = o.leftMatch[y].exec(g)) {
                    var F = u[1];
                    u.splice(1, 1);
                    if (F.substr(F.length - 1) !== "\\") {
                        u[1] = (u[1] || "").replace(/\\/g, "");
                        m = o.find[y](u, i, n);
                        if (m != null) {
                            g = g.replace(o.match[y], "");
                            break
                        }
                    }
                }
            }
            m || (m = i.getElementsByTagName("*"));
            return {set: m, expr: g}
        };
        k.filter = function (g, i, n, m) {
            for (var p, q, u = g, y = [], F = i, M = i && i[0] && k.isXML(i[0]); g && i.length;) {
                for (var N in o.filter) if ((p = o.leftMatch[N].exec(g)) != null && p[2]) {
                    var O, D, R = o.filter[N];
                    D = p[1];
                    q = false;
                    p.splice(1, 1);
                    if (D.substr(D.length - 1) !== "\\") {
                        if (F === y) y = [];
                        if (o.preFilter[N]) if (p = o.preFilter[N](p, F, n, y, m, M)) {
                            if (p === true) continue
                        } else q = O = true;
                        if (p) for (var j = 0; (D = F[j]) != null; j++) if (D) {
                            O = R(D, p, j, F);
                            var s = m ^ !!O;
                            if (n && O != null) if (s) q = true; else F[j] = false; else if (s) {
                                y.push(D);
                                q = true
                            }
                        }
                        if (O !== B) {
                            n || (F = y);
                            g = g.replace(o.match[N], "");
                            if (!q) return [];
                            break
                        }
                    }
                }
                if (g === u) if (q == null) k.error(g); else break;
                u = g
            }
            return F
        };
        k.error = function (g) {
            throw"Syntax error, unrecognized expression: " + g;
        };
        var o = k.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {"class": "className", "for": "htmlFor"},
            attrHandle: {
                href: function (g) {
                    return g.getAttribute("href")
                }
            },
            relative: {
                "+": function (g, i) {
                    var n = typeof i === "string", m = n && !/\W/.test(i);
                    n = n && !m;
                    if (m) i = i.toLowerCase();
                    m = 0;
                    for (var p = g.length, q; m < p; m++) if (q = g[m]) {
                        for (; (q = q.previousSibling) && q.nodeType !== 1;) ;
                        g[m] = n || q && q.nodeName.toLowerCase() === i ? q || false : q === i
                    }
                    n && k.filter(i, g, true)
                }, ">": function (g, i) {
                    var n, m = typeof i === "string", p = 0, q = g.length;
                    if (m && !/\W/.test(i)) for (i = i.toLowerCase(); p < q; p++) {
                        if (n = g[p]) {
                            n = n.parentNode;
                            g[p] = n.nodeName.toLowerCase() === i ? n : false
                        }
                    } else {
                        for (; p < q; p++) if (n = g[p]) g[p] = m ? n.parentNode : n.parentNode === i;
                        m && k.filter(i, g, true)
                    }
                }, "": function (g, i, n) {
                    var m, p = e++, q = b;
                    if (typeof i === "string" && !/\W/.test(i)) {
                        m = i = i.toLowerCase();
                        q = a
                    }
                    q("parentNode", i, p, g, m, n)
                }, "~": function (g, i, n) {
                    var m, p = e++, q = b;
                    if (typeof i === "string" && !/\W/.test(i)) {
                        m = i = i.toLowerCase();
                        q = a
                    }
                    q("previousSibling", i, p, g, m, n)
                }
            },
            find: {
                ID: function (g, i, n) {
                    if (typeof i.getElementById !== "undefined" && !n) return (g = i.getElementById(g[1])) && g.parentNode ? [g] : []
                }, NAME: function (g, i) {
                    if (typeof i.getElementsByName !== "undefined") {
                        for (var n = [], m = i.getElementsByName(g[1]), p = 0, q = m.length; p < q; p++) m[p].getAttribute("name") === g[1] && n.push(m[p]);
                        return n.length === 0 ? null : n
                    }
                }, TAG: function (g, i) {
                    return i.getElementsByTagName(g[1])
                }
            },
            preFilter: {
                CLASS: function (g, i, n, m, p, q) {
                    g = " " + g[1].replace(/\\/g, "") + " ";
                    if (q) return g;
                    q = 0;
                    for (var u; (u = i[q]) != null; q++) if (u) if (p ^ (u.className && (" " + u.className + " ").replace(/[\t\n]/g, " ").indexOf(g) >= 0)) n || m.push(u); else if (n) i[q] = false;
                    return false
                }, ID: function (g) {
                    return g[1].replace(/\\/g, "")
                }, TAG: function (g) {
                    return g[1].toLowerCase()
                }, CHILD: function (g) {
                    if (g[1] === "nth") {
                        var i = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2] === "even" && "2n" || g[2] === "odd" && "2n+1" || !/\D/.test(g[2]) && "0n+" + g[2] || g[2]);
                        g[2] = i[1] + (i[2] || 1) - 0;
                        g[3] = i[3] - 0
                    }
                    g[0] = e++;
                    return g
                }, ATTR: function (g, i, n, m, p, q) {
                    i = g[1].replace(/\\/g, "");
                    if (!q && o.attrMap[i]) g[1] = o.attrMap[i];
                    if (g[2] === "~=") g[4] = " " + g[4] + " ";
                    return g
                }, PSEUDO: function (g, i, n, m, p) {
                    if (g[1] === "not") if ((d.exec(g[3]) || "").length > 1 || /^\w/.test(g[3])) g[3] = k(g[3], null, null, i); else {
                        g = k.filter(g[3], i, n, true ^ p);
                        n || m.push.apply(m, g);
                        return false
                    } else if (o.match.POS.test(g[0]) || o.match.CHILD.test(g[0])) return true;
                    return g
                }, POS: function (g) {
                    g.unshift(true);
                    return g
                }
            },
            filters: {
                enabled: function (g) {
                    return g.disabled === false && g.type !== "hidden"
                }, disabled: function (g) {
                    return g.disabled === true
                }, checked: function (g) {
                    return g.checked === true
                }, selected: function (g) {
                    return g.selected === true
                }, parent: function (g) {
                    return !!g.firstChild
                }, empty: function (g) {
                    return !g.firstChild
                }, has: function (g, i, n) {
                    return !!k(n[3], g).length
                }, header: function (g) {
                    return /h\d/i.test(g.nodeName)
                }, text: function (g) {
                    return "text" === g.type
                }, radio: function (g) {
                    return "radio" === g.type
                }, checkbox: function (g) {
                    return "checkbox" === g.type
                }, file: function (g) {
                    return "file" === g.type
                }, password: function (g) {
                    return "password" === g.type
                }, submit: function (g) {
                    return "submit" === g.type
                }, image: function (g) {
                    return "image" === g.type
                }, reset: function (g) {
                    return "reset" === g.type
                }, button: function (g) {
                    return "button" === g.type || g.nodeName.toLowerCase() === "button"
                }, input: function (g) {
                    return /input|select|textarea|button/i.test(g.nodeName)
                }
            },
            setFilters: {
                first: function (g, i) {
                    return i === 0
                }, last: function (g, i, n, m) {
                    return i === m.length - 1
                }, even: function (g, i) {
                    return i % 2 === 0
                }, odd: function (g, i) {
                    return i % 2 === 1
                }, lt: function (g, i, n) {
                    return i < n[3] - 0
                }, gt: function (g, i, n) {
                    return i > n[3] - 0
                }, nth: function (g, i, n) {
                    return n[3] - 0 === i
                }, eq: function (g, i, n) {
                    return n[3] - 0 === i
                }
            },
            filter: {
                PSEUDO: function (g, i, n, m) {
                    var p = i[1], q = o.filters[p];
                    if (q) return q(g, n, i, m); else if (p === "contains") return (g.textContent || g.innerText || k.getText([g]) || "").indexOf(i[3]) >= 0; else if (p === "not") {
                        i = i[3];
                        n = 0;
                        for (m = i.length; n < m; n++) if (i[n] === g) return false;
                        return true
                    } else k.error("Syntax error, unrecognized expression: " + p)
                }, CHILD: function (g, i) {
                    var n = i[1], m = g;
                    switch (n) {
                        case"only":
                        case"first":
                            for (; m = m.previousSibling;) if (m.nodeType === 1) return false;
                            if (n === "first") return true;
                            m = g;
                        case"last":
                            for (; m = m.nextSibling;) if (m.nodeType === 1) return false;
                            return true;
                        case"nth":
                            n = i[2];
                            var p = i[3];
                            if (n === 1 && p === 0) return true;
                            var q = i[0], u = g.parentNode;
                            if (u && (u.sizcache !== q || !g.nodeIndex)) {
                                var y = 0;
                                for (m = u.firstChild; m; m = m.nextSibling) if (m.nodeType === 1) m.nodeIndex = ++y;
                                u.sizcache = q
                            }
                            m = g.nodeIndex - p;
                            return n === 0 ? m === 0 : m % n === 0 && m / n >= 0
                    }
                }, ID: function (g, i) {
                    return g.nodeType === 1 && g.getAttribute("id") === i
                }, TAG: function (g, i) {
                    return i === "*" && g.nodeType === 1 || g.nodeName.toLowerCase() === i
                }, CLASS: function (g, i) {
                    return (" " + (g.className || g.getAttribute("class")) + " ").indexOf(i) > -1
                }, ATTR: function (g, i) {
                    var n = i[1];
                    n = o.attrHandle[n] ? o.attrHandle[n](g) : g[n] != null ? g[n] : g.getAttribute(n);
                    var m = n + "", p = i[2], q = i[4];
                    return n == null ? p === "!=" : p === "=" ? m === q : p === "*=" ? m.indexOf(q) >= 0 : p === "~=" ? (" " + m + " ").indexOf(q) >= 0 : !q ? m && n !== false : p === "!=" ? m !== q : p === "^=" ? m.indexOf(q) === 0 : p === "$=" ? m.substr(m.length - q.length) === q : p === "|=" ? m === q || m.substr(0, q.length + 1) === q + "-" : false
                }, POS: function (g, i, n, m) {
                    var p = o.setFilters[i[2]];
                    if (p) return p(g, n, i, m)
                }
            }
        }, x = o.match.POS, r = function (g, i) {
            return "\\" + (i - 0 + 1)
        }, A;
        for (A in o.match) {
            o.match[A] = RegExp(o.match[A].source + /(?![^\[]*\])(?![^\(]*\))/.source);
            o.leftMatch[A] = RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[A].source.replace(/\\(\d+)/g, r))
        }
        var C = function (g, i) {
            g = Array.prototype.slice.call(g, 0);
            if (i) {
                i.push.apply(i, g);
                return i
            }
            return g
        };
        try {
            Array.prototype.slice.call(t.documentElement.childNodes, 0)
        } catch (J) {
            C = function (g, i) {
                var n = 0, m = i || [];
                if (f.call(g) === "[object Array]") Array.prototype.push.apply(m, g); else if (typeof g.length === "number") for (var p = g.length; n < p; n++) m.push(g[n]); else for (; g[n]; n++) m.push(g[n]);
                return m
            }
        }
        var w, I;
        if (t.documentElement.compareDocumentPosition) w = function (g, i) {
            if (g === i) {
                h = true;
                return 0
            }
            if (!g.compareDocumentPosition || !i.compareDocumentPosition) return g.compareDocumentPosition ? -1 : 1;
            return g.compareDocumentPosition(i) & 4 ? -1 : 1
        }; else {
            w = function (g, i) {
                var n, m, p = [], q = [];
                n = g.parentNode;
                m = i.parentNode;
                var u = n;
                if (g === i) {
                    h = true;
                    return 0
                } else if (n === m) return I(g, i); else if (n) {
                    if (!m) return 1
                } else return -1;
                for (; u;) {
                    p.unshift(u);
                    u = u.parentNode
                }
                for (u = m; u;) {
                    q.unshift(u);
                    u = u.parentNode
                }
                n = p.length;
                m = q.length;
                for (u = 0; u < n && u < m; u++) if (p[u] !== q[u]) return I(p[u], q[u]);
                return u === n ? I(g, q[u], -1) : I(p[u], i, 1)
            };
            I = function (g, i, n) {
                if (g === i) return n;
                for (g = g.nextSibling; g;) {
                    if (g === i) return -1;
                    g = g.nextSibling
                }
                return 1
            }
        }
        k.getText = function (g) {
            for (var i = "", n, m = 0; g[m]; m++) {
                n = g[m];
                if (n.nodeType === 3 || n.nodeType === 4) i += n.nodeValue; else if (n.nodeType !== 8) i += k.getText(n.childNodes)
            }
            return i
        };
        (function () {
            var g = t.createElement("div"), i = "script" + (new Date).getTime(), n = t.documentElement;
            g.innerHTML = "<a name='" + i + "'/>";
            n.insertBefore(g, n.firstChild);
            if (t.getElementById(i)) {
                o.find.ID = function (m, p, q) {
                    if (typeof p.getElementById !== "undefined" && !q) return (p = p.getElementById(m[1])) ? p.id === m[1] || typeof p.getAttributeNode !== "undefined" && p.getAttributeNode("id").nodeValue === m[1] ? [p] : B : []
                };
                o.filter.ID = function (m, p) {
                    var q = typeof m.getAttributeNode !== "undefined" && m.getAttributeNode("id");
                    return m.nodeType === 1 && q && q.nodeValue === p
                }
            }
            n.removeChild(g);
            n = g = null
        })();
        (function () {
            var g = t.createElement("div");
            g.appendChild(t.createComment(""));
            if (g.getElementsByTagName("*").length > 0) o.find.TAG = function (i, n) {
                var m = n.getElementsByTagName(i[1]);
                if (i[1] === "*") {
                    for (var p = [], q = 0; m[q]; q++) m[q].nodeType === 1 && p.push(m[q]);
                    m = p
                }
                return m
            };
            g.innerHTML = "<a href='#'></a>";
            if (g.firstChild && typeof g.firstChild.getAttribute !== "undefined" && g.firstChild.getAttribute("href") !== "#") o.attrHandle.href = function (i) {
                return i.getAttribute("href", 2)
            };
            g = null
        })();
        t.querySelectorAll && function () {
            var g = k, i = t.createElement("div");
            i.innerHTML = "<p class='TEST'></p>";
            if (!(i.querySelectorAll && i.querySelectorAll(".TEST").length === 0)) {
                k = function (m, p, q, u) {
                    p = p || t;
                    m = m.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!u && !k.isXML(p)) if (p.nodeType === 9) try {
                        return C(p.querySelectorAll(m), q)
                    } catch (y) {
                    } else if (p.nodeType === 1 && p.nodeName.toLowerCase() !== "object") {
                        var F = p.getAttribute("id"), M = F || "__sizzle__";
                        F || p.setAttribute("id", M);
                        try {
                            return C(p.querySelectorAll("#" + M + " " + m), q)
                        } catch (N) {
                        } finally {
                            F || p.removeAttribute("id")
                        }
                    }
                    return g(m, p, q, u)
                };
                for (var n in g) k[n] = g[n];
                i = null
            }
        }();
        (function () {
            var g = t.documentElement,
                i = g.matchesSelector || g.mozMatchesSelector || g.webkitMatchesSelector || g.msMatchesSelector,
                n = false;
            try {
                i.call(t.documentElement, "[test!='']:sizzle")
            } catch (m) {
                n = true
            }
            if (i) k.matchesSelector = function (p, q) {
                q = q.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                if (!k.isXML(p)) try {
                    if (n || !o.match.PSEUDO.test(q) && !/!=/.test(q)) return i.call(p, q)
                } catch (u) {
                }
                return k(q, null, null, [p]).length > 0
            }
        })();
        (function () {
            var g = t.createElement("div");
            g.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!(!g.getElementsByClassName || g.getElementsByClassName("e").length === 0)) {
                g.lastChild.className = "e";
                if (g.getElementsByClassName("e").length !== 1) {
                    o.order.splice(1, 0, "CLASS");
                    o.find.CLASS = function (i, n, m) {
                        if (typeof n.getElementsByClassName !== "undefined" && !m) return n.getElementsByClassName(i[1])
                    };
                    g = null
                }
            }
        })();
        k.contains = t.documentElement.contains ? function (g, i) {
            return g !== i && (g.contains ? g.contains(i) : true)
        } : t.documentElement.compareDocumentPosition ? function (g, i) {
            return !!(g.compareDocumentPosition(i) & 16)
        } : function () {
            return false
        };
        k.isXML = function (g) {
            return (g = (g ? g.ownerDocument || g : 0).documentElement) ? g.nodeName !== "HTML" : false
        };
        var L = function (g, i) {
            for (var n, m = [], p = "", q = i.nodeType ? [i] : i; n = o.match.PSEUDO.exec(g);) {
                p += n[0];
                g = g.replace(o.match.PSEUDO, "")
            }
            g = o.relative[g] ? g + "*" : g;
            n = 0;
            for (var u = q.length; n < u; n++) k(g, q[n], m);
            return k.filter(p, m)
        };
        c.find = k;
        c.expr = k.selectors;
        c.expr[":"] = c.expr.filters;
        c.unique = k.uniqueSort;
        c.text = k.getText;
        c.isXMLDoc = k.isXML;
        c.contains = k.contains
    })();
    var Za = /Until$/, $a = /^(?:parents|prevUntil|prevAll)/, ab = /,/, Na = /^.[^:#\[\.,]*$/,
        bb = Array.prototype.slice, cb = c.expr.match.POS;
    c.fn.extend({
        find: function (a) {
            for (var b = this.pushStack("", "find", a), d = 0, e = 0, f = this.length; e < f; e++) {
                d = b.length;
                c.find(a, this[e], b);
                if (e > 0) for (var h = d; h < b.length; h++) for (var l = 0; l < d; l++) if (b[l] === b[h]) {
                    b.splice(h--, 1);
                    break
                }
            }
            return b
        }, has: function (a) {
            var b = c(a);
            return this.filter(function () {
                for (var d = 0, e = b.length; d < e; d++) if (c.contains(this, b[d])) return true
            })
        }, not: function (a) {
            return this.pushStack(ma(this, a, false), "not", a)
        }, filter: function (a) {
            return this.pushStack(ma(this, a, true), "filter", a)
        }, is: function (a) {
            return !!a && c.filter(a, this).length > 0
        }, closest: function (a, b) {
            var d = [], e, f, h = this[0];
            if (c.isArray(a)) {
                var l, k = {}, o = 1;
                if (h && a.length) {
                    e = 0;
                    for (f = a.length; e < f; e++) {
                        l = a[e];
                        k[l] || (k[l] = c.expr.match.POS.test(l) ? c(l, b || this.context) : l)
                    }
                    for (; h && h.ownerDocument && h !== b;) {
                        for (l in k) {
                            e = k[l];
                            if (e.jquery ? e.index(h) > -1 : c(h).is(e)) d.push({selector: l, elem: h, level: o})
                        }
                        h = h.parentNode;
                        o++
                    }
                }
                return d
            }
            l = cb.test(a) ? c(a, b || this.context) : null;
            e = 0;
            for (f = this.length; e < f; e++) for (h = this[e]; h;) if (l ? l.index(h) > -1 : c.find.matchesSelector(h, a)) {
                d.push(h);
                break
            } else {
                h = h.parentNode;
                if (!h || !h.ownerDocument || h === b) break
            }
            d = d.length > 1 ? c.unique(d) : d;
            return this.pushStack(d, "closest", a)
        }, index: function (a) {
            if (!a || typeof a === "string") return c.inArray(this[0], a ? c(a) : this.parent().children());
            return c.inArray(a.jquery ? a[0] : a, this)
        }, add: function (a, b) {
            var d = typeof a === "string" ? c(a, b || this.context) : c.makeArray(a), e = c.merge(this.get(), d);
            return this.pushStack(!d[0] || !d[0].parentNode || d[0].parentNode.nodeType === 11 || !e[0] || !e[0].parentNode || e[0].parentNode.nodeType === 11 ? e : c.unique(e))
        }, andSelf: function () {
            return this.add(this.prevObject)
        }
    });
    c.each({
        parent: function (a) {
            return (a = a.parentNode) && a.nodeType !== 11 ? a : null
        }, parents: function (a) {
            return c.dir(a, "parentNode")
        }, parentsUntil: function (a, b, d) {
            return c.dir(a, "parentNode", d)
        }, next: function (a) {
            return c.nth(a, 2, "nextSibling")
        }, prev: function (a) {
            return c.nth(a, 2, "previousSibling")
        }, nextAll: function (a) {
            return c.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return c.dir(a, "previousSibling")
        }, nextUntil: function (a, b, d) {
            return c.dir(a, "nextSibling", d)
        }, prevUntil: function (a, b, d) {
            return c.dir(a, "previousSibling", d)
        }, siblings: function (a) {
            return c.sibling(a.parentNode.firstChild, a)
        }, children: function (a) {
            return c.sibling(a.firstChild)
        }, contents: function (a) {
            return c.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : c.makeArray(a.childNodes)
        }
    }, function (a, b) {
        c.fn[a] = function (d, e) {
            var f = c.map(this, b, d);
            Za.test(a) || (e = d);
            if (e && typeof e === "string") f = c.filter(e, f);
            f = this.length > 1 ? c.unique(f) : f;
            if ((this.length > 1 || ab.test(e)) && $a.test(a)) f = f.reverse();
            return this.pushStack(f, a, bb.call(arguments).join(","))
        }
    });
    c.extend({
        filter: function (a, b, d) {
            if (d) a = ":not(" + a + ")";
            return b.length === 1 ? c.find.matchesSelector(b[0], a) ? [b[0]] : [] : c.find.matches(a, b)
        }, dir: function (a, b, d) {
            var e = [];
            for (a = a[b]; a && a.nodeType !== 9 && (d === B || a.nodeType !== 1 || !c(a).is(d));) {
                a.nodeType === 1 && e.push(a);
                a = a[b]
            }
            return e
        }, nth: function (a, b, d) {
            b = b || 1;
            for (var e = 0; a; a = a[d]) if (a.nodeType === 1 && ++e === b) break;
            return a
        }, sibling: function (a, b) {
            for (var d = []; a; a = a.nextSibling) a.nodeType === 1 && a !== b && d.push(a);
            return d
        }
    });
    var za = / jQuery\d+="(?:\d+|null)"/g, $ = /^\s+/,
        Aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, Ba = /<([\w:]+)/,
        db = /<tbody/i, eb = /<|&#?\w+;/, Ca = /<(?:script|object|embed|option|style)/i,
        Da = /checked\s*(?:[^=]|=\s*.checked.)/i, fb = /\=([^="'>\s]+\/)>/g, P = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        };
    P.optgroup = P.option;
    P.tbody = P.tfoot = P.colgroup = P.caption = P.thead;
    P.th = P.td;
    if (!c.support.htmlSerialize) P._default = [1, "div<div>", "</div>"];
    c.fn.extend({
        text: function (a) {
            if (c.isFunction(a)) return this.each(function (b) {
                var d = c(this);
                d.text(a.call(this, b, d.text()))
            });
            if (typeof a !== "object" && a !== B) return this.empty().append((this[0] && this[0].ownerDocument || t).createTextNode(a));
            return c.text(this)
        }, wrapAll: function (a) {
            if (c.isFunction(a)) return this.each(function (d) {
                c(this).wrapAll(a.call(this, d))
            });
            if (this[0]) {
                var b = c(a, this[0].ownerDocument).eq(0).clone(true);
                this[0].parentNode && b.insertBefore(this[0]);
                b.map(function () {
                    for (var d = this; d.firstChild && d.firstChild.nodeType === 1;) d = d.firstChild;
                    return d
                }).append(this)
            }
            return this
        }, wrapInner: function (a) {
            if (c.isFunction(a)) return this.each(function (b) {
                c(this).wrapInner(a.call(this, b))
            });
            return this.each(function () {
                var b = c(this), d = b.contents();
                d.length ? d.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            return this.each(function () {
                c(this).wrapAll(a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                c.nodeName(this, "body") || c(this).replaceWith(this.childNodes)
            }).end()
        }, append: function () {
            return this.domManip(arguments, true, function (a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        }, prepend: function () {
            return this.domManip(arguments, true, function (a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        }, before: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, false, function (b) {
                this.parentNode.insertBefore(b, this)
            }); else if (arguments.length) {
                var a = c(arguments[0]);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        }, after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, false, function (b) {
                this.parentNode.insertBefore(b, this.nextSibling)
            }); else if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, c(arguments[0]).toArray());
                return a
            }
        }, remove: function (a, b) {
            for (var d = 0, e; (e = this[d]) != null; d++) if (!a || c.filter(a, [e]).length) {
                if (!b && e.nodeType === 1) {
                    c.cleanData(e.getElementsByTagName("*"));
                    c.cleanData([e])
                }
                e.parentNode && e.parentNode.removeChild(e)
            }
            return this
        }, empty: function () {
            for (var a = 0, b; (b = this[a]) != null; a++) for (b.nodeType === 1 && c.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
            return this
        }, clone: function (a) {
            var b = this.map(function () {
                if (!c.support.noCloneEvent && !c.isXMLDoc(this)) {
                    var d = this.outerHTML, e = this.ownerDocument;
                    if (!d) {
                        d = e.createElement("div");
                        d.appendChild(this.cloneNode(true));
                        d = d.innerHTML
                    }
                    return c.clean([d.replace(za, "").replace(fb, '="$1">').replace($, "")], e)[0]
                } else return this.cloneNode(true)
            });
            if (a === true) {
                na(this, b);
                na(this.find("*"), b.find("*"))
            }
            return b
        }, html: function (a) {
            if (a === B) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(za, "") : null; else if (typeof a === "string" && !Ca.test(a) && (c.support.leadingWhitespace || !$.test(a)) && !P[(Ba.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(Aa, "<$1></$2>");
                try {
                    for (var b = 0, d = this.length; b < d; b++) if (this[b].nodeType === 1) {
                        c.cleanData(this[b].getElementsByTagName("*"));
                        this[b].innerHTML = a
                    }
                } catch (e) {
                    this.empty().append(a)
                }
            } else c.isFunction(a) ? this.each(function (f) {
                var h = c(this);
                h.html(a.call(this, f, h.html()))
            }) : this.empty().append(a);
            return this
        }, replaceWith: function (a) {
            if (this[0] && this[0].parentNode) {
                if (c.isFunction(a)) return this.each(function (b) {
                    var d = c(this), e = d.html();
                    d.replaceWith(a.call(this, b, e))
                });
                if (typeof a !== "string") a = c(a).detach();
                return this.each(function () {
                    var b = this.nextSibling, d = this.parentNode;
                    c(this).remove();
                    b ? c(b).before(a) : c(d).append(a)
                })
            } else return this.pushStack(c(c.isFunction(a) ? a() : a), "replaceWith", a)
        }, detach: function (a) {
            return this.remove(a, true)
        }, domManip: function (a, b, d) {
            var e, f, h, l = a[0], k = [];
            if (!c.support.checkClone && arguments.length === 3 && typeof l === "string" && Da.test(l)) return this.each(function () {
                c(this).domManip(a, b, d, true)
            });
            if (c.isFunction(l)) return this.each(function (x) {
                var r = c(this);
                a[0] = l.call(this, x, b ? r.html() : B);
                r.domManip(a, b, d)
            });
            if (this[0]) {
                e = l && l.parentNode;
                e = c.support.parentNode && e && e.nodeType === 11 && e.childNodes.length === this.length ? {fragment: e} : c.buildFragment(a, this, k);
                h = e.fragment;
                if (f = h.childNodes.length === 1 ? h = h.firstChild : h.firstChild) {
                    b = b && c.nodeName(f, "tr");
                    f = 0;
                    for (var o = this.length; f < o; f++) d.call(b ? c.nodeName(this[f], "table") ? this[f].getElementsByTagName("tbody")[0] || this[f].appendChild(this[f].ownerDocument.createElement("tbody")) : this[f] : this[f], f > 0 || e.cacheable || this.length > 1 ? h.cloneNode(true) : h)
                }
                k.length && c.each(k, Oa)
            }
            return this
        }
    });
    c.buildFragment = function (a, b, d) {
        var e, f, h;
        b = b && b[0] ? b[0].ownerDocument || b[0] : t;
        if (a.length === 1 && typeof a[0] === "string" && a[0].length < 512 && b === t && !Ca.test(a[0]) && (c.support.checkClone || !Da.test(a[0]))) {
            f = true;
            if (h = c.fragments[a[0]]) if (h !== 1) e = h
        }
        if (!e) {
            e = b.createDocumentFragment();
            c.clean(a, b, e, d)
        }
        if (f) c.fragments[a[0]] = h ? e : 1;
        return {fragment: e, cacheable: f}
    };
    c.fragments = {};
    c.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        c.fn[a] = function (d) {
            var e = [];
            d = c(d);
            var f = this.length === 1 && this[0].parentNode;
            if (f && f.nodeType === 11 && f.childNodes.length === 1 && d.length === 1) {
                d[b](this[0]);
                return this
            } else {
                f = 0;
                for (var h = d.length; f < h; f++) {
                    var l = (f > 0 ? this.clone(true) : this).get();
                    c(d[f])[b](l);
                    e = e.concat(l)
                }
                return this.pushStack(e, a, d.selector)
            }
        }
    });
    c.extend({
        clean: function (a, b, d, e) {
            b = b || t;
            if (typeof b.createElement === "undefined") b = b.ownerDocument || b[0] && b[0].ownerDocument || t;
            for (var f = [], h = 0, l; (l = a[h]) != null; h++) {
                if (typeof l === "number") l += "";
                if (l) {
                    if (typeof l === "string" && !eb.test(l)) l = b.createTextNode(l); else if (typeof l === "string") {
                        l = l.replace(Aa, "<$1></$2>");
                        var k = (Ba.exec(l) || ["", ""])[1].toLowerCase(), o = P[k] || P._default, x = o[0],
                            r = b.createElement("div");
                        for (r.innerHTML = o[1] + l + o[2]; x--;) r = r.lastChild;
                        if (!c.support.tbody) {
                            x = db.test(l);
                            k = k === "table" && !x ? r.firstChild && r.firstChild.childNodes : o[1] === "<table>" && !x ? r.childNodes : [];
                            for (o = k.length - 1; o >= 0; --o) c.nodeName(k[o], "tbody") && !k[o].childNodes.length && k[o].parentNode.removeChild(k[o])
                        }
                        !c.support.leadingWhitespace && $.test(l) && r.insertBefore(b.createTextNode($.exec(l)[0]), r.firstChild);
                        l = r.childNodes
                    }
                    if (l.nodeType) f.push(l); else f = c.merge(f, l)
                }
            }
            if (d) for (h = 0; f[h]; h++) if (e && c.nodeName(f[h], "script") && (!f[h].type || f[h].type.toLowerCase() === "text/javascript")) e.push(f[h].parentNode ? f[h].parentNode.removeChild(f[h]) : f[h]); else {
                f[h].nodeType === 1 && f.splice.apply(f, [h + 1, 0].concat(c.makeArray(f[h].getElementsByTagName("script"))));
                d.appendChild(f[h])
            }
            return f
        }, cleanData: function (a) {
            for (var b, d, e = c.cache, f = c.event.special, h = c.support.deleteExpando, l = 0, k; (k = a[l]) != null; l++) if (!(k.nodeName && c.noData[k.nodeName.toLowerCase()])) if (d = k[c.expando]) {
                if ((b = e[d]) && b.events) for (var o in b.events) f[o] ? c.event.remove(k, o) : c.removeEvent(k, o, b.handle);
                if (h) delete k[c.expando]; else k.removeAttribute && k.removeAttribute(c.expando);
                delete e[d]
            }
        }
    });
    var Ea = /alpha\([^)]*\)/i, gb = /opacity=([^)]*)/, hb = /-([a-z])/ig, ib = /([A-Z])/g, Fa = /^-?\d+(?:px)?$/i,
        jb = /^-?\d/, kb = {position: "absolute", visibility: "hidden", display: "block"}, Pa = ["Left", "Right"],
        Qa = ["Top", "Bottom"], W, Ga, aa, lb = function (a, b) {
            return b.toUpperCase()
        };
    c.fn.css = function (a, b) {
        if (arguments.length === 2 && b === B) return this;
        return c.access(this, a, b, true, function (d, e, f) {
            return f !== B ? c.style(d, e, f) : c.css(d, e)
        })
    };
    c.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var d = W(a, "opacity", "opacity");
                        return d === "" ? "1" : d
                    } else return a.style.opacity
                }
            }
        },
        cssNumber: {zIndex: true, fontWeight: true, opacity: true, zoom: true, lineHeight: true},
        cssProps: {"float": c.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (a, b, d, e) {
            if (!(!a || a.nodeType === 3 || a.nodeType === 8 || !a.style)) {
                var f, h = c.camelCase(b), l = a.style, k = c.cssHooks[h];
                b = c.cssProps[h] || h;
                if (d !== B) {
                    if (!(typeof d === "number" && isNaN(d) || d == null)) {
                        if (typeof d === "number" && !c.cssNumber[h]) d += "px";
                        if (!k || !("set" in k) || (d = k.set(a, d)) !== B) try {
                            l[b] = d
                        } catch (o) {
                        }
                    }
                } else {
                    if (k && "get" in k && (f = k.get(a, false, e)) !== B) return f;
                    return l[b]
                }
            }
        },
        css: function (a, b, d) {
            var e, f = c.camelCase(b), h = c.cssHooks[f];
            b = c.cssProps[f] || f;
            if (h && "get" in h && (e = h.get(a, true, d)) !== B) return e; else if (W) return W(a, b, f)
        },
        swap: function (a, b, d) {
            var e = {}, f;
            for (f in b) {
                e[f] = a.style[f];
                a.style[f] = b[f]
            }
            d.call(a);
            for (f in b) a.style[f] = e[f]
        },
        camelCase: function (a) {
            return a.replace(hb, lb)
        }
    });
    c.curCSS = c.css;
    c.each(["height", "width"], function (a, b) {
        c.cssHooks[b] = {
            get: function (d, e, f) {
                var h;
                if (e) {
                    if (d.offsetWidth !== 0) h = oa(d, b, f); else c.swap(d, kb, function () {
                        h = oa(d, b, f)
                    });
                    if (h <= 0) {
                        h = W(d, b, b);
                        if (h === "0px" && aa) h = aa(d, b, b);
                        if (h != null) return h === "" || h === "auto" ? "0px" : h
                    }
                    if (h < 0 || h == null) {
                        h = d.style[b];
                        return h === "" || h === "auto" ? "0px" : h
                    }
                    return typeof h === "string" ? h : h + "px"
                }
            }, set: function (d, e) {
                if (Fa.test(e)) {
                    e = parseFloat(e);
                    if (e >= 0) return e + "px"
                } else return e
            }
        }
    });
    if (!c.support.opacity) c.cssHooks.opacity = {
        get: function (a, b) {
            return gb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        }, set: function (a, b) {
            var d = a.style;
            d.zoom = 1;
            var e = c.isNaN(b) ? "" : "alpha(opacity=" + b * 100 + ")", f = d.filter || "";
            d.filter = Ea.test(f) ? f.replace(Ea, e) : d.filter + " " + e
        }
    };
    if (t.defaultView && t.defaultView.getComputedStyle) Ga = function (a, b, d) {
        var e;
        d = d.replace(ib, "-$1").toLowerCase();
        if (!(b = a.ownerDocument.defaultView)) return B;
        if (b = b.getComputedStyle(a, null)) {
            e = b.getPropertyValue(d);
            if (e === "" && !c.contains(a.ownerDocument.documentElement, a)) e = c.style(a, d)
        }
        return e
    };
    if (t.documentElement.currentStyle) aa = function (a, b) {
        var d, e, f = a.currentStyle && a.currentStyle[b], h = a.style;
        if (!Fa.test(f) && jb.test(f)) {
            d = h.left;
            e = a.runtimeStyle.left;
            a.runtimeStyle.left = a.currentStyle.left;
            h.left = b === "fontSize" ? "1em" : f || 0;
            f = h.pixelLeft + "px";
            h.left = d;
            a.runtimeStyle.left = e
        }
        return f === "" ? "auto" : f
    };
    W = Ga || aa;
    if (c.expr && c.expr.filters) {
        c.expr.filters.hidden = function (a) {
            var b = a.offsetHeight;
            return a.offsetWidth === 0 && b === 0 || !c.support.reliableHiddenOffsets && (a.style.display || c.css(a, "display")) === "none"
        };
        c.expr.filters.visible = function (a) {
            return !c.expr.filters.hidden(a)
        }
    }
    var mb = c.now(), nb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ob = /^(?:select|textarea)/i,
        pb = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        qb = /^(?:GET|HEAD)$/, Ra = /\[\]$/, T = /\=\?(&|$)/, ja = /\?/, rb = /([?&])_=[^&]*/,
        sb = /^(\w+:)?\/\/([^\/?#]+)/, tb = /%20/g, ub = /#.*$/, Ha = c.fn.load;
    c.fn.extend({
        load: function (a, b, d) {
            if (typeof a !== "string" && Ha) return Ha.apply(this, arguments); else if (!this.length) return this;
            var e = a.indexOf(" ");
            if (e >= 0) {
                var f = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            e = "GET";
            if (b) if (c.isFunction(b)) {
                d = b;
                b = null
            } else if (typeof b === "object") {
                b = c.param(b, c.ajaxSettings.traditional);
                e = "POST"
            }
            var h = this;
            c.ajax({
                url: a, type: e, dataType: "html", data: b, complete: function (l, k) {
                    if (k === "success" || k === "notmodified") h.html(f ? c("<div>").append(l.responseText.replace(nb, "")).find(f) : l.responseText);
                    d && h.each(d, [l.responseText, k, l])
                }
            });
            return this
        }, serialize: function () {
            return c.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                return this.elements ? c.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || ob.test(this.nodeName) || pb.test(this.type))
            }).map(function (a, b) {
                var d = c(this).val();
                return d == null ? null : c.isArray(d) ? c.map(d, function (e) {
                    return {name: b.name, value: e}
                }) : {name: b.name, value: d}
            }).get()
        }
    });
    c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        c.fn[b] = function (d) {
            return this.bind(b, d)
        }
    });
    // todo 7777
    c.extend({
        get: function (a, b, d, e) {
            if (c.isFunction(b)) {
                e = e || d;
                d = b;
                b = null
            }
            return c.ajax({type: "GET", url: a, data: b, success: d, dataType: e})
        },
        getScript: function (a, b) {
            return c.get(a, null, b, "script")
        },
        getJSON: function (a, b, d) {
            return c.get(a, b, d, "json")
        },
        post: function (a, b, d, e) {
            if (c.isFunction(b)) {
                e = e || d;
                d = b;
                b = {}
            }
            return c.ajax({type: "POST", url: a, data: b, success: d, dataType: e})
        },
        ajaxSetup: function (a) {
            c.extend(c.ajaxSettings, a)
        },
        ajaxSettings: {
            url: location.href,
            global: true,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: true,
            async: true,
            xhr: function () {
                return new E.XMLHttpRequest
            },
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                script: "text/javascript, application/javascript",
                json: "application/json, text/javascript",
                text: "text/plain",
                _default: "*/*"
            }
        },
        ajax: function (a) {
            var b = c.extend(true, {}, c.ajaxSettings, a), d, e, f, h = b.type.toUpperCase(), l = qb.test(h);
            b.url = b.url.replace(ub, "");
            b.context = a && a.context != null ? a.context : b;
            if (b.data && b.processData && typeof b.data !== "string") b.data = c.param(b.data, b.traditional);
            if (b.dataType === "jsonp") {
                if (h === "GET") T.test(b.url) || (b.url += (ja.test(b.url) ? "&" : "?") + (b.jsonp || "callback") + "=?"); else if (!b.data || !T.test(b.data)) b.data = (b.data ? b.data + "&" : "") + (b.jsonp || "callback") + "=?";
                b.dataType = "json"
            }
            if (b.dataType === "json" && (b.data && T.test(b.data) || T.test(b.url))) {
                d = b.jsonpCallback || "jsonp" + mb++;
                if (b.data) b.data = (b.data + "").replace(T, "=" + d + "$1");
                b.url = b.url.replace(T, "=" + d + "$1");
                b.dataType = "script";
                var k = E[d];
                E[d] = function (m) {
                    if (c.isFunction(k)) k(m); else {
                        E[d] = B;
                        try {
                            delete E[d]
                        } catch (p) {
                        }
                    }
                    f = m;
                    c.handleSuccess(b, w, e, f);
                    c.handleComplete(b, w, e, f);
                    r && r.removeChild(A)
                }
            }
            if (b.dataType === "script" && b.cache === null) b.cache = false;
            if (b.cache === false && l) {
                var o = c.now(), x = b.url.replace(rb, "$1_=" + o);
                b.url = x + (x === b.url ? (ja.test(b.url) ? "&" : "?") + "_=" + o : "")
            }
            if (b.data && l) b.url += (ja.test(b.url) ? "&" : "?") + b.data;
            b.global && c.active++ === 0 && c.event.trigger("ajaxStart");
            o = (o = sb.exec(b.url)) && (o[1] && o[1].toLowerCase() !== location.protocol || o[2].toLowerCase() !== location.host);
            if (b.dataType === "script" && h === "GET" && o) {
                var r = t.getElementsByTagName("head")[0] || t.documentElement, A = t.createElement("script");
                if (b.scriptCharset) A.charset = b.scriptCharset;
                A.src = b.url;
                if (!d) {
                    var C = false;
                    A.onload = A.onreadystatechange = function () {
                        if (!C && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                            C = true;
                            c.handleSuccess(b, w, e, f);
                            c.handleComplete(b, w, e, f);
                            A.onload = A.onreadystatechange = null;
                            r && A.parentNode && r.removeChild(A)
                        }
                    }
                }
                r.insertBefore(A, r.firstChild);
                return B
            }
            var J = false, w = b.xhr();
            if (w) {
                b.username ? w.open(h, b.url, b.async, b.username, b.password) : w.open(h, b.url, b.async);
                try {
                    if (b.data != null && !l || a && a.contentType) w.setRequestHeader("Content-Type", b.contentType);
                    if (b.ifModified) {
                        c.lastModified[b.url] && w.setRequestHeader("If-Modified-Since", c.lastModified[b.url]);
                        c.etag[b.url] && w.setRequestHeader("If-None-Match", c.etag[b.url])
                    }
                    o || w.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                    w.setRequestHeader("Accept", b.dataType && b.accepts[b.dataType] ? b.accepts[b.dataType] + ", */*; q=0.01" : b.accepts._default)
                } catch (I) {
                }
                if (b.beforeSend && b.beforeSend.call(b.context, w, b) === false) {
                    b.global && c.active-- === 1 && c.event.trigger("ajaxStop");
                    w.abort();
                    return false
                }
                b.global && c.triggerGlobal(b, "ajaxSend", [w, b]);
                var L = w.onreadystatechange = function (m) {
                    if (!w || w.readyState === 0 || m === "abort") {
                        J || c.handleComplete(b, w, e, f);
                        J = true;
                        if (w) w.onreadystatechange = c.noop
                    } else if (!J && w && (w.readyState === 4 || m === "timeout")) {
                        J = true;
                        w.onreadystatechange = c.noop;
                        e = m === "timeout" ? "timeout" : !c.httpSuccess(w) ? "error" : b.ifModified && c.httpNotModified(w, b.url) ? "notmodified" : "success";
                        var p;
                        if (e === "success") try {
                            f = c.httpData(w, b.dataType, b)
                        } catch (q) {
                            e = "parsererror";
                            p = q
                        }
                        if (e === "success" || e === "notmodified") d || c.handleSuccess(b, w, e, f); else c.handleError(b, w, e, p);
                        d || c.handleComplete(b, w, e, f);
                        m === "timeout" && w.abort();
                        if (b.async) w = null
                    }
                };
                try {
                    var g = w.abort;
                    w.abort = function () {
                        w && Function.prototype.call.call(g, w);
                        L("abort")
                    }
                } catch (i) {
                }
                b.async && b.timeout > 0 && setTimeout(function () {
                    w && !J && L("timeout")
                }, b.timeout);
                try {
                    w.send(l || b.data == null ? null : b.data)
                } catch (n) {
                    c.handleError(b, w, null, n);
                    c.handleComplete(b, w, e, f)
                }
                b.async || L();
                return w
            }
        },
        param: function (a, b) {
            var d = [], e = function (h, l) {
                l = c.isFunction(l) ? l() : l;
                d[d.length] = encodeURIComponent(h) + "=" + encodeURIComponent(l)
            };
            if (b === B) b = c.ajaxSettings.traditional;
            if (c.isArray(a) || a.jquery) c.each(a, function () {
                e(this.name, this.value)
            }); else for (var f in a) da(f, a[f], b, e);
            return d.join("&").replace(tb, "+")
        }
    });
    c.extend({
        // todo 11111
        active: 0, lastModified: {}, etag: {}, handleError: function (a, b, d, e) {
            a.error && a.error.call(a.context, b, d, e);
            a.global && c.triggerGlobal(a, "ajaxError", [b, a, e])
        }, handleSuccess: function (a, b, d, e) {
            a.success && a.success.call(a.context, e, d, b);
            a.global && c.triggerGlobal(a, "ajaxSuccess", [b, a])
        }, handleComplete: function (a, b, d) {
            a.complete && a.complete.call(a.context, b, d);
            a.global && c.triggerGlobal(a, "ajaxComplete", [b, a]);
            a.global && c.active-- === 1 && c.event.trigger("ajaxStop")
        }, triggerGlobal: function (a, b, d) {
            (a.context && a.context.url == null ? c(a.context) : c.event).trigger(b, d)
        }, httpSuccess: function (a) {
            try {
                return !a.status && location.protocol === "file:" || a.status >= 200 && a.status < 300 || a.status === 304 || a.status === 1223
            } catch (b) {
            }
            return false
        }, httpNotModified: function (a, b) {
            var d = a.getResponseHeader("Last-Modified"), e = a.getResponseHeader("Etag");
            if (d) c.lastModified[b] = d;
            if (e) c.etag[b] = e;
            return a.status === 304
        }, httpData: function (a, b, d) {
            var e = a.getResponseHeader("content-type") || "", f = b === "xml" || !b && e.indexOf("xml") >= 0;
            a = f ? a.responseXML : a.responseText;
            f && a.documentElement.nodeName === "parsererror" && c.error("parsererror");
            if (d && d.dataFilter) a = d.dataFilter(a, b);
            if (typeof a === "string") if (b === "json" || !b && e.indexOf("json") >= 0) a = c.parseJSON(a); else if (b === "script" || !b && e.indexOf("javascript") >= 0) c.globalEval(a);
            return a
        }
    });
    // todo 22222
    if (E.ActiveXObject) c.ajaxSettings.xhr = function () {
        if (E.location.protocol !== "file:") try {
            return new E.XMLHttpRequest
        } catch (a) {
        }
        try {
            return new E.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {
        }
    };
    c.support.ajax = !!c.ajaxSettings.xhr();
    var ea = {}, vb = /^(?:toggle|show|hide)$/, wb = /^([+\-]=)?([\d+.\-]+)(.*)$/, ba,
        pa = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
    // todo 3333
    c.fn.extend({
        show: function (a, b, d) {
            if (a || a === 0) return this.animate(S("show", 3), a, b, d); else {
                d = 0;
                for (var e = this.length; d < e; d++) {
                    a = this[d];
                    b = a.style.display;
                    if (!c.data(a, "olddisplay") && b === "none") b = a.style.display = "";
                    b === "" && c.css(a, "display") === "none" && c.data(a, "olddisplay", qa(a.nodeName))
                }
                for (d = 0; d < e; d++) {
                    a = this[d];
                    b = a.style.display;
                    if (b === "" || b === "none") a.style.display = c.data(a, "olddisplay") || ""
                }
                return this
            }
        }, hide: function (a, b, d) {
            if (a || a === 0) return this.animate(S("hide", 3), a, b, d); else {
                a = 0;
                for (b = this.length; a < b; a++) {
                    d = c.css(this[a], "display");
                    d !== "none" && c.data(this[a], "olddisplay", d)
                }
                for (a = 0; a < b; a++) this[a].style.display = "none";
                return this
            }
        }, _toggle: c.fn.toggle, toggle: function (a, b, d) {
            var e = typeof a === "boolean";
            if (c.isFunction(a) && c.isFunction(b)) this._toggle.apply(this, arguments); else a == null || e ? this.each(function () {
                var f = e ? a : c(this).is(":hidden");
                c(this)[f ? "show" : "hide"]()
            }) : this.animate(S("toggle", 3), a, b, d);
            return this
        }, fadeTo: function (a, b, d, e) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity: b}, a, d, e)
        }, animate: function (a, b, d, e) {
            var f = c.speed(b, d, e);
            if (c.isEmptyObject(a)) return this.each(f.complete);
            return this[f.queue === false ? "each" : "queue"](function () {
                var h = c.extend({}, f), l, k = this.nodeType === 1, o = k && c(this).is(":hidden"), x = this;
                for (l in a) {
                    var r = c.camelCase(l);
                    if (l !== r) {
                        a[r] = a[l];
                        delete a[l];
                        l = r
                    }
                    if (a[l] === "hide" && o || a[l] === "show" && !o) return h.complete.call(this);
                    if (k && (l === "height" || l === "width")) {
                        h.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY];
                        if (c.css(this, "display") === "inline" && c.css(this, "float") === "none") if (c.support.inlineBlockNeedsLayout) if (qa(this.nodeName) === "inline") this.style.display = "inline-block"; else {
                            this.style.display = "inline";
                            this.style.zoom = 1
                        } else this.style.display = "inline-block"
                    }
                    if (c.isArray(a[l])) {
                        (h.specialEasing = h.specialEasing || {})[l] = a[l][1];
                        a[l] = a[l][0]
                    }
                }
                if (h.overflow != null) this.style.overflow = "hidden";
                h.curAnim = c.extend({}, a);
                c.each(a, function (A, C) {
                    var J = new c.fx(x, h, A);
                    if (vb.test(C)) J[C === "toggle" ? o ? "show" : "hide" : C](a); else {
                        var w = wb.exec(C), I = J.cur() || 0;
                        if (w) {
                            var L = parseFloat(w[2]), g = w[3] || "px";
                            if (g !== "px") {
                                c.style(x, A, (L || 1) + g);
                                I = (L || 1) / J.cur() * I;
                                c.style(x, A, I + g)
                            }
                            if (w[1]) L = (w[1] === "-=" ? -1 : 1) * L + I;
                            J.custom(I, L, g)
                        } else J.custom(I, C, "")
                    }
                });
                return true
            })
        }, stop: function (a, b) {
            var d = c.timers;
            a && this.queue([]);
            this.each(function () {
                for (var e = d.length - 1; e >= 0; e--) if (d[e].elem === this) {
                    b && d[e](true);
                    d.splice(e, 1)
                }
            });
            b || this.dequeue();
            return this
        }
    });
    // todo 444444
    c.each({
        slideDown: S("show", 1),
        slideUp: S("hide", 1),
        slideToggle: S("toggle", 1),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        c.fn[a] = function (d, e, f) {
            return this.animate(b, d, e, f)
        }
    });
    // todo 555555
    c.extend({
        speed: function (a, b, d) {
            var e = a && typeof a === "object" ? c.extend({}, a) : {
                complete: d || !d && b || c.isFunction(a) && a,
                duration: a,
                easing: d && b || b && !c.isFunction(b) && b
            };
            e.duration = c.fx.off ? 0 : typeof e.duration === "number" ? e.duration : e.duration in c.fx.speeds ? c.fx.speeds[e.duration] : c.fx.speeds._default;
            e.old = e.complete;
            e.complete = function () {
                e.queue !== false && c(this).dequeue();
                c.isFunction(e.old) && e.old.call(this)
            };
            return e
        }, easing: {
            linear: function (a, b, d, e) {
                return d + e * a
            }, swing: function (a, b, d, e) {
                return (-Math.cos(a * Math.PI) / 2 + 0.5) * e + d
            }
        }, timers: [], fx: function (a, b, d) {
            this.options = b;
            this.elem = a;
            this.prop = d;
            if (!b.orig) b.orig = {}
        }
    });
    // todo 66666
    c.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this);
            (c.fx.step[this.prop] || c.fx.step._default)(this)
        },
        cur: function () {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            var a = parseFloat(c.css(this.elem, this.prop));
            return a && a > -1E4 ? a : 0
        },
        custom: function (a, b, d) {
            function e(l) {
                return f.step(l)
            }

            var f = this, h = c.fx;
            this.startTime = c.now();
            this.start = a;
            this.end = b;
            this.unit = d || this.unit || "px";
            this.now = this.start;
            this.pos = this.state = 0;
            e.elem = this.elem;
            if (e() && c.timers.push(e) && !ba) ba = setInterval(h.tick, h.interval)
        },
        show: function () {
            this.options.orig[this.prop] = c.style(this.elem, this.prop);
            this.options.show = true;
            this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
            c(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = c.style(this.elem, this.prop);
            this.options.hide = true;
            this.custom(this.cur(), 0)
        },
        step: function (a) {
            var b = c.now(), d = true;
            if (a || b >= this.options.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                this.options.curAnim[this.prop] = true;
                for (var e in this.options.curAnim) if (this.options.curAnim[e] !== true) d = false;
                if (d) {
                    if (this.options.overflow != null && !c.support.shrinkWrapBlocks) {
                        var f = this.elem, h = this.options;
                        c.each(["", "X", "Y"], function (k, o) {
                            f.style["overflow" + o] = h.overflow[k]
                        })
                    }
                    this.options.hide && c(this.elem).hide();
                    if (this.options.hide || this.options.show) for (var l in this.options.curAnim) c.style(this.elem, l, this.options.orig[l]);
                    this.options.complete.call(this.elem)
                }
                return false
            } else {
                a = b - this.startTime;
                this.state = a / this.options.duration;
                b = this.options.easing || (c.easing.swing ? "swing" : "linear");
                this.pos = c.easing[this.options.specialEasing && this.options.specialEasing[this.prop] || b](this.state, a, 0, 1, this.options.duration);
                this.now = this.start + (this.end - this.start) * this.pos;
                this.update()
            }
            return true
        }
    };
    // toto 66666777777
    c.extend(c.fx, {
        tick: function () {
            for (var a = c.timers, b = 0; b < a.length; b++) a[b]() || a.splice(b--, 1);
            a.length || c.fx.stop()
        }, interval: 13, stop: function () {
            clearInterval(ba);
            ba = null
        }, speeds: {slow: 600, fast: 200, _default: 400}, step: {
            opacity: function (a) {
                c.style(a.elem, "opacity", a.now)
            }, _default: function (a) {
                if (a.elem.style && a.elem.style[a.prop] != null) a.elem.style[a.prop] = (a.prop === "width" || a.prop === "height" ? Math.max(0, a.now) : a.now) + a.unit; else a.elem[a.prop] = a.now
            }
        }
    });
    if (c.expr && c.expr.filters) c.expr.filters.animated = function (a) {
        return c.grep(c.timers, function (b) {
            return a === b.elem
        }).length
    };
    var xb = /^t(?:able|d|h)$/i, Ia = /^(?:body|html)$/i;
    c.fn.offset = "getBoundingClientRect" in t.documentElement ? function (a) {
        var b = this[0], d;
        if (a) return this.each(function (l) {
            c.offset.setOffset(this, a, l)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
        try {
            d = b.getBoundingClientRect()
        } catch (e) {
        }
        var f = b.ownerDocument, h = f.documentElement;
        if (!d || !c.contains(h, b)) return d || {top: 0, left: 0};
        b = f.body;
        f = fa(f);
        return {
            top: d.top + (f.pageYOffset || c.support.boxModel && h.scrollTop || b.scrollTop) - (h.clientTop || b.clientTop || 0),
            left: d.left + (f.pageXOffset || c.support.boxModel && h.scrollLeft || b.scrollLeft) - (h.clientLeft || b.clientLeft || 0)
        }
    } : function (a) {
        var b = this[0];
        if (a) return this.each(function (x) {
            c.offset.setOffset(this, a, x)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
        c.offset.initialize();
        var d, e = b.offsetParent, f = b.ownerDocument, h = f.documentElement, l = f.body;
        d = (f = f.defaultView) ? f.getComputedStyle(b, null) : b.currentStyle;
        for (var k = b.offsetTop, o = b.offsetLeft; (b = b.parentNode) && b !== l && b !== h;) {
            if (c.offset.supportsFixedPosition && d.position === "fixed") break;
            d = f ? f.getComputedStyle(b, null) : b.currentStyle;
            k -= b.scrollTop;
            o -= b.scrollLeft;
            if (b === e) {
                k += b.offsetTop;
                o += b.offsetLeft;
                if (c.offset.doesNotAddBorder && !(c.offset.doesAddBorderForTableAndCells && xb.test(b.nodeName))) {
                    k += parseFloat(d.borderTopWidth) || 0;
                    o += parseFloat(d.borderLeftWidth) || 0
                }
                e = b.offsetParent
            }
            if (c.offset.subtractsBorderForOverflowNotVisible && d.overflow !== "visible") {
                k += parseFloat(d.borderTopWidth) || 0;
                o += parseFloat(d.borderLeftWidth) || 0
            }
            d = d
        }
        if (d.position === "relative" || d.position === "static") {
            k += l.offsetTop;
            o += l.offsetLeft
        }
        if (c.offset.supportsFixedPosition && d.position === "fixed") {
            k += Math.max(h.scrollTop, l.scrollTop);
            o += Math.max(h.scrollLeft, l.scrollLeft)
        }
        return {top: k, left: o}
    };
    c.offset = {
        initialize: function () {
            var a = t.body, b = t.createElement("div"), d, e, f, h = parseFloat(c.css(a, "marginTop")) || 0;
            c.extend(b.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            });
            b.innerHTML = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            a.insertBefore(b, a.firstChild);
            d = b.firstChild;
            e = d.firstChild;
            f = d.nextSibling.firstChild.firstChild;
            this.doesNotAddBorder = e.offsetTop !== 5;
            this.doesAddBorderForTableAndCells = f.offsetTop === 5;
            e.style.position = "fixed";
            e.style.top = "20px";
            this.supportsFixedPosition = e.offsetTop === 20 || e.offsetTop === 15;
            e.style.position = e.style.top = "";
            d.style.overflow = "hidden";
            d.style.position = "relative";
            this.subtractsBorderForOverflowNotVisible = e.offsetTop === -5;
            this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== h;
            a.removeChild(b);
            c.offset.initialize = c.noop
        }, bodyOffset: function (a) {
            var b = a.offsetTop, d = a.offsetLeft;
            c.offset.initialize();
            if (c.offset.doesNotIncludeMarginInBodyOffset) {
                b += parseFloat(c.css(a, "marginTop")) || 0;
                d += parseFloat(c.css(a, "marginLeft")) || 0
            }
            return {top: b, left: d}
        }, setOffset: function (a, b, d) {
            var e = c.css(a, "position");
            if (e === "static") a.style.position = "relative";
            var f = c(a), h = f.offset(), l = c.css(a, "top"), k = c.css(a, "left"),
                o = e === "absolute" && c.inArray("auto", [l, k]) > -1;
            e = {};
            var x = {};
            if (o) x = f.position();
            l = o ? x.top : parseInt(l, 10) || 0;
            k = o ? x.left : parseInt(k, 10) || 0;
            if (c.isFunction(b)) b = b.call(a, d, h);
            if (b.top != null) e.top = b.top - h.top + l;
            if (b.left != null) e.left = b.left - h.left + k;
            "using" in b ? b.using.call(a, e) : f.css(e)
        }
    };
    c.fn.extend({
        position: function () {
            if (!this[0]) return null;
            var a = this[0], b = this.offsetParent(), d = this.offset(),
                e = Ia.test(b[0].nodeName) ? {top: 0, left: 0} : b.offset();
            d.top -= parseFloat(c.css(a, "marginTop")) || 0;
            d.left -= parseFloat(c.css(a, "marginLeft")) || 0;
            e.top += parseFloat(c.css(b[0], "borderTopWidth")) || 0;
            e.left += parseFloat(c.css(b[0], "borderLeftWidth")) || 0;
            return {top: d.top - e.top, left: d.left - e.left}
        }, offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent || t.body; a && !Ia.test(a.nodeName) && c.css(a, "position") === "static";) a = a.offsetParent;
                return a
            })
        }
    });
    c.each(["Left", "Top"], function (a, b) {
        var d = "scroll" + b;
        c.fn[d] = function (e) {
            var f = this[0], h;
            if (!f) return null;
            if (e !== B) return this.each(function () {
                if (h = fa(this)) h.scrollTo(!a ? e : c(h).scrollLeft(), a ? e : c(h).scrollTop()); else this[d] = e
            }); else return (h = fa(f)) ? "pageXOffset" in h ? h[a ? "pageYOffset" : "pageXOffset"] : c.support.boxModel && h.document.documentElement[d] || h.document.body[d] : f[d]
        }
    });
    c.each(["Height", "Width"], function (a, b) {
        var d = b.toLowerCase();
        c.fn["inner" + b] = function () {
            return this[0] ? parseFloat(c.css(this[0], d, "padding")) : null
        };
        c.fn["outer" + b] = function (e) {
            return this[0] ? parseFloat(c.css(this[0], d, e ? "margin" : "border")) : null
        };
        c.fn[d] = function (e) {
            var f = this[0];
            if (!f) return e == null ? null : this;
            if (c.isFunction(e)) return this.each(function (l) {
                var k = c(this);
                k[d](e.call(this, l, k[d]()))
            });
            if (c.isWindow(f)) return f.document.compatMode === "CSS1Compat" && f.document.documentElement["client" + b] || f.document.body["client" + b]; else if (f.nodeType === 9) return Math.max(f.documentElement["client" + b], f.body["scroll" + b], f.documentElement["scroll" + b], f.body["offset" + b], f.documentElement["offset" + b]); else if (e === B) {
                f = c.css(f, d);
                var h = parseFloat(f);
                return c.isNaN(h) ? f : h
            } else return this.css(d, typeof e === "string" ? e : e + "px")
        }
    })
})(window);


function url_add_rand(url) {
    var u = url || '';
    var r = Math.random();
    if ("" == u.substring(0, 1) || -1 != u.indexOf("javascript:") || u.length < 1)
        return u;
    return u.match(/[\?&]R=[^&]*/) ? u.replace(/R=[^&]*/, "R=" + r) : $.trim(u) + (-1 == u.indexOf("?") ? "?" : "&") + "R=" + r;
}
;

function link_add_rand() {
    $("a").live("click", function () {
        var url = $(this).attr("href") || "#";
        $(this).attr("href", url_add_rand(url));
    });
}
;
;var ExiBox = {
    heightMax: false,
    setting: {
        selectorNamePrefix: "ExiBox"
    },
    alert: function (options) {
        var boxModel = "alert";
        var defaults = {
            width: 400,
            bgColor: "black",
            bgOpacity: 0.2,
            bgLock: true,
            borderPadding: 6,
            borderColor: "#333",
            borderOpacity: 0.1,
            title: "\u63D0\u793A",
            fadeTime: 0,
            html: "\u63D0\u793A",
            event: false,
            confirm: "\u786E\u5B9A",
            move: true,
            callback: false
        };
        var showExiBoxOptions = $.extend(defaults, options);
        this.showExiBox(boxModel, showExiBoxOptions);
        if (defaults.event) {
            this.stopBehavior(defaults.event);
        }
    },
    confirm: function (options) {
        var boxModel = "confirm";
        var defaults = {
            width: 400,
            bgColor: "black",
            bgOpacity: 0.2,
            bgLock: true,
            borderPadding: 6,
            borderColor: "#333",
            borderOpacity: 0.1,
            title: "\u786E\u8BA4",
            fadeTime: 0,
            html: "\u8BF7\u786E\u8BA4\u6B64\u64CD\u4F5C!",
            event: false,
            confirm: "\u786E\u5B9A",
            cancel: "\u53D6\u6D88",
            move: true,
            callback: false,
            cancelTip: false
        };
        var showExiBoxOptions = $.extend(defaults, options);
        this.showExiBox(boxModel, showExiBoxOptions);
        if (defaults.event) {
            this.stopBehavior(defaults.event);
        }
    },
    success: function (options) {
        var boxModel = "success";
        var defaults = {
            width: 400,
            bgColor: "black",
            bgOpacity: 0.2,
            bgLock: true,
            borderPadding: 6,
            borderColor: "#333",
            borderOpacity: 0.1,
            title: "\u63D0\u793A",
            fadeTime: 0,
            html: "No Data!",
            move: true
        };
        var showExiBoxOptions = $.extend(defaults, options);
        this.showExiBox(boxModel, showExiBoxOptions);
    },
    error: function (options) {
        var boxModel = "error";
        var defaults = {
            width: 400,
            bgColor: "black",
            bgOpacity: 0.2,
            bgLock: true,
            borderPadding: 6,
            borderColor: "#333",
            borderOpacity: 0.1,
            title: "\u9519\u8BEF",
            fadeTime: 0,
            html: "No Data!",
            move: true
        };
        var showExiBoxOptions = $.extend(defaults, options);
        this.showExiBox(boxModel, showExiBoxOptions);
    },
    warning: function (options) {
        var boxModel = "warning";
        var defaults = {
            width: 400,
            bgColor: "black",
            bgOpacity: 0.2,
            bgLock: true,
            borderPadding: 6,
            borderColor: "#333",
            borderOpacity: 0.1,
            title: "\u63D0\u793A",
            fadeTime: 0,
            html: "No Data!",
            move: true
        };
        var showExiBoxOptions = $.extend(defaults, options);
        this.showExiBox(boxModel, showExiBoxOptions);
    },
    tips: function (options) {
        var boxModel = "tips";
        var defaults = {
            width: 150,
            bgColor: "black",
            bgOpacity: 0.2,
            bgLock: false,
            borderPadding: 3,
            borderColor: "#000",
            borderOpacity: 0.5,
            fadeTime: 0,
            html: "No Data!",
            align: "center",
            closeTime: 1,
            callback: false
        };
        var showExiBoxOptions = $.extend(defaults, options);
        this.showExiBox(boxModel, showExiBoxOptions);
    },
    iframe: function (options) {
        var boxModel = "iframe";
        var defaults = {
            url: false,
            width: 500,
            height: 300,
            bgColor: "black",
            bgOpacity: 0.2,
            bgLock: true,
            borderPadding: 6,
            borderColor: "#333",
            borderOpacity: 0.1,
            title: "\u8F7D\u5165\u9875\u9762",
            event: false,
            fadeTime: 0,
            move: true
        };
        var showExiBoxOptions = $.extend(defaults, options);
        this.showExiBox(boxModel, showExiBoxOptions);
        if (defaults.event) {
            this.stopBehavior(defaults.event);
        }
    },
    outIframe: function (options) {
        var boxModel = "outIframe";
        var defaults = {
            url: false,
            width: 500,
            height: 300,
            bgColor: "black",
            bgOpacity: 0.2,
            bgLock: true,
            borderPadding: 6,
            borderColor: "#333",
            borderOpacity: 0.1,
            title: "\u8F7D\u5165\u9875\u9762",
            event: false,
            fadeTime: 0,
            move: true
        };
        var showExiBoxOptions = $.extend(defaults, options);
        this.showExiBox(boxModel, showExiBoxOptions);
        if (defaults.event) {
            this.stopBehavior(defaults.event);
        }
    },
    miniIframe: function (options) {
        var boxModel = "miniIframe";
        var defaults = {
            url: false,
            width: 500,
            height: 300,
            bgColor: "black",
            bgOpacity: 0.2,
            bgLock: true,
            borderPadding: 6,
            borderColor: "#333",
            borderOpacity: 0.1,
            event: false,
            fadeTime: 0,
            move: true
        };
        var showExiBoxOptions = $.extend(defaults, options);
        this.showExiBox(boxModel, showExiBoxOptions);
        if (defaults.event) {
            this.stopBehavior(defaults.event);
        }
    },
    close: function (selector) {
        $(selector).remove();
        if (this.isIE6) {
            $("html").attr("style", "overflow-x:hidden");
        }
    },
    outClose: function () {
        var _box = $("." + this.setting.selectorNamePrefix + "Wrap");
        if (_box.length < 1) {
            return true;
        }
        _box.remove();
        if (this.isIE6) {
            $("html").attr("style", "overflow-x:hidden");
        }
    },
    showExiBox: function (model, options) {
        ExiBox.outClose();
        var thisCopy = this;
        var closeTimeFunction;
        var snFix = this.setting.selectorNamePrefix;
        var sn = {
            wrap: snFix + "Wrap",
            shadow: snFix + "Shadow",
            border: snFix + "Border",
            box: snFix + "Box",
            title: snFix + "Title",
            close: snFix + "Close",
            html: snFix + "Html",
            icon: snFix + "Icon",
            iconSuccess: snFix + "IconSuccess",
            iconWarning: snFix + "IconWarning",
            iconError: snFix + "IconError",
            textWrap: snFix + "TextWrap",
            text: snFix + "Text",
            loading: snFix + "Loading",
            iframeWrap: snFix + "IframeWrap",
            iframe: snFix + "Iframe",
            panel: snFix + "Panel",
            confirm: snFix + "Confirm",
            cancel: snFix + "Cancel",
            clear: snFix + "clear"
        };
        var boxHtml = '';
        boxHtml += '<div id="' + sn.wrap + '" class="' + sn.wrap + (this.isIE6 ? ' ' + sn.wrap + 'IE6' : '') + '" style="display:none">';
        boxHtml += '<div class="' + sn.shadow + '"></div>';
        if (model == 'iframe' || model == 'miniIframe') {
            boxHtml += '<div class="' + sn.loading + '"></div>';
        }
        boxHtml += '<div class="' + sn.border + '"></div>';
        boxHtml += '<div class="' + sn.box + ' ' + (snFix + model + 'Wrapper') + '">';
        boxHtml += '<div class="' + sn.title + '"><a href="javascript:;" class="' + sn.close + '" title="\u5173\u95ED(ESC)"></a>' + options.title + '</div>';
        boxHtml += '<div class="' + sn.html + '">';
        switch (model) {
            case "alert":
                boxHtml += '<div class="' + sn.textWrap + '">';
                boxHtml += '<div class="' + sn.text + '">' + options.html + '</div>';
                boxHtml += '<div class="' + sn.clear + '"></div>';
                boxHtml += '</div>';
                boxHtml += '<div class="' + sn.panel + '"><input type="submit" class="' + sn.confirm + '" value="' + options.confirm + '" /></div>';
                break;
            case "confirm":
                boxHtml += '<div class="' + sn.textWrap + '">';
                boxHtml += '<div class="' + sn.text + '">' + options.html + '</div>';
                boxHtml += '<div class="' + sn.clear + '"></div>';
                boxHtml += '</div>';
                boxHtml += '<div class="' + sn.panel + '"><input type="submit" class="' + sn.confirm + '" value="' + options.confirm + '" /><input type="submit" class="' + sn.cancel + '" value="' + options.cancel + '" /></div>';
                break;
            case "success":
                boxHtml += '<div class="' + sn.textWrap + '">';
                boxHtml += '<div class="' + sn.icon + ' ' + sn.iconSuccess + '"></div>';
                boxHtml += '<div class="' + sn.text + '">' + options.html + '</div>';
                boxHtml += '<div class="' + sn.clear + '"></div>';
                boxHtml += '</div>';
                break;
            case "error":
                boxHtml += '<div class="' + sn.textWrap + '">';
                boxHtml += '<div class="' + sn.icon + ' ' + sn.iconError + '"></div>';
                boxHtml += '<div class="' + sn.text + '">' + options.html + '</div>';
                boxHtml += '<div class="' + sn.clear + '"></div>';
                boxHtml += '</div>';
                break;
            case "warning":
                boxHtml += '<div class="' + sn.textWrap + '">';
                boxHtml += '<div class="' + sn.icon + ' ' + sn.iconWarning + '"></div>';
                boxHtml += '<div class="' + sn.text + '">' + options.html + '</div>';
                boxHtml += '<div class="' + sn.clear + '"></div>';
                boxHtml += '</div>';
                break;
            case "tips":
                boxHtml += '<div class="' + sn.textWrap + '">';
                boxHtml += '<div class="' + sn.text + '">' + options.html + '</div>';
                boxHtml += '<div class="' + sn.clear + '"></div>';
                boxHtml += '</div>';
                break;
            case "iframe":
                if (options.url) {
                    boxHtml += '<div class="' + sn.iframeWrap + '">';
                    boxHtml += '<iframe src="' + options.url + '" frameborder="0" height="100%" width="100%"';
                    boxHtml += ' name="' + sn.iframe + '" class="' + sn.iframe + '" id="' + sn.iframe + '"></iframe>';
                    boxHtml += '</div>';
                } else {
                    boxHtml += '<div class="' + sn.textWrap + '">';
                    boxHtml += '<div class="' + sn.text + '">Url Undefined!</div>';
                    boxHtml += '<div class="' + sn.clear + '"></div>';
                    boxHtml += '</div>';
                }
                break;
            case "outIframe":
                if (options.url) {
                    boxHtml += '<div class="' + sn.iframeWrap + '">';
                    boxHtml += '<iframe src="' + options.url + '" frameborder="0" height="100%" width="100%"';
                    boxHtml += ' name="' + sn.iframe + '" class="' + sn.iframe + '" id="' + sn.iframe + '"></iframe>';
                    boxHtml += '</div>';
                } else {
                    boxHtml += '<div class="' + sn.textWrap + '">';
                    boxHtml += '<div class="' + sn.text + '">Url Undefined!</div>';
                    boxHtml += '<div class="' + sn.clear + '"></div>';
                    boxHtml += '</div>';
                }
                break;
            case "miniIframe":
                if (options.url) {
                    boxHtml += '<div class="' + sn.iframeWrap + '">';
                    boxHtml += '<iframe src="' + options.url + '" frameborder="0" height="100%" width="100%"';
                    boxHtml += ' name="' + sn.iframe + '" class="' + sn.iframe + '" id="' + sn.iframe + '"></iframe>';
                    boxHtml += '</div>';
                } else {
                    boxHtml += '<div class="' + sn.textWrap + '">';
                    boxHtml += '<div class="' + sn.text + '">Url Undefined!</div>';
                    boxHtml += '<div class="' + sn.clear + '"></div>';
                    boxHtml += '</div>';
                }
                break;
        }
        ;boxHtml += "</div>";
        boxHtml += "</div>";
        boxHtml += "</div>";
        if ($('.' + sn.wrap).length < 1) {
            $("body").append(boxHtml);
        }
        ;
        if (this.isIE6) {
            $("html").attr("style", "overflow-x:hidden;background-image:url(about:blank);background-attachment:fixed;zoom:1");
        }
        ;thisCopy.setStyle(model, sn, options);
        $(window).bind('resize', function () {
            thisCopy.ExiBoxResize(sn);
        });
        switch (model) {
            case "alert":
                $("." + sn.confirm).click(function () {
                    if (options.callback) {
                        options.callback();
                    }
                    thisCopy.close("." + sn.wrap);
                });
                break;
            case "confirm":
                $("." + sn.confirm).click(function () {
                    if (options.callback) {
                        options.callback();
                    }
                    thisCopy.close("." + sn.wrap);
                });
                $("." + sn.cancel).click(function () {
                    thisCopy.close("." + sn.wrap);
                    if (options.cancelTip) {
                        options.cancelTip();
                    }
                });
                break;
            case "success":
                escKeyClose();
                break;
            case "error":
                escKeyClose();
                break;
            case "warning":
                escKeyClose();
                break;
            case "tips":
                var closeTime = parseInt(options.closeTime);
                ExiBoxClose(sn, closeTime, options.callback);
                break;
            case "iframe":
                escKeyClose();
                break;
            case "outIframe":
                escKeyClose();
                break;
        }
        ;$('.' + (sn.close + (!options.bgLock ? ",." + sn.shadow : ""))).click(function () {
            clearExiBoxClose();
            thisCopy.close("." + sn.wrap);
        });
        if (options.move) {
            thisCopy.ExiBoxMove(sn);
        }

        function ExiBoxClose(sn, closeTime, callback) {
            closeTimeFunction = setTimeout(function () {
                $("." + sn.shadow).fadeOut(300);
                $("." + sn.border).fadeOut(300);
                $("." + sn.box).fadeOut(300, function () {
                    if (callback) {
                        callback();
                    }
                    $("." + sn.wrap).remove();
                });
            }, closeTime * 1000);
        }
        ;

        function clearExiBoxClose() {
            clearTimeout(closeTimeFunction);
        }
        ;

        function escKeyClose() {
            $(document).keyup(function (event) {
                if (event.which == 27) {
                    $("." + sn.close).trigger("click");
                }
            });
        }
    },
    setStyle: function (m, s, o) {
        var width = parseInt(o.width);
        var height = parseInt(o.height);
        var borderPadding = parseInt(o.borderPadding);
        var borderOpacity = Number(o.borderOpacity);
        var bgOpacity = Number(o.bgOpacity);
        var winHeight = $(window).height();
        var winWidth = $(window).width();
        var wrap = $("." + s.wrap);
        var shadow = $("." + s.shadow);
        var iframeWrap = $("." + s.iframeWrap);
        var iframe = $("." + s.iframe);
        var border = $("." + s.border);
        var box = $("." + s.box);
        var html = $("." + s.html);
        var loading = $("." + s.loading);
        var textWrap = $("." + s.textWrap);
        var text = $("." + s.text);
        var clear = $("." + s.clear);
        var icon = $("." + s.icon);
        var confirm = $("." + s.confirm);
        var close = $("." + s.close);
        var title = $("." + s.title);
        if (m == 'tips') {
            textWrap.css({
                padding: "5px 10px"
            });
        }
        wrap.css({
            margin: 0,
            padding: 0,
            zIndex: 999999,
            left: 0,
            background: "none",
            width: winWidth + "px",
            height: winHeight + "px",
            overflow: "hidden",
            display: 'block'
        });
        if (!this.isIE6) {
            wrap.css({
                position: "fixed",
                top: 0
            });
        }
        ;shadow.css({
            top: 0,
            left: 0,
            backgroundColor: o.bgColor,
            width: winWidth + "px",
            height: winHeight + "px",
            opacity: bgOpacity,
            zIndex: 10,
            display: "none",
            position: "fixed"
        });
        clear.css({
            clear: "both",
            lineHeight: 0,
            height: 0,
            fontSize: 0,
            overflow: "hidden"
        });
        var bdbw = this.getBorderWidth(border);
        var bxbw = this.getBorderWidth(box);
        var htpd = this.getPadding(html);
        var twpd = this.getPadding(textWrap);
        var icmd = this.getMargin(icon);
        var icw = parseInt(icon.width()) > 0 ? parseInt(icon.width()) : 0;
        html.css({
            position: "relative",
            overflow: "hidden",
            margin: 0,
            padding: 0,
            border: 0
        });
        box.css({
            padding: 0,
            margin: 0
        });
        textWrap.css({
            textAlign: o.align,
            width: (width - twpd.l - twpd.r) + "px",
            margin: 0
        });
        icon.css({
            padding: 0,
            marginTop: 0,
            marginLeft: 0,
            marginBottom: 0
        });
        if (o.move) {
            title.css({
                cursor: "move"
            })
        } else {
            title.css({
                cursor: "default"
            })
        }
        ;
        switch (m) {
            case "alert":
                text.css({
                    padding: 0,
                    margin: 0,
                    float: "none"
                });
                confirm.focus();
                close.remove();
                break;
            case "confirm":
                text.css({
                    padding: 0,
                    margin: 0,
                    float: "none"
                });
                confirm.focus();
                close.remove();
                break;
            case "success":
                text.css({
                    padding: 0,
                    margin: 0,
                    width: (width - icmd.r - twpd.l - twpd.r - icw) + "px"
                });
                break;
            case "error":
                text.css({
                    padding: 0,
                    margin: 0,
                    width: (width - icmd.r - twpd.l - twpd.r - icw) + "px"
                });
                break;
            case "warning":
                text.css({
                    padding: 0,
                    margin: 0,
                    width: (width - icmd.r - twpd.l - twpd.r - icw) + "px"
                });
                break;
            case "tips":
                text.css({
                    padding: 0,
                    margin: 0,
                    float: "none"
                });
                title.remove();
                break;
            case "miniIframe":
                iframeWrap.css({
                    height: height + "px",
                    width: width + "px",
                    overflow: "hidden",
                    position: "relative",
                    zIndex: 20,
                    padding: 0,
                    margin: 0
                });
                iframe.css({
                    background: "white"
                });
                title.remove();
                break;
            case "iframe":
                iframeWrap.css({
                    height: height + "px",
                    width: width + "px",
                    overflow: "hidden",
                    position: "relative",
                    zIndex: 20,
                    padding: 0,
                    margin: 0
                });
                iframe.css({
                    background: "white"
                });
                break;
            case "outIframe":
                iframeWrap.css({
                    height: height + "px",
                    width: width + "px",
                    overflow: "hidden",
                    position: "relative",
                    zIndex: 20,
                    padding: 0,
                    margin: 0
                });
                iframe.css({
                    background: "white"
                });
                break;
        }
        ;var boxOuterHeight = parseInt(box.outerHeight());
        var textOuterHeight = parseInt(text.height());
        var htmlOuterHeight = parseInt(html.outerHeight());
        var boxHeight = boxOuterHeight - bxbw.t - bxbw.b;
        html.css({
            height: htmlOuterHeight + "px",
            width: width + "px"
        });
        border.css({
            position: "absolute",
            backgroundColor: o.borderColor,
            opacity: borderOpacity,
            zIndex: 20,
            display: "none",
            width: (width + bxbw.l + bxbw.r + borderPadding * 2) + "px",
            height: (boxHeight + bxbw.t + bxbw.b + borderPadding * 2) + "px",
            left: parseInt((winWidth - bdbw.l - bdbw.r - width - ((bxbw.l - bxbw.r) / 2) - borderPadding * 2) / 2) + "px",
            top: parseInt((winHeight - bdbw.t - bdbw.b - boxHeight - ((bxbw.t - bxbw.b) / 2) - borderPadding * 2) / 2) + "px",
            padding: 0,
            margin: 0
        });
        box.css({
            position: "absolute",
            zIndex: 30,
            width: width + "px",
            height: boxHeight + "px",
            left: parseInt((winWidth - width - ((bxbw.l - bxbw.r) / 2)) / 2) + "px",
            top: parseInt((winHeight - boxHeight - ((bxbw.t - bxbw.b) / 2)) / 2) + "px",
            overflow: "hidden",
            display: "none"
        });
        shadow.fadeIn(parseInt(o.fadeTime));
        border.fadeIn(parseInt(o.fadeTime));
        box.fadeIn(parseInt(o.fadeTime));
        if (m == 'iframe' || m == 'miniIframe') {
            box.css({
                top: '-9999px'
            });
            border.css({
                top: '-9999px'
            });
        }
    },
    frameResize: function (h) {
        var box = $('#ExiBoxWrap');
        if (box.length > 0 && $('#ExiBoxWrap .ExiBoxIframeWrap').length > 0) {
            var mh = $(window).height() - 70;
            h = (h > mh) ? mh : h;
            h = (h < 300) ? 300 : h;
            var winHeight = $(window).height();
            if (ExiBox.heightMax)
                h = mh;
            var tit_h = parseInt(box.find('.ExiBoxTitle').height()) || 0;
            var bd_w = parseInt(box.find('.ExiBoxBorder').height() - box.find('.ExiBoxBox').height());
            box.find('.ExiBoxIframeWrap').css({
                height: h
            });
            box.find('.ExiBoxHtml').css({
                height: h
            });
            box.find('.ExiBoxBox').css({
                height: h + tit_h,
                top: parseInt((winHeight - (h + tit_h)) / 2)
            });
            box.find('.ExiBoxBorder').css({
                height: h + tit_h + bd_w,
                top: parseInt((winHeight - (h + tit_h + bd_w)) / 2)
            });
            if (box.find('.ExiBoxLoading').length > 0) {
                box.find('.ExiBoxLoading').remove();
            }
        }
    },
    getBorderWidth: function (selector) {
        var v = {
            t: parseInt(selector.css("borderTopWidth")) > 0 ? parseInt(selector.css("borderTopWidth")) : 0,
            r: parseInt(selector.css("borderRightWidth")) > 0 ? parseInt(selector.css("borderRightWidth")) : 0,
            b: parseInt(selector.css("borderBottomWidth")) > 0 ? parseInt(selector.css("borderBottomWidth")) : 0,
            l: parseInt(selector.css("borderLeftWidth")) > 0 ? parseInt(selector.css("borderLeftWidth")) : 0
        };
        return v;
    },
    getPadding: function (selector) {
        var v = {
            t: parseInt(selector.css("paddingTop")) > 0 ? parseInt(selector.css("paddingTop")) : 0,
            r: parseInt(selector.css("paddingRight")) > 0 ? parseInt(selector.css("paddingRight")) : 0,
            b: parseInt(selector.css("paddingBottom")) > 0 ? parseInt(selector.css("paddingBottom")) : 0,
            l: parseInt(selector.css("paddingLeft")) > 0 ? parseInt(selector.css("paddingLeft")) : 0
        };
        return v;
    },
    getMargin: function (selector) {
        var v = {
            t: parseInt(selector.css("marginTop")) > 0 ? parseInt(selector.css("marginTop")) : 0,
            r: parseInt(selector.css("marginRight")) > 0 ? parseInt(selector.css("marginRight")) : 0,
            b: parseInt(selector.css("marginBottom")) > 0 ? parseInt(selector.css("marginBottom")) : 0,
            l: parseInt(selector.css("marginLeft")) > 0 ? parseInt(selector.css("marginLeft")) : 0
        };
        return v;
    },
    stopBehavior: function (e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        } else {
            window.event.returnValue = false;
        }
        return false;
    },
    ExiBoxMove: function (selector) {
        $("." + selector.title).mousedown(function (e) {
            var bxl = parseInt($("." + selector.box).css("left"));
            var bxt = parseInt($("." + selector.box).css("top"));
            var bdl = parseInt($("." + selector.border).css("left"));
            var bdt = parseInt($("." + selector.border).css("top"));
            var bxx = e.pageX - bxl;
            var bxy = e.pageY - bxt;
            var bdx = e.pageX - bdl;
            var bdy = e.pageY - bdt;
            $("body").bind("mousemove", function (e) {
                $("." + selector.box).css({
                    left: (e.pageX - bxx) + "px",
                    top: (e.pageY - bxy) + "px"
                });
                $("." + selector.border).css({
                    left: (e.pageX - bdx) + "px",
                    top: (e.pageY - bdy) + "px"
                });
            });
        });
        $("body").mouseup(function () {
            $("body").unbind("mousemove");
        });
    },
    ExiBoxResize: function (s) {
        var winHeight = $(window).height();
        var winWidth = $(window).width();
        var wrap = $('.' + s.wrap);
        var shadow = $('.' + s.shadow);
        var border = $('.' + s.border);
        var box = $('.' + s.box);
        var borderWidth = parseInt(border.outerWidth());
        var borderHeight = parseInt(border.outerHeight());
        var boxWidth = parseInt(box.outerWidth());
        var boxHeight = parseInt(box.outerHeight());
        wrap.css({
            width: winWidth + "px",
            height: winHeight + "px"
        });
        shadow.css({
            width: winWidth + "px",
            height: winHeight + "px"
        });
        border.css({
            left: parseInt((winWidth - borderWidth) / 2) + "px",
            top: parseInt((winHeight - borderHeight) / 2) + "px"
        });
        box.css({
            left: parseInt((winWidth - boxWidth) / 2) + "px",
            top: parseInt((winHeight - boxHeight) / 2) + "px"
        });
    },
    isIE6: ($.browser.msie && ($.browser.version == "6.0"))
};
;$(function () {
    $('.form_btn:not([class*="active"])').css('opacity', .8).hover(function () {
        $(this).stop().animate({
            opacity: 1
        }, 2e2);
    }, function () {
        $(this).stop().animate({
            opacity: .8
        }, 2e2);
    });
    $('.tr_hover tbody tr').hover(function () {
        $(this).addClass("hover");
    }, function () {
        $(this).removeClass("hover");
    }).click(function () {
        $(this).removeClass("hover");
        $('.tr_hover tr').removeClass("this");
        $(this).addClass("this");
    });
    $('ul.li_hover li').hover(function () {
        $(this).addClass("hover");
    }, function () {
        $(this).removeClass("hover");
    });
    $('input[type="text"][readonly],textarea[readonly]').css({
        backgroundColor: '#f3f3f3',
        color: '#666'
    });
    $('.back').live('click', function () {
        history.go(-1);
    });
    $('.ask').live('click', function () {
        var href = $(this).attr('href');
        ask('确定要进行此操作吗？', href);
        return false;
    })
    $('.refresh').live('click', function () {
        location.reload();
    });
    $('.hoverBtn').hover(function () {
        $(this).css('opacity', 0.9);
    }, function () {
        $(this).css('opacity', 1);
    });
    $('#logged_menu').hover(function () {
        $(this).find('dl').show();
    }, function () {
        $(this).find('dl').hide();
    })
    var _sv_time = null;
    $('.nav li').hover(function () {
        clearTimeout(_sv_time);
        var thisId = $(this).attr('id') || '';
        var isLoginBar = thisId === 'logged_menu';
        var isRank = thisId === 'navRankBtn';
        var isWhois = thisId === 'navWhoisBtn';
        if (isLoginBar)
            return false;
        $('#navRankList').hide();
        $('#navWhoisList').hide();
        if (isRank) {
            $('#navRankList').show();
        }
        if (isWhois) {
            var pl = $(this).offset().left;
            var w = $(this).width() - 2;
            $('#navWhoisList').show();
            $('#navWhoisList dl a').css({
                width: w,
                left: parseInt(pl)
            });
        }
        $('.nav li').removeClass('on');
        $(this).addClass('on');
    }, function () {
        _sv_time = setTimeout(navOnReset, 3e2);
    });
    $('#navRankList').hover(function () {
        clearTimeout(_sv_time);
    }, function () {
        _sv_time = setTimeout(navOnReset, 3e2);
    });
    $('#navWhoisList').hover(function () {
        clearTimeout(_sv_time);
    }, function () {
        _sv_time = setTimeout(navOnReset, 3e2);
    });
    hover_tip_init();
});

function navOnReset() {
    $('#navRankList').hide();
    $('#navWhoisList').hide();
    $('.nav li').removeClass('on');
    $('.nav li[data-class="on"]').addClass('on');
}

function checkSubDomain() {
    if (!$('#searchInput').val()) {
        ExiBox.tips({
            html: '请输入要查询的域名',
            width: 160
        });
        return false;
    }
    return true;
}

function checkSearchWord() {
    if (!$('#searchInput').val()) {
        ExiBox.tips({
            html: '请输入关键字',
            width: 120
        });
        return false;
    }
    return true;
}

function hover_tip_init() {
    if ($('[data-hovertip]').length > 0) {
        $('[data-hovertip]').mousemove(function (e) {
            var X = e.pageX + 10;
            var Y = e.pageY + 20;
            var H = $(window).height();
            if ($('#HoverTip').length < 1) {
                $('body').append('<div id="HoverTip">' + $(this).attr('data-hovertip') + '</div>');
            }
            ;var s = $('#HoverTip').width();
            var h = $('#HoverTip').height();
            Y = (Y + h) > H ? (Y - h - 40) : Y;
            var W = s > 400 ? 400 : s;
            $('#HoverTip').width(W);
            if ($(this).attr('data-hovertip-align') == 'left') {
                $('#HoverTip').css({
                    left: X - W,
                    top: Y
                })
            } else {
                $('#HoverTip').css({
                    left: X,
                    top: Y
                })
            }
        }).mouseout(function () {
            $('#HoverTip').remove();
        }).css('cursor', 'pointer');
    }
}
;

function in_layer(ts, width, heightMax) {
    var t = $(ts).data('val') || $(ts).val();
    var u = $(ts).attr('data-url') || '';
    var w = width || 1000;
    ExiBox.heightMax = (heightMax || false);
    ExiBox.iframe({
        url: url_add_rand(u),
        title: t,
        width: w
    });
}
;

function out_layer(ts, width, height) {
    var t = $(ts).data('val') || $(ts).val();
    var u = $(ts).data('url') || '';
    var w = width || 500;
    var h = height || 300;
    ExiBox.outIframe({
        url: url_add_rand(u),
        title: t,
        width: w,
        height: h
    });
}
;

function function_exists(name) {
    try {
        if (typeof (eval(name)) == "function")
            return true;
    } catch (e) {
    }
    return false;
}
;

function ask(tit, url) {
    ExiBox.confirm({
        html: tit,
        callback: function () {
            location.href = url_add_rand(url);
        }
    });
}
;

function open_window(url, width, height, name) {
    var u = url_add_rand(url || '');
    var n = name || ("Name" + (+new Date()));
    var w = width || parseInt(screen.width * 0.8);
    var h = height || parseInt(screen.height * 0.7);
    var l = parseInt((screen.width - w) / 2);
    var t = (height ? parseInt((screen.height - h - 60) / 2) : 50);
    window.open(u, n, "top=" + t + ", left=" + l + ",width=" + w + ",height=" + h + ",toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,status=no");
}
;

function open_tr_window(url, width, height, name) {
    var u = url_add_rand(url || '');
    var n = name || ("Name" + (+new Date()));
    var w = width || parseInt(screen.width * 0.8);
    var h = height || parseInt(screen.height * 0.7);
    var l = parseInt((screen.width - w) / 2);
    var t = (height ? parseInt((screen.height - h - 60) / 2) : 50);
    var r = parseInt(screen.width - w - 20);
    t = 20;
    window.open(u, n, "top=" + t + ", left=" + r + ",width=" + w + ",height=" + h + ",toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,status=no,depended=yes,toolbar=no,menubar=no,location=no");
}
;

function error_tip(text, callback) {
    ExiBox.tips({
        html: text || '通信失败，请重试',
        callback: callback,
        time: 1,
        bgLock: true
    });
}
;

function success_tip(text, callback) {
    ExiBox.tips({
        html: text || '操作成功',
        callback: callback,
        time: 1,
        bgLock: true
    });
}
;

function submit_to_new_window(forms, target) {
    open_window(syscfg.blank_url, 0, 0, target);
    $('#' + forms).submit();
}
;

function input_check_int(dom) {
    $(dom).each(function () {
        var input = $(this);
        input.keyup(function () {
            var val = $(this).val().replace(/[^0-9]/g, '');
            val = !val ? 0 : Number(val);
            $(this).val(val);
        });
        input.blur(function () {
            var val = $(this).val().replace(/[^0-9]/g, '');
            val = !val ? 0 : Number(val);
            $(this).val(val);
        });
    });
}
;

function go(url) {
    location.href = url_add_rand(url);
}
;

function refresh() {
    location.reload();
}
;

function is_ie(v) {
    if (!v)
        return $.browser.msie;
    if (!$.browser.msie)
        return false;
    return v == $.browser.version;
}

function ie_version() {
    if (!$.browser.msie)
        return 0;
    return parseInt($.browser.version);
}
;var Attention = {
    add: function (ele, user_id, domain) {
        user_id = parseInt(user_id);
        var url = syscfg.attention_url.replace('{user_id}', user_id);
        $.post(url, {
            domain: domain
        }, function (res) {
            if (res.status == 0) {
                ExiBox.tips({
                    html: res.desc,
                    width: 150,
                    callback: function () {
                        location.reload()
                    }
                });
            } else if (res.status == 2) {
                ExiBox.tips({
                    html: res.desc,
                    width: 250,
                    closeTime: 5
                });
            } else {
                ExiBox.tips({
                    html: res.desc,
                    width: 150
                });
            }
        }, 'json');
    },
    del: function (ele, user_id, att_id) {
        att_id = parseInt(att_id) || 0;
        user_id = parseInt(user_id) || 0;
        var url = syscfg.unattention_url.replace('{user_id}', user_id);
        ExiBox.confirm({
            html: '确定要取消关注此域名吗？',
            callback: function () {
                $.post(url, {
                    att_id: att_id
                }, function (res) {
                    if (res.status == 0) {
                        ExiBox.tips({
                            html: res.desc,
                            width: 150,
                            callback: function () {
                                location.reload()
                            }
                        });
                    } else {
                        ExiBox.tips({
                            html: res.desc,
                            width: 150
                        });
                    }
                }, 'json');
            },
            cancelTip: function () {
                ExiBox.tips({
                    html: '操作已取消',
                    width: 150
                });
            }
        })
    }
};
;

function user_qrcode_login(url) {
    url = url ? (syscfg.user_login_url_base + '?action=' + url) : syscfg.user_login_url;
    ExiBox.outIframe({
        url: url,
        title: '微信登录',
        width: 700,
        height: 480
    });
}

function user_open_login() {
    open_window(syscfg.open_login_url, 750, 520);
}
;

function show_important(domain_type) {
    var public_data, private_data;
    if ((domain_type || '') === 'www') {
        public_data = IMPORTANT_DATA_PUB_WWW || [];
        private_data = IMPORTANT_DATA_PRI_WWW || [];
    } else if ((domain_type || '') === 'whois') {
        public_data = IMPORTANT_DATA_PUB_WHOIS || [];
        private_data = IMPORTANT_DATA_PRI_WHOIS || [];
    } else if ((domain_type || '') === 'alexa') {
        public_data = IMPORTANT_DATA_PUB_ALEXA || [];
        private_data = IMPORTANT_DATA_PRI_ALEXA || [];
    } else if ((domain_type || '') === 'icp') {
        public_data = IMPORTANT_DATA_PUB_ICP || [];
        private_data = IMPORTANT_DATA_PRI_ICP || [];
    } else if ((domain_type || '') === 'traffic') {
        public_data = IMPORTANT_DATA_PUB_TRAFFIC || [];
        private_data = IMPORTANT_DATA_PRI_TRAFFIC || [];
    } else if ((domain_type || '') === 'siterank') {
        public_data = IMPORTANT_DATA_PUB_SITERANK || [];
        private_data = IMPORTANT_DATA_PRI_SITERANK || [];
    }
    var null_cfg = IMPORTANT_DATA_NULL || [];
    var now = parseInt(new Date().getTime() / 1000);
    var data = [];
    $.each(private_data, function (k, v) {
        public_data.push(v);
    })
    $.each(public_data, function (k, v) {
        if ((parseInt(v.start_time) < now) && (parseInt(v.end_time) > now)) {
            data.push(v);
        }
    });
    $('.importantBox').each(function (i) {
        if (data[i]) {
            var url = data[i].url === '#' ? 'javascript:;' : data[i].url;
            $(this).attr({
                href: url,
                title: data[i].title
            }).find('img').attr('src', data[i].thumb);
        } else {
            var url = (null_cfg.url && null_cfg.url != '#') ? null_cfg.url : 'javascript:;';
            $(this).attr({
                href: url,
                title: null_cfg.title
            }).find('img').attr('src', syscfg.maindomain + '/' + null_cfg.thumb);
        }
    });
}
;

function SERVER_load(ele, param, lang_token, callback) {
    lang_token = lang_token || '';
    var token = param.token || '';
    var domain = param.domain || '';
    var force_update = param.force_update || 0;
    var api = syscfg.api_server_get_url || '';
    if (!api)
        return false;
    api = api.replace('{token}', token).replace('{url}', domain).replace('{force_update}', force_update);
    var reload_param = '{token : \'' + lang_token + '\', domain : \'' + domain + '\', force_update : 1}';
    var tpl = '<td class="mar"></td>' + '<td>{server_ip}</td>' + '<td>{server_location}</td>' + '<td>{http_type}</td>' + '<td>{server_type}</td>' + '<td>{content_type}</td>' + '<td align="right" id="SERVER_reload">' + '<a href="javascript:;" ' + 'onclick="SERVER_reload(\'' + ele + '\', ' + reload_param + ')">更新</a>' + '</td>' + '<td class="mar"></td>';
    $.get(api, {}, function (res) {
        if (res && res.status == 0) {
            var server_ip = res.data.server_ip === '0.0.0.0' ? '-' : res.data.server_ip;
            tpl = tpl.replace('{server_ip}', server_ip).replace('{server_location}', res.data.server_location || '-').replace('{http_type}', res.data.http_type || '-').replace('{server_type}', res.data.server_type || '-').replace('{content_type}', res.data.content_type || '-');
            $(ele).html(tpl);
            callback && callback();
        }
    }, 'json');
}

function SERVER_reload(ele, param) {
    $('#SERVER_reload').html('<img src="' + syscfg.loading_img + '"/>');
    SERVER_load(ele, param, null, function () {
        $('#SERVER_reload').html('&nbsp;');
    });
}

function WHOIS_load(ele, param) {
    force_update = param.force_update || 0;
    var api = syscfg.api_whois_get_url || '';
    if (!api)
        return false;
    api = api.replace('{token}', param.token).replace('{url}', param.domain).replace('{force_update}', force_update);
    var tpl = '<td class="mar"></td>' + '<td>{domain}</td>' + '<td>{reg_server}</td>' + '<td>{server}</td>' + '<td>{nserver}</td>' + '<td>{create_day}</td>' + '<td align="right"><a href="{detail_url}">详情</a></td>' + '<td class="mar"></td>';
    $.get(api, {}, function (res) {
        if (res && res.status == 0) {
            var nserver = res.data.nserver[0] ? res.data.nserver[0] : '-';
            var create_day = res.data.create_day === '0000-00-00' ? '-' : res.data.create_day;
            var detail_url = $(ele).attr('data-detail-url') || '';
            tpl = tpl.replace('{domain}', res.data.domain || '-').replace('{reg_server}', res.data.reg_server || '-').replace('{server}', res.data.server || '-').replace('{nserver}', nserver).replace('{create_day}', create_day).replace('{detail_url}', detail_url);
            $(ele).html(tpl);
        }
    }, 'json');
}

function ICP_home_load(ele, param) {
    var api = syscfg.api_icp_info_url || '';
    if (!api)
        return false;
    api = api.replace('{token}', param.token).replace('{url}', param.domain).replace('{host}', '').replace('{vcode}', '');
    $.post(api, function (res) {
        var html = '<td colspan="8" class="tac">' + '     <a href="' + syscfg.icpdomain + '/' + param.domain + '">更新&nbsp;' + param.domain + '&nbsp;的ICP备案信息</a>' + '</td>';
        if (res && res.status == 0) {
            var data = res.data;
            if (!parseInt(data.data_is_null)) {
                html = '<td class="mar"></td>' + '<td>' + data.web_name + '</td>' + '<td>' + data.web_home + '</td>' + '<td>' + data.com_name + '</td>' + '<td>' + data.icp_type + '</td>' + '<td>' + data.icp_no + '</td>' + '<td align="right">' + '<a href="' + syscfg.icpdomain + '/' + param.domain + '">详情</a>' + '</td>' + '<td class="mar"></td>';
            }
        }
        $(ele).html(html);
    }, 'json');
}

function ALEXA_load(ele, param, at_rank) {
    at_rank = at_rank || false;
    var api = syscfg.api_alexa_free_url || '';
    if (!api)
        return false;
    api = api.replace('{token}', param.token).replace('{url}', param.domain);
    var tpl = '<td class="mar"></td>' + '<td>{domain}</td>' + '<td>{world_rank}</td>' + '<td>{world_uv_rank}</td>' + '<td>{country_code}</td>' + '<td>{country_rank}</td>' + '<td align="right">' + (at_rank ? '<a id="wx_login" href="javascript:;" onclick="' + syscfg.user_login_link + '">详情</a>' : '<a href="{detail_url}">详情</a>') + '</td>' + '<td class="mar"></td>';
    $.get(api, {}, function (res) {
        if (res && res.status == 0) {
            var data = res.data;
            var detail_url = $(ele).attr('data-detail-url') || '';
            var world_rank = '<span class="c036">' + (data.world_rank ? data.world_rank : '-') + '</span>';
            var world_uv_rank = '<span class="c036">' + (data.world_uv_rank ? data.world_uv_rank : '-') + '</span>';
            var world_delta = (data.world_delta > 0) ? ('<em class="up">' + Math.abs(Number(data.world_delta)) + '</em>') : ((data.world_delta < 0) ? ('<em class="down">' + Math.abs(Number(data.world_delta)) + '</em>') : 0);
            var country_rank = '<span class="c036">' + (data.country_rank ? data.country_rank : '-') + '</span>';
            var country_code = data.country_code ? ((data.flag ? ('<img src="' + (syscfg.base_url + data.flag) + '" width="16" height="11"/>&nbsp;') : '') + data.country_code) : '-';
            tpl = tpl.replace('{domain}', param.domain).replace('{world_rank}', world_rank).replace('{world_uv_rank}', world_uv_rank).replace('{world_delta}', world_delta).replace('{country_code}', country_code).replace('{country_rank}', country_rank).replace('{login_url}', syscfg.base_url + 'api/wechat_api/open_login').replace('{detail_url}', detail_url);
            $(ele).html(tpl);
        }
    }, 'json');
}

function ALEXA_charge_load(ele, sub_ele, country_ele, param) {
    var api = syscfg.api_alexa_charge_url || '';
    if (!api)
        return false;
    api = api.replace('{token}', param.token).replace('{url}', param.domain);
    var tpl = '<tr>' + '<td class="mar"></td>' + '<td>当日</td>' + '<td><span class="c036">{day_rank}</span></td>' + '<td>{day_delta}</td>' + '<td>{day_ip}</td>' + '<td>{day_pv}</td>' + '<td class="mar"></td>' + '</tr>' + '<tr>' + '<td class="mar"></td>' + '<td>周平均</td>' + '<td><span class="c036">{week_rank}</span></td>' + '<td>{week_delta}</td>' + '<td>{week_ip}</td>' + '<td>{week_pv}</td>' + '<td class="mar"></td>' + '</tr>' + '<tr>' + '<td class="mar"></td>' + '<td>月平均</td>' + '<td><span class="c036">{month_rank}</span></td>' + '<td>{month_delta}</td>' + '<td>{month_ip}</td>' + '<td>{month_pv}</td>' + '<td class="mar"></td>' + '</tr>' + '<tr>' + '<td class="mar"></td>' + '<td>三月平均</td>' + '<td><span class="c036">{trimester_rank}</span></td>' + '<td>{trimester_delta}</td>' + '<td>{trimester_ip}</td>' + '<td>{trimester_pv}</td>' + '<td class="mar"></td>' + '</tr>';
    var sub_html = '';
    var sub_tpl = '<tr>' + '<td class="mar"></td>' + '<td>{domain}</td>' + '<td align="center">{per_reach}</td>' + '<td align="center">{per_user}</td>' + '<td align="center">{per_views}</td>' + '<td class="mar"></td>' + '</tr>';
    var country_html = '';
    var country_tpl = '<tr>' + '<td class="mar"></td>' + '<td>{name}</td>' + '<td align="left">{code}</td>' + '<td align="left"><span class="c036">{rank}</span></td>' + '<td align="left">{per_user}</td>' + '<td align="left">{per_views}</td>' + '<td class="mar"></td>' + '</tr>';
    $.get(api, {}, function (res) {
        if (res && res.status == 0) {
            var day = res.data.reach.day;
            var week = res.data.reach.week;
            var month = res.data.reach.month;
            var trimester = res.data.reach.trimester;
            var day_ip = _ip(day.million);
            var week_ip = _ip(week.million);
            var month_ip = _ip(month.million);
            var trimester_ip = _ip(trimester.million);
            tpl = tpl.replace('{day_rank}', day.rank || '-').replace('{day_delta}', _delta(day.delta)).replace('{day_ip}', day_ip || '-').replace('{day_pv}', _pv(day_ip, day.pv_per_user) || '-').replace('{week_rank}', week.rank || '-').replace('{week_delta}', _delta(week.delta)).replace('{week_ip}', week_ip || '-').replace('{week_pv}', _pv(week_ip, week.pv_per_user) || '-').replace('{month_rank}', month.rank || '-').replace('{month_delta}', _delta(month.delta)).replace('{month_ip}', month_ip || '-').replace('{month_pv}', _pv(month_ip, month.pv_per_user) || '-').replace('{trimester_rank}', trimester.rank || '-').replace('{trimester_delta}', _delta(trimester.delta)).replace('{trimester_ip}', trimester_ip || '-').replace('{trimester_pv}', _pv(trimester_ip, trimester.pv_per_user) || '-');
            $(ele).html(tpl);
            tpl = null;
            if (sub_ele) {
                $.each(res.data.sub_domain, function (k, v) {
                    sub_html += sub_tpl.replace('{domain}', v.domain || '-').replace('{per_reach}', (v.per_reach + '%') || '-').replace('{per_user}', (v.per_user + '%') || '-').replace('{per_views}', v.per_views || '-');
                });
                $(sub_ele).html(sub_html);
            }
            sub_html = null;
            if (country_ele) {
                $.each(res.data.country, function (k, v) {
                    var code_data = syscfg.country_data[v.code] || '';
                    var country_code = v.code ? ((code_data.flag ? ('<img src="' + (syscfg.base_url + code_data.flag) + '" width="16" height="11"/>&nbsp;') : '') + v.code) : '-';
                    country_code = v.code === 'OTHER' ? v.code : country_code;
                    country_html += country_tpl.replace('{name}', code_data.name_cn || '-').replace('{code}', country_code || '-').replace('{rank}', v.rank || '-').replace('{per_user}', (v.per_user + '%') || '-').replace('{per_views}', (v.per_views + '%') || '-');
                });
                $(country_ele).html(country_html);
            }
            country_html = null;
        }
    }, 'json');

    function _delta(delta) {
        return (delta > 0) ? ('<em class="up">' + Math.abs(Number(delta)) + '</em>') : ((delta < 0) ? ('<em class="down">' + Math.abs(Number(delta)) + '</em>') : 0);
    }

    // todo 用于计算 uv
    function _ip(num) {
        return parseInt(Number(num) * Number(syscfg.alexa_ip_times));
    }

    // todo 用于计算pv
    function _pv(ip, num) {
        var _pv = parseInt(Number(ip) * Number(num));
        return parseInt(_pv / 1000) * 1000;
    }
}

function ALEXA_analyze_load(ele, sub_ele, country_ele, param) {
    var api = syscfg.api_alexa_charge_url || '';
    if (!api)
        return false;
    api = api.replace('{token}', param.token).replace('{url}', param.domain);
    var tpl = '<tr>' + '<td class="mar"></td>' + '<td class="c036">UV</td>' + '<td>{day_uv}</td>' + '<td>{week_uv}</td>' + '<td>{month_uv}</td>' + '<td>{month3_uv}</td>' + '<td class="mar"></td>' + '</tr>' + '<tr>' + '<td class="mar"></td>' + '<td class="c036">PV</td>' + '<td>{day_pv}</td>' + '<td>{week_pv}</td>' + '<td>{month_pv}</td>' + '<td>{month3_pv}</td>' + '<td class="mar"></td>' + '</tr>';
    var sub_html = '';
    var sub_tpl = '<tr>' + '<td class="mar"></td>' + '<td>{domain}</td>' + '<td align="center">{per_reach}</td>' + '<td align="center">{per_user}</td>' + '<td align="center">{per_views}</td>' + '<td class="mar"></td>' + '</tr>';
    var country_html = '';
    var country_tpl = '<tr>' + '<td class="mar"></td>' + '<td>{name}</td>' + '<td align="left">{code}</td>' + '<td align="left">{per_user}</td>' + '<td align="left">{per_views}</td>' + '<td class="mar"></td>' + '</tr>';
    $.get(api, {}, function (res) {
        if (res && res.status == 0) {
            var day = res.data.reach.day;
            var week = res.data.reach.week;
            var month = res.data.reach.month;
            var trimester = res.data.reach.trimester;
            var day_ip = _ip(day.million);
            var week_ip = _ip(week.million);
            var month_ip = _ip(month.million);
            var trimester_ip = _ip(trimester.million);
            tpl = tpl.replace('{day_uv}', day_ip || '-').replace('{week_uv}', week_ip || '-').replace('{month_uv}', month_ip || '-').replace('{month3_uv}', trimester_ip || '-').replace('{day_pv}', _pv(day_ip, day.pv_per_user) || '-').replace('{week_pv}', _pv(week_ip, week.pv_per_user) || '-').replace('{month_pv}', _pv(month_ip, month.pv_per_user) || '-').replace('{month3_pv}', _pv(trimester_ip, trimester.pv_per_user) || '-');
            $(ele).html(tpl);
            tpl = null;
            if (sub_ele) {
                $.each(res.data.sub_domain, function (k, v) {
                    sub_html += sub_tpl.replace('{domain}', v.domain || '-').replace('{per_reach}', (v.per_reach + '%') || '-').replace('{per_user}', (v.per_user + '%') || '-').replace('{per_views}', v.per_views || '-');
                });
                $(sub_ele).html(sub_html);
            }
            sub_html = null;
            if (country_ele) {
                $.each(res.data.country, function (k, v) {
                    var code_data = syscfg.country_data[v.code] || '';
                    var country_code = v.code ? ((code_data.flag ? ('<img src="' + (syscfg.base_url + code_data.flag) + '" width="16" height="11"/>&nbsp;') : '') + v.code) : '-';
                    country_code = v.code === 'OTHER' ? v.code : country_code;
                    country_html += country_tpl.replace('{name}', code_data.name_cn || '-').replace('{code}', country_code || '-').replace('{per_user}', (v.per_user + '%') || '-').replace('{per_views}', (v.per_views + '%') || '-');
                });
                $(country_ele).html(country_html);
            }
            country_html = null;
        }
    }, 'json');

    function _delta(delta) {
        return (delta > 0) ? ('<em class="up">' + Math.abs(Number(delta)) + '</em>') : ((delta < 0) ? ('<em class="down">' + Math.abs(Number(delta)) + '</em>') : 0);
    }

    function _ip(num) {
        return parseInt(Number(num) * Number(syscfg.alexa_ip_times));
    }

    function _pv(ip, num) {
        var _pv = parseInt(Number(ip) * Number(num));
        return parseInt(_pv / 1000) * 1000;
    }
}

function alexa_ip_charts_load(ele, domain, token) {
    var url = syscfg.alexa_charts_url.replace('{domain}', domain || '').replace('{type}', 'uv').replace('{token}', token || '');
    $(ele).html('<iframe src="' + url + '" frameborder="0" height="300" width="100%"></iframe>');
}

function alexa_pv_charts_load(ele, domain, token) {
    var url = syscfg.alexa_charts_url.replace('{domain}', domain || '').replace('{type}', 'pv').replace('{token}', token || '');
    $(ele).html('<iframe src="' + url + '" frameborder="0" height="300" width="100%"></iframe>');
}

function val2unit(val) {
    if (val > 100000000) {
        return parseFloat((val / 100000000).toFixed(2)) + '亿';
    }
    if (val > 10000) {
        return parseFloat((val / 10000).toFixed(2)) + '万';
    }
    return val;
}
