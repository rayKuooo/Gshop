/*
* 使用mockjs提供mock数据接口
* */
import Mock from 'mockjs'
import data from './data'

//因为mock返回的数据是随机数据，不需要真正请求后端，所以返回数据code始终为0
//  返回goods的接口
Mock.mock('/goods', {code: 0, data: data.goods})
//  返回ratings的接口
Mock.mock('/ratings', {code: 0, data: data.ratings})
//  返回info的接口
Mock.mock('/info', {code: 0, data: data.info})

// export default ???
//  mock是非常特别的插件，不需要向外暴露模块，只需要运行就可以
