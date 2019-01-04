<template>
  <div class="index">
    <div class="content-box">
      <div class="giftBag">
        <div class="header">
          <i></i>
          <span class="title">麦辣鸡腿堡1个+薯条一份</span>
          <span class="detail">详情&nbsp&nbsp></span>
          <div class="time">有效期至 : 2019.01.18</div>
        </div>
        <div class="information">
          <ul>
            <li>
              商家名称 :
              <span>麦当劳(天和百货店)</span>
            </li>
            <li>
              商家地址 :
              <span>凤来路西域文化广场天和百货</span>
            </li>
            <li>
              商家时间 :
              <span>09:30-22:30</span>
            </li>
          </ul>
          <span class="distance">2.8km</span>
        </div>
        <div class="footer">
          <span class="show">使用条件 : 仅限于周一到周五使用,节假日除外,单笔消费</span>&nbsp&nbsp
          <span @tap="show" class="more">∨</span>
          <span class="hide">满100元可用,不可叠加使用</span>
        </div>
      </div>
      <div class="giftBag">
        <div class="header">
          <i></i>
          <span class="title">麦辣鸡腿堡1个+薯条一份</span>
          <span class="detail">详情&nbsp&nbsp></span>
          <div class="time">有效期至 : 2019.01.18</div>
        </div>
        <div class="information">
          <ul>
            <li>
              商家名称 :
              <span>麦当劳(天和百货店)</span>
            </li>
            <li>
              商家地址 :
              <span>凤来路西域文化广场天和百货</span>
            </li>
            <li>
              商家时间 :
              <span>09:30-22:30</span>
            </li>
          </ul>
          <span class="distance">2.8km</span>
        </div>
        <div class="footer">
          <span class="show">使用条件 : 仅限于周一到周五使用,节假日除外,单笔消费</span>&nbsp&nbsp
          <span @tap="show" class="more">∨</span>
          <span class="hide">满100元可用,不可叠加使用</span>
        </div>
      </div>
      <div class="giftBag">
        <div class="header">
          <i></i>
          <span class="title">麦辣鸡腿堡1个+薯条一份</span>
          <span class="detail">详情&nbsp&nbsp></span>
          <div class="time">有效期至 : 2019.01.18</div>
        </div>
        <div class="information">
          <ul>
            <li>
              商家名称 :
              <span>麦当劳(天和百货店)</span>
            </li>
            <li>
              商家地址 :
              <span>凤来路西域文化广场天和百货</span>
            </li>
            <li>
              商家时间 :
              <span>09:30-22:30</span>
            </li>
          </ul>
          <span class="distance">2.8km</span>
        </div>
        <div class="footer">
          <span class="show">使用条件 : 仅限于周一到周五使用,节假日除外,单笔消费</span>&nbsp&nbsp
          <span @tap="show" class="more">∨</span>
          <span class="hide">满100元可用,不可叠加使用</span>
        </div>
      </div>
    </div>
    <div class="buy">
      <span class="money">¥39.90</span>
      <span class="oldPrice">门市价 : ¥368.00</span>
      <span class="residue">剩余 : 18</span>
      <span class="goBuy"> &nbsp&nbsp立即抢购 > </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
page {
  background-color: #eeeeee;
}
.index {
  padding: 26rpx;
  .content-box {
    background-color: #fff;
    height: 1500rpx;
    padding: 22rpx;
    .giftBag {
      background-color: #fafafa;
      margin-bottom: 20rpx;
      .header {
        height: 132rpx;
        position: relative;
        border-top-right-radius: 10rpx;
        border-top-left-radius: 10rpx;
        .title {
          position: absolute;
          left: 85rpx;
          font-size: 30rpx;
          color: #222222;
          top: 15rpx;
        }
        .detail {
          position: absolute;
          right: 33rpx;
          font-size: 23rpx;
          color: #888888;
          top: 15rpx;
        }
        .time {
          font-size: 23rpx;
          position: absolute;
          top: 68rpx;
          left: 32rpx;
          color: #888888;
        }
      }
      .information {
        position: relative;
        height: 170rpx;
        ul {
          position: absolute;
          left: 32rpx;
          height: 170rpx;
          li {
            font-size: 28rpx;
            color: #444444;
          }
        }
        .distance {
          font-size: 24rpx;
          color: #888888;
          position: absolute;
          right: 3%;
          top: 23%;
        }
      }
      .footer {
        height: 55rpx;
        background-color: #e43949;
        font-size: 24rpx;
        color: #f2f2f2;
        line-height: 45rpx;
        border-bottom-right-radius: 10rpx;
        border-bottom-left-radius: 10rpx;
        .show {
          margin-left: 20rpx;
        }
        .more {
          font-size: 40rpx;
        }
        .hide {
          display: none;
        }
      }
    }
  }
  .buy{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 130rpx;
    background-color: #e43949;
    .money{
      position: absolute;
      left: 20rpx;
      font-size: 44rpx;
      color: #fff;
      top: 14rpx;
    }
    .oldPrice {
      position: absolute;
      left: 20rpx;
      color:#f3b6ba;
      bottom: 16rpx;
      font-size: 26rpx;
    }
    .residue{
      position: absolute;
      left:250rpx;
      font-size: 26rpx;
      color:#f3b6ba;
      bottom: 16rpx;
    }
    .goBuy{
      position: absolute;
      width: 225rpx;
      height: 85rpx;
      background-color: #fff000;
      color: #e43949;
      font-size: 32rpx;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      border-top-left-radius: 50rpx;
      border-bottom-left-radius: 50rpx;
      text-align: center;
      line-height: 85rpx;
      font-weight: 600;
    }
  }
}
</style>