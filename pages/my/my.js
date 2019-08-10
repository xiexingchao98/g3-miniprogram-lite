const app = getApp()

Page({
  data: {
    orderItemList:[
      {
        icon: 'payment',
        text:'待支付'
      },
      {
        icon: 'local_shipping',
        text: '待发货'
      },
      {
        icon: 'comment',
        text: '评价'
      },
      {
        image:'/resources/icon/service_after_sale.png',
        text:'退款/售后'
      }
    ],
    appOption: [{name: '设置', icon: 'settings'}, {name: '反馈', icon: 'feedback'},{name: '帮助', icon: 'help'}, {name:'清除缓存', icon: 'delete_forever', event: 'clearStorage'}],
    userInfo: {},
    following: 8,
    follower: '12.8K',
    isLogged: false
  },
  onLoad: function (options) {
    let that = this
    wx.checkSession({
      success: () => {
        let storage = wx.getStorageSync(app.globalData.storageKey)
        if (storage) {
          console.log('check session success')
          this.getUserInfo()
        }
      },
      fail: () => { console.log('check session fail') }
    })
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        active: 2
      })
    }
  },
  doLogin (e) {
    if (e.detail.userInfo) {
      wx.showLoading({ title: '登录中' })
      wx.login({
        success: (res) => {
          wx.request({
            method: 'POST',
            url: app.globalData.serverPath + '/oauth/login/weixin',
            data: {
              code: res.code,
              userInfo: e.detail.userInfo
            },
            success: (res) => {
              console.log(res)
              this.getUserInfo()

              wx.setStorage({
                key: app.globalData.storageKey,
                data: res.data.data
              })

              wx.showToast({ title: '登录成功' })
            }
          })
        }
      })
    }
    else {
      wx.showToast({ title: '授权失败', icon: 'none' })
    }
  },
  getUserInfo() {
    wx.getUserInfo({
      success: (res) => {
        this.setData({
          isLogged: true,
          userInfo: res.userInfo
        })
      }
    })
  },
  clearStorage() {
    wx.clearStorage({
      success() {
        wx.showToast({ title: '清除缓存成功' })
      }
    })
  }
})