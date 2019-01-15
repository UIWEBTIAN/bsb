<template>
  <div class="index">
    <div class="top">
      <span>个人中心</span>
    </div>
    <div class="header">
      <img
        src="/static/image/beijing.png"
        alt
        class="bgColor"
      >
      <img
        src="/static/image/set.png"
        alt
        class="set"
        @click="goSet"
      >
      <button
        open-type="getUserInfo"
        @getuserinfo="userInfo"
        v-show="buttonIndex==0"
      >{{userName}}</button>
       <img
          :src="userImg"
          altgit
          class="icon"
          @tap="login"
        >

      <div class="name" v-show="buttonIndex==1">{{userName}}</div>
    </div>
    <div class="card">
      <div
        class="unused"
        @click="goMineCard"
      >
        <img
          src="/static/image/weishiyong.png"
          alt
        >
        <span>未使用</span>
      </div>
      <div
        class="used"
        @click="goUse"
      >
        <img
          src="/static/image/user.png"
          alt
        >
        <span>已使用</span>
      </div>
      <div
        class="dated"
        @click="goUpdated"
      >
        <img
          src="/static/image/yiguoqi.png"
          alt
        >
        <span>已过期</span>
      </div>
      <div class="yuan">{{card}}</div>
    </div>
    <div
      class="opinion"
      @click="goOpinion"
    >
      <div class="radius-one">
        <div class="yuan">
          <img
            src="/static/image/yijian.png"
            alt
          >
        </div>
        <span class="content">意见反馈</span>
        <span class="more">></span>
      </div>
    </div>
    <div
      class="aboutUs"
      @click="goAboutUs"
    >
      <div class="radius-one">
        <div class="yuan">
          <img
            src="/static/image/aboutUs.png"
            alt
          >
        </div>
        <span class="content">关于我们</span>
        <span class="more">></span>
      </div>
    </div>
    <div
      class="shopMain"
      @click="goShopMain"
    >
      <div class="radius-one">
        <div class="yuan">
          <img
            src="/static/image/aboutUs.png"
            alt
          >
        </div>
        <span class="content">商家入口</span>
        <span class="more">></span>
      </div>
    </div>
  </div>
</template>

<script>
import hxios from "../../../src/utils/hxios.js";
export default {
  data: function() {
    return {
      // 用户头像
      userImg:
        "http://img3.imgtn.bdimg.com/it/u=1248345049,109226570&fm=26&gp=0.jpg",
      // 用户昵称
      userName: "登录",
      code: "",
      // 用户ID
      memberID: 0,
      // 未使用的卡券的个数
      card: 0,
      buttonIndex:0
    };
  },
  onLoad() {
    
    wx.getStorage({
      key: "img",
      success: res => {
        this.userImg = res.data;
      },
      fail: () => {},
      complete: () => {}
    });
    wx.getStorage({
      key: "name",
      success: res => {
        this.userName = res.data;
        console.log(res.data);
      },
      fail: () => {},
      complete: () => {}
    });
  },
  onShow() {
    this.buttonIndex = 0
    wx.getStorage({
      key: "用户ID",
      success: res => {
        // 用户ID
        this.memberID = res.data;
        hxios
          .post("/member_consume/itemlist", {
            memberId: this.memberID,
            status: "usable"
          })
          .then(res => {
            this.card = res.data.data.length;
            console.log(this.card);
          });
      },
      fail: () => {},
      complete: () => {}
    });
    wx.getStorage({
      key: "用户ID",
      success: res => {
        console.log(res.data);
        wx.getStorage({
          key: "img",
          success: res => {
            this.userImg = res.data;
            wx.getStorage({
              key: "name",
              success: res => {
                this.buttonIndex = 1;
                this.userName = res.data;
                console.log(res.data);
              },
              fail: () => {},
              complete: () => {}
            });
          },
          fail: () => {},
          complete: () => {}
        });
      },
      fail: () => {
        this.userName = "登录";
        this.userImg =
          "http://img3.imgtn.bdimg.com/it/u=1248345049,109226570&fm=26&gp=0.jpg";
      },
      complete: () => {}
    });
  },
  methods: {
    getPhoneNumber(e) {
      console.log(e);
    },
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

    // 获取用户信息
    userInfo(e) {
      this.buttonIndex = 1;
      console.log(e);
      wx.login({
        success: res => {
          // console.log(res);
          this.code = res.code;
          hxios
            .post("/wechat_mini/userlogin", { code: this.code })
            .then(res => {
              console.log(res);

              wx.setStorage({
                key: "用户ID",
                data: res.data.data.memberId
              });
              wx.setStorage({
                key: "token",
                data: res.data.data.openId
              });
            });
        },
        fail: () => {},
        complete: () => {}
      });
      // 用户头像
      this.userImg = e.target.userInfo.avatarUrl;
      // 用户名
      this.userName = e.target.userInfo.nickName;
      wx.getStorage({
        key: "用户ID",
        success: res => {
          // 用户ID
          this.memberID = res.data;
          hxios
            .post("/member_consume/itemlist", {
              memberId: this.memberID,
              status: "usable"
            })
            .then(res => {
              this.card = res.data.data.length;
              console.log(this.card);
            });
        },
        fail: () => {},
        complete: () => {}
      });
    },

    // 去我的卡券未使用
    goMineCard() {
      wx.navigateTo({ url: "/pages/mineCard/main?index=" + 0 });
    },
    // 去我的卡券已使用
    goUse() {
      wx.navigateTo({ url: "/pages/mineCard/main?index=" + 1 });
    },
    // 去我的卡券已过期
    goUpdated() {
      wx.navigateTo({ url: "/pages/mineCard/main?index=" + 2 });
    },
    // 去意见反馈
    goOpinion() {
      wx.navigateTo({ url: "/pages/opinion/main" });
    },

    // 去关于我们
    goAboutUs() {
      wx.navigateTo({ url: "/pages/aboutUs/main" });
    },

    // 去商家端
    goShopMain() {
      wx.navigateTo({ url: "/pages/shopsLogin/main" });
    },

    // 去设置
    goSet() {
      wx.navigateTo({ url: "/pages/set/main" });
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
  padding-top: 70px;
  // 头部
  .top {
    position: fixed;
    top: 0;
    // left: 0;
    z-index: 10;
    height: 70px;
    width: 100%;
    background-color: #fff;
    span {
      position: absolute;
      left: 50%;
      top: 60%;
      transform: translate(-50%, -50%);
    }
  }
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
    button {
      height: 30px;
      line-height: 30px;;
      background-color: #fff;
      top: 120px;
      left: 50%;
      position: absolute;
      transform: translateX(-50%);
      background-color: transparent;
      border:0px solid #3375d1;
      color: #fff;
    }
    .icon{
      position: absolute;
      width: 75px;
      height: 75px;
      border-radius: 50%;
      top: 40px;
      left: 50%;
      transform: translateX(-50%);
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
    top: 250px;
    display: flex;
    height: 109px;
    background-color: #ffffff;
    width: 350px;
    left: 13px;
    border-radius: 8px;
    .yuan {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #e43949;
      position: absolute;
      top: 16px;
      left: 67px;
      color: #fff;
      text-align: center;
      line-height: 20px;
      font-size: 13px;
    }
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
  .aboutUs,
  .shopMain {
    position: absolute;
    left: 13px;
    top: 372px;
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
    top: 433px;
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
  .shopMain {
    top: 494px;
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