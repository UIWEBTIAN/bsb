<template>
  <div class="index">
    <div class="header">
      <img src="/static/image/beijing.png" alt class="bgColor">
      <img src="/static/image/set.png" alt class="set">
      
      <img src="/static/image/touxiang.png" alt class="icon" @tap="login">
      <div class="name">一颗牙疼</div>
      <div class="phoneNumber">15625568840</div>
    </div>
    <div class="card">
      <div class="unused" @click="goMineCard">
        <img src="/static/image/weishiyong.png" alt>
        <span>未使用</span>
      </div>
      <div class="used">
        <img src="/static/image/user.png" alt>
        <span>已使用</span>
      </div>
      <div class="dated">
        <img src="/static/image/yiguoqi.png" alt>
        <span>已过期</span>
      </div>
    </div>
    <div class="opinion" @click="goOpinion">
      <div class="radius-one" >
        <div class="yuan">
          <img src="/static/image/yijian.png" alt>
        </div>
        <span class="content">意见反馈</span>
        <span class="more">></span>
      </div>
    </div>
    <div class="aboutUs" @click="goAboutUs">
      <div class="radius-one">
        <div class="yuan">
          <img src="/static/image/aboutUs.png" alt>
        </div>
        <span class="content">关于我们</span>
        <span class="more">></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data:function(){
    return {
      
    }
  },
  methods:{
    // getUserInfo(e){
    //   // wx.getUserInfo({
    //   //   withCredentials: false,
    //   //   success: res => {
    //   //     // console.log(res.userInfo);
          
    //   //     this.userInfo = res.userInfo.avatarUrl;
    //   //     console.log(this.userInfo);
    //   //   },

    //   // });
    // console.log(e);
    
    // }

    // 去我的卡券
    goMineCard(){
      wx.navigateTo({ url: '/pages/mineCard/main' });
    },

    // 去意见反馈
    goOpinion(){
      wx.navigateTo({ url: '/pages/opinion/main' });
    },

    // 去关于我们
    goAboutUs(){
      wx.navigateTo({ url: '/pages/aboutUs/main' });
    }
  }
};
</script>

<style lang="less">
page {
  background-color: #efeff4;
}

.index {
  position: relative;
  .header {
    width: 100%;
    height: 250px;
    position: relative;
    .bgColor {
      width: 100%;
      height: 100%;
    }
    .set {
      position: absolute;
      right: 23px;
      top: 24px;
      width: 20px;
      height: 20px;
    }
    .icon {
      position: absolute;
      border-radius: 50%;
      top: 45px;
      left: 50%;
      transform: translateX(-50%);
      width: 75px;
      height: 75px;
    }
    .name,
    .phoneNumber {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    .name {
      top: 130px;
    }
    .phoneNumber {
      top: 160px;
    }
  }
  .card {
    position: absolute;
    top: 212px;
    display: flex;
    height: 109px;
    background-color: #ffffff;
    width: 350px;
    left: 13px;
    border-radius: 8px;
    .unused,
    .used,
    .dated {
      flex: 3;
      text-align: center;
      img {
        width: 38px;
        height: 38px;
      }
      span {
        display: block;
        font-size: 13px;
        color: #444444;
      }
    }
    .unused {
      position: absolute;
      top: 25px;
      left: 43px;
    }
    .used {
      position: absolute;
      top: 20px;
      left: 150px;
      img {
        width: 43px;
        height: 43px;
      }
    }
    .dated {
      position: absolute;
      top: 25px;
      right: 53px;
    }
  }
  .opinion,
  .aboutUs {
    position: absolute;
    left: 13px;
    top: 334px;
    border-radius: 8px;
    width: 350px;
    background-color: #ffffff;
    height: 49px;
    .radius-one {
      .yuan {
        position: absolute;
        left: 15px;
        top: 15px;
        width: 19px;
        height: 19px;
        border-radius: 50%;
        background-color: #51b6ff;
        text-align: center;
        line-height: 19px;
        img {
          width: 11px;
          height: 12px;
        }
      }
      .content {
        position: absolute;
        left: 45px;
        top: 16px;
        font-size: 12px;
        color: #444444;
      }
      .more {
        position: absolute;
        top: 16px;
        font-size: 14px;
        color: #888888;
        right: 15px;
      }
    }
  }
  .aboutUs {
    top: 395px;
    .radius-one {
      .yuan {
        background-color: #7d95fd;
        img {
          width: 5px;
          height: 12px;
        }
      }
    }
  }
}
</style>