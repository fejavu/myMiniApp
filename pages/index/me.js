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
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 从个人信息页点击前往收藏页函数
   */
  toFavoritePage:function() {
    wx.navigateTo({
      url: './fav'
    })
  },
  /**
   * to log in logs
   */
  toLogIn:function(){
    wx.navigateTo({
      url: '../logs/logs',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    if(app.globalData.userInfo){
      this.setData({
        userInfo:app.globalDta.userInfo,
        hasUserInfo:true
      })
    } else if (this.data.canIUse){
      app.userInfoReadyCallback = res=>{
        this.setData({
          userInfo:res.userInfo,
          hasUserInfo:true
        })
      }
    }else{
      wx.getUserInfo({
        success:res=>{
          app.global.userInfo = res.userInfo
          this.setData({
            userInfo:res.userInfo,
            hasUserInfo:true
          })

        }
      })
    }
  },
  getUserInfo:function(e){
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo:e.detail.userInfo,
      hasUserInfo:true
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