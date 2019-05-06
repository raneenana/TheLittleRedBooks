// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0,
    list: [],
    nav: [{
      name: "推荐",
      type: false
    }, {
      name: "美食",
      type: false
    }, {
      name: "流行服饰",
      type: false
    }, {
      name: "男士服装",
      type: false
    }, {
      name: "鞋子",
      type: false
    }, {
      name: "饰品",
      type: false
    }, {
      name: "旅游",
      type: false
    }, {
      name: "护肤",
      type: false
    }, {
      name: "美妆",
      type: false
    }, {
      name: "更多",
      type: false
    }],
    currList:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setStorageSync("list", {
      "result": 0,
      "success": true,
      "data": [{
        "id": "5c8b32ef000000000d02c423",
        "type": "video",
        "timestamp": 1552626415,
        "name": "",
        "title": "\uD83D\uDD25章子怡出手豪气，送4条项链给妻子们，张嘉倪当场哭了！ #妻子的浪漫旅行 #综",
        "desc": "",
        "inlikes": false,
        "likes": 435,
        "user": {
          "followed": false,
          "images": "https://img.xiaohongshu.com/avatar/5b84fced7af8390001f54137.jpg@80w_80h_90q_1e_1c_1x.jpg",
          "nickname": "一周娱",
          "red_official_verified": false,
          "red_official_verify_type": 0,
          "userid": "5b750744b1a9810001641eca"
        },
        "recommend": {
          "desc": "",
          "icon": "",
          "type": "",
          "target_id": "",
          "target_name": "",
          "track_id": ""
        },
        "display_title": "",
        "images_list": [{
          "fileid": "577de6b2-aa35-5813-8679-19b7fba910e6",
          "height": 368,
          "width": 640,
          "url": "http://ci.xiaohongshu.com/577de6b2-aa35-5813-8679-19b7fba910e6?imageView2/2/h/540/format/webp",
          "original": "http://ci.xiaohongshu.com/577de6b2-aa35-5813-8679-19b7fba910e6",
          "url_size_large": "http://ci.xiaohongshu.com/577de6b2-aa35-5813-8679-19b7fba910e6?imageView2/2/h/1080/format/webp"
        }],
        "model_type": "note",
        "is_tracking": false
      }, {
        "id": "5c89c75c000000000d0247b1",
        "type": "normal",
        "timestamp": 1552533340,
        "name": "",
        "title": "工资1万多元！军队文职招聘来了!（附报考流程） ►喜大普奔！好消息，好消息！ 2",
        "desc": "",
        "inlikes": false,
        "likes": 1143,
        "user": {
          "followed": false,
          "images": "https://img.xiaohongshu.com/avatar/5c1b8a85374a57000194461a.jpg@80w_80h_90q_1e_1c_1x.jpg",
          "nickname": "安琪\uD83D\uDDA4",
          "red_official_verified": false,
          "red_official_verify_type": 0,
          "userid": "5c1b88d1000000000600313e"
        },
        "recommend": {
          "desc": "",
          "icon": "",
          "type": "",
          "target_id": "",
          "target_name": "",
          "track_id": ""
        },
        "display_title": "",
        "images_list": [{
          "fileid": "ff385a79-8ac3-549b-ae79-21439508ce15",
          "height": 960,
          "width": 720,
          "url": "http://ci.xiaohongshu.com/ff385a79-8ac3-549b-ae79-21439508ce15?imageView2/2/w/540/format/webp",
          "original": "http://ci.xiaohongshu.com/ff385a79-8ac3-549b-ae79-21439508ce15",
          "url_size_large": "http://ci.xiaohongshu.com/ff385a79-8ac3-549b-ae79-21439508ce15?imageView2/2/w/1080/format/webp"
        }],
        "model_type": "note",
        "is_tracking": false
      }, {
        "id": "5c88660b000000000f02f4e0",
        "type": "normal",
        "timestamp": 1552442891,
        "name": "",
        "title": "大学是一所整容院吗❓吐血整理我四年的化妆心得‼️ 很多化妆新手对化妆都有个误区，",
        "desc": "",
        "inlikes": false,
        "likes": 5750,
        "user": {
          "followed": false,
          "images": "https://img.xiaohongshu.com/avatar/59e97eeab46c5d1b4e5f00cd.jpg@80w_80h_90q_1e_1c_1x.jpg",
          "nickname": "fakesheep",
          "red_official_verified": false,
          "red_official_verify_type": 0,
          "userid": "57e8df8a5e87e77e84d877de"
        },
        "recommend": {
          "desc": "",
          "icon": "",
          "type": "",
          "target_id": "",
          "target_name": "",
          "track_id": ""
        },
        "display_title": "",
        "images_list": [{
          "fileid": "26e0b4b4-7dcf-5217-b9a1-5c745ce26d96",
          "height": 1280,
          "width": 960,
          "url": "http://ci.xiaohongshu.com/26e0b4b4-7dcf-5217-b9a1-5c745ce26d96?imageView2/2/w/540/format/webp",
          "original": "http://ci.xiaohongshu.com/26e0b4b4-7dcf-5217-b9a1-5c745ce26d96",
          "url_size_large": "http://ci.xiaohongshu.com/26e0b4b4-7dcf-5217-b9a1-5c745ce26d96?imageView2/2/w/1080/format/webp"
        }],
        "model_type": "note",
        "is_tracking": false
      }, {
        "id": "5c88edc4000000000d03330e",
        "type": "normal",
        "timestamp": 1552477636,
        "name": "",
        "title": "男友居然偷偷给我报瑜伽班，瑜伽瘦身体式做起来～ ◾️马大姐居然“嫌弃”我胖，给我",
        "desc": "",
        "inlikes": false,
        "likes": 1366,
        "user": {
          "followed": false,
          "images": "https://img.xiaohongshu.com/avatar/5b8b4b9b45868b00017b30e9.jpg@80w_80h_90q_1e_1c_1x.jpg",
          "nickname": "亚妞er",
          "red_official_verified": false,
          "red_official_verify_type": 0,
          "userid": "5738760a5e87e726356738d8"
        },
        "recommend": {
          "desc": "",
          "icon": "",
          "type": "",
          "target_id": "",
          "target_name": "",
          "track_id": ""
        },
        "display_title": "",
        "images_list": [{
          "fileid": "0bcc9758-cb86-50ff-8df5-5670648c3098",
          "height": 1280,
          "width": 960,
          "url": "http://ci.xiaohongshu.com/0bcc9758-cb86-50ff-8df5-5670648c3098?imageView2/2/w/540/format/webp",
          "original": "http://ci.xiaohongshu.com/0bcc9758-cb86-50ff-8df5-5670648c3098",
          "url_size_large": "http://ci.xiaohongshu.com/0bcc9758-cb86-50ff-8df5-5670648c3098?imageView2/2/w/1080/format/webp"
        }],
        "model_type": "note",
        "is_tracking": false
      }, {
        "id": "5c899633000000000e01dbfb",
        "type": "normal",
        "timestamp": 1552520755,
        "name": "",
        "title": "【妞妞留学故事】能把生活过精致的人，差不到哪里去\uD83D\uDD06 很多小红薯都让我分享一下自",
        "desc": "",
        "inlikes": false,
        "likes": 746,
        "user": {
          "followed": false,
          "images": "https://img.xiaohongshu.com/avatar/5c758dd8ab91fa0001a9d47d.jpg@80w_80h_90q_1e_1c_1x.jpg",
          "nickname": "温妞妞",
          "red_official_verified": false,
          "red_official_verify_type": 0,
          "userid": "58577afa50c4b46e551fd55c"
        },
        "recommend": {
          "desc": "",
          "icon": "",
          "type": "",
          "target_id": "",
          "target_name": "",
          "track_id": ""
        },
        "display_title": "",
        "images_list": [{
          "fileid": "7b3994c1-c69f-5805-b319-76d590791910",
          "height": 1136,
          "width": 852,
          "url": "http://ci.xiaohongshu.com/7b3994c1-c69f-5805-b319-76d590791910?imageView2/2/w/540/format/webp",
          "original": "http://ci.xiaohongshu.com/7b3994c1-c69f-5805-b319-76d590791910",
          "url_size_large": "http://ci.xiaohongshu.com/7b3994c1-c69f-5805-b319-76d590791910?imageView2/2/w/1080/format/webp"
        }],
        "model_type": "note",
        "is_tracking": false
      }, {
        "id": "5c8a3529000000000f020f52",
        "type": "normal",
        "timestamp": 1552561449,
        "name": "",
        "title": "\uD83D\uDCB05元手机壳 | N种款式挑到手软‼️不允许深圳还有人不知道这个地方！ - ",
        "desc": "",
        "inlikes": false,
        "likes": 4147,
        "user": {
          "followed": false,
          "images": "https://img.xiaohongshu.com/avatar/5be0e3c5cd4ef70001893c1b.jpg@80w_80h_90q_1e_1c_1x.jpg",
          "nickname": "腻瑞",
          "red_official_verified": false,
          "red_official_verify_type": 0,
          "userid": "5a940fa311be101d94589cb8"
        },
        "recommend": {
          "desc": "",
          "icon": "",
          "type": "",
          "target_id": "",
          "target_name": "",
          "track_id": ""
        },
        "display_title": "",
        "images_list": [{
          "fileid": "83f23daa-3f51-560a-90b7-477c9920402f",
          "height": 1275,
          "width": 956,
          "url": "http://ci.xiaohongshu.com/83f23daa-3f51-560a-90b7-477c9920402f?imageView2/2/w/540/format/webp",
          "original": "http://ci.xiaohongshu.com/83f23daa-3f51-560a-90b7-477c9920402f",
          "url_size_large": "http://ci.xiaohongshu.com/83f23daa-3f51-560a-90b7-477c9920402f?imageView2/2/w/1080/format/webp"
        }],
        "model_type": "note",
        "is_tracking": false
      }, {
        "id": "5c88ad27000000000e017b18",
        "type": "normal",
        "timestamp": 1552461095,
        "name": "",
        "title": "喜茶又出新品了，2天5折！深圳首发\uD83D\uDC99 咸蛋黄流沙牛角包\uD83E\uDD50紫薯吐司\uD83C\uDF5E咸蛋黄吐",
        "desc": "",
        "inlikes": false,
        "likes": 717,
        "user": {
          "followed": false,
          "images": "https://img.xiaohongshu.com/avatar/5bf3ab741765a0000129bc7b.jpg@80w_80h_90q_1e_1c_1x.jpg",
          "nickname": "就是aa啊\uD83C\uDF4B",
          "red_official_verified": false,
          "red_official_verify_type": 0,
          "userid": "583d990f50c4b4424d8913b7"
        },
        "recommend": {
          "desc": "",
          "icon": "",
          "type": "",
          "target_id": "",
          "target_name": "",
          "track_id": ""
        },
        "display_title": "",
        "images_list": [{
          "fileid": "54657992-3c29-5c2b-a389-8241db769a28",
          "height": 1279,
          "width": 960,
          "url": "http://ci.xiaohongshu.com/54657992-3c29-5c2b-a389-8241db769a28?imageView2/2/w/540/format/webp",
          "original": "http://ci.xiaohongshu.com/54657992-3c29-5c2b-a389-8241db769a28",
          "url_size_large": "http://ci.xiaohongshu.com/54657992-3c29-5c2b-a389-8241db769a28?imageView2/2/w/1080/format/webp"
        }],
        "model_type": "note",
        "is_tracking": false
      }, {
        "id": "5c891d2e000000000d01b3e4",
        "type": "normal",
        "timestamp": 1552489774,
        "name": "",
        "title": "打造天生好皮肤奶油肌 上妆手法比粉底更重要！！ 属于我的小秘密吧 一直都是用这个",
        "desc": "",
        "inlikes": false,
        "likes": 1196,
        "user": {
          "followed": false,
          "images": "https://img.xiaohongshu.com/avatar/5c6547d64334e10001342de9.jpg@80w_80h_90q_1e_1c_1x.jpg",
          "nickname": "豆豆早安",
          "red_official_verified": false,
          "red_official_verify_type": 0,
          "userid": "5984ae4150c4b434184a282f"
        },
        "recommend": {
          "desc": "",
          "icon": "",
          "type": "",
          "target_id": "",
          "target_name": "",
          "track_id": ""
        },
        "display_title": "",
        "images_list": [{
          "fileid": "fc7f9484-9b57-5a46-9375-e8da8eb1a566",
          "height": 1280,
          "width": 960,
          "url": "http://ci.xiaohongshu.com/fc7f9484-9b57-5a46-9375-e8da8eb1a566?imageView2/2/w/540/format/webp",
          "original": "http://ci.xiaohongshu.com/fc7f9484-9b57-5a46-9375-e8da8eb1a566",
          "url_size_large": "http://ci.xiaohongshu.com/fc7f9484-9b57-5a46-9375-e8da8eb1a566?imageView2/2/w/1080/format/webp"
        }],
        "model_type": "note",
        "is_tracking": false
      }, {
        "id": "5c87b33f000000000d035317",
        "type": "video",
        "timestamp": 1552397119,
        "name": "",
        "title": "原来胎动的时候，宝宝在妈妈肚子里是这样的！",
        "desc": "",
        "inlikes": false,
        "likes": 109,
        "user": {
          "followed": false,
          "images": "https://img.xiaohongshu.com/avatar/5c08c0c649eee800010ec0fd.jpg@80w_80h_90q_1e_1c_1x.jpg",
          "nickname": "帕玛氏PALMER'S",
          "red_official_verified": false,
          "red_official_verify_type": 0,
          "userid": "5ad2b50511be104ccb55f224"
        },
        "recommend": {
          "desc": "",
          "icon": "",
          "type": "",
          "target_id": "",
          "target_name": "",
          "track_id": ""
        },
        "display_title": "",
        "images_list": [{
          "fileid": "dd633b6e-bb4d-53a4-a8c6-ca7f513da34b",
          "height": 720,
          "width": 1280,
          "url": "http://ci.xiaohongshu.com/dd633b6e-bb4d-53a4-a8c6-ca7f513da34b?imageView2/2/h/540/format/webp",
          "original": "http://ci.xiaohongshu.com/dd633b6e-bb4d-53a4-a8c6-ca7f513da34b",
          "url_size_large": "http://ci.xiaohongshu.com/dd633b6e-bb4d-53a4-a8c6-ca7f513da34b?imageView2/2/h/1080/format/webp"
        }],
        "model_type": "note",
        "is_tracking": false
      }, {
        "id": "5c8a21c4000000000f01121f",
        "type": "video",
        "timestamp": 1552556484,
        "name": "",
        "title": "四年前我在哈尔滨做过耳软骨鼻，做完之后看上去特别好，也挺翘的。但之后渐渐变得自然",
        "desc": "",
        "inlikes": false,
        "likes": 525,
        "user": {
          "followed": false,
          "images": "https://img.xiaohongshu.com/avatar/5c8a1e8f03c96f000138dcab.jpg@80w_80h_90q_1e_1c_1x.jpg",
          "nickname": "毛毛",
          "red_official_verified": false,
          "red_official_verify_type": 0,
          "userid": "5c74ff0a00000000100060f2"
        },
        "recommend": {
          "desc": "",
          "icon": "",
          "type": "",
          "target_id": "",
          "target_name": "",
          "track_id": ""
        },
        "display_title": "",
        "images_list": [{
          "fileid": "e1ef28a1-dc45-5821-b2db-2550b6e84aa0",
          "height": 1280,
          "width": 720,
          "url": "http://ci.xiaohongshu.com/e1ef28a1-dc45-5821-b2db-2550b6e84aa0?imageView2/2/w/540/format/webp",
          "original": "http://ci.xiaohongshu.com/e1ef28a1-dc45-5821-b2db-2550b6e84aa0",
          "url_size_large": "http://ci.xiaohongshu.com/e1ef28a1-dc45-5821-b2db-2550b6e84aa0?imageView2/2/w/1080/format/webp"
        }],
        "model_type": "note",
        "is_tracking": false
      }]
    })
  },
  heighLight(e) {
    this.setData({
      currList:e.target.dataset.id
    })
  },
  Tologin:function(){
    // wx.navigateTo({
    //   url: '/pages/login/login',
    // })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    let list=wx.getStorageSync("list")
    this.setData({
      list:list.data
    })
    console.log(this.data.list)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})