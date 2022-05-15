"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIMap = void 0;
exports.APIMap = {
    ChapterNew: {
        method: 'GET',
        url: 'https://youthstudy.12355.net/saomah5/api/young/chapter/new',
        headers: {
            Host: 'youthstudy.12355.net',
            Accept: '*/*',
            'Content-Type': 'application/json',
            'X-Litemall-IdentiFication': 'young',
            Referer: 'https://youthstudy.12355.net/h5/'
        },
        params: {}
    },
    YouthLearningURL: {
        method: 'GET',
        url: 'https://tuanapi.12355.net/questionnaire/getYouthLearningUrl',
        headers: {
            Host: 'tuanapi.12355.net',
            Accept: 'application/json, text/javascript, */*; q=0.01',
            Origin: 'https://tuan.12355.net',
            Referer: 'https://tuan.12355.net/wechat/index.html'
        },
        params: {}
    },
    ChapterSaveHistory: {
        method: 'POST',
        url: 'https://youthstudy.12355.net/saomah5/api/young/course/chapter/saveHistory',
        headers: {
            Host: 'youthstudy.12355.net',
            Accept: '*/*',
            'Content-Type': 'application/x-www-form-urlencoded',
            Origin: 'https://youthstudy.12355.net',
            'X-Litemall-IdentiFication': 'young',
            Referer: 'https://youthstudy.12355.net/h5/'
        },
        params: {}
    },
    UserGet: {
        method: 'POST',
        url: 'https://youthstudy.12355.net/saomah5/api/user/get',
        headers: {
            Host: 'youthstudy.12355.net',
            Accept: '*/*',
            'Content-Type': 'application/x-www-form-urlencoded',
            Origin: 'https://youthstudy.12355.net',
            'X-Litemall-IdentiFication': 'young',
            Referer: 'https://youthstudy.12355.net/h5/'
        },
        params: {}
    }
};
