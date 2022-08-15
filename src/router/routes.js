//引入一级路由组件
import Home from '@/pages/Home.vue'
// import Login from '@/pages/Login.vue'
// import Register from '@/pages/Register'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '../pages/Trade'
import Pay from '../pages/Pay'
import paySuccess from '../pages/PaySuccess'
import Center from '../pages/Center'
import myOrder from '../pages/Center/myOrder'
import groupOrder from '../pages/Center/groupOrder'
//路由配置信息
export default[
    {
        path:'/center',
        component:Center,
        meta:{show:true},
        // 二级路由
        children:[
            {
                path:'myorder',
                component:myOrder
            },
            {
                path:'grouporder',
                component:groupOrder
            },
            {
                path:'/center',
                redirect:'/center/myorder'
            },
        ],
    },
    {
        path:'/paysuccess',
        component:paySuccess,
        meta:{show:true}
    },
    {
        path:'/pay',
        component:Pay,
        meta:{show:true},
        beforeEnter: (to, from, next) => {
            if(from.path == "/trade"){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path:'/trade',
        component:Trade,
        meta:{show:true},
        // 路由独享守卫,去交易页面，必须是从购物车而来
        beforeEnter: (to, from, next) => {
            if(from.path == "/shopcart"){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path:'/shopcart',
        component:ShopCart,
        meta:{show:true}
    },
    {
        path:'/addcartsuccess',
        component:AddCartSuccess,
        name:'addcartsuccess',
        meta:{show:true}
    },
    {
        path:'/Detail/:skuid',
        component:Detail,
        meta:{show:true}
    },
    {
        path:'/Home',
        component:Home,
        meta:{show:true}
    },
    {
        path:'/Login',
        component:Login,
        meta:{show:false}
    },
    {
        path:'/Register',
        component:Register,
        meta:{show:false}
    },
    {
        path:'/Search/:keyword?',
        component:Search,
        name:'search',
        meta:{show:true}
    },
    {
        path:'*',
        redirect:'/Home'
    }
]