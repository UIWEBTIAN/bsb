<template>
  <div>
    <div class="category">
      <ul>
        <li class="item" :class="{active:selectedIndex==0}" @click="selectedIndex=0">未使用</li>
        <li class="item" :class="{active:selectedIndex==1}" @click="selectedIndex=1">已使用</li>
        <li class="item" :class="{active:selectedIndex==2}" @click="selectedIndex=2">已过期</li>
      </ul>
    </div>
    <div class="tap-content">
      <div class="item noUse" v-show="selectedIndex==0">
        <div class="content-box">
          <div class="giftBag">
            <div class="header">
              <i></i>
              <span class="title">[麦当劳] 麦辣鸡腿堡1个+薯条一份</span>
              <img src="/static/image/qrCode.png" alt>
              <div class="time">有效期至 : 2019.01.18</div>
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
              <span class="title">[麦当劳] 麦辣鸡腿堡1个+薯条一份</span>
              <img src="/static/image/qrCode.png" alt>
              <div class="time">有效期至 : 2019.01.18</div>
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
              <span class="title">[麦当劳] 麦辣鸡腿堡1个+薯条一份</span>
              <img src="/static/image/qrCode.png" alt>
              <div class="time">有效期至 : 2019.01.18</div>
            </div>
            <div class="footer">
              <span class="show">使用条件 : 仅限于周一到周五使用,节假日除外,单笔消费</span>&nbsp&nbsp
              <span @tap="show" class="more">∨</span>
              <span class="hide">满100元可用,不可叠加使用</span>
            </div>
          </div>
        </div>
      </div>
      <div class="item use" v-show="selectedIndex==1">
        <div class="giftBag">
          <div class="header">
            <i></i>
            <span class="title">[麦当劳] 麦辣鸡腿堡1个+薯条一份</span>
            <img src="/static/image/use.png" alt>
            <div class="time">有效期至 : 2019.01.18</div>
          </div>
          <div class="footer">
            <span class="show">使用条件 : 仅限于周一到周五使用,节假日除外,单笔消费</span>&nbsp&nbsp
            <span @tap="show" class="more">∨</span>
            <span class="hide">满100元可用,不可叠加使用</span>
          </div>
        </div>
      </div>
      <div class="item updated" v-show="selectedIndex==2">
        <div class="giftBag">
          <div class="header">
            <i></i>
            <span class="title">[麦当劳] 麦辣鸡腿堡1个+薯条一份</span>
            <img src="/static/image/updated.png" alt>
            <div class="time">有效期至 : 2019.01.18</div>
          </div>
          <div class="footer">
            <span class="show">使用条件 : 仅限于周一到周五使用,节假日除外,单笔消费</span>&nbsp&nbsp
            <span @tap="show" class="more">∨</span>
            <span class="hide">满100元可用,不可叠加使用</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      selectedIndex: 0
    };
  },
  methods: {
    goUseCard() {
      wx.navigateTo({ url: "/pages/userCard/main" });
    }
  }
};
</script>

<style lang="less">
page {
  background-color: #efeff4;
}
ul {
  display: flex;
  li {
    text-align: center;
    flex: 3;
    background-color: #fafafa;
    height: 50px;
    line-height: 50px;
    border-right: 1px solid #cccccc;
    color: #353535;
    font-size: 15px;
  }
  :last-child {
    border-right: none;
  }
  .active {
    background-color: #eaeaea;
  }
}
.tap-content {
  padding: 30rpx 22rpx;
  .noUse,
  .use,
  .updated {
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
          left: 16px;
          font-size: 30rpx;
          color: #222222;
          top: 15rpx;
        }
        img {
          position: absolute;
          top: 15rpx;
          right: 16px;
          width: 17px;
          height: 17px;
        }
        .time {
          font-size: 23rpx;
          position: absolute;
          top: 68rpx;
          left: 32rpx;
          color: #888888;
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
        position: relative;
        .show {
          margin-left: 20rpx;
        }
        .more {
          font-size: 40rpx;
          position: absolute;
          top: 0px;
          right: 5px;
        }
        .hide {
          display: none;
        }
      }
    }
  }
  .use {
    .giftBag {
      .header {
        img {
          width: 65px;
          height: 49px;
        }
      }
      .footer {
        background-color: #848484;
      }
    }
  }
  .updated{
    .giftBag{
      .header{
        img {
          width: 65px;
          height: 49px;
        }
      }
    }
  }
}
</style>