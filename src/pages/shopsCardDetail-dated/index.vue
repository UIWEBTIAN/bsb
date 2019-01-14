<template>
  <div class="giftBD">
    <div class="detailBox">
      <div class="top">
        <div class="title">麦当劳</div>
        <div class="money">100元代金券</div>
        <img src="/static/image/updated.png" alt="">
      </div>
      <div class="content">
        <span class="cardNumber">卡券编号: </span><span class="number">3984459283404923</span>
        <span class="time">有效期至: </span><span class="date">2018.01.20</span>
        <span class="use">使用条件: </span><span class="allDay">2018.12.20-2019.03.13, 周一至周日全天, 不与店铺优惠叠加</span>
      </div>
      <div class="bottom">
        <div class="shop-name">麦当劳南城店<span>(美式餐厅)</span></div>
        <span class="open-time">营业时间: </span><span class="nowDate">09:30-22:30</span>
        <span class="shop-address">商家地址: </span><span class="true-address">东莞市南城街道科技路城市风景街区2号楼一层</span>
      </div>
      <div class="shopInfomation">
        <div
          class="left"
          @click="goShopDetail"
        >重新发布</div>
        <div
          class="right"
          @click="openMap"
        >删除</div>
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
export default {};
</script>

<style lang="less">
page {
  background-color: #e64352;
}
.giftBD {
  margin-top: 50%;
  transform: translateY(-25%);
  padding: 25px 15px;
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
      img{
        width: 65px;
        height: 49px;
        position: absolute;
        top: 11px;
        right: 11px;
      }
    }
    .content {
      width: 100%;
      height: 116px;
      border-bottom: 1px solid #e6e6e6;
      position: relative;
      box-sizing: border-box;
      .cardNumber {
        position: absolute;
        top: 20px;
        font-size: 13px;
        color: #0a0a0a;
      }
      .number {
        position: absolute;
        left: 65px;
        top: 22px;
        font-size: 13px;
        color: #666666;
      }
      .time {
        position: absolute;
        top: 42px;
        font-size: 13px;
        color: #0a0a0a;
      }
      .date {
        position: absolute;
        left: 65px;
        top: 42px;
        font-size: 13px;
        color: #666666;
      }
      .use {
        position: absolute;
        font-size: 13px;
        color: #0a0a0a;
        top: 64px;
      }
      .allDay {
        position: absolute;
        left: 65px;
        top: 64px;
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
        // width: 173px;
        left: 65px;
        top: 73px;
        font-size: 13px;
        color: #666666;
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
