const app = getApp()
Page({

  /**
   * 页面的初始数据
   * userInfo user's information include nickName,avatarUrl,gender,and so on
   * hasUserInfo
   */
  data: {
    userInfo:{},
    hasUserInfo:false,
  },

  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(app.globalData.userInfo){
      this.setData({
        userInfo:app.globalDta.userInfo,
        hasUserInfo:ture
      })
    } else if (this.data.canIUse){
      app.userInfoReadyCallback = res=>{
        this.setData({
          userInfo:res.userInfo,
          hasUserInfo:ture
        })
      }
    }else{
      wx.getUserInfo({
        success:res=>{
          app.global.userInfo = res.userInfo
          this.setData({
            userInfo:res.userInfo,
            hasUserInfo:ture
          })

        }
      })
    }
  },
  getUserInfo:function(e){
    console.info(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo:e.detail.userInfo,
      hasUserInfo:ture
    })
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
    
  }
})