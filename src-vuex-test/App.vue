<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader />
      <TodoList/>
      <TodoFooter/>
    </div>
  </div>
</template>


<script>
  import TodoHeader from './components/TodoHeader'
  import TodoList from './components/TodoList'
  import TodoFooter from './components/TodoFooter'
  import storageUtil from './util/storageUtil'


  export default {
    mounted(){
      //异步获取保存todos数据并且显示
        this.$store.dispatch('reqTodos')
    },
    components:{
      TodoFooter,
      TodoHeader,
      TodoList
    },
    watch:{
      todos:{
        deep: true,
        // handler: function (value) {
        //   window.localStorage.setItem('todos_key',JSON.stringify(value))
        // }
        handler : storageUtil.saveTodos
      }
    },
    methods:{
      addTodo (todo) {
        this.todos.push(todo);
      },
      deleteTodo (index) {
        this.todos.splice(index, 1)
      },
      //删除选中的任务
      deleteCompleteTodos(){
        this.todos = this.todos.filter(todo => !todo.complete)
      },
      //全选或者全不选
      selectAllTodos(check) {
        this.todos.forEach(todo => todo.complete = check)
      }
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
