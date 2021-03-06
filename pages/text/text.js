//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    reFresh: false,
    list:[]
  },
  scrolltoupper:function(){
    this.getListData('newlist');
  },
  scrolltolower: function () {
    console.log('到底部')
    this.getListData('list');
  },
  onLoad:function(){
    this.getListData('newlist');//加载最新
    // this.getListData('newlist');加载列表
  },
  getListData:function(a){
    var that = this;
    wx.showLoading({
      title: '加载中',
    })
      wx.request({
        url: 'http://api.budejie.com/api/api_open.php',
        data:{
          a:a,
          c: 'data',
          type: '29',
        },
        dataType: 'json',
        method:'GET',
        success:function(res){
          console.log(res);
          wx.hideLoading();
          that.setData({
            list:that.data.list.concat(res.data.list),
          });
        }
      })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})
