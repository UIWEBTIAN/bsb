<template>
  <div class="shopDetail">
        <!-- 头部 -->
    <div class="top">
      <i class="iconfont goBack" @click="goBack">&#xe614;</i>
      <span>商家详情</span>
    </div>
    <!-- 轮播图 -->
    <div class="swiper">
      <swiper
        indicator-dots
        autoplay
        circular
      >
        <swiper-item>
          <image
            mode="aspectFill"
            :src="shopDetail.merchantWall"
          ></image>
        </swiper-item>

      </swiper>
    </div>
    <!-- 详情内容礼包 -->
    <div class="detailContentBig">
      <div class="detailContentSmall">
        <div class="shopName">{{shopDetail.merchantName}}</div>
        <div class="star">星星星星星星4.5</div>
        <div class="category-far">
          <div class="category" v-for="(item, index) in shopDetail.merchantTags" :key="index">{{item}}</div>
          <span class="far">2.3km</span>
        </div>
        <div class="shopActive">
          <span class="storeActive">门店活动</span>
          <span
            class="activeContent"
            @click="showBox"
          >满50减15、满100减35、满200减75></span>
        </div>
        <div class="address">{{shopDetail.merchantAddress}}</div>
        <div class="goDetail">
          <ul>
            <li @click="location"><img
                src="/static/image/daohang.png"
                alt=""
              ></li>
            <li @click="callNumber"><img
                src="/static/image/phone.png"
                alt=""
              ></li>
            <li>
              <button open-type="share">
                <img
                  src="/static/image/fenxiang2.png"
                  alt=""
                >
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 商家logo -->
    <div class="storeLogo">
      <img
        :src="shopDetail.merchantLogo"
        alt=""
      >
    </div>
    <!-- 底部区域 -->
    <div class="footer">
      <div
        class="joinBag"
        :class="{active:selectIndex==0}"
        @click="selectIndex=0"
      >
        <img
          src="/static/image/libao.png"
          alt=""
        >
        <span>参与礼包</span>
      </div>
      <div
        class="shopInfo"
        :class="{active:selectIndex==1}"
        @click="selectIndex=1"
      >
        <img
          src="/static/image/shopInfo.png"
          alt=""
        >
        <span>商家介绍</span>
      </div>
    </div>
    <!-- 底部区域内容 -->
    <div class="footer-content">
      <div
        class="joinBag-content"
        v-show="selectIndex==0"
      >
        <div
          class="discounts"
          @tap="childBag"
          v-for="(item, index) in shopGiftDetail" :key="index"
        >
          <div class="gift">
            <div class="content">
              <h4>{{item.packTitle}}</h4>
              <div class="mcdonald" v-for="(it, i) in item.items" :key="i">
                <div class="logo">
                  <img
                    :src="it.merchantLogo"
                    alt=""

                  >
                </div>
                <span class="shop">[{{it.merchantName}}]</span>
                <span class="title">{{it.itemTitle}}</span>
              </div>
              <!-- <div class="uniq">
                <div class="logo">
                  <img
                    src="/static/image/m-icon.png"
                    alt=""
                  >
                </div>
                <span class="shop">[优衣库]</span>
                <span class="title">麦辣鸡腿堡一个+薯条一份+可乐一杯</span>
              </div>
              <div class="zshiyou">
                <div class="logo">
                  <img
                    src="/static/image/m-icon.png"
                    alt=""
                  >
                </div>
                <span class="shop">[中石油]</span>
                <span class="title">麦辣鸡腿堡一个+薯条一份+可乐一杯</span>
              </div> -->
            </div>
            <div class="buy">
              <span class="price">¥{{item.salePrice}}</span>
              <span class="oldPrice">¥{{item.marketPrice}}</span>
              <span class="residue">剩余:{{item.qty}}</span>
              <button>购买礼包</button>
            </div>
          </div>
        </div>
        <!-- <div
          class="discounts"
          @tap="childBag"
        >
          <div class="gift">
            <div class="content">
              <h4>儿童单人乐高体验课礼包</h4>
              <div class="mcdonald">
                <div class="logo">
                  <img
                    src="/static/image/m-icon.png"
                    alt=""
                  >
                </div>
                <span class="shop">[麦当劳]</span>
                <span class="title">麦辣鸡腿堡一个+薯条一份+可乐一杯</span>
              </div>
              <div class="uniq">
                <div class="logo">
                  <img
                    src="/static/image/m-icon.png"
                    alt=""
                  >
                </div>
                <span class="shop">[优衣库]</span>
                <span class="title">麦辣鸡腿堡一个+薯条一份+可乐一杯</span>
              </div>
              <div class="zshiyou">
                <div class="logo">
                  <img
                    src="/static/image/m-icon.png"
                    alt=""
                  >
                </div>
                <span class="shop">[中石油]</span>
                <span class="title">麦辣鸡腿堡一个+薯条一份+可乐一杯</span>
              </div>
            </div>
            <div class="buy">
              <span class="price">¥29.90</span>
              <span class="oldPrice">¥388.00</span>
              <span class="residue">剩余:98</span>
              <button>购买礼包</button>
            </div>
          </div>
        </div> -->

      </div>
      <div
        class="shopInfo-content"
        v-show="selectIndex==1"
        v-html="shopImgText"
      >
      </div>
    </div>
    <!-- 弹出详情优惠活动 -->
    <div
      class="alertActive"
      v-show="alertIndex==1"
      :animation="animationData"
    >
      <div class="title">门店活动</div>
      <div class="discountsActive">满50减15、满100减35、满200减75</div>
      <div class="detailOrder">无需预约, 消费高峰时可能需要等位, 每桌最多使用1张美团券</div>
      <div class="allContent">
        科比堪称NBA最勤奋的球员，他的人生信条就是：篮球就是生命。科比的天赋也许不是联盟中最顶级的，但所有人都听说他的洛杉矶凌晨四点太阳的故事，科比正是通过不断的练习，将自己训练成一部篮球机器，不断学习和完善自己的篮球技巧
      </div>
      <button @click="closeBox">确定</button>
    </div>
  </div>
