/*
* 状态对象
* */

export default {
  longitude: 116.36867, //经度，
  latitude: 40.10038 , //纬度
  address: {}, //地址
  categorys: [], //分类
  shops: [], //商家
  userInfo: {},   //用户个人信息

  //获取商家信息
  goods: [],
  ratings: [],
  info: {},

  //购物车
  cartFoods: [],  //购物车中食物列表，且food.count>0

  //搜索商家的列表
  searchShops:[]
}
