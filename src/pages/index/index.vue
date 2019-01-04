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
    <div class="category">
      <ul>
        <li :class="current == 0?'active':''" data-current="0" @click="select" >推荐</li>
        <li :class="current == 1?'active':''" data-current="1" @click="select">最新</li>
        <li :class="current == 2?'active':''" data-current="2" @click="select">人气</li>
        <li :class="current == 3?'active':''" data-current="3" @click="select">价格</li>
      </ul>
    </div>
    <!-- 优惠商品 -->
    <div class="discounts" @tap="childBag">
      <div class="gift">
        <div class="content">
          <h4>儿童单人乐高体验课礼包</h4>
          <div class="mcdonald">
            <i></i>
            <span class="shop">[麦当劳]</span>
            <span class="title">麦辣鸡腿堡一个+薯条一份+可乐一杯</span>
          </div>
          <div class="uniq">
            <i></i>
            <span class="shop">[优衣库]</span>
            <span class="title">麦辣鸡腿堡一个+薯条一份+可乐一杯</span>
          </div>
          <div class="zshiyou">
            <i></i>
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
            <i></i>
            <span class="shop">[麦当劳]</span>
            <span class="title">麦辣鸡腿堡一个+薯条一份+可乐一杯</span>
          </div>
          <div class="uniq">
            <i></i>
            <span class="shop">[优衣库]</span>
            <span class="title">麦辣鸡腿堡一个+薯条一份+可乐一杯</span>
          </div>
          <div class="zshiyou">
            <i></i>
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
  </div>
</template>

<script>
export default {
  data:function(){
    return {
      current:0
    }
  },
  methods:{
    childBag(){
      wx.navigateTo({ url: '/pages/childBag/main' });
    },
    select(e){
      this.current = e.target.dataset.current
    }
  }
}
</script>

<style lang="less">
// 轮播图
  .swiper {
    image{
      width: 100%;
    }
  }
  // 分类
  .category {
    ul {
      display: flex;
      height: 110rpx;
      background-color: #fafafa;
      text-align: center;
      line-height: 110rpx;
      li{
        border-right: 2rpx solid #eaeaea;
        flex:4;
        height: 110rpx;
        color:#4a4a4a;
        :last-child{
          border-right: none;
        }
      }
      .active {
          background-color: #eaeaea;
        }
    }
  }

  // 优惠商品
  .discounts{
    height: 400rpx;
    padding: 20rpx;
    .gift{
      height: 400rpx;
      .content{
        height: 320rpx;
        background-color: #fffbec;
        border: 4rpx #e43949 solid;
        border-top-left-radius: 20rpx;
        border-top-right-radius: 20rpx;
        h4{
          color:#e43949;
          font-weight: 600;
        }
        .mcdonald, .uniq, .zshiyou{
          margin-top: 30rpx;
          .shop{
            font-size: 30rpx;
          }
          .title{
            font-size: 30rpx;
          }
        }
      }
      .buy{
        height: 80rpx;
        background-color: #e43949;
        position: relative;
        border-bottom-left-radius: 20rpx;
        border-bottom-right-radius: 20rpx;
        .price{
          position: absolute;
          left: 35rpx;
          line-height: 80rpx;
          color: #fff;
          font-size: 30rpx;
          font-weight: 600;
        }
        .oldPrice{
          color:#f3b6ba;
          position: absolute;
          line-height: 80rpx;
          left: 167rpx;
          font-size: 24rpx;
        }
        .residue{
          color:#f3b6ba;
          position: absolute;
          line-height: 80rpx;
          left: 297rpx;
          font-size: 24rpx;
        }
        button{
          position: absolute;
          top: 50%;
          right: 3%;
          transform: translateY(-50%);
          width: 180rpx;
          height: 60rpx;
          line-height: 60rpx;
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
    height: 400rpx;
    padding: 20rpx;
    .gift{
      height: 400rpx;
      .content{
        height: 320rpx;
        background-color: #f7f7f7;
        border: 4rpx #848484 solid;
        border-top-left-radius: 20rpx;
        border-top-right-radius: 20rpx;
        h4{
          color:#848484;
          font-weight: 600;
        }
        .mcdonald, .uniq, .zshiyou{
          margin-top: 30rpx;
          .shop{
            font-size: 30rpx;
          }
          .title{
            font-size: 30rpx;
          }
        }
      }
      .buy{
        height: 80rpx;
        background-color: #848484;
        position: relative;
        border-bottom-left-radius: 20rpx;
        border-bottom-right-radius: 20rpx;
        .price{
          position: absolute;
          left: 35rpx;
          line-height: 80rpx;
          color: #fff;
          font-size: 30rpx;
          font-weight: 600;
        }
        .oldPrice{
          color:#cccccc;
          position: absolute;
          line-height: 80rpx;
          left: 167rpx;
          font-size: 24rpx;
        }
        .residue{
          color:#cccccc;
          position: absolute;
          line-height: 80rpx;
          left: 297rpx;
          font-size: 24rpx;
        }
        button{
          position: absolute;
          top: 50%;
          right: 3%;
          transform: translateY(-50%);
          width: 180rpx;
          height: 60rpx;
          line-height: 60rpx;
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