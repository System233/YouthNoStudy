"use strict";
// Copyright (c) 2022 github.com/System233
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helper = void 0;
const qs_1 = require("./qs");
class Helper {
    session;
    constructor(session) {
        this.session = session;
    }
    async request(name, data) {
        return await this.session.request(name, data).then(res => res.data);
    }
    async login(mid) {
        const url = await this.request('YouthLearningURL', {
            mid,
            _: Date.now()
        });
        const [_, params] = url.youthLearningUrl.split('?');
        const data = qs_1.parse(params);
        const user = await this.request('UserGet', {
            sign: encodeURIComponent(data.sign)
        });
        const token = user.entity.token;
        this.session.token = token;
        return [user.entity.nickName, token];
    }
    async check() {
        const chaper = await this.request('ChapterNew', null);
        await this.request('ChapterSaveHistory', {
            chapterId: chaper.entity.id
        });
        return [chaper.entity.id, chaper.entity.name];
    }
}
exports.Helper = Helper;
