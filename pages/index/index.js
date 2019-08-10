const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperImages: ['http://img.zcool.cn/community/010257585bf19ea801219c77880daf.jpg@1280w_1l_2o_100sh.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563812682360&di=f3119561250c5f17781e3650d32a58a6&imgtype=0&src=http%3A%2F%2Fimg.redocn.com%2Fsheji%2F20160325%2Ftaobaotianmaohufupinhuazhuangpinhaibaoguanggao_6053996.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563812682361&di=193dff98488bc60cd28ebf62184fb223&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1409%2F02%2Fc2%2F38151288_1409622293587_mthumb.jpg'],
    menuItems: [{text: '新品', icon: 'fiber_new', color: '#8b00dd', url: '/pages/index/latest'}, {text: '热门', icon: 'trending_up', url: '/pages/index/hot'}, {text: '品牌', icon: 'business', color: null,url:'/pages/index/brand'}],
    commodityList: [],
    safePaddingBottom: 0,
    searchvalue:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('safePaddingBottom', app.globalData.safePaddingBottom)
    this.setData({ safePaddingBottom: app.globalData.safePaddingBottom })
    this.getRecommendCommodity()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  onSearch: function (event) {
    wx.navigateTo({
      url: `/pages/index/search?keyword=${event.detail}`,
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        active: 0
      })
    }
  },
  getRecommendCommodity() {
    let that = this
    wx.request({
      mehtod: 'GET',
      url: app.globalData.serverPath + '/recommend',
      success: (res) => {
        that.setData({
          commodityList: res.data
        })        
      }
    })
  }
})