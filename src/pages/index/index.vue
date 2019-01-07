<template>
  <div class="index">
    <!-- 轮播图 -->
    <div class="swiper">
      <swiper indicator-dots autoplay circular>
              <swiper-item>
                  <image mode="aspectFill" src="/static/image/1.jpg"></image>
              </swiper-item>
              <swiper-item>
                  <image mode="aspectFill" src="/static/image/2.jpg"></image>
              </swiper-item>
              <swiper-item>
                  <image mode="aspectFill" src="/static/image/3.jpg"></image>
              </swiper-item>
      </swiper>
    </div>
    <!-- 分类 -->
    <div class="tap-category">
      <ul>
        <li class="item" :class="{active:selectedIndex==0}"  @click="selectedIndex=0" >推荐</li>
        <li class="item" :class="{active:selectedIndex==1}"  @click="selectedIndex=1">最新</li>
        <li class="item" :class="{active:selectedIndex==2}"  @click="selectedIndex=2">人气</li>
        <li class="item" :class="{active:selectedIndex==3}"  @click="selectedIndex=3;isUp=!isUp">价格
          <i class="iconfont up" :class="{activeTwo:isUp}">&#xe74c;</i>
          <i class="iconfont down" :class="{activeTwo:!isUp}">&#xe7ff;</i>
        </li>
      </ul>
    </div>
    <div class="tap-content">
      <div class="item" v-show="selectedIndex==0">
            <!-- 优惠商品 -->
    <div class="discounts" @tap="childBag">
      <div class="gift">
        <div class="content">
          <h4>儿童单人乐高体验课礼包</h4>
          <div class="mcdonald">
            <div class="logo">
            <img src="/static/image/m-icon.png" alt="">
            </div>
            <span class="shop">[麦当劳]</span>
            <span class="title">麦辣鸡腿堡一个+薯条一份+可乐一杯</span>
          </div>
          <div class="uniq">
            <div class="logo">
            <img src="/static/image/m-icon.png" alt="">
          </div>
            <span class="shop">[优衣库]</span>
            <span class="title">麦辣鸡腿堡一个+薯条一份+可乐一杯</span>
          </div>
          <div class="zshiyou">
            <div class="logo">
            <img src="/static/image/m-icon.png" alt="">
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
    </div>
        <div class="sellOut">
      <div class="gift">
        <div class="content">
          <h4>儿童单人乐高体验课礼包</h4>
          <div class="mcdonald">
            <div class="logo">
            <img src="/static/image/m-icon.png" alt="">
          </div>
            <span class="shop">[麦当劳]</span>
            <span class="title">麦辣鸡腿堡一个+薯条一份+可乐一杯</span>
          </div>
          <div class="uniq">
            <div class="logo">
            <img src="/static/image/m-icon.png" alt="">
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
    </div>
      </div>
      <div class="item" v-show="selectedIndex==1">一颗牙疼</div>
      <div class="item" v-show="selectedIndex==2">添添宝贝猪</div>
      <div class="item" v-show="selectedIndex==3">蚩梦</div>
    </div>

  </div>
</template>

<script>
export default {
  data:function(){
    return {
      // 选中的li
      selectedIndex:0,
      // 箭头
      isUp:false
    }
  },
  methods:{
    childBag(){
      wx.navigateTo({ url: '/pages/childBag/main' });
    },
  }
}
</script>

