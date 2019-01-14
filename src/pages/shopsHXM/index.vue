<template>
  <div class="giftBD">
    <!-- 头部 -->
    <div class="top-one">
      <i
        class="iconfont goBack"
        @click="goBack"
      >&#xe614;</i>
      <i
        class="iconfont home"
        @click="goHome"
      >&#xe626;</i>
    </div>
    <div class="detailBox">
      <div class="top">
        <div class="title">{{consumeCardDetail.merchantName}}</div>
        <div class="money">{{consumeCardDetail.itemTitle}}</div>
        <img
          src="/static/image/bigQRCODE.png"
          alt=""
        >
        <div class="number">
          <text>核销码: </text><span>{{consumeCardDetail.consumeCode}}</span>
        </div>

      </div>
      <div class="content">
        <span class="time">有效期至: </span><span class="date">{{consumeCardDetail.itemDeadline}}</span>
        <span class="use">使用条件: </span><span class="allDay">{{consumeCardDetail.itemRule}}</span>
      </div>
      <div class="bottom">
        <div class="shop-name">{{consumeCardDetail.merchantName}}<span>(美式餐厅)</span></div>
        <span class="open-time">营业时间: </span><span class="nowDate">{{consumeCardDetail.merchantHours}}</span>
        <span class="shop-address">商家地址: </span><span class="true-address">{{consumeCardDetail.merchantAddress}}</span>
        <div class="line"></div>
        <img
          src="/static/image/giftphone.png"
          alt=""
          @click="callNumber"
        >
      </div>
      <div class="footer">
        <div class="sendFriend">转赠给朋友</div>
        <div class="shopInfomation">查看商家介绍</div>
      </div>

      <div class="logo">
        <img
          :src="consumeCardDetail.merchantLogo"
          alt=""
          class="logo"
        >
      </div>
    </div>

  </div>
</template>

<script>
import hxios from "../../utils/hxios.js";
export default {
  data: function() {
    return {
      // 消费者ID
      consumeID: 0,
      // 用户ID
      memberID: 0,
      // 消费卡券详情
      consumeCardDetail:{},
      // 是否使用
      status:""
    };
  },
  methods: {
    // 打电话
    callNumber() {
      wx.makePhoneCall({ phoneNumber: "10010" });
    },
    // 返回上一页
    goBack() {
      wx.navigateBack({
        delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
      });
    },
    // 返回首页
    goHome() {
      wx.switchTab({ url: "/pages/index/main" });
    }
  },
  onLoad(option) {
    // 消费者ID
    this.consumeID = option.consumeId;
    // 去存储获取用户ID
    wx.getStorage({
      key: "用户ID",
      success: res => {
        // 用户ID
        this.memberID = res.data;
        // 发起请求
        hxios
          .post("/member_consume/iteminfo", {
            memberId: this.memberID,
            consumeId: this.consumeID
          })
          .then(res => {
            console.log(res);
            // 消费卡券详情
            this.consumeCardDetail = res.data.data
            this.status = res.data.data.status
          });
      },
      fail: () => {},
      complete: () => {}
    });
    console.log(this.memberID);
  }
};
</script>

<style lang="less">
page {
  background-color: #e64352;
}
.giftBD {
  padding: 25px 15px;
  padding-top: 70px;
  // 头部
  .top-one {
    position: fixed;
    top: 0;
    // left: 0;
    z-index: 10;
    height: 70px;
    width: 100%;
    margin-left: -15px;
    background-color: #e64352;
    .goBack {
      position: absolute;
      top: 40%;
      left: 10px;
      font-size: 23px;
    }
    .home {
      position: absolute;
      top: 35%;
      left: 60px;
      font-size: 30px;
    }
    span {
      position: absolute;
      left: 50%;
      top: 60%;
      transform: translate(-50%, -50%);
    }
  }
  .detailBox {
    background-color: #fff;
    border-radius: 10px;
    padding: 0 15px;
    .top {
      width: 100%;
      height: 273px;
      border-bottom: 1px dashed #e6e6e6;
      position: relative;
      .title {
        position: absolute;
        top: 32px;
        font-size: 16px;
        color: #999999;
        left: 50%;
        transform: translateX(-50%);
      }
      .money {
        position: absolute;
        top: 66px;
        font-size: 25px;
        color: #0a0a0a;
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
      }
      img {
        top: 122px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 90px;
        height: 90px;
      }
      .number {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
        bottom: 30px;
        white-space: nowrap;
        text {
          font-size: 13px;
          color: #444444;
        }
        span {
          font-size: 13px;
          color: #e43949;
        }
      }
    }
    .content {
      width: 100%;
      height: 95px;
      border-bottom: 1px solid #e6e6e6;
      position: relative;
      box-sizing: border-box;
      .time {
        position: absolute;
        top: 22px;
        font-size: 13px;
        color: #0a0a0a;
      }
      .date {
        position: absolute;
        left: 65px;
        top: 22px;
        font-size: 13px;
        color: #666666;
      }
      .use {
        position: absolute;
        font-size: 13px;
        color: #0a0a0a;
        top: 43px;
      }
      .allDay {
        position: absolute;
        left: 65px;
        top: 43px;
        font-size: 13px;
        color: #666666;
        line-height: -5px;
        padding-right: 10px;
      }
    }
    .bottom {
      width: 100%;
      height: 125px;
      border-bottom: 1px solid #e6e6e6;
      position: relative;
      .line {
        height: 66px;
        width: 1px;
        background-color: #e6e6e6;
        position: absolute;
        right: 77px;
        top: 25px;
      }
      .shop-name {
        font-size: 15px;
        color: #000000;
        position: absolute;
        top: 22px;
        span {
          font-size: 15px;
          color: #4bccd8;
        }
      }
      .open-time {
        position: absolute;
        top: 49px;
        font-size: 13px;
        color: #0a0a0a;
      }
      .nowDate {
        position: absolute;
        left: 65px;
        top: 49px;
        font-size: 13px;
        color: #666666;
      }
      .shop-address {
        position: absolute;
        top: 73px;
        font-size: 13px;
        color: #0a0a0a;
      }
      .true-address {
        position: absolute;
        width: 173px;
        left: 65px;
        top: 73px;
        font-size: 13px;
        color: #666666;
      }
      img {
        position: absolute;
        right: 39px;
        top: 50%;
        transform: translateY(-50%);
        width: 16px;
        height: 16px;
      }
    }
    .footer {
      display: flex;
      height: 55px;
      .sendFriend {
        flex: 1;
        height: 55px;
        text-align: center;
        line-height: 55px;
        color: #676767;
        border-right: 1px solid #e6e6e6;
      }
      .shopInfomation {
        flex: 1;
        height: 55px;
        text-align: center;
        line-height: 55px;
        color: #e43949;
      }
    }

    .logo {
      position: absolute;
      width: 45px;
      height: 45px;
      background-color: #fff;
      border-radius: 50%;
      top: 50px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 11;
      img {
        width: 43px;
        height: 43px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -55%);
      }
    }
  }
}
</style>
