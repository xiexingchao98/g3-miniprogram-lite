const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    commodityList: []
  },
  onShow: function () {
    let that = this
    wx.request({
      method: 'GET',
      url: app.globalData.serverPath + '/commodity/latest',
      success(res) {
        that.setData({ commodityList: res.data })
      }
    })
  }
})