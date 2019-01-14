<template>
  <div class="index">
        <!-- 头部 -->
    <div class="top">
      <i class="iconfont goBack" @click="goBack">&#xe614;</i>
      <span>设置</span>
    </div>
    <div class="setHeader">
      <span class="update">修改头像</span>
      <span class="more">></span>
    </div>
    <div
      class="name"
      @click="goSetName"
    >
      <span class="whoName">昵称 </span>
      <span class="yourName">{{yourName}}</span>
      <span class="more">></span>
    </div>
    <div class="phone">
      <span class="telephoneNumber">手机号码 </span>
      <span class="yourNumber">15625568840</span>
      <span class="more">></span>
    </div>
    <div class="password">
      <span class="setPwd">修改登录密码</span>
      <span class="more">></span>
    </div>
    <div class="logout">
      <button>退出</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      yourName: ""
    };
  },
  methods: {
    goSetName(e) {
      // console.log(e);
      wx.navigateTo({ url: "/pages/changeName/main" });
      // wx.navigateBack({
      //   delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
      // });
    },
    
    // 返回上一页
    goBack(){
      wx.navigateBack({
        delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
      });
    },
  },
  onLoad: function() {
    wx.getStorage({
      key: "name",
      success: res => {
        this.yourName = res.data;
      }
    });
  },
  onUnload(){
    wx.switchTab({ url: '/pages/mine/main' });
  }
};
</script>

<style lang="less">
page {
  background-color: #efeff4;
  .index {
    padding-top: 70px;
    // 头部
.top{
  position: fixed;
  top: 0;
  // left: 0;
  z-index: 10;
  height: 70px;
  width: 100%;
  background-color: #fff;
  .goBack{
    position: absolute;
    top: 40%;
    left: 10px;
    font-size: 23px;
  }
  span{
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translate(-50%,-50%);
    
  }
}
    .setHeader {
      position: relative;
      margin-top: 30rpx;
      background-color: #fff;
      height: 108rpx;
      line-height: 108rpx;
      .update {
        color: #000000;
        margin-left: 113rpx;
      }
      .more {
        position: absolute;
        right: 30rpx;
        color: #c7c7cc;
        font-size: 40rpx;
      }
    }
    .name {
      position: relative;
      margin-top: 30rpx;
      background-color: #fff;
      height: 85rpx;
      line-height: 85rpx;
      border-bottom: 1px solid #e5e5e5;
      .whoName {
        position: absolute;
        left: 30rpx;
      }
      .yourName {
        position: absolute;
        left: 212rpx;
      }
      .more {
        position: absolute;
        right: 30rpx;
        color: #c7c7cc;
        font-size: 40rpx;
      }
    }
    .phone {
      position: relative;
      background-color: #fff;
      height: 85rpx;
      line-height: 85rpx;
      .telephoneNumber {
        position: absolute;
        left: 30rpx;
      }
      .yourNumber {
        position: absolute;
        left: 212rpx;
      }
      .more {
        position: absolute;
        right: 30rpx;
        color: #c7c7cc;
        font-size: 40rpx;
      }
    }
    .password {
      position: relative;
      margin-top: 30rpx;
      background-color: #fff;
      height: 85rpx;
      line-height: 85rpx;
      .setPwd {
        position: absolute;
        left: 30rpx;
      }
      .more {
        position: absolute;
        right: 30rpx;
        color: #c7c7cc;
        font-size: 40rpx;
      }
    }
    .logout {
      position: fixed;
      bottom: 20rpx;
      width: 100%;
      padding-left: 20rpx;
      padding-right: 20rpx;
      box-sizing: border-box;
      button {
        background-color: #e43949;
        color: #fff;
      }
    }
  }
}
</style>