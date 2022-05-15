"use strict";
// Copyright (c) 2022 github.com/System233
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = exports.TuanAPIError = exports.YouthAPIError = exports.APIError = void 0;
const axios_1 = __importDefault(require("axios"));
const qs_1 = __importDefault(require("./qs"));
const api_1 = require("./api");
const config_1 = require("./config");
class APIError extends Error {
    code;
    message;
    constructor(code, message) {
        super(`${message} (${code})`);
        this.code = code;
        this.message = message;
    }
}
exports.APIError = APIError;
class YouthAPIError extends APIError {
    constructor(res) {
        super(res.data.errno, res.data.errmsg);
    }
}
exports.YouthAPIError = YouthAPIError;
class TuanAPIError extends APIError {
    constructor(res) {
        super(res.data.status, res.data.msg);
    }
}
exports.TuanAPIError = TuanAPIError;
class Session {
    token;
    instance;
    constructor(token) {
        this.token = token;
    }
    get http() {
        if (!this.instance) {
            this.instance = axios_1.default.create({
                headers: Object.assign({}, config_1.defaultHeaders),
                timeout: config_1.timeout,
                proxy: config_1.proxyConfig
            });
            this.instance.interceptors.request.use((req) => {
                const tokenUrl = 'youthstudy.12355.net';
                if (req.headers['host'] == tokenUrl || req.url.includes(tokenUrl)) {
                    req.headers['X-Litemall-Token'] = this.token;
                }
                return req;
            });
            const handle = (res) => {
                if (res.config.url.includes('tuanapi.12355.net')) {
                    const r = res;
                    if (r.data.status != 200) {
                        throw new TuanAPIError(r);
                    }
                    return res;
                }
                if (res.data.errno) {
                    throw new YouthAPIError(res);
                }
                res.data = res.data.data;
                return res;
            };
            this.instance.interceptors.response.use(handle, (error) => handle(error.response));
        }
        return this.instance;
    }
    async request(name, data) {
        const config = api_1.APIMap[name];
        data = Object.assign({}, config.params, data);
        const type = Object.keys(config.headers).find(x => x.toLowerCase() == 'content-type');
        if (type && config.headers[type] == 'application/x-www-form-urlencoded') {
            data = qs_1.default.stringify(data);
        }
        return await this.http.request(Object.assign({
            url: config.url,
            method: config.method,
            headers: config.headers,
        }, config.method == 'GET' ? { params: data } : { data }));
    }
}
exports.Session = Session;
