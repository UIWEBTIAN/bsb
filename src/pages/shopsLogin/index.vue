<template>
  <div class="shopsLogin">
    <!-- 头部 -->
    <div class="header">
      <img src="/static/image/shops/logobj.png" alt="" class="bgHeader">
      <div class="title">百 商 邦 · 商 家</div>
      <div class="order">跨 行 业 强 强 联 合 共 赢 未 来</div>
      <img src="/static/image/shops/qizi.png" alt="" class="position">
    </div>
    <!-- 内容 -->
    <div class="userInfo">
      <div class="phoneNumber">
        <text>ACCOUNT NUMBER</text>
        <div class="write">
          <img src="/static/image/shops/logophone.png" alt="">
          <input type="text" placeholder="输入手机号码">
        </div>
      </div>
      <div class="password">
        <text>PASSWORD</text>
        <div class="write">
          <img src="/static/image/shops/logopwd.png" alt="">
          <input type="password" placeholder="输入密码">
        </div>
      </div>
      <div class="findPwd">找回密码</div>
      <button>登录 > </button>
    </div>
  </div>
</template>

<script>
export default {
  
}

</script>
<style lang="less">
page{
  width: 100%;
  height: 100%;
}
  .shopsLogin{
    position: relative;
    width: 100%;
    height: 100%;
    // 头部样式
    .header{
      position: relative;
      width: 100%;
      z-index: 999;
      .bgHeader{
        width: 100%;
        height: 218px;
      }
      .title{
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 30px;
        color: #fff;
        white-space: nowrap;
      }
      .order{
        position: absolute;
        top: 65px;
        left: 50%;
        transform: translateX(-50%);
        color: #d6e5fe;
        font-size: 13px;
      }
      .position{
        position: absolute;
        top: 107px;
        left: 50%;
        transform: translateX(-50%);
        width: 211px;
        height: 72px;
      }
    }
    // 用户信息
    .userInfo{
      width: 100%;
      height: 100%;
      background-color: #e7f5ff;
      position: absolute;
      bottom: 0;
      .phoneNumber,.password{
        position: absolute;
        top: 258px;
        left: 30px;
        text{
          // position: absolute;
          // left: 30px;
          
          font-size: 12px;
          color: #b4bfc7;
        }
        .write{
          
          width: 315px;
          height: 33px;
          // position: absolute;
          // left: 30px;
          // top: 280px;
          display: flex;
          border-bottom: 1px solid #70c9ff;
          img{
            width: 13px;
            height: 18px;
          }
          input{
            margin-top: -3px;
            margin-left: 11px;
            font-size: 15px;
            color: #444444;
          }
        }
      }
      .password{
          top: 344px;
        
      }
      .findPwd{
        position: absolute;
        left: 30px;
        bottom: 144px;
        color: #444444;
        font-size: 13px;
      }
      button{
        position: absolute;
        right: 30px;
        bottom: 134px;
        width: 136px;
        height: 36px;
        background-color: #6ec0fe;
        color: #fff;
        font-size: 15px;
        border-radius: 20px;
      }
    }
  }
</style>

