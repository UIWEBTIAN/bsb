<template>
  <div class="giftBD">
    <div class="detailBox">
      <div class="top">
        <div class="title">麦当劳</div>
        <div class="money">100元代金券</div>
        <img
          src="/static/image/use.png"
          alt=""
        >

      </div>
      <div class="content">
        <span class="time">有效期至: </span><span class="date">2018.01.20</span>
        <span class="use">使用条件: </span><span class="allDay">2018.12.20-2019.03.13 周一至周日 全天 不与店铺优惠叠加</span>
      </div>
      <div class="bottom">
        <div class="shop-name">麦当劳南城店<span>(美式餐厅)</span></div>
        <span class="open-time">营业时间: </span><span class="nowDate">09:30-22:30</span>
        <span class="shop-address">商家地址: </span><span class="true-address">东莞市科技路城市风暴街区2号楼1层</span>
        <div class="line"></div>
        <img
          src="/static/image/giftphone.png"
          alt=""
          @click="callNumber"
        >
      </div>
      <div class="shopInfomation">查看商家介绍</div>
      <div class="logo">
        <img
          src="/static/image/touxiang.png"
          alt=""
          class="logo"
        >
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  methods: {
    // 打电话
    callNumber() {
      wx.makePhoneCall({ phoneNumber: "10010" });
    }
  }
};
</script>

<style lang="less">
page {
  background-color: #e64352;
}
.giftBD {
  padding: 25px 15px;
  .detailBox {
    background-color: #fff;
    border-radius: 10px;
    padding: 0 15px;
    .top {
      width: 100%;
      height: 253px;
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
      }
      img {
        top: 140px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 64px;
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
    .shopInfomation {
      height: 55px;
      text-align: center;
      line-height: 55px;
      color: #e43949;
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
        width: 43px;
        height: 43px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>
