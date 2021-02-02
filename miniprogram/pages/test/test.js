// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ally: [],
    tn: '<p>A<span style="color:red">B</span></p>'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var nodes = []
    
    for (var i = 0; i < 100; i++) {
      var span = {
        name: 'span',
        attrs: {},
        children: []
      }
      console.log("i="+i)
      if (i % 2==0) {
        span.attrs = { style: 'line-height: 30rpx;letter-spacing:15px;color:red' }
        span.children.push( {
          type: 'text',
          text: i+""
        })
      }else if (i % 3==0) {
        span.attrs = { style: 'line-height: 30rpx;letter-spacing:15px;color:blue' }
        span.children.push({
          type: 'text',
          text: i+""
        })
      }else {
        span.attrs = { style: 'line-height: 30rpx;letter-spacing:15px;color:black' }
        span.children.push({
          type: 'text',
          text: i+""
        })        
      }
      nodes.push(span)
      if (i % 10 == 0 && i!=0) {
        var br={
          name:'br',
        }
        nodes.push(br)
      }
    }
    this.setData({
      ally: nodes
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