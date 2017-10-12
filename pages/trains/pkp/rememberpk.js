// pages/trains/pkp/rememberpk.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pkp: [
      'res/_1_a.png', 'res/_1_b.png', 'res/_1_c.png', 'res/_1_d.png',
      'res/_2_a.png', 'res/_2_b.png', 'res/_2_c.png', 'res/_2_d.png',
      'res/_3_a.png', 'res/_3_b.png', 'res/_3_c.png', 'res/_3_d.png',
      'res/_4_a.png', 'res/_4_b.png', 'res/_4_c.png', 'res/_4_d.png',
      'res/_5_a.png', 'res/_5_b.png', 'res/_5_c.png', 'res/_5_d.png',
      'res/_6_a.png', 'res/_6_b.png', 'res/_6_c.png', 'res/_6_d.png',
      'res/_7_a.png', 'res/_7_b.png', 'res/_7_c.png', 'res/_7_d.png',
      'res/_8_a.png', 'res/_8_b.png', 'res/_8_c.png', 'res/_8_d.png',
      'res/_9_a.png', 'res/_9_b.png', 'res/_9_c.png', 'res/_9_d.png',
      'res/_10_a.png', 'res/_10_b.png', 'res/_10_c.png', 'res/_10_d.png',
      'res/_11_a.png', 'res/_11_b.png', 'res/_11_c.png', 'res/_11_d.png',
      'res/_12_a.png', 'res/_12_b.png', 'res/_12_c.png', 'res/_12_d.png',
      'res/_13_a.png', 'res/_13_b.png', 'res/_13_c.png', 'res/_13_d.png',
      'res/_k_a.png', 'res/_k_b.png'
    ],
    rpk: Array,
    pk_b: 'res/_pkp.png',
    isCheck: false,
    isShow: true,
    errorCount: 0,
    state: 0,
  },

  /**
   * 点击扑克牌
   */
  clickPkp: function (event) {
    if (this.data.isCheck) {
      // console.log("点击了："+event.target.id)
      var i = this.data.pkp.indexOf(event.target.id)
      if (i > -1 && i < this.data.pkp.length - 1) {
        var temp = this.data.pkp[i + 1]
        // console.log("位置："+i)
        // console.log("要交换的是：" + temp+" 位置在:"+(i+1))
        this.data.pkp[i + 1] = event.target.id
        this.data.pkp[i] = temp
        this.setData({
          pkp: this.data.pkp
        })
      }
    }
  },

  /**
   * 开始复牌
   */
  startCheck: function (event) {
    if(this.data.isCheck){
      var count=0
      for (var i=0;i<this.data.pkp.length;i++){
        if (this.data.pkp[i]!=this.data.rpk[i]){
          ++count
        }
      }
      this.setData({
        isShow: true,
        errorCount: count
      })
    }else{
      this.setData({
        isCheck: true,
        isShow: false
      })
    }
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var list = Array.apply(null, { length: this.data.pkp.length })
    for (var i = 0; i < this.data.pkp.length; i++) {
      var j = Math.floor(Math.random() * this.data.pkp.length)
      var pk = this.data.pkp[j]
      while (list.indexOf(pk) > -1) {
        j = Math.floor(Math.random() * this.data.pkp.length)
        pk = this.data.pkp[j]
      }
      list[i] = pk
    }
    this.setData({
      rpk: list
    })
    // console.log(this.data.pkp)
    // console.log(this.data.rpk)
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