<template>
  <ul class="todo-main">
    <TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index" />
  </ul>
</template>


<script>
  import TodoItem from './TodoItem'
  import storageUtil from "../util/storageUtil";
  import {mapState} from 'vuex'

  export default {
   computed:{
      ...mapState(['todos'])
   },
   watch:{//监视todos的所有变化
    todos: {
        deep: true,
        handler : storageUtil.saveTodos   //保存todos到local
    }
   },
    components:{
      TodoItem
    }
  }
</script>

<style>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }

</style>
