Page({
  getProfile(res){
    this.setData({
      'profile':res.detail.userInfo
    })
  }
}
)