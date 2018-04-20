import util from 'util'
export default {
    async login(data){
        return await util.request(
            {
                url:'user/login',
                data:data
            }
        )
    }
}