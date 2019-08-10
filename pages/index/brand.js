const app = getApp()

Page({
  data: {
    brandList: []
  },
  onLoad: function (options) {
    let that = this
    wx.request({
      url: app.globalData.serverPath + '/brand',
      success(res) {
        that.setData({ brandList: res.data })
      }
    })
  }
})