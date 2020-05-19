/*
* 通过commit请求mutation间接更新对象
* */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from './mutation-types'

import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopGoods,
  reqShopRatings,
  reqShopInfo,
  reqSearchShop
} from '../api'
export default {
  //异步获取地址
  async getAddress ({commit, state}) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    // 提交一个mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },

  //异步获取食物分类
  async getCategorys ({commit}) {
    const result = await reqFoodCategorys()
    // 提交一个mutation
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },

  //异步获取福今年内商家列表
  async reqShops ({commit, state}) {
    const {longitude, latitude}  = state
    const result = await reqShops(longitude, latitude)
    // 提交一个mutation
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },

  //同步记录用户信息
  recordUser ({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },

  async getUserInfo ({commit}) {
    const userInfo = await reqUserInfo()
    commit(RECEIVE_USER_INFO, {userInfo})
  },

  async logout ({commit}){
    const result = await reqLogout()
    if (result.code === 0){
      commit(RESET_USER_INFO)
    }
  },

  async getShopGoods ({commit}, callback){
    const result = await reqShopGoods()
    if (result.code === 0){
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      //当运行到这里时，数据已经完成更新，需要通知一下组件
      callback && callback()
    }
  },

  async getShopRatings ({commit}, callback){
    const result = await reqShopRatings()
    if (result.code === 0){
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
      //当运行到这里时，数据已经完成更新，需要通知一下组件
      callback && callback()
    }
  },

  async getShopInfo ({commit}){
    const result = await reqShopInfo()
    if (result.code === 0){
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },

  //同步更新food中的count值
  updateFoodCount({commit}, {isAdd, food}){
    if (isAdd) {
      commit(INCREMENT_FOOD_COUNT, {food})
    }else {
      commit(DECREMENT_FOOD_COUNT, {food})
    }
  },

  //同步清空购物车
  clearCart({commit}) {
    commit(CLEAR_CART)
  },

  //异步获取搜索商家列表
  async searchShops({commit,state}, keyword) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqSearchShop(geohash, keyword)
    if (result.code===0) {
      const searchShops = result.data
      commit(RECEIVE_SEARCH_SHOPS, {searchShops})
    }
  }
}
