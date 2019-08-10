const app = getApp()

Page({
  data: {
    commodityList:[],
  },
  onLoad: function (options) {
    let that = this
    wx.request({
      url: app.globalData.serverPath + `/commodity/viewByBrandId?brandId=${options.id}`,
      success(res) {
        that.setData({ commodityList: res.data })
      }
    })
  }
})