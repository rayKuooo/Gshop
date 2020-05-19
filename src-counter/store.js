
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//状态对象
const state = {
  count : 0
}
//包含更新state函数的对象
const mutations = {
  INCREMENT(state){
    state.count++
  },
  DECREMENT(state){
    state.count--
  }
}
//包含多个事件回调函数的对象
const actions = {
  //增加的actions
  increment ({commit}){
    commit('INCREMENT')
  },
  //减少
  decrement({commit}){
    commit('DECREMENT')
  },
  //带条件的的actions
  incrementIfOdd({commit, state}){
    if (state.count%2==1) {
      commit('INCREMENT')
    }
  },
  //异步的actions
  incrementAsync({commit}){
    //在action中直接可以执行异步代码
    setTimeout(() => {
      commit('INCREMENT')
    },1000)
  },
}
//包含多个getter计算属性函数的对象
const getters = {
  evenOrOdd(state) {
    return state.count%2===0?'偶数':'奇数'
  }
}

export default new Vuex.Store({
  state,      //状态对象
  mutations,  //包含更新state函数的对象
  actions,    //包含多个事件回调函数的对象
  getters     //包含多个getter计算属性函数的对象
})
