<template>
  <div class="giftBD">
        <!-- 头部 -->
    <div class="top-one">
      <i class="iconfont goBack" @click="goBack">&#xe614;</i>
      <i class="iconfont home" @click="goHome">&#xe626;</i>
      <span>百商邦</span>
    </div>
    <div class="detailBox">
      <div class="top">
        <div class="title">{{cardDetail.merchantName}}</div>
        <div class="money">{{cardDetail.itemTitle}}</div>
      </div>
      <div class="content">
        <span class="time">有效期至: </span><span class="date">{{cardDetail.itemDeadline}}</span>
        <span class="use">使用条件: </span><span class="allDay">{{cardDetail.itemRule}}</span>
      </div>
      <div class="bottom">
        <div class="shop-name">{{cardDetail.merchantName}}<span>(美式餐厅)</span></div>
        <span class="open-time">营业时间: </span><span class="nowDate">{{cardDetail.merchantHours}}</span>
        <span class="shop-address">商家地址: </span><span class="true-address">{{cardDetail.merchantAddress}}</span>
        <div class="line"></div>
        <img
          src="/static/image/giftphone.png"
          alt=""
          @click="callNumber"
        >
      </div>
      <div class="shopInfomation">
        <div
          class="left"
          @click="goShopDetail"
        >商家详情</div>
        <div
          class="right"
          @click="openMap"
        >商家地图</div>
        <span></span>
      </div>
      <div class="logo">

        <img
          src="/static/image/gift.png"
          alt=""
          class="logo"
        >
      </div>
    </div>

  </div>
</template>

<script>
import hxios from "../../../src/utils/hxios.js";
export default {
  data: function() {
    return {
      // 卡券Id
      itemid: 0,
      // 卡券详情
      cardDetail: {},
      // 商户位置经度
      merchantLon: 0,
      // 商户位置纬度
      merchantLat: 0,
      // 商户地址
      address: "",
      // 商户电话
      phoneNumber: "",
      // 商户名
      shopName: "",
      // 商户ID
      shopID: 0,
      // 会员ID
      memberID: 0,
      // 消费卡券ID
      consumeID: 0
    };
  },
  methods: {
    // 打电话
    callNumber() {
      wx.makePhoneCall({ phoneNumber: this.phoneNumber });
    },
    // 打开地图
    openMap() {
      wx.navigateTo({
        url:
          "/pages/map/main?merchantLon=" +
          this.merchantLon +
          "&merchantLat=" +
          this.merchantLat +
          "&address=" +
          this.address +
          "&shopName=" +
          this.shopName
      });
    },
    // 去商家详情页
    goShopDetail() {
      wx.navigateTo({ url: "/pages/shopDetail/main?shopID=" + this.shopID });
    },
    // 返回上一页
    goBack(){
      wx.navigateBack({
        delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
      });
    },
    // 返回首页
    goHome(){
      wx.switchTab({ url: '/pages/index/main' });
    }
  },
  onLoad(option) {
    // 卡券ID
    this.itemid = option.cardId;
    // 消费卡券ID
    this.consumeID = option.consumeId;

    // console.log(option);
    console.log(option);
    if (option.hasOwnProperty("consumeId")) {
      // 去本地存储获取会员ID
      wx.getStorage({
        key: "用户ID",
        success: res => {
          console.log(res.data);
          this.memberID = res.data;
          hxios
            .post("/member_consume/iteminfo", {
              memberId: this.memberID,
              consumeId: this.consumeID
            })
            .then(res => {
              console.log(res);
              this.cardDetail = res.data.data
            });
        },
        fail: () => {},
        complete: () => {}
      });
    } else if (option.hasOwnProperty("cardId")) {
      hxios.post("/pack/iteminfo", { itemId: this.itemid }).then(res => {
        // 卡券详情
      console.log(res);
      
        this.cardDetail = res.data.data;
        // console.log(this.cardDetail);
        // 商户位置经度
        this.merchantLon = parseFloat(res.data.data.merchantLon);
        // 商户位置纬度
        this.merchantLat = parseFloat(res.data.data.merchantLat);
        // 商户位置
        this.address = res.data.data.merchantAddress;
        // 商户电话
        this.phoneNumber = res.data.data.merchantPhone;
        // 商户名
        this.shopName = res.data.data.merchantName;
        // 商户ID
        this.shopID = res.data.data.merchantId;
      });
    }
  },
  onShow() {}
};
</script>

<style lang="less">
page {
  background-color: #e64352;
}
.giftBD {
  margin-top: 50%;
  transform: translateY(-25%);
  padding: 25px 15px;
  // 头部
  // padding-top: 70px;
.top-one{
  margin-top: -20%;
  margin-left: -15px;
  position: fixed;
  top: 0;
  // left: 0;
  z-index: 10;
  height: 70px;
  width: 100%;
  background-color: #e64352;
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
  .detailBox {
    background-color: #fff;
    border-radius: 10px;
    padding: 0 15px;
    .top {
      width: 100%;
      height: 122px;
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
        right: 65px;
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
        right: 30px;
        top: 50%;
        transform: translateY(-50%);
        width: 16px;
        height: 16px;
      }
    }
    .shopInfomation {
      display: flex;
      height: 55px;
      position: relative;
      .left,
      .right {
        flex: 1;
        height: 55px;
        text-align: center;
        line-height: 55px;
        color: #e64352;
      }
      span {
        position: absolute;
        display: block;
        height: 35px;
        width: 1px;
        background-color: #e6e6e6;
        line-height: 35px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .logo {
      position: absolute;
      width: 45px;
      height: 45px;
      background-color: #fff;
      border-radius: 50%;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      img {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>
