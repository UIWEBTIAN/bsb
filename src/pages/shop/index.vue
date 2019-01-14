<template>
  <div class="index">
    <!-- 头部 -->
    <div class="top">
      <span>商家列表</span>
    </div>

    <div
      class="shopList"
      @click="goShopDetail(index)"
      v-for="(item, index) in shopList"
      :key="index"
    >

      <div class="left">
        <img
          :src="item.merchantLogo"
          alt=""
        >
      </div>
      <div class="right">
        <div class="title">{{item.merchantName}}</div>
        <div class="number">
          <span class="star">4.9</span>
          <span class="far">{{item.merchantDist}}</span>
        </div>
        <div class="content-bag">
          <span class="giftBag">礼包 </span>
          <span class="giftDetail"> {{item.packTitle}}</span>
        </div>
        <div class="content-card">
          <span class="card">卡券 </span>
          <span class="cardDetail"> {{item.itemTitle}}</span>
        </div>
        <div class="picture">
          <img
            src="/static/image/1.jpg"
            alt
          >
          <img
            src="/static/image/2.jpg"
            alt
          >
          <img
            src="/static/image/3.jpg"
            alt
          >
        </div>
        <div class="line"></div>
      </div>
    </div>
    <div class="shopList">
      <div class="left">哈哈哈</div>
      <div class="right">
        <div class="title">名剪世家</div>
        <div class="number">
          <span class="star">4.9</span>
          <span class="far">2.8km</span>
        </div>
        <div class="content-bag">
          <span class="giftBag">礼包 </span>
          <span class="giftDetail"> 麦辣鸡腿堡一个+薯条一份+可乐1杯超值大礼包</span>
        </div>
        <div class="content-card">
          <span class="card">卡券 </span>
          <span class="cardDetail"> 卡士满50减15</span>
        </div>
        <div class="picture">
          <img
            src="/static/image/1.jpg"
            alt
          >
          <img
            src="/static/image/2.jpg"
            alt
          >
          <img
            src="/static/image/3.jpg"
            alt
          >
        </div>
        <div class="line"></div>
      </div>
    </div>
    <div class="shopList">
      <div class="left">哈哈哈</div>
      <div class="right">
        <div class="title">名剪世家</div>
        <div class="number">
          <span class="star">4.9</span>
          <span class="far">2.8km</span>
        </div>
        <div class="content-bag">
          <span class="giftBag">礼包 </span>
          <span class="giftDetail"> 麦辣鸡腿堡一个+薯条一份+可乐1杯超值大礼包</span>
        </div>
        <div class="content-card">
          <span class="card">卡券 </span>
          <span class="cardDetail"> 卡士满50减15</span>
        </div>
        <div class="picture">
          <img
            src="/static/image/1.jpg"
            alt
          >
          <img
            src="/static/image/2.jpg"
            alt
          >
          <img
            src="/static/image/3.jpg"
            alt
          >
        </div>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
import hxios from "../../../src/utils/hxios.js";
export default {
  data: function() {
    return {
      // 商户列表
      shopList: [],
      // 商户ID
      shopID: []
    };
  },
  methods: {
    // 跳转到商店详情页
    goShopDetail(index) {
      wx.navigateTo({
        url: "/pages/shopDetail/main?shopID=" + this.shopID[index]
      });
    }
  },
  onShow() {
    hxios.post("/merchant/merlist").then(res => {
      // 商户列表
      this.shopList = res.data.data;
      // 商户ID

      this.shopList.forEach(element => {
        // 把ID添加到数组中
        this.shopID.push(element.merchantId);
      });
    });
  }
};
</script>

<style lang="less">
.index {
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
}
.shopList {
  display: flex;
  padding: 0 10px;
  margin-bottom: 21px;
  .left {
    width: 60px;
    height: 60px;
    position: relative;
    background-color: #ffffff;
    border-radius: 5px;
    border: 1px solid #ebebeb;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 40px;
      height: 40px;
    }
  }
  .right {
    flex: 1;
    margin-left: 8px;
    .number {
      .star {
        color: #ffa14e;
        font-size: 12px;
      }
      .far {
        float: right;
        font-size: 12px;
        color: #666666;
      }
    }
    .title {
      font-size: 17px;
      color: #333333;
      font-weight: 600;
    }
    .content-bag {
      position: relative;
      .giftBag {
        display: inline-block;
        width: 60rpx;
        height: 30rpx;
        background-color: #fe7570;
        color: #fff;
        font-size: 11px;
        border-top-left-radius: 5px;
        border-bottom-right-radius: 5px;
        text-align: center;
        line-height: 30rpx;
      }
      .giftDetail {
        color: #666666;
        font-size: 11px;
      }
    }
    .content-card {
      .card {
        display: inline-block;
        width: 60rpx;
        height: 30rpx;
        background-color: #48c8d4;
        color: #fff;
        font-size: 11px;
        border-top-left-radius: 5px;
        border-bottom-right-radius: 5px;
        text-align: center;
        line-height: 30rpx;
      }
      .cardDetail {
        color: #666666;
        font-size: 11px;
      }
    }
    .picture {
      display: flex;
      margin-top: 10px;
      img {
        margin-right: 6px;
        width: 91px;
        height: 70px;
      }
    }
    .line {
      // color:red;
      border-bottom: 1px solid #e8e8e8;
      margin-top: 21px;
    }
  }
}
</style>