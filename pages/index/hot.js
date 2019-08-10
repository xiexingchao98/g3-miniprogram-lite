const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    commodityList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.request({
      method: 'GET',
      url: app.globalData.serverPath + '/commodity/hot',
      success(res) {
        that.setData({ commodityList: res.data })        
      }
    })
  }
})