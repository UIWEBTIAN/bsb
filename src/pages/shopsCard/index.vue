<template>
  <div>
    <div class="category">
      <ul>
        <li
          class="item"
          :class="{active:selectedIndex==0}"
          @click="selectedIndex=0"
        >有效券</li>
        <li
          class="item"
          :class="{active:selectedIndex==1}"
          @click="selectedIndex=1"
        >已过期</li>
      </ul>
    </div>
    <div class="tap-content">
      <div
        class="item noUse"
        v-show="selectedIndex==0"
      >
        <div class="content-box">
          <!-- <div class="giftBag" v-for="(item, index) in usable" :key="index">
            <div class="header" @click="goCardDetail(index)">
              <i></i>
              <span class="title">[{{item.merchantName}}]</span><span class="rule">{{item.itemTitle}}</span>
              <img :src="item.merchantLogo" alt>
              <div class="time">有效期至 : {{item.itemDeadline}}</div>
            </div>
            <div class="footer">
              <span class="show">使用条件 : {{item.itemRule}}</span>&nbsp&nbsp
              <span @tap="show" class="more">∨</span>
            </div>
          </div> -->
          <div class="giftBag">
            <div
              class="header"
              @click="goCardDetail"
            >
              <i></i>
              <span class="title">[麦当劳] 麦辣鸡腿堡1个+薯条一份</span>
              <span class="detail">详情 <i class="iconfont">&#xe64c;</i></span>
              <div class="time">有效期至 : 2019.01.18</div>
            </div>
            <div class="footer">
              <span class="show">使用条件 : 仅限于周一到周五使用,节假日除外,单笔消费</span>&nbsp&nbsp
              <i class="iconfont">&#xe731;</i>
              <span class="hide">满100元可用,不可叠加使用</span>
            </div>
          </div>
          <div class="giftBag">
            <div
              class="header"
              @click="goCardDetail"
            >
              <i></i>
              <span class="title">[麦当劳] 麦辣鸡腿堡1个+薯条一份</span>
              <span class="detail">详情 <i class="iconfont">&#xe64c;</i></span>
              <div class="time">有效期至 : 2019.01.18</div>
            </div>
            <div class="footer">
              <span class="show">使用条件 : 仅限于周一到周五使用,节假日除外,单笔消费</span>&nbsp&nbsp
              <i class="iconfont">&#xe731;</i>
              <span class="hide">满100元可用,不可叠加使用</span>
            </div>
          </div>
        </div>
      </div>
      <div
        class="item use"
        v-show="selectedIndex==1"
      >
        <div class="giftBag">
          <div
            class="header"
            @click="goCardDetail"
          >
            <i></i>
            <span class="title">[麦当劳] 麦辣鸡腿堡1个+薯条一份</span>
            <span class="detail">详情 <i class="iconfont">&#xe64c;</i></span>
            <div class="time">有效期至 : 2019.01.18</div>
          </div>
          <div class="footer">
            <span class="show">使用条件 : 仅限于周一到周五使用,节假日除外,单笔消费</span>&nbsp&nbsp
            <i class="iconfont">&#xe731;</i>
            <span class="hide">满100元可用,不可叠加使用</span>
          </div>
        </div>
        <div class="giftBag">
          <div
            class="header"
            @click="goCardDetail"
          >
            <i></i>
            <span class="title">[麦当劳] 麦辣鸡腿堡1个+薯条一份</span>
            <span class="detail">详情 <i class="iconfont">&#xe64c;</i></span>
            <div class="time">有效期至 : 2019.01.18</div>
          </div>
          <div class="footer">
            <span class="show">使用条件 : 仅限于周一到周五使用,节假日除外,单笔消费</span>&nbsp&nbsp
            <i class="iconfont">&#xe731;</i>
            <span class="hide">满100元可用,不可叠加使用</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import hxios from "../../../src/utils/hxios.js";
export default {
  data: function() {
    return {
      // 选中的索引
      selectedIndex: 0,
      // 用户ID
      userID: 0,
      // 未使用卡券
      usable: [],
      // 消费卡券ID
      consumeId: [],
      // 消费码
      consumeCode: []
    };
  },
  methods: {
    goUseCard() {
      wx.navigateTo({ url: "/pages/userCard/main" });
    },
    // 去卡券详情页
    goCardDetail(index) {
      wx.navigateTo({
        url: "/pages/giftBagDetail/main?consumeId=" + this.consumeId[index]
      });
    }
  },
  onShow() {
    // 获取本地存储的用户ID
    wx.getStorage({
      key: "用户ID",
      success: res => {
        // 用户ID
        this.userID = res.data;
        // console.log(this.userID);

        hxios
          .post("/member_consume/itemlist", {
            memberId: this.userID,
            status: "usable"
          })
          .then(res => {
            // 未使用卡券
            this.usable = res.data.data;

            let arr = [];
            let array = [];
            this.usable.forEach(element => {
              arr.push(element.consumeId);
              array.push(element.consumeCode);
            });
            // 消费卡券ID
            this.consumeId = arr;
            // 消费码
            this.consumeCode = array;
          });
      },
      fail: () => {},
      complete: () => {}
    });
    // 发请求
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
    flex: 2;
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
        .detail {
          position: absolute;
          top: 15rpx;
          right: 16px;
          color: #999999;
          font-size: 12px;
          i {
            // display: inline-block;
            position: absolute;
            top: 1px;
            right: -15px;
          }
        }
        .rule {
          position: absolute;
          left: 73px;
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
        padding: 0 20rpx;
        box-sizing: border-box;
        .show {
        }
        .iconfont {
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
  .updated {
    .giftBag {
      .header {
        img {
          width: 65px;
          height: 49px;
        }
      }
    }
  }
}
</style>