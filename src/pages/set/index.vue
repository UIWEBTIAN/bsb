<template>
  <div class="index">
    <div class="setHeader">
      <span class="update">修改头像</span>
      <span class="more">></span>
    </div>
    <div class="name">
      <span class="whoName">昵称 </span>
      <span class="yourName">一颗牙疼</span>
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
  
}
</script>

<style lang="less">
  page {
    background-color: #efeff4;
    .index {
      .setHeader{
        position: relative;
        margin-top: 30rpx;
        background-color: #fff;
        height: 108rpx;
        line-height: 108rpx;
        .update{
          color:#000000;
          margin-left: 113rpx;
        }
        .more {
          position: absolute;
          right: 30rpx;
          color:#c7c7cc;
          font-size: 40rpx;
        }
      }
      .name{
        position: relative;
        margin-top: 30rpx;
        background-color: #fff;
        height: 85rpx;
        line-height: 85rpx;
        border-bottom: 1px solid #e5e5e5;
        .whoName{
          position: absolute;
          left:30rpx;
        }
        .yourName{
          position: absolute;
          left:212rpx;
        }
        .more{
          position: absolute;
          right: 30rpx;
          color:#c7c7cc;
          font-size: 40rpx;
        }
      }
      .phone{
        position: relative;
        background-color: #fff;
        height: 85rpx;
        line-height: 85rpx;
        .telephoneNumber{
          position: absolute;
          left:30rpx;
        }
        .yourNumber{
          position: absolute;
          left:212rpx;
        }
        .more{
          position: absolute;
          right: 30rpx;
          color:#c7c7cc;
          font-size: 40rpx;
        }
      }
      .password{
        position: relative;
        margin-top: 30rpx;
        background-color: #fff;
        height: 85rpx;
        line-height: 85rpx;
        .setPwd{
          position: absolute;
          left:30rpx;
        }
        .more{
          position: absolute;
          right: 30rpx;
          color:#c7c7cc;
          font-size: 40rpx;
        }
      }
      .logout{
        position: fixed;
        bottom:20rpx;
        width: 100%;
        padding-left: 20rpx;
        padding-right: 20rpx;
        box-sizing: border-box;
        button {
          background-color:#e43949;
          color: #fff;
        }
      }
    }
  }

</style>