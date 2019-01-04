<template>
  <div class="index">
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
          <span class="more">∨</span>
        </div>
        <div class="content-card">
          <span class="card">卡券 </span>
          <span class="cardDetail"> 卡士满50减15</span>
        </div>
        <div class="picture">
          <img src="/static/image/1.jpg" alt>
          <img src="/static/image/2.jpg" alt>
          <img src="/static/image/3.jpg" alt>
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
          <span class="more">∨</span>
        </div>
        <div class="content-card">
          <span class="card">卡券 </span>
          <span class="cardDetail"> 卡士满50减15</span>
        </div>
        <div class="picture">
          <img src="/static/image/1.jpg" alt>
          <img src="/static/image/2.jpg" alt>
          <img src="/static/image/3.jpg" alt>
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
          <span class="more">∨</span>
        </div>
        <div class="content-card">
          <span class="card">卡券 </span>
          <span class="cardDetail"> 卡士满50减15</span>
        </div>
        <div class="picture">
          <img src="/static/image/1.jpg" alt>
          <img src="/static/image/2.jpg" alt>
          <img src="/static/image/3.jpg" alt>
        </div>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.shopList {
  display: flex;
  padding: 0 10px;
  margin-bottom: 21px;
  .left {
    width: 58px;
  }
  .right {
    flex: 1;
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
    .content-bag{
      position: relative;
      .giftBag{
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
      .giftDetail{
        color: #666666;
        font-size: 11px;
      }
      .more{
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        color: #666666;
        font-size: 11px;
      }
    }
    .content-card{
      .card{
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
      .cardDetail{
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
    .line{
      // color:red;
      border-bottom: 1px solid #e8e8e8;
      margin-top: 21px;
    }
  }
}
</style>