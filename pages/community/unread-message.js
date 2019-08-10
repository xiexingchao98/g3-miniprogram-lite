// pages/community/unread-message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    unreadMessageList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let unreadMessageList = wx.getStorageSync('unreadMessageList');
    this.setData({ unreadMessageList: unreadMessageList })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  markAsRead(e) {
    let commentId = e.currentTarget.dataset.commentId
    let messageList = this.data.unreadMessageList
    for (let index in messageList) {
      if (messageList[index].comment_id == commentId) {
        messageList[index].unread = false
      }
    }
    this.setData({ unreadMessageList: messageList })
    wx.setStorage({
      key: 'unreadMessageList',
      data: messageList
    })
  }
})