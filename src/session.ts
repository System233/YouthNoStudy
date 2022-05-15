// Copyright (c) 2022 github.com/System233
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import axios,{ AxiosInstance, AxiosResponse } from "axios";
import qs from "./qs";
import { API, APIMap, Response, YouthLearningURLData } from "./api";
import { defaultHeaders, proxyConfig, timeout } from "./config";
export class APIError extends Error{
    constructor(public code:number,public message:string){
        super(`${message} (${code})`);
    }
}
export class YouthAPIError extends APIError{
    constructor(res:AxiosResponse<Response<any>>){
        super(res.data.errno,res.data.errmsg);
    }
    // get response(){
    //     return this.res;
    // }
}
export class TuanAPIError extends APIError{
    constructor(res:AxiosResponse<YouthLearningURLData>){
        super(res.data.status,(res as any).data.msg);
    }
    // get response(){
    //     return this.res;
    // }
}
export class Session{
    public instance:AxiosInstance;
    constructor(public token:string){}
    get http(){
        if(!this.instance){
            this.instance=axios.create({
                headers:Object.assign({},defaultHeaders),
                timeout:timeout,
                proxy:proxyConfig
            });
            this.instance.interceptors.request.use((req)=>{
                const tokenUrl='youthstudy.12355.net';
                if(req.headers['host']==tokenUrl||req.url.includes(tokenUrl)){
                    req.headers['X-Litemall-Token']=this.token;
                }
                return req;
            })
            const handle=(res:AxiosResponse<Response<any>>)=>{
                if(res.config.url.includes('tuanapi.12355.net')){
                    const r=res as any as AxiosResponse<YouthLearningURLData>;
                    if(r.data.status!=200){
                        throw new TuanAPIError(r);
                    }
                    return res;
                }
                if(res.data.errno){
                    throw new YouthAPIError(res);
                }
                res.data=res.data.data;
                return res;
            }
            this.instance.interceptors.response.use<AxiosResponse<Response<any>>>(handle,(error)=>handle(error.response));
        }
        return this.instance;
    }
    async request<T extends keyof API>(name:T,data:API[T][0]){
        const config=APIMap[name];
        data=Object.assign({},config.params,data);
        const type=Object.keys(config.headers).find(x=>x.toLowerCase()=='content-type');
        if(type&&config.headers[type]=='application/x-www-form-urlencoded'){
            data=qs.stringify(data) as any;
        }
        return await this.http.request<API[T][1]>(Object.assign({
            url:config.url,
            method:config.method,
            headers:config.headers,
        }, config.method=='GET'?{params:data}:{data}));
    }
}