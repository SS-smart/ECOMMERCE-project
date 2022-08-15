//home模块的小仓库
import {reqCategoryList, reqGetBannerList,reqFloorlist} from '../../api/index'
const actions={
    async categoryList({commit}){
        let result =await reqCategoryList();
        if(result.code==200){
            commit("CATEGORYLIST",result.data)
        }
    },
    // state.categoryList.length = 15
    async getBannerList({commit}){
        let result = await reqGetBannerList();
        if(result.code==200){
            commit('GETBANNERLIST',result.data);
        }
    },

    //获取floor数据
    async getFloorList({commit}){
        let result = await reqFloorlist();
        if(result.code == 200){
            commit('GRTFLOORLIST',result.data)
        }
    }
};
const mutations ={
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    GRTFLOORLIST(state,floorList){
        state.floorList = floorList
    }
};
const state={
    categoryList:[],
    bannerList:[],
    floorList:[]
};
const getters ={};
export default{
    actions,
    mutations,
    state,
    getters
}