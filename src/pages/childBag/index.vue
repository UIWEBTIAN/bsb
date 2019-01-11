<template>
  <div
    class="index"
    :class="{hide:style==1}"
  >
    <div class="content-box">
      <div
        class="giftBag"
        v-for="(item, index) in giftDetail"
        :key="index"
      >
        <div class="header">
          <div class="logo">
            <img
              :src="item.merchantLogo"
              alt
            >
          </div>
          <span class="title">{{item.Title}}</span>
          <span
            class="detail"
            @click="gocardDetail(index)"
          >详情&nbsp&nbsp></span>
          <div class="time">有效期至 : {{item.itemDeadline}}</div>
        </div>
        <div class="information">
          <ul>
            <li>
              商家名称 :
              <span>{{item.merchantName}}</span>
            </li>
            <li class="shopAddress">
              商家地址 :
              <span>{{item.merchantAddress}}</span>
            </li>
            <li>
              商家时间 :
              <span>{{item.merchantHours}}</span>
            </li>
          </ul>
          <span class="distance">{{item.merchantDist}}</span>
        </div>
        <div
          class="footer"
          :class="{showMore:index==isUp}"
        >
          <span class="show">使用条件 : {{item.itemRule}}</span>&nbsp&nbsp
          <span
            @click="many(index)"
            class="more"
          >∨</span>
        </div>
      </div>

    </div>
    <div class="buy" >
      <span class="money">¥{{price.salePrice}}</span>
      <span class="oldPrice">门市价 : ¥{{price.marketPrice}}</span>
      <span class="residue">剩余 : {{price.qty}}</span>
      <div
        class="share"
        @click="selectIndex=1;style=1"
      >
        <img
          src="/static/image/fenxiang.png"
          alt
        >
      </div>
      <span
        class="goBuy"
        @click="goBuy"
      >&nbsp&nbsp立即抢购 ></span>
    </div>
    <img
      src="/static/image/tuoyuan.png"
      alt
      class="bgFooter"
      v-show="scrollTop<150"
    >
    <div
      class="bgColorFooter"
      v-show="scrollTop<150"
    >
      <img
        src="/static/image/footerbg.png"
        alt
      >
    </div>
    <div
      class="qrCode"
      v-show="selectIndex == 1"
    >
      <div class="qrBox">
        <div class="erweima">
          <canvas canvas-id="myQrcode"></canvas>
          <span>好友扫码购买礼包</span>
        </div>
        <span
          class="close"
          @click="selectIndex=0"
        >x</span>
        <button>生成分享图片</button>
      </div>
    </div>
    <!-- <img
      :src="'data:image/jpeg;base64,'+imgUrl"
      alt=""
    > -->
    

  </div>
</template>

<script>
import hxios from "../../../src/utils/hxios.js";
import drawQrcode from "../../../src/utils/weapp.qrcode.esm.js"
export default {
  data: function() {
    return {
      scrollTop: 0,
      // 点击分享图片显示隐藏
      selectIndex: 0,
      style: 0,
      imgUrl: "",
      // 礼包详情
      giftDetail: [],
      // 购买金额
      price:[],
      // 礼包详情id
      giftId: 0,
      // 卡券id
      cardId: [],
      isUp: 3
      //
    };
  },
  // 滚动底部背景图片消失
  onPageScroll: function(e) {
    // console.log(e);//{scrollTop:99}
    if (e.scrollTop > 100) {
      this.scrollTop = e.scrollTop;
      // console.log(this.scrollTop);
    }
  },
  methods: {
    goBuy() {
      wx.getImageInfo({
        src:
          "http://img4.imgtn.bdimg.com/it/u=268744851,699852679&fm=26&gp=0.jpg", //图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径,
        success: res => {
          // console.log(res);
        },
        fail: () => {},
        complete: () => {}
      });
    },
    // 去卡券详情页
    gocardDetail(index) {
      wx.navigateTo({
        url: "/pages/giftBagDetail/main?cardId=" + this.cardId[index]
      });
      // console.log(this.cardId[index]);
    },
    many(index) {
      // console.log(index);
      if (index == 0) {
        this.isUp = false;
        // console.log(this.isUp);
      } else if (index == 1) {
        this.isUp = true;
      }
      // if (this.isUp === false) {
      //   this.isUp = 3
      // }
    }
  },
  created() {},
  onLoad(option) {
    this.giftId = parseInt(option.id);
    drawQrcode({
      width: 125,
      height: 125,
      canvasId: 'myQrcode',
      text: "一颗牙疼"
    })
    // console.log(option.id);
    

    hxios.post("/pack/packinfo", { packId: this.giftId }).then(res => {
      // console.log(res);
      // 礼包详情
      this.giftDetail = res.data.data.items;
      // 购买金额
      this.price = res.data.data
      console.log(this.price);
      
      // console.log(this.giftDetail);
      var arr = [];
      this.giftDetail.forEach(element => {
        // console.log(element.itemId);
        arr.push(parseInt(element.itemId));
      });
      this.cardId = arr;
      // console.log(this.cardId);
    });

    this.scrollTop = 0;

    // wx.request({
    //   url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET', //开发者服务器接口地址",
    //   data: {
    //     grant_type:"client_credential",
    //     appid:"wx301ede8add55beaf",
    //     secret:"f747b78ff2d970e2063f7073f2eb964a"
    //   }, //请求的参数",
    //   method: 'GET',
    //   dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
    //   success: res => {
    //     // console.log(res);

    //     wx.request({
    //       url: 'https://api.weixin.qq.com/cgi-bin/wxaapp/createwxaqrcode?access_token='+res.data.access_token, //开发者服务器接口地址",
    //       data: {path:"/pages/index/main",width:430}, //请求的参数",
    //       method: 'POST',
    //       dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
    //       success: res => {
    //         // console.log(res);

    //         var arr = res.data

    //         var data = wx.arrayBufferToBase64(arr);

    //         // console.log(data);
    //         this.imgUrl = res.data

    //       },
    //       fail: (res) => {
    //         // console.log(123);

    //       },
    //       complete: () => {}
    //     });

    //   },
    //   fail: () => {},
    //   complete: () => {}
    // });
  }
};
</script>

