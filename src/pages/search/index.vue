<template>
  <div class="search">
    <div
      class="bgC"
      v-show="clickIndex==0"
    >
      <input
        type="search"
        placeholder="搜索"
        @click="clickIndex=1"
      >
      <i class="iconfont">&#xeef7;</i>
    </div>
    <div
      class="bgC2"
      v-show="clickIndex==1"
    >
      <input type="search">
      <span @click="clickIndex=0">取消</span>
      <i class="iconfont">&#xeef7;</i>
    </div>
    <ul v-show="contentIndex==0">
      <li>麦当劳</li>
      <li>麦片</li>
      <li>麦芽糖</li>
    </ul>
    <img
      src="/static/image/404.png"
      alt=""
      v-show="contentIndex==1"
    >
    <div
      class="text"
      v-show="contentIndex==1"
    >没有找到该礼包</div>
    <div class="sellOut" v-show="contentIndex==2">
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
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      // 搜索点击索引
      clickIndex: 0,
      // 内容显示索引
      contentIndex: 0
    };
  }
};
</script>

<style lang="less">
page {
  width: 100%;
  height: 100%;
}
.search {
  width: 100%;
  height: 100%;
  position: relative;
  .bgC {
    width: 100%;
    height: 44px;
    background-color: #efeff4;
    padding: 10px;
    box-sizing: border-box;
    position: relative;
    input {
      background-color: #fff;
      border-radius: 5px;
      text-align: center;
      font-size: 13px;
      color: #c3c3c3;
    }
    i {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-200%, -50%);
      z-index: 10;
      color: #c3c3c3;
      font-size: 16px;
    }
  }
  .bgC2 {
    width: 100%;
    height: 44px;
    background-color: #efeff4;
    padding: 10px 50px 10px 10px;
    box-sizing: border-box;
    position: relative;
    input {
      background-color: #fff;
      border-radius: 5px;
    }
    span {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 15px;
      color: #e54f5e;
    }
    i {
      position: absolute;
      top: 50%;
      left: 20px;
      transform: translateY(-50%);
      z-index: 10;
      color: #c3c3c3;
      font-size: 16px;
    }
  }
  ul {
    width: 100%;
    li {
      width: 100%;
      height: 44px;
      background-color: #fff;
      border-bottom: 1px solid #eeeeee;
      margin-left: 15px;
      line-height: 44px;
      font-size: 13px;
      color: #989898;
    }
  }
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 101px;
    height: 100px;
  }
  .text {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 15px;
    color: #aaaaaa;
  }
  .sellOut {
    height: 200px;
    padding: 0 20rpx;
    .gift {
      height: 200px;
      .content {
        height: 120px;
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
          border-bottom: 1px solid #e43949;
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
          color: #cccccc;
          position: absolute;
          line-height: 35px;
          left: 167rpx;
          font-size: 24rpx;
          text-decoration: line-through;
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
          background-color: #fff000;
          border-radius: 35rpx;
          font-size: 26rpx;
          color: #e43949;
          font-weight: 600;
        }
      }
    }
  }
}
</style>