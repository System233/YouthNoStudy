// Copyright (c) 2022 github.com/System233
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Helper } from "../src/helper";
import { Session } from "../src/session";


(async()=>{
    const run=async(memberId:number)=>{
        try {
            const session=new Session(null);
            const helper=new Helper(session);
            const [name,token]=await helper.login(memberId);
            const [id,chaper]=await helper.check();
            return [memberId,name,chaper];
        } catch (error) {
            return [memberId,null,error.message];
        }
    }
    const members=process.argv.slice(2).map(x=>parseInt(x)).filter(x=>Number.isSafeInteger(x));
    const uniques=Array.from(new Set(members));
    if(!uniques.length){
        console.error('用法: yns-do [...用户ID]');
        process.exit(-1);
    };
    const result=await Promise.all(uniques.map(run));
    console.log(result);
})();