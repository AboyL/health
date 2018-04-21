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
    },
    async getQuestion(data){
        return await util.request(
            {
                url:'user/getQuestion',
                data:data
            }
        )
    },
    async checkAnswer(data){
        return await util.request(
            {
                url:'user/checkAnswer',
                data:data
            }
        )
    },
}