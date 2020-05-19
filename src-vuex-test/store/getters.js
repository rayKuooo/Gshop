
/*
*   包含所有基于state的getter计算属性的对象
* */

export default {
  totalCount (state) {
    return state.todos.length
  },
  completeCount (state) {
    let flag = 0;

    state.todos.forEach(function (todo) {
      todo.complete == true?flag++:true;
    });
    return flag;
  },
  isAllComplete (state, getters) {
    return getters.completeCount === getters.completeCount.totalCount && state.todos.length>0
  }
}