<style lang="less">
page {
  background-color: #efeff4;
  width: 100%;
  height: 100%;
}
.index {
  width: 100%;
  height: 100%;
  padding: 22rpx 22rpx 22rpx 22rpx;
  box-sizing: border-box;
  background-color: #efeff4;
  position: relative;
  overflow:hidden;
  .qrCode {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(110, 110, 112, 0.7);
    top: 0;
    left: 0;
    z-index: 15;

    .qrBox {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 340px;
      height: 325px;
      background-color: #fff;
      border-radius: 5px;
      padding: 0 10px;
      box-sizing: border-box;
      z-index: 999;
      .close {
        position: absolute;
        right: 15px;
        top: 10px;
      }
      .erweima {
        width: 125px;
        height: 152px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        canvas {
          // width: 125px;
          // height: 125px;
        }
        span {
          font-size: 15px;
          color: #444444;
        }
      }
      button {
        background-color: #e43949;
        position: absolute;
        bottom: 16px;
        width: 94%;
        color: #fff;
        font-size: 15px;
      }
    }
  }
  // 大盒子
  .content-box {
    background-color: #fff;
    padding: 22rpx 22rpx 22rpx 22rpx;
    box-sizing: border-box;
    position: relative;
    z-index: 10;
    .giftBag {
      background-color: #fafafa;
      margin-bottom: 20rpx;
      padding: 10rpx;
      box-sizing: border-box;
      .header {
        height: 58px;
        position: relative;
        border-top-right-radius: 10rpx;
        border-top-left-radius: 10rpx;
        border-bottom: 1px dashed #e2e2e2;
        .logo {
          width: 23px;
          height: 23px;
          background-color: #b22923;
          text-align: center;
          border-radius: 3px;
          position: absolute;
          top: 4px;
          left: 7px;
          img {
            width: 18px;
            height: 18px;
            line-height: 18px;
          }
        }
        .title {
          position: absolute;
          left: 90rpx;
          font-size: 30rpx;
          color: #222222;
          top: 13rpx;
        }
        .detail {
          position: absolute;
          right: 33rpx;
          font-size: 23rpx;
          color: #888888;
          top: 18rpx;
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
        height: 85px;
        margin-top: 12px;
        ul {
          position: absolute;
          left: 7px;
          height: 170rpx;
          li {
            font-size: 13px;
            color: #444444;
            margin-bottom: 6px;
          }
          .shopAddress {
            width: 213px;
            height: 15px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .distance {
          font-size: 24rpx;
          color: #888888;
          position: absolute;
          right: 3%;
          top: 26%;
        }
      }
      .footer {
        height: 55rpx;
        width: 100%;
        background-color: #e43949;
        font-size: 24rpx;
        color: #f2f2f2;
        line-height: 45rpx;
        border-bottom-right-radius: 10rpx;
        border-bottom-left-radius: 10rpx;

        .show {
          display: inline-block;
          margin-left: 20rpx;
          font-size: 12px;
          width: 285px;
          overflow: hidden;
          // text-overflow:ellipsis;
          white-space: nowrap;
        }

        .more {
          font-size: 40rpx;
        }
        .hide {
          display: none;
        }
      }
      .showMore {
        height: 50px;
        overflow: visible;
        white-space: normal;
        .show {
          overflow: visible;
          // text-overflow:ellipsis;
          white-space: normal;
        }
      }
    }
  }
  // 立即购买
  .buy {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 13;
    width: 100%;
    height: 130rpx;
    background-color: #e43949;
    .money {
      position: absolute;
      left: 20rpx;
      font-size: 44rpx;
      color: #fff;
      top: 5rpx;
    }
    .oldPrice {
      position: absolute;
      left: 20rpx;
      color: #f3b6ba;
      bottom: 26rpx;
      font-size: 26rpx;
    }
    .residue {
      position: absolute;
      left: 250rpx;
      font-size: 26rpx;
      color: #f3b6ba;
      bottom: 26rpx;
    }
    .share {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #b22c39;
      text-align: center;
      line-height: 35px;
      position: absolute;
      right: 131px;
      top: 19px;
      img {
        width: 17px;
        height: 17px;
      }
    }
    .goBuy {
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
  // 倒数第二层背景图片
  .bgFooter {
    position: fixed;
    bottom: 10px;
    width: 100%;
    height: 98px;
    margin-left: -25rpx;
    box-sizing: border-box;
    z-index: 10;
  }
  // 最里层背景图片
  .bgColorFooter {
    position: fixed;
    bottom: 15px;
    width: 100%;
    margin-left: -20rpx;
    z-index: 0;
    img {
      width: 100%;
      height: 123px;
    }
  }
}
.hide {
  overflow: hidden;
}
</style>