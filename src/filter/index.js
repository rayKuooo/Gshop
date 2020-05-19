import Vue from 'vue'
// import moment from 'moment'
import format from 'date-fns/format'


//自定义过滤器
//我们发现moment库占用太大了，于是换成了轻量级的库date-fns
Vue.filter('date-format', function (value, formatStr='YYYY-MM-DD HH:mm:ss') {
  // return moment(value).format(formatStr)
  return format(value, formatStr)
})

