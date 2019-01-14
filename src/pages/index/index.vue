<template>
  <div class="index">
    <!-- 头部 -->
    <div class="top">
      <span>百商邦</span>
    </div>
    <!-- 轮播图 -->
    <div class="swiper">
      <swiper
        indicator-dots
        autoplay
        circular
      >
        <swiper-item
          v-for="(item, index) in swiperList"
          :key="index"
        >
          <image
            mode="aspectFill"
            :src="item.img"
            @click="watchImg(index)"
          ></image>
        </swiper-item>

      </swiper>
    </div>
    <!-- 分类 -->
    <div class="tap-category">
      <ul>
        <li
          class="item"
          :class="{active:selectedIndex==0}"
          @click="selectedIndex=0"
        >推荐</li>
        <li
          class="item"
          :class="{active:selectedIndex==1}"
          @click="selectedIndex=1"
        >最新</li>
        <li
          class="item"
          :class="{active:selectedIndex==2}"
          @click="selectedIndex=2"
        >人气</li>
        <li
          class="item"
          :class="{active:selectedIndex==3}"
          @click="selectedIndex=3;isUp=!isUp"
        >价格
          <i
            class="iconfont up"
            :class="{activeTwo:isUp}"
          >&#xe74c;</i>
          <i
            class="iconfont down"
            :class="{activeTwo:!isUp}"
          >&#xe7ff;</i>
        </li>
      </ul>
    </div>
    <div class="tap-content">
      <div
        class="item"
        v-show="selectedIndex==0"
      >
        <!-- 优惠商品 -->
        <div class="discounts">
          <div
            class="gift"
            v-for="(item, index) in recommend"
            :key="index"
          >
            <div
              class="content"
              @click="gochildBag(index)"
            >
              <h4>{{item.packTitle}}</h4>
              <div
                class="mcdonald"
                v-for="(it, i) in item.items"
                :key="i"
              >
                <div class="logo">
                  <img
                    :src="it.merchantLogo"
                    alt=""
                  >
                </div>
                <span class="shop">[{{it.merchantName}}]</span>
                <span class="title">{{it.itemTitle}}</span>
              </div>
            </div>
            <div class="buy">
              <span class="price">¥{{item.salePrice}}</span>
              <span class="oldPrice">¥{{item.marketPrice}}</span>
              <span class="residue">剩余:{{item.qty}}</span>
              <button @click="buyGift(index)">购买礼包</button>
            </div>
          </div>
        </div>
        <!-- <div class="sellOut">
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
        class="item"
        v-show="selectedIndex==1"
      >
        <div class="discounts">
          <div
            class="gift"
            v-for="(item, index) in newList"
            :key="index"
            @click="gochildBag(index)"
          >
            <div class="content">
              <h4>{{item.packTitle}}</h4>
              <div
                class="mcdonald"
                v-for="(it, i) in item.items"
                :key="i"
              >
                <div class="logo">
                  <img
                    :src="it.merchantLogo"
                    alt=""
                  >
                </div>
                <span class="shop">[{{it.merchantName}}]</span>
                <span class="title">{{it.itemTitle}}</span>
              </div>
            </div>
            <div class="buy">
              <span class="price">¥{{item.salePrice}}</span>
              <span class="oldPrice">¥{{item.marketPrice}}</span>
              <span class="residue">剩余:{{item.qty}}</span>
              <button>购买礼包</button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="item"
        v-show="selectedIndex==2"
      >
        <div class="discounts">
          <div
            class="gift"
            v-for="(item, index) in hotList"
            :key="index"
            @click="gochildBag(index)"
          >
            <div class="content">
              <h4>{{item.packTitle}}</h4>
              <div
                class="mcdonald"
                v-for="(it, i) in item.items"
                :key="i"
              >
                <div class="logo">
                  <img
                    :src="it.merchantLogo"
                    alt=""
                  >
                </div>
                <span class="shop">[{{it.merchantName}}]</span>
                <span class="title">{{it.itemTitle}}</span>
              </div>
            </div>
            <div class="buy">
              <span class="price">¥{{item.salePrice}}</span>
              <span class="oldPrice">¥{{item.marketPrice}}</span>
              <span class="residue">剩余:{{item.qty}}</span>
              <button>购买礼包</button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="item"
        v-show="selectedIndex==3"
      >
        <div class="discounts">
          <div
            class="gift"
            v-for="(item, index) in priceList"
            :key="index"
            @click="gochildBag(index)"
          >
            <div class="content">
              <h4>{{item.packTitle}}</h4>
              <div
                class="mcdonald"
                v-for="(it, i) in item.items"
                :key="i"
              >
                <div class="logo">
                  <img
                    :src="it.merchantLogo"
                    alt=""
                  >
                </div>
                <span class="shop">[{{it.merchantName}}]</span>
                <span class="title">{{it.itemTitle}}</span>
              </div>
            </div>
            <div class="buy">
              <span class="price">¥{{item.salePrice}}</span>
              <span class="oldPrice">¥{{item.marketPrice}}</span>
              <span class="residue">剩余:{{item.qty}}</span>
              <button>购买礼包</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import hxios from '../../../src/utils/hxios.js'
