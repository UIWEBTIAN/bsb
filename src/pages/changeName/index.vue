<template>
  <div class="index">
        <!-- 头部 -->
    <div class="top">
      <i class="iconfont goBack" @click="goBack">&#xe614;</i>
      <i class="iconfont home" @click="goHome">&#xe626;</i>
      <span>修改昵称</span>
    </div>
    <div class="name">
      <span class="whoName">昵称</span>
      <input type="text" class="yourName" @input="yourName">
    </div>
    <div class="logout" @click="save">
      <button>保存</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: ""
    };
  },
  methods: {
    yourName(e) {
      this.name = e.target.value;
    },
    // 保存
    save() {
      wx.navigateTo({ url: "/pages/set/main"});
      wx.setStorage({
      key: 'name',
      data: this.name
    });
    },
        // 返回上一页
    goBack(){
      wx.navigateBack({
        delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
      });
    },
    // 返回首页
    goHome(){
      wx.switchTab({ url: '/pages/mine/main' });
    }
  },
};
</script>

<style lang="less">
page {
  background-color: #efeff4;
}
.index{
  // 头部
  padding-top: 70px;
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
  .home{
    position: absolute;
    top: 35%;
    left: 60px;
    font-size: 30px;
  }
  span{
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translate(-50%,-50%);
    
  }
}
}
.name {
  position: relative;
  margin-top: 30rpx;
  background-color: #fff;
  height: 85rpx;
  line-height: 85rpx;
  border-bottom: 1px solid #e5e5e5;
  .iconfont{
    width: 50px;
    height: 50px;
    background-color: #e43949
  }
  .whoName {
    position: absolute;
    left: 30rpx;
  }
  .yourName {
    position: absolute;
    left: 212rpx;
    height: 85rpx;
  }
  .more {
    position: absolute;
    right: 30rpx;
    color: #c7c7cc;
    font-size: 40rpx;
  }
}
.logout {
  width: 100%;
  padding-left: 20rpx;
  padding-right: 20rpx;
  box-sizing: border-box;
  margin-top: 30px;
  button {
    background-color: #e43949;
    color: #fff;
  }
}
</style>