import axios from 'axios'
export default{
    request({
        method = 'post',
        url,
        data
    }) {
        return axios({
            url: url,
            method: method,
            data: data,
            baseURL: "http://localhost:8080/api"
        })
        .then((result) => {
            return result.data            
        }).catch((err) => {
            return err
        });
    }
}