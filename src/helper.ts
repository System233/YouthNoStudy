// Copyright (c) 2022 github.com/System233
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { API } from "./api";
import { parse } from "./qs";
import { Session } from "./session";

export class Helper{
    constructor(public session:Session){

    }
    async request<T extends keyof API>(name:T,data:API[T][0]){
        return await this.session.request(name,data).then(res=>res.data);
    }
    async login(mid:string|number){
        const url=await this.request('YouthLearningURL',{
            mid,
            _:Date.now()
        });
        const [_,params]=url.youthLearningUrl.split('?');
        const data=parse(params) as {sign:string};
        const user=await this.request('UserGet',{
            sign:encodeURIComponent(data.sign)
        });
        const token=user.entity.token;
        this.session.token=token;
        return [user.entity.nickName,token];
    }
    async check(){
        const chaper=await this.request('ChapterNew',null);
        await this.request('ChapterSaveHistory',{
            chapterId:chaper.entity.id
        });
        return [chaper.entity.id,chaper.entity.name];
    }
}