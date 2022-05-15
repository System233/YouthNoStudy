// Copyright (c) 2022 github.com/System233
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// interface QueryParam{
//     [key:string]:string|QueryParam|QueryParam[];
// }
type QueryParam=Record<string,string|any|any[]>;
export const parse=(str:string)=>{
    const data={} as QueryParam;
    for(const [key,val] of new URLSearchParams(str)){
        const path=[] as string[];
        
        const setup=(data:QueryParam,index:number=0)=>{
            if(index==path.length){
                return (val);
            }
            const key=path[index];
            const value=data[key]||{} as QueryParam;
            if(typeof value=='string'||Array.isArray(value)){
                return data;
            }
            data[key]=setup(value,index+1);
            return data;
        }
        const raw=key.replaceAll(/\[\s*(\w+)\s*\]/g,(_,x)=>{
            path.push(x);
            return '';
        });
        path.splice(0,0,raw);
        setup(data);
    }
    return data;
}


export const stringify=(obj:QueryParam)=>{
    const walk=(obj:QueryParam|QueryParam[]|string,path:string):string[]=>{
        if(typeof obj!='object'){
            return [`${path}=${encodeURIComponent(obj)}`];
        }
        if(Array.isArray(obj)){
            return obj.map((val,index)=>walk(val,`${path}[${index}]`)).flat();
        }
        return Object.keys(obj).map(x=>walk(obj[x],`${path}[${x}]`)).flat();
    }
    return Object.keys(obj).map(x=>walk(obj[x],x)).flat().join('&');
}


export default {
    parse,
    stringify
}