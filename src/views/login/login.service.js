import util from 'util/util.js'
export default {
    login(){
        console.log("login service");
        util.request(
            {
                url:'login'
            }
        )
    }
}