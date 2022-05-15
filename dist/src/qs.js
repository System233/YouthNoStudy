"use strict";
// Copyright (c) 2022 github.com/System233
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringify = exports.parse = void 0;
const parse = (str) => {
    const data = {};
    for (const [key, val] of new URLSearchParams(str)) {
        const path = [];
        const setup = (data, index = 0) => {
            if (index == path.length) {
                return (val);
            }
            const key = path[index];
            const value = data[key] || {};
            if (typeof value == 'string' || Array.isArray(value)) {
                return data;
            }
            data[key] = setup(value, index + 1);
            return data;
        };
        const raw = key.replaceAll(/\[\s*(\w+)\s*\]/g, (_, x) => {
            path.push(x);
            return '';
        });
        path.splice(0, 0, raw);
        setup(data);
    }
    return data;
};
exports.parse = parse;
const stringify = (obj) => {
    const walk = (obj, path) => {
        if (typeof obj != 'object') {
            return [`${path}=${encodeURIComponent(obj)}`];
        }
        if (Array.isArray(obj)) {
            return obj.map((val, index) => walk(val, `${path}[${index}]`)).flat();
        }
        return Object.keys(obj).map(x => walk(obj[x], `${path}[${x}]`)).flat();
    };
    return Object.keys(obj).map(x => walk(obj[x], x)).flat().join('&');
};
exports.stringify = stringify;
exports.default = {
    parse: exports.parse,
    stringify: exports.stringify
};
