//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Halo World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    picUrl: ["/expPics/google-earth-view-1034.jpg", "/expPics/google-earth-view-1160.jpg", "/expPics/google-earth-view-1432.jpg"],
    picSrc: "http://www.google.cn/maps",    
  },
  
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {  //throw error function
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  alert:function(e){
    var randomGift = ["Boyfriend","Girlfriend", "Money",
                      "Offer","Accident","Tomorro"];
    var randomGiftString = randomGift[Math.round(Math.random() * 3)];
    wx.showToast({
      title:randomGiftString,
      icon:'success',
      duration:2000,
    })
  }
  
})