<style lang="less">
// 轮播图
  .swiper {
    image{
      width: 100%;
      height: 100%;
    }
  }
  // 分类
  .tap-category {
    ul {
      display: flex;
      height: 40px;
      background-color: #fafafa;
      text-align: center;
      line-height: 40px;
      li{
        border-right: 2rpx solid #eaeaea;
        flex:4;
        height: 40px;
        color:#4a4a4a;
        
        .iconfont{
          // display: inline-block;
          width: 20rpx;
          height: 15rpx;
          position: absolute;
          top:-2px;
          right: 18px;
          color:#4a4a4a;
        }
        .down{
            top: 3px;
          }
      }
      li.active{
        .activeTwo{
            color: red;
          }
      }
      li:last-child{
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
  .discounts{
    height: 200px;
    padding: 20rpx;
    .gift{
      height: 200px;
      .content{
        height: 155px;
        background-color: #fffbec;
        border: 4rpx #e43949 solid;
        border-top-left-radius: 20rpx;
        border-top-right-radius: 20rpx;
        h4{
          color:#e43949;
          font-weight: 600;
          height: 40px;
          margin-left: 15px;
          line-height: 40px;
          font-size: 16px;
          border-bottom: 1px solid #fad8cf;
        }
        .mcdonald, .uniq, .zshiyou{
          position: relative;
                  .logo{
                    position: absolute;
                    display: inline-block;
          width: 23px;
          height: 23px;
          background-color: #b22923;
          text-align: center;
          border-radius: 3px;
          left:16px;
          top: 5px;
          img{
            width: 18px;
            height: 18px;
            line-height: 18px;
          }
        }
          margin-top: 8px;
          .shop{
            position: absolute;
            top:5px;
            font-size: 13px;
          }
          .title{
            position: absolute;
            top:5px;
            font-size: 13px;
          }
        }
        .mcdonald{
          .shop{
            left: 46px;
          }
          .title{
            left: 103px;
          }
        }
        .uniq{
          .logo{
            top:37px;
          }
          .shop{
            top:37px;
            left: 46px;
          }
          .title{
            top:37px;
            left: 103px;
          }
        }
        .zshiyou{
          .logo{
            top:67px;
          }
          .shop{
            top:67px;
            left: 46px;
          }
          .title{
            top:67px;
            left: 103px;
          }
        }
      }
      .buy{
        height: 35px;
        background-color: #e43949;
        position: relative;
        border-bottom-left-radius: 20rpx;
        border-bottom-right-radius: 20rpx;
        .price{
          position: absolute;
          left: 35rpx;
          line-height: 35px;
          color: #fff;
          font-size: 30rpx;
          font-weight: 600;
        }
        .oldPrice{
          color:#f3b6ba;
          position: absolute;
          line-height: 35px;
          left: 167rpx;
          font-size: 24rpx;
        }
        .residue{
          color:#f3b6ba;
          position: absolute;
          line-height: 35px;
          left: 297rpx;
          font-size: 24rpx;
        }
        button{
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
  .sellOut{
    height: 200px;
    padding: 0 20rpx;
    .gift{
      height:200px;
      .content{
        height: 120px;
        background-color: #f7f7f7;
        border: 4rpx #848484 solid;
        border-top-left-radius: 20rpx;
        border-top-right-radius: 20rpx;
        h4{
          color:#848484;
          font-weight: 600;
          height: 40px;
          margin-left: 15px;
          line-height: 40px;
          font-size: 16px;
          border-bottom: 1px solid #e2e2e2;
        }
        .mcdonald, .uniq{
          position: relative;
          .logo{
            position: absolute;
            left:16px;
            display: inline-block;
            width: 20px;
            height: 20px;
            background-color: #b22923;
            text-align: center;
            border-radius: 3px;
            top:5px;
          // position: absolute;
          img{
            width: 18px;
            height: 18px;
            line-height: 18px;
          }
        }
          margin-top: 8px;
          .shop{
            position: absolute;
            top:5px;
            font-size: 13px;
          }
          .title{
            position: absolute;
            top:5px;
            font-size: 13px;
          }
        }
        .mcdonald{
          .shop{
            left: 46px;
          }
          .title{
            left: 103px;
          }
        }
        .uniq{
          .logo{
            top:35px;
          }
          .shop{
            top:35px;
            left: 46px;
          }
          .title{
            top:35px;
            left: 103px;
          }
        }
      }
      .buy{
        height: 35px;
        background-color: #848484;
        position: relative;
        border-bottom-left-radius: 20rpx;
        border-bottom-right-radius: 20rpx;
        .price{
          position: absolute;
          left: 35rpx;
          line-height: 35px;
          color: #fff;
          font-size: 30rpx;
          font-weight: 600;
        }
        .oldPrice{
          color:#cccccc;
          position: absolute;
          line-height: 35px;
          left: 167rpx;
          font-size: 24rpx;
        }
        .residue{
          color:#cccccc;
          position: absolute;
          line-height: 35px;
          left: 297rpx;
          font-size: 24rpx;
        }
        button{
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