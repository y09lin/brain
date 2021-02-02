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
    ipk: Array,
    cpk: Array,
    rpk: Array,
    pk_b: 'res/_pkp.png',
    length: 12,
    index: -1,
    errorCount: 0,
    state: 0,
    btnMsg: ['开始', '记好了', '检查', '再来一遍'],
    startTime: 0,
    endTime: 0,
    useTime: ""
  },
  // 点击原始ikp，
  addOrChangePkp: function (e) {
    var ilist = this.data.ipk
    var clist = this.data.cpk
    var i = e.target.id
    var flag = this.data.index
    if (flag == -1) {
      clist.push(ilist[i])
      ilist.splice(i, 1)
    }
    this.setData({
      ipk: ilist,
      cpk: clist,
      index: flag
    })
  },

  // removePkp: function(e){
  // },

  //点击复原cpk
  actPkp: function (e) {    
  },
  //点击复原txt
  actTxt: function (e) {
    var ilist = this.data.ipk
    var clist = this.data.cpk
    var i = e.target.id
    ilist.push(clist[i])
    clist.splice(i, 1)
    this.setData({
      ipk: ilist,
      cpk: clist
    })
  },

  /**
   * 点击扑克牌
   */
  clickPkp: function (event) {
    if (this.data.state == 2) {
      // console.log("点击了："+event.target.id)
      var i = this.data.cpk.indexOf(event.target.id)
      if (i > -1 && i < this.data.cpk.length - 1) {
        var temp = this.data.cpk[i + 1]
        // console.log("位置："+i)
        // console.log("要交换的是：" + temp+" 位置在:"+(i+1))
        this.data.cpk[i + 1] = event.target.id
        this.data.cpk[i] = temp
        this.setData({
          cpk: this.data.cpk
        })
      }
    }
  },

  /**
   * 点击按钮
   */
  clickBtn: function (event) {
    var st = this.data.state
    var start = this.data.startTime
    var end = this.data.endTime
    var list = Array.apply(null, { length: this.data.length })
    // var listCpk = Array.apply(null, { length: this.data.length })

    var count = 0
    var timeMsg = this.data.useTime

    switch (this.data.state) {
      case 0:
        start = Date.now()
        for (var i = 0; i < this.data.length; i++) {
          var j = Math.floor(Math.random() * this.data.length)
          var pk = this.data.ipk[j]
          while (list.indexOf(pk) > -1) {
            j = Math.floor(Math.random() * this.data.length)
            pk = this.data.ipk[j]
          }
          list[i] = pk
          // listCpk[i] = this.data.ipk[i]
        }
        break;
      case 1:
        end = Date.now()
        var s = Math.floor((end - start) / 1000)
        var m = Math.floor(s / 60)
        var h = Math.floor(m / 60)
        console.log("h:" + h + " m:" + m + " s:" + s)
        timeMsg = ""
        if (h > 0) {
          timeMsg = timeMsg + h + " H"
          m = m % 60
        }
        if (m > 0) {
          timeMsg = timeMsg + m + " m"
          s = s % 60
        }
        if (s > 0) {
          timeMsg = timeMsg + s + "s"
        }

        break;
      case 2:
        for (var i = 0; i < this.data.cpk.length; i++) {
          if (this.data.cpk[i] != this.data.rpk[i]) {
            ++count
          }
        }
        // TODO cpk.length<length
        break;
      case 3:
        break;
    }
    ++st
    if (st == 4) {
      st = 0
    }
    if (this.data.state == 0) {
      this.setData({
        rpk: list,
        cpk: [],
        state: st,
        startTime: start
      })
    } else {
      this.setData({
        state: st,
        endTime: end,
        errorCount: count,
        useTime: timeMsg
      })
    }
  },

  slider4change: function (e) {
    if (this.data.length != e.detail.value) {
      var list = Array.apply(null, { length: e.detail.value })
      for (var i = 0; i < e.detail.value; i++) {
        list[i] = this.data.pkp[i]
      }
      this.setData({
        ipk: list,
        length: e.detail.value
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var list = Array.apply(null, { length: this.data.length })
    for (var i = 0; i < this.data.length; i++) {
      list[i] = this.data.pkp[i]
    }
    this.setData({
      ipk: list
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