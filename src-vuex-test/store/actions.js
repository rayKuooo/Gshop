/*
*   包含多个接受组件通知触发mutation调用间接更新状态的方法的对象
* */
import {ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, CLEAR_ALL_COMPLETED, RECEIVE_TODOS} from './mutation-types'
import storageUtil from "../util/storageUtil";

export default {
  //添加todo
  addTodo ({commit}, todo) {
    //提交一个mutation的请求
    commit(ADD_TODO, {todo})
  },

  //删除todo
  deleteTodo ({commit}, index) {
    commit(DELETE_TODO, {index})
  },

  //全选todo
  selectAllTodos ({commit}, check) {
    commit(SELECT_ALL_TODOS, {check})
  },

  //清除已选todo
  clearALLCompleted ({commit}) {
    commit(CLEAR_ALL_COMPLETED)
  },

  //异步获取todo并且更新状态
  reqTodos ({commit}) {
    setTimeout(() => {
      const todos = storageUtil.getTodos()
      commit(RECEIVE_TODOS, todos)
    },1000)
  }

}
