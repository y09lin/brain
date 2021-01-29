// pages/trains/digit/game/digitList.js
const util = require('../../../../utils/util');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 4,
    list: Array,
    num: 0,
    current: '',
    index: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // TODO get count

    let digits = util.getRandomDigits(this.data.count);
    this.setData({
      list: digits
    })
  },

  /**
   * when click begin 2 show digits
   */
  onBeginDigits: function(e) {
    this.setData({
      index: 0
    });
    var timer = setInterval(
      function(){
        if (index < count){
          this.setData({
            current: this.data.list[index],
            index: this.data.index + 1
          });
        } else {
          clearInterval(timer);
        }
      }, 
      1500
    );
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})