export default {
  data: function() {
    return {
      // 分类索引
      selectedIndex: 0,
      // 上下箭头
      isUp: false,
      // 轮播图图片
      swiperList:[],
      // 推荐礼包
      recommend:[],
      // 最新礼包
      newList:[],
      // 人气礼包
      hotList:[],
      // 价格礼包
      priceList:[],
      // 礼包id
      giftId:[],
      // 用户ID
      memberID:0,
      // 订单号
      orderNumber:0,
      // openID
      openID:0

    };
  },
  methods: {
    // 发请求
    
    // 跳转到礼包详情
    gochildBag(index){
      wx.navigateTo({ url: '/pages/childBag/main?id='+this.giftId[index]});
      // console.log(this.giftId[index]);
    },
    // 购买礼包
    buyGift(index){
      wx.getStorage({
        key: 'token',
        success: (res) => {
          wx.getStorage({
            key: 'token',
            success: (res) => {
              // openID
              this.openID = res.data
              // 礼包Id
              let id = this.giftId[index].toFixed()
              // 用户Id
              let memberID = this.memberID.toFixed()
              

              hxios.post('/sales_pack/quickbuy',{memberId:memberID,packId:id}).then(res=>{
                // 订单号
                this.orderNumber = res.data.data.orderNo
                console.log(this.memberID);
                
                // 发请求
                hxios.post('/sales_pack/topay',{modeCode:"WECHAT_MINI",orderNo:this.orderNumber,memberId:this.memberID,openId:this.openID}).then(res=>{
                  console.log(res);
              
            })
            
          })
            },
            fail: () => { },
            complete: () => { }
          })
        },
        fail: () => { 
          wx.showModal({
            title: '提示', //提示的标题,
            content: '没有登录,先去登录', //提示的内容,
            showCancel: true, //是否显示取消按钮,
            cancelText: '取消', //取消按钮的文字，默认为取消，最多 4 个字符,
            cancelColor: '#000000', //取消按钮的文字颜色,
            confirmText: '确定', //确定按钮的文字，默认为取消，最多 4 个字符,
            confirmColor: '#3CC51F', //确定按钮的文字颜色,
            success: res => {
              if (res.confirm) {
                wx.switchTab({ url: '/pages/mine/main' });
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          });
        },
        complete: () => { }
      })
    }

  },
  onLoad() {
    // 获取memberID
    wx.getStorage({
      key: '用户ID',
      success: (res) => {
        
        this.memberID = res.data
      },
      fail: () => { },
      complete: () => { }
    })
    
      // 页面加载的时候.默认索引等于0
    this.selectedIndex = 0
      hxios.post("/index/ppt").then(res => {
      // 轮播图图片
        this.swiperList = res.data.data;
    }),
      hxios.post('/index/packs').then(res=>{
        // console.log(res);
        
        // 推荐礼包
        this.recommend = res.data.data
        // console.log(this.recommend);
        
        var arr = []
        this.recommend.forEach(element => {
         arr.push(element.packId)
        });
        // 礼包详情id
        this.giftId = arr
        console.log(this.giftId);
        
        
      })
      hxios.post('/index/packs',{sort:'new'}).then(res=>{
        // 最新礼包
        this.newList = res.data.data

      })
      // hxios.post('/index/packs',{sort:'hot'}).then(res=>{
      //   // 人气礼包
      //   this.hotList = res.data.data
      //   // console.log(this.hotList);
        
      //   var arr = []
      //   this.hotList.forEach(element => {
      //     // console.log(element.packId);
          
      //    arr.push(element.packId)
      //   });
      //   // 礼包详情id
      //   this.giftId = arr
      // })
      hxios.post('/index/packs',{sort:'price',desc:0}).then(res=>{
        // 最新礼包
        // console.log(res);
        
        this.priceList = res.data.data
      })
      
      
    

  },
  watch: {
    selectedIndex:function(newQuestion, oldQuestion){
      // console.log(newQuestion);
      if(newQuestion == 2){
              hxios.post('/index/packs',{sort:'hot'}).then(res=>{
        // 人气礼包
        this.hotList = res.data.data
        // console.log(this.hotList);
        
        var arr = []
        this.hotList.forEach(element => {
          // console.log(element.packId);
          
         arr.push(element.packId)
        });
        // 礼包详情id
        this.giftId = arr
      })
      }else if(newQuestion==0){
              hxios.post('/index/packs').then(res=>{
        // 推荐礼包
        this.recommend = res.data.data
        // console.log(this.recommend);
        
        var arr = []
        this.recommend.forEach(element => {
         arr.push(element.packId)
        });
        // 礼包详情id
        this.giftId = arr
        // console.log(this.giftId);
        
        
      })
      }
      // console.log(oldQuestion);
      
    },
    isUp:function(newQuestion,oldQuestion){
      console.log(newQuestion);
      if(newQuestion==true){
        // 升序发起请求
         hxios.post('/index/packs',{sort:'price',desc:0}).then(res=>{
        // 最新礼包
        // console.log(res);
        
        this.priceList = res.data.data
      })
      }else if(newQuestion==false){
                 hxios.post('/index/packs',{sort:'price',desc:1}).then(res=>{
        // 最新礼包
        // console.log(res);
        
        this.priceList = res.data.data
      })
      }
    }
  },
};
</script>

<style lang="less">
page {
  width: 100%;
}
.index {
  width: 100%;
  padding-top: 70px;
}
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
// 轮播图
.swiper {
  width: 100%;
  image {
    width: 100%;
    height: 100%;
  }
}
// 分类
.tap-category {
  width: 100%;
  ul {
    display: flex;
    height: 40px;
    background-color: #fafafa;
    text-align: center;
    line-height: 40px;
    li {
      border-right: 2rpx solid #eaeaea;
      flex: 4;
      height: 40px;
      color: #4a4a4a;
      .iconfont {
        // display: inline-block;
        width: 20rpx;
        height: 15rpx;
        position: absolute;
        top: -2px;
        right: 18px;
        color: #4a4a4a;
      }
      .down {
        top: 3px;
      }
    }
    li.active {
      .activeTwo {
        color: red;
      }
    }
    li:last-child {
      position: relative;
      border-right: none;
      display: flex;
      justify-content: center;
    }
    .active {
      background-color: #eaeaea;
    }
  }
}

// 优惠商品
.discounts {
  height: 200px;
  padding: 20rpx;
  .gift {
    height: 200px;
    margin-bottom: 10px;
    .content {
      height: 155px;
      background-color: #fbfbfb;
      border: 4rpx #e43949 solid;
      border-top-left-radius: 20rpx;
      border-top-right-radius: 20rpx;
      h4 {
        color: #222222;
        font-weight: 600;
        height: 40px;
        margin-left: 15px;
        line-height: 40px;
        font-size: 16px;
        border-bottom: 1px solid #e6e6e6;
      }
      .mcdonald {
        top: 8px;
        position: relative;
        margin-bottom: 60px;
        .logo {
          position: absolute;
          display: inline-block;
          width: 23px;
          height: 23px;
          // background-color: #b22923;
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
          color: #f46403;
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
        text-decoration: line-through;
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

// 售罄样式
.sellOut {
  height: 200px;
  padding: 0 20rpx;
  .gift {
    height: 200px;
    .content {
      height: 120px;
      background-color: #f7f7f7;
      border: 4rpx #848484 solid;
      border-top-left-radius: 20rpx;
      border-top-right-radius: 20rpx;
      h4 {
        color: #848484;
        font-weight: 600;
        height: 40px;
        margin-left: 15px;
        line-height: 40px;
        font-size: 16px;
        border-bottom: 1px solid #e2e2e2;
      }
      .mcdonald,
      .uniq {
        position: relative;
        .logo {
          position: absolute;
          left: 16px;
          display: inline-block;
          width: 20px;
          height: 20px;
          background-color: #b22923;
          text-align: center;
          border-radius: 3px;
          top: 5px;
          // position: absolute;
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
      .uniq {
        .logo {
          top: 35px;
        }
        .shop {
          top: 35px;
          left: 46px;
        }
        .title {
          top: 35px;
          left: 103px;
        }
      }
    }
    .buy {
      height: 35px;
      background-color: #848484;
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
        color: #cccccc;
        position: absolute;
        line-height: 35px;
        left: 167rpx;
        font-size: 24rpx;
      }
      .residue {
        color: #cccccc;
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
        background-color: #969696;
        border-radius: 35rpx;
        font-size: 26rpx;
        color: #fff;
        font-weight: 600;
      }
    }
  }
}
</style>