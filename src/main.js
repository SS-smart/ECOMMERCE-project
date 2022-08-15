import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
//引入swiper样式
import "swiper/css/swiper.css"
//引入MockServer.js----mock数据
import '@/mock/mockServe'
//注册全局组件，三级联动
import TypeNav from './components/TypeNav.vue'
import Carousel from './components/Carousel'
//注册全局组件分页器
import Pagination from '@/components/Pagination'
import {MessageBox} from 'element-ui'
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
// import {reqGetSearchInfo} from '@/api/index'
//第一个参数全局组件的名字，第二个参数哪一个组件
Vue.component('TypeNav',TypeNav)
Vue.component('Carousel',Carousel)
Vue.component('Pagination',Pagination)
//测试
// import {reqCategoryList} from '@/api';
// reqCategoryList();
Vue.config.productionTip = false

// 统一接口api文件夹里面全部请求函数,统一引入
import * as API from '@/api'
import VueLazyload from 'vue-lazyload'
// import atm from '@/assets/1.GIF'
// import atm from '../src/assets/images/1.GIF'
import atm from '../public/images/1.jpg'
Vue.use(VueLazyload,{
  loading:atm
})
new Vue({
  render: (h) => h(App),
  // 注册路由,名字跟上面的哪个js文件一样
  beforeCreate(){
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  router,
  store
}).$mount('#app')
