var Mock = require('mockjs');
let baseUrl="http://localhost:8080/api/"
Mock.mock(`${baseUrl}login`,function(){
    return {
        "data":"aaa"
    }
})