import axios from 'axios'
import { Message,Loading } from 'element-ui';
export default{
    request({
        method = 'post',
        url,
        data
    }) {
        let loadingInstance = Loading.service({
            text:'加载中'
        });
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
        }).finally(()=>{
            loadingInstance.close()            
        })
    },
    warningMessage({message}){
        Message({
            message,
            type:'warning'
        })
    },
    successMessage({message}){
        Message({
            message,
            type:'success'
        })
    },
    
}