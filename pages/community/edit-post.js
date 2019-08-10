const app = getApp()

Page({
  data: {},
  onLoad: function (options) {

  },
  onReady: function () {

  },
  onShow: function () {

  },
  doReleaseNewPost(e) {
    let formData = e.detail.value
    console.log(formData)
    wx.request({
      method: 'POST',
      url: app.globalData.serverPath + '/post/new',
      data: {
        storage: wx.getStorageSync(app.globalData.storageKey),
        data: formData
      },
      success: (res) => {
        wx.showToast({ title: '发布成功' })
        setTimeout(() => {wx.navigateBack({ delta: 1 })}, 1500)
      }
    })
  },
  doBack() {
    wx.navigateBack({ delta: 1 })
  }
})