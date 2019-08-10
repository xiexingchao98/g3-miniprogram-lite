App({
  globalData: {
    userInfo: null,
    serverPath: 'http://127.0.0.1:8360',
    socketServerPath: 'ws://120.0.0.1:8360/ws',
    storageKey: 'g3',
    safePaddingBottom: 0
  },
  onLaunch: function () {
    let that = this
    wx.getSystemInfo({
      success (res) {
        console.log(res)
        that.globalData.safePaddingBottom = res.screenHeight - res.safeArea.bottom
      }
    })
  },
  doAfterCheckLogin(success, fail) {
    let storage = wx.getStorageSync(this.globalData.storageKey)
    if (!storage) {
      if (fail && typeof fail == 'function')
        fail()
      else
        wx.showToast({ title: '请先登录', icon: 'none' })
    }
    else if (success && typeof success == 'function') {
      success()
    }
  }
})
