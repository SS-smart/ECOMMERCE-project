//当前这个模块，API进行统一管理
import requests from "./request";
import mockRequests from './mockAjax'
// import trade from "@/store/trade";
//三级联动接口
// api/product/getBaseCategoryList get 无参数
//发请求：axios发请求返回结果promise对象
export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'})

//获取banner（Home首页轮播图接口）
export const reqGetBannerList = ()=>mockRequests.get('/banner');

//获取floor数据
export const reqFloorlist = ()=>mockRequests.get('/floor')

//当前这个函数需不需要接受外部传递参数
//当前这个接口(获取搜索模块的数据)，给服务器传递一个默认参数【至少是以一个空对象】
export const reqGetSearchInfo = (params)=>requests({
    url:"/list",
    method:"post",
    data:params,
})

//获取产品详情信息的接口 URL:/api/item/{skuid} 请求方式：get
export const reqGoodsInfo =(skuId)=>requests({url:`/item/${skuId}`,method:'get'})

// 将产品添加到购物车中（获取更新某一个产品的个数
export const reqAddOrUpdateShopCart = (skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'}) 

//获取购物车列表数据接口
//URL:/api/cart/cartList  methos:get
export const reqCartList = ()=>requests({url:'/cart/cartList',method:'get'})

//删除购物产品的接口
//url:/api/cart/deleteCart/{skuId} methos:DELETE
export const reqDeleteCartById = (skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})

//修改商品的选中状态
export const reqUpdateCheckedByid =(skuId,isChecked)=>requests({url:`/cart/checked/${skuId}/${isChecked}`,method:'get'})

//获取验证码
export const reqGetCode =(phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'})

// 注册
export const reqUserRegister = (data)=>requests({url:'/user/passport/register',data,method:'post'})

// 登录
export const reqUserLogin = (data)=>requests({url:'/user/passport/login',data,method:'post'})

// 获取用户信息【带着用户的token向服务器要用户信息】
export const reqUserInfo = ()=>requests({url:'/user/passport/auth/getUserInfo',method:'get'})

// 退出登录
export const reqLogout = ()=>requests({url:'/user/passport/logout',method:'get'})

// 获取用户地址信息
export const reqAddressInfo = ()=>requests({url:'/user/userAddress/auth/findUserAddressList',methodL:'get'})
// export const reqAddressInfo = ()=>requests({url:'/order/auth/trade',methodL:'get'})

// 获取商品清单
export const reqOrderInfo =()=>requests({url:'/order/auth/trade',method:'get'})

// 提交订单接口
export const reqSubmitOrder = (tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})

// 获取支付信息
export const reqPayInfo = (orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})

// 获取支付订单状态
export const reqPayStatus = (orderId) =>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})

// 获取个人中心的数据
export const reqMyOrderList = (page,limit)=>requests({url:`/order/auth/${page}/${limit}`,method:'get'})