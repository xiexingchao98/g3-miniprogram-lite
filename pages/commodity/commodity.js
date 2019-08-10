const app = getApp()

Page({
  data: {
    introduction: '暂无商品描述',
    ingredient: '暂无成分信息'
  },
  onLoad: function (options) {
    wx.request({
      method: 'GET',
      url: app.globalData.serverPath + `/commodity/detail?id=${options.id}`,
      success: (res) => { this.setData({ commodity: res.data }) }
    })    
  },
  doBuy: () => {
    wx.navigateTo({ url: '/pages/pay/pay' })
  },
  doAddToCart: () => {
    wx.showToast({ title: '加入购物车成功', icon: 'success' })
  }
})