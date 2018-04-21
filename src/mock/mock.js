var Mock = require('mockjs');
let baseUrl = "http://localhost:8080/api/"
Mock.mock(`${baseUrl}user/login`, (url) => {
    let data=JSON.parse(url.body);
    let result={};
    console.log(data);
    console.log(data.username);
    if(data.username==="L"&&data.password==="123"){
        result={
            status: 1,
            msg: "登录成功"            
        }
    }else{
        result={
            status: 0,
            msg: "登录失败"            
        }
    }
    return result;
})
Mock.mock(`${baseUrl}user/register`, (url) => {
    let data=JSON.parse(url.body);
    let result={};
    return {
        status: 1,
        msg: "注册成功"            
    };
})