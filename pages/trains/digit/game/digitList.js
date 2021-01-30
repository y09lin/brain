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
    current: 'Ready?',
    index: 0,
    btnText: ['GO!', 'DO!', 'CHECK', 'AGAIN'],
    btnIndex: 0,
    btnHidden: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // TODO get count from db

    let digits = util.getRandomDigits(this.data.count);
    console.log(digits);
    this.setData({
      list: digits
    })
  },

  /**
   * when click begin 2 show digits
   */
  onBeginDigits: function () {
    var i = 0;
    var count = this.data.count * 2;
    this.setData({
      index: i
    });
    var that = this;
    var timer = setInterval(
      function () {
        console.log('current: ', that.data.current);
        var msg = that.data.list[that.data.index];
        if (i % 2 != 0) {
          msg = '';
          that.setData({
            index: that.data.index + 1
          });
        }
        if (i < count) {
          that.setData({
            current: msg
          });
          i++;
        } else {
          clearInterval(timer);
          let actionIndex = that.data.btnIndex + 1;
          if (actionIndex == 4) {
            actionIndex = 0;
          }
          that.setData({
            btnIndex: actionIndex,
            btnHidden: false
          })
        }
      },
      1500
    );
  },

  onClickBtn: function (e) {
    console.log('click btn: ', this.data.btnIndex)
    switch (this.data.btnIndex) {
      case 0:
        // begin 2 show digits
        this.onBeginDigits()
        break;
      case 1:
        // begin 2 input
        break;
      case 2:
        // begin 2 check
        break;
      case 3:
        // one more game
        break;
    }
    this.setData({
      btnHidden: true
    })
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