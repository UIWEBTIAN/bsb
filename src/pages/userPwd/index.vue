<template>
  <div class="index">
    <div class="body">
      <div class="item phoneNumber">
        <span class="phone">手机号码</span>
        <span class="number">15625568840</span>
      </div>
      <div class="item">
        <span class="messageVerify ">短信验证</span>
        <input type="text" placeholder="输入验证码">
        <a href="" class="send" @click="sendMessage" >{{content}}</a>
      </div>
      <div class="item password">
        <span class="newPwd">新的密码</span>
        <input type="password" placeholder="输入新密码">
      </div>
      <div class="item">
        <span class="againPwd">重复密码</span>
        <input type="againNewPwd" placeholder="重复新密码">
      </div>
      <div class="logout">
        <button>立即修改</button>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      yourName: "",
      // 显示索引
      sendIndex:0,
      // 时间
      time:60,
      // 内容
      content:"发送短信",
      // 定时器ID
      timeID:null
    };
  },
  methods: {
    // 跳转到修改昵称页面
    goSetName(e) {
      // console.log(e);
      wx.navigateTo({ url: "/pages/changeName/main" });
      // wx.navigateBack({
      //   delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
      // });
    },
    // 发送短信
    sendMessage(){
      this.content = this.time+"s重发"
      this.timeID = setTimeout(() => {
        this.time--
        this.sendMessage()
        if(this.time == 0){
          this.content = "发送短信"
          clearTimeout(this.timeID)
        }
      }, 1000);
      
    }

  },
  
  // onUnload() {
  //   wx.switchTab({ url: "/pages/mine/main" });
  // }
};
</script>

<style lang="less">
page {
  background-color: #efeff4;
  .index {
    .setHeader {
      position: relative;
      margin-top: 30rpx;
      background-color: #fff;
      height: 108rpx;
      line-height: 108rpx;
      .update {
        position: absolute;
        left: 30rpx;
        color: #000000;
      }
      img {
        width: 35px;
        height: 35px;
        position: absolute;
        right: 40px;
        top: 50%;
        transform: translateY(-50%);
      }
      .more {
        position: absolute;
        right: 30rpx;
        color: #c7c7cc;
        font-size: 40rpx;
      }
    }
    .body {
      margin-top: 30rpx;
      .item {
        position: relative;
        background-color: #fff;
        height: 85rpx;
        line-height: 85rpx;
        border-bottom: 1px solid #e5e5e5;

        .phone,.messageVerify,.newPwd,.againPwd {
          position: absolute;
          left: 30rpx;
        }
        .number,input{
          position: absolute;
          left: 106px;
          top: 50%;
          transform: translateY(-50%);
        }
        input{
          font-size: 16px;
          color: #c8c8c8;
        }
        .send{
          position: absolute;
          right: 30rpx;
          color: #e43949;
          font-size: 16px;
        }
        .time{
          position: absolute;
          right: 30rpx;
          color: #b2b2b2;
          font-size: 16px;
        }
      }
      .phoneNumber,
      .password{
        margin-top: 30rpx;
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
      margin-top: 40px;
      width: 100%;
      padding-left: 20rpx;
      padding-right: 20rpx;
      padding-bottom: 10px;
      box-sizing: border-box;
      
      button {
        background-color: #e43949;
        color: #fff;
      }
    }
  }
}
</style>