import axios from 'axios'
export default{
    request({
        method = 'post',
        url,
        data
    }) {
        console.log("request");
        axios({
            url: url,
            method: method,
            data: data,
            baseURL: "http://localhost:8080/api"
        })
            .then(function (res) {
                console.log(res);
            })
    }
}