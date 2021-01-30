// pages/trains/digit/game/digitList.js
const util = require('../../../../utils/util');
const answerHidden = 'visibility: hidden';
const fs22 = '22px';
const fs35 = '35px'

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
    btnText: ['GO', 'ANSWER', 'CHECK', 'AGAIN'],
    btnIndex: 0,
    btnHidden: false,
    inputValue: '',
    winTime: 0,
    ansStyle: 'visibility: hidden',
    fontSize: fs22
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // TODO get count from db
    let digits = util.getRandomDigits(this.data.count);
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
      current: '',
      index: i,
      btnHidden: true,
      fontSize: fs35
    });
    var that = this;
    var timer = setInterval(
      function () {        
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
          that.setData({
            current: 'Over!',
            btnIndex: 1,
            btnHidden: false,
            fontSize: fs22
          })
        }
      },
      1000
    );
  },

  onClickBtn: function (e) {    
    switch (this.data.btnIndex) {
      case 0:
        // begin 2 show digits
        this.onBeginDigits()
        break;
      case 1:
        // begin 2 input
        this.setData({
          btnIndex: 2,
          btnHidden: true  
        })
        break;
      case 2:
        // begin 2 check
        this.checkInput()
        break;
      case 3:
        // one more game
        this.moreGame()
        break;
    }
  },

  moreGame: function(){
    var count = this.data.count;
    var wt = this.data.winTime;
    if (wt == 3){
      count++;
      wt=0;
    }
    
    if (this.data.current == 'Faild!' && count > 4){      
      count--
      wt=0;
    }
    let digits = util.getRandomDigits(count);
    
    this.setData({
      count: count,
      list: digits,
      current: 'Ready?',
      winTime: wt,
      inputValue: '',
      btnIndex: 0,
      ansStyle: answerHidden
    })
  },

  checkInput: function(){
    var inputList = this.data.inputValue.split('');
    for (var i=0; i<inputList.length; i++){
      if (inputList[i] != this.data.list[i]){
        this.setData({
          current: 'Faild!',
          winTime: 0,
          ansStyle: '',
          btnIndex: 3,
          fontSize: fs22
        });
        return;
      }
    }
    this.setData({
      current: 'Win!',
      winTime: this.data.winTime + 1,
      ansStyle: '',
      btnIndex: 3,
      fontSize: fs22
    });
  },

  bindKeyInput: function (e) {
    var showBtn = e.detail.value.length == this.data.count;
    this.setData({
      inputValue: e.detail.value,
      btnHidden: !showBtn
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