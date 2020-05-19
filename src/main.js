/*
*   入口JS
*/

import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App'
import router from './router'
import store from './store'
import './mock/mockServer'

import VueLazyload from "vue-lazyload";
import loading from './common/imgs/loading.gif'
import './filter' //加载过滤器

//注册全局组件标签
Vue.component(Button.name, Button) // <mt-Button>
//图片懒加载
Vue.use(VueLazyload, {  //内部自定义了一个指令lazy
  loading
})


new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
