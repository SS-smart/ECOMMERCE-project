import { reqGoodsInfo,reqAddOrUpdateShopCart} from "@/api";
import { getUUID } from "@/utils/uuid_token";

const actions = {
    async getGoodInfo({commit},skuId){
        const result = await reqGoodsInfo(skuId)
        if(result.code == 200){
            commit('GTEGOODINFO',result.data)
        }
    },
    //将产品添加到购物车上||修改产品的个数
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        // 加入购物车返回的解构
        //加入购物车以后(发请求)，前台将参数带给服务器
        //服务器写入数据成功，并没有返回其它的数据，只是返回code=200，代表这次操作从成功
        //因为服务器没有返回其余数据，因此咱们不需要三连环存储数据
        const result = await reqAddOrUpdateShopCart(skuId,skuNum);
      
    }
};
const mutations= {
    GTEGOODINFO(state,goodInfo){
        state.goodInfo = goodInfo
    },
   
};
const state = {
    goodInfo:{},
    //游客临时登录
    uuid_token:getUUID()

}
const getters = {
    //路径导航简化后的信息
    categoryView(state){
        return state.goodInfo.categoryView||{};
    },
    //简化产品信息的数据
    skuInfo(state){
        return state.goodInfo.skuInfo||{}
    },
    //产品售卖属性的简化
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList
    }
};

export default {
    actions,
    mutations,
    state,
    getters
}