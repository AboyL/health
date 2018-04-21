import util from 'util'
export default {
    async login(data){
        return await util.request(
            {
                url:'user/login',
                data:data
            }
        )
    },
    async register(data){
        return await util.request(
            {
                url:'user/register',
                data:data
            }
        )
    }
}