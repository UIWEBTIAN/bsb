<template>
  <div class="index">
    <div class="setHeader">
      <span class="update">商家商标</span>
      <img
        src="/static/image/m-icon.png"
        alt=""
      >
      <span class="more">></span>
    </div>
    <div class="body">
      <div
        class="item "
        @click="goSetName"
      >
        <span class="shopName">商家名称 </span>
        <span class="name">麦当劳</span>
      </div>
      <div class="item ">
        <span class="shopCategory">商家分类 </span>
        <span class="category">饮食</span>
      </div>
      <div class="item ">
        <span class="shopAddress">商家地址 </span>
        <span class="address">东莞市科技路城市风景街区2号楼1层</span>
      </div>
      <div class="item ">
        <span class="shopNumber">联系电话 </span>
        <span class="number">0769-86619199</span>
      </div>
      <div class="item ">
        <span class="shopOpen">营业时间 </span>
        <span class="open">周一至周日 09:00-20:00</span>
      </div>
      <div class="item component">
        <span class="shopComponent">商家评价</span>
        <span class="star">4.5</span>
      </div>
      <div class="item">
        <span class="shopActive">商家活动</span>
        <span class="active">满200减50</span>
      </div>
      <div class="item information">
        <span class="shopComponent">商家介绍</span>
        <span class="more">></span>
      </div>
      <div class="item">
        <span class="shopImg">商家图片</span>
        <span class="more">></span>
      </div>
      <div class="item userInfo">
        <span class="shopUserInfo">登录账号</span>
        <span class="userName">15625568840</span>
      </div>
      <div class="item">
        <span class="shopPwd">修改密码</span>
        <span class="more">></span>
      </div>
      <div class="logout">
        <button>退出</button>
      </div>
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
    }
  },
  onLoad: function() {
    wx.getStorage({
      key: "name",
      success: res => {
        this.yourName = res.data;
      }
    });
  },
  onUnload() {
    wx.switchTab({ url: "/pages/mine/main" });
  }
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

        .shopName,
        .shopCategory,
        .shopAddress,
        .shopNumber,
        .shopOpen,
        .shopComponent,
        .shopActive,
        .shopHello,
        .shopImg,
        .shopUserInfo,
        .shopPwd {
          position: absolute;
          left: 30rpx;
        }
        .name,
        .category,
        .address,
        .number,
        .open,
        .star,
        .active,
        .more,
        .userName {
          font-size: 14px;
          position: absolute;
          right: 32rpx;
          color: #b8b8b8;
        }
      }
      .component,
      .information,
      .userInfo {
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