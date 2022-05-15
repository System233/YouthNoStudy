// Copyright (c) 2022 github.com/System233
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

export const defaultHeaders={
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36 MicroMessenger/6.5.2.501 NetType/WIFI WindowsWechat QBCore/3.43.884.400 QQBrowser/9.0.2524.400',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.8,en-us;q=0.6,en;q=0.5;q=0.4'
}
export const proxyConfig=(
    process.env.PROXY_HOST&&process.env.PROXY_PORT?{
        host:process.env.PROXY_HOST,
        port:parseInt(process.env.PROXY_PORT),
    }:null);
export const timeout=5000;