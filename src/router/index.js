import Vue from "vue";
import VueRouter from 'vue-router';
Vue.use(VueRouter)
import routes from "./routes";
// 引入store
import store from '@/store'
// 对外暴露router类的实例
let router = new VueRouter({
    routes,
    scrollBehavior(to,from,savedPosition){
        return {y:0}
    }
})
// 全局守卫，前置守卫

router.beforeEach(async (to,from,next)=>{
    // next()
    let onlyToken = store.state.user.token
    let onlyName = store.state.user.userInfo.name
    if(onlyToken){
        if(to.path=='/Login'){
            next('/')
            // console.log('11111')
        }else{
            if(onlyName){
                next()
                // console.log('22222')
            }else{
             try {
                await store.dispatch('getUserInfo');
                next()
                // console.log('333333')
             } catch (error) {
               await store.dispatch('userLogout');
                next('/Login');
             }
            }
        }
    }else{
        // 未登录，不能去交易相关，不能去支付相关【pay|paysuccess】，不能去个人中心
        //未登录不能去这些路由--------登录
        let toPath = to.path;
        if(toPath.indexOf('/trade')!=-1 || toPath.indexOf('/pay')!=-1||toPath.indexOf('/center')!=-1){
            next('/login？redirect='+toPath)
        }else{
            // 去的不是上面这些路由(home|search|shopCart) -----放行
            next();
        }

        // next();
        // console.log('444444')
    }
})

export default router;