</template>

<script>
import hxios from '../../../src/utils/hxios.js'
export default {
  data: function() {
    return {
      // 点击索引
      selectIndex: 0,
      // 弹出活动索引
      alertIndex: 0,
      animationData: {},
      // 商户ID
      shopID:0,
      // 商家详情列表
      shopDetail:{},
      // 商家经度
      merchantLon:"",
      // 商家纬度
      merchantLat:"",
      // 商家电话
      shopPhoneNUmber:0,
      // 商家名
      shopName:"",
      // 商家地址
      shopAddress:"",
      // 商家参与礼包详情列表
      shopGiftDetail:[],
      // 商家图文描述
      shopImgText:""
    };
  },
  methods: {
    // 动画显示详情活动
    showBox() {
      // this.alertIndex = 1;
      var that = this;
      var animation = wx.createAnimation({
        duration: 1000,
        timingFunction: "linear"
      });
      that.animation = animation;
      animation.translateY(310).step();
      (that.animationData = animation.export()),
        // 改变view里面的Wx：if
        (that.alertIndex = 1);

      setTimeout(function() {
        animation.translateY(0).step();
        that.animationData = animation.export();
      }, 200);
    },
    
    // 返回上一页
    goBack(){
      wx.navigateBack({
        delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
      });
    },
    // 动画隐藏详情活动
    closeBox() {
      var that = this;
      var animation = wx.createAnimation({
        duration: 1000,
        timingFunction: "linear"
      });
      that.animation = animation;
      animation.translateY(300).step();
      (that.animationData = animation.export()),
        setTimeout(function() {
          animation.translateY(300).step();
          that.animationData = animation.export();
          // 改变view里面的Wx：if
          that.alertIndex = 0;
        }, 1000);
    },
    // 打电话
    callNumber() {
      wx.makePhoneCall({
        phoneNumber: this.shopPhoneNUmber // 仅为示例，并非真实的电话号码
      });
    },
    // 获取导航位置
    location() {
      wx.getLocation({
        type: "wgs84", //默认为 wgs84 返回 gps 坐标，gcj02 返回可用于wx.openLocation的坐标,
        success: res => {
          console.log(res);

          console.info("getLocation success: ", res);
          const latitude = 23.038907
          const longitude = 113.774233
          const speed = res.speed;
          const accuracy = res.accuracy;
          
          wx.showModal({
            title: "确定要去定位的位置吗", //提示的标题,
            content: "一颗牙疼", //提示的内容,
            showCancel: true, //是否显示取消按钮,
            cancelText: "取消", //取消按钮的文字，默认为取消，最多 4 个字符,
            cancelColor: "#000000", //取消按钮的文字颜色,
            confirmText: "确定", //确定按钮的文字，默认为取消，最多 4 个字符,
            confirmColor: "#3CC51F", //确定按钮的文字颜色,
            success: res => {
              if (res.confirm) {
                wx.openLocation({
                  latitude:latitude, //纬度，范围为-90~90，负数表示南纬,
                  longitude:longitude,//经度，范围为-180~180，负数表示西经,
                  scale: 15, //缩放比例，范围5~18,
                  name: this.shopName, //位置名,
                  address: this.shopAddress, //地址的详细说明,
                  success: res => {
                    console.log(res);
                  }
                });
              } else if (res.cancel) {
                console.log("用户点击取消");
              }
            }
          });
        },
        fail: res => {
          // console.log("getLocation failed")
          console.log(res);
        }
      });
    }
  },
  onLoad(option){
    console.log(option);
    
    // 商户ID
      this.shopID = parseInt(option.shopID)
      // 商户详情请求
      hxios.post('/merchant/merinfo',{merId:this.shopID}).then(res=>{
        console.log(res);
        
      // 商家详情
      this.shopDetail = res.data.data
      // 商家经度
      this.merchantLon = res.data.data.merchantLon
      // 商家纬度
      this.merchantLat = res.data.data.merchantLat
      // 商家号码
      this.shopPhoneNUmber = res.data.data.merchantPhone
      // 商家名
      this.shopName = res.data.data.merchantName
      // 商家地址 
      this.shopAddress = res.data.data.merchantAddress

      // 商家参与礼包详情请求
      hxios.post('/merchant/merpacks',{merId:this.shopID}).then(res=>{
        // 商家参与礼包详情列表
        this.shopGiftDetail = res.data.data
      })

      // 商家图文描述
      hxios.post('/merchant/mercontent',{merId:this.shopID}).then(res=>{
        // console.log(res);
        // 商家图文描述
        this.shopImgText = res.data.data.content
        // console.log(this.shopImgText);
        
        
      })
      
      
    })
  },
  onShow(){

  }
};
</script>

