// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    commodityList: [{title: '欧莱雅', price: 199.9, num: 3, desc: '', thumb: 'https://img30.360buyimg.com/sku/jfs/t1/25254/10/5589/271886/5c3ff4ecE9f3e4a9b/e370f0d2a1d1c14b.jpg'}, {title: '欧莱雅', price: 199.9, num: 3, desc: '', thumb: 'https://img30.360buyimg.com/sku/jfs/t1/25254/10/5589/271886/5c3ff4ecE9f3e4a9b/e370f0d2a1d1c14b.jpg'}],
    total: 1199.4,
    coupon: 200,
    total_real: null,
    shipping_address: {receiver: '李华', phone: '19970000000', address: '广东省 深圳市 龙岗区 方兴科技园D1区'}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    that.setData({
      total_real: Math.round(that.data.total - that.data.coupon)
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