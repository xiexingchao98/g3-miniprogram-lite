const app = getApp()

Page({
  data: {
    commodityList: [],
  },
  onLoad: function (options) {
    var that = this
    wx.request({
      url: app.globalData.serverPath + `/commodity/search?keyword=${options.keyword}`,
      success(res) {
        that.setData({ commodityList: res.data })
      }
    })
  }
})