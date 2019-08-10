const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    postList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.request({
      url: app.globalData.serverPath + `/post/search?keyword=${options.keyword}`,
      success(res) {
        that.setData({ postList: res.data })
      }
    })
  }
})