<style lang="less">
.shopDetail {
  position: relative;
  padding-top: 70px;
  // 头部
.top{
  position: fixed;
  top: 0;
  // left: 0;
  z-index: 10;
  height: 70px;
  width: 100%;
  background-color: #fff;
  .goBack{
    position: absolute;
    top: 40%;
    left: 10px;
    font-size: 23px;
  }
  span{
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translate(-50%,-50%);
    
  }
}
  .footer-content{
    .shopInfo-content{
      text-indent:2em;
    }
  }
}
// 轮播图样式
.swiper {
  width: 100%;
  height: 187px;
  swiper {
    height: 187px;
    swiper-item {
      height: 187px;
    }
    image {
      width: 100%;
      height: 187px;
    }
  }
}
.detailContentBig {
  background-color: #efeff4;
  padding: 0 10px;
  box-sizing: border-box;
  height: 287px;
  .detailContentSmall {
    width: 95%;
    position: absolute;
    top: 232px;
    height: 297px;
    border-radius: 8px;
    background-color: #fff;
    .shopName,
    .star,
    .category-far,
    .shopActive,
    .address,
    .goDetail {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    .shopName {
      font-size: 15px;
      color: #222222;
      top: 47px;
      white-space: nowrap;
    }
    .star {
      top: 75px;
      font-size: 12px;
      color: #ff9600;
    }
    .category-far {
      font-size: 12px;
      top: 102px;

      .category {
        display: inline-block;
        width: 63px;
        height: 22px;
        background-color: #4bccd8;
        border-radius: 10px;
        color: #fff;
        text-align: center;
        line-height: 22px;
      }
      .far {
        margin-left: 25px;
        color: #888888;
      }
    }
    .shopActive {
      top: 137px;
      white-space: nowrap;
      .storeActive {
        display: inline-block;
        width: 51px;
        height: 18px;
        border-top-left-radius: 4px;
        border-bottom-right-radius: 4px;
        background-color: #4bccd8;
        font-size: 12px;
        text-align: center;
        line-height: 18px;
        color: #fff;
      }
      .activeContent {
        font-size: 12px;
        color: #444444;
        margin-left: 8px;
      }
    }
    .address {
      width: 255px;
      top: 187px;
      font-size: 12px;
      text-align: center;
      color: #a4a4a4;
    }
    .goDetail {
      top: 239px;
      width: 170px;
      height: 35px;
      left: 50%;
      ul {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 170px;
        height: 35px;
        margin-left: 7px;
        li {
          width: 35px;
          height: 35px;
          background-color: #e43949;
          border-radius: 50%;
          text-align: center;
          line-height: 40px;
          float: left;
          margin-right: 28px;
          button {
            width: 35px;
            height: 35px;
            background-color: #e43949;
            border-radius: 50%;
            text-align: center;
            line-height: 40px;
            img {
              display: block;
              position: absolute;
              top: 7px;
              right: 8px;
            width: 18px;
            height: 18px;
            
          }
          }
          img {
            width: 18px;
            height: 18px;
          }
        }
        li:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
// logo样式
.storeLogo {
  position: absolute;
  top: 188px;
  left: 50%;
  transform: translateX(-50%);
  width: 69px;
  height: 69px;
  img {
    width: 69px;
    height: 69px;
  }
}
.footer {
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 49px;
  .shopInfo,
  .joinBag {
    text-align: center;
    height: 49px;
    width: 82px;
    font-size: 15px;
    line-height: 49px;
    position: absolute;
    img {
      width: 14px;
      height: 15px;
    }
    span {
      margin-left: 5px;
    }
  }
  .joinBag {
    left: 52px;
  }
  .shopInfo {
    right: 52px;
    color: #666666;
  }
  .active {
    border-bottom: 2px solid red;
    color: #e43949;
  }
}
.discounts {
  height: 200px;
  padding: 20rpx;
  .gift {
    height: 200px;
    .content {
      height: 155px;
      background-color: #fffbec;
      border: 4rpx #e43949 solid;
      border-top-left-radius: 20rpx;
      border-top-right-radius: 20rpx;
      h4 {
        color: #e43949;
        font-weight: 600;
        height: 40px;
        margin-left: 15px;
        line-height: 40px;
        font-size: 16px;
        border-bottom: 1px solid #fad8cf;
      }
      .mcdonald{
        top: 10px;
        position: relative;
        margin-bottom: 50px;
        .logo {
          position: absolute;
          display: inline-block;
          width: 23px;
          height: 23px;
          background-color: #b22923;
          text-align: center;
          border-radius: 3px;
          left: 16px;
          top: 5px;
          img {
            width: 18px;
            height: 18px;
            line-height: 18px;
          }
        }
        margin-top: 8px;
        .shop {
          position: absolute;
          top: 5px;
          font-size: 13px;
        }
        .title {
          position: absolute;
          top: 5px;
          font-size: 13px;
        }
      }
      .mcdonald {
        .shop {
          left: 46px;
        }
        .title {
          left: 103px;
        }
      }
    }
    .buy {
      height: 35px;
      background-color: #e43949;
      position: relative;
      border-bottom-left-radius: 20rpx;
      border-bottom-right-radius: 20rpx;
      .price {
        position: absolute;
        left: 35rpx;
        line-height: 35px;
        color: #fff;
        font-size: 30rpx;
        font-weight: 600;
      }
      .oldPrice {
        color: #f3b6ba;
        position: absolute;
        line-height: 35px;
        left: 167rpx;
        font-size: 24rpx;
        text-decoration: line-through
      }
      .residue {
        color: #f3b6ba;
        position: absolute;
        line-height: 35px;
        left: 297rpx;
        font-size: 24rpx;
      }
      button {
        position: absolute;
        top: 50%;
        right: 3%;
        transform: translateY(-50%);
        width: 180rpx;
        height: 29px;
        line-height: 29px;
        background-color: #fff000;
        border-radius: 35rpx;
        font-size: 26rpx;
        color: #e64c45;
        font-weight: 600;
      }
    }
  }
}
// 弹出活动样式
.alertActive {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 330px;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;

  box-sizing: border-box;
  .title {
    // padding: 0 10px;
    position: absolute;
    top: 33px;
    font-size: 15px;
    color: #222222;
    font-weight: 600;
  }
  .discountsActive,
  .detailOrder,
  .allContent {
    padding: 0 10px;
    position: absolute;
    font-size: 14px;
    color: #777777;
  }
  .discountsActive {
    top: 74px;
  }
  .detailOrder {
    top: 110px;
  }
  .allContent {
    top: 165px;
  }
  button {
    position: absolute;
    bottom: 0;
    height: 48px;
    width: 100%;
    background-color: #e43949;
    color: #fff;
  }
}
</style>
