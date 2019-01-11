<template>
  <div class="homePage">
    <div class="top">
      <img
        src="/static/image/storelogo.png"
        alt=""
        class="logo"
      >
      <div class="title">豪客来 (旺南世贸中心店)</div>
      <div class="search">
        <input type="text">
        <img
          src="/static/image/shops/hexiaoma.png"
          alt=""
        >
        <span class="enter" @click="selectIndex=1">确 定</span>
      </div>
      <div class="information">
        <div class="left">
          <img
            src="/static/image/shops/hxm1.png"
            alt=""
          >
          <span>商家资料</span>
        </div>
        <div class="right">
          <img
            src="/static/image/shops/hxm2.png"
            alt=""
          >
          <span>商家卡券</span>
        </div>
      </div>
      <div class="line"></div>
    </div>
    <div class="bottom">
      <span class="history">核销记录</span>
      <span
        class="more"
        @click="goHistory"
      >查看更多 ></span>
      <div class="content">
        <div class="title">麦辣鸡腿堡1个+薯条一份</div>
        <span class="time">2018/12/28 11:29</span>
      </div>
      <div class="content">
        <div class="title">麦辣鸡腿堡1个+薯条一份</div>
        <span class="time">2018/12/28 11:29</span>
      </div>
      <div class="content">
        <div class="title">麦辣鸡腿堡1个+薯条一份</div>
        <span class="time">2018/12/28 11:29</span>
      </div>
    </div>
    <!-- 核销码 -->
    <div
      class="qrCode"
      v-show="selectIndex == 1"
    >
      <div class="qrBox">
        <span class="line"></span>
        <span class="title">卡券核销</span>
        <div class="top">
          <div class="card">100元代金券</div>
          <span>核销码</span>
          <div class="hxNumber">2209325871469</div>
        </div>
        <div class="content">
          <div class="merchantName"><span class="merchant">核销商家 :&nbsp;&nbsp;</span><span class="name">麦当劳 (科技路得来速店)</span></div>
          <div class="merchantAddress"><span class="merchant">商家地址 :&nbsp;&nbsp;</span><span class="address">东莞市南城街道科技路城市风景街区2号楼1层</span></div>
          <div class="merchantUsed"><span class="merchant">使用条件 :&nbsp;&nbsp;</span><span class="used">2018.12.20-2019.03.13, 周一至周日全天, 不与店铺优惠叠加</span></div>
        </div>
        <div class="bottom">
          <span class="goback" @click="selectIndex=0">返回</span>
          <span class="nowHX">立即核销</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      // 显示索引
      selectIndex:0
    };
  },
  methods: {
    goHistory() {
      wx.navigateTo({ url: "/pages/shopsHistory/main" });
    }
  }
  // onLoad(){
  //   wx.request({
  //     url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET', //开发者服务器接口地址",
  //     data: {
  //       grant_type:"client_credential",
  //       appid:"wx301ede8add55beaf",
  //       secret:"ec2e9f59cdd90161949b7cffc94a8fec"
  //       }, //请求的参数",
  //     method: 'GET',
  //     dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
  //     success: res => {
  //       console.log(res);

  //     },
  //     fail: () => {},
  //     complete: () => {}
  //   });
  // }
};
</script>

<style lang="less">
page {
  background-color: #6699fa;
  width: 100%;
  height: 100%;
}
.homePage {
  position: relative;
  width: 100%;
  height: 100%;
  .top {
    width: 100%;
    height: 60%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 50px;
    .logo,
    .title,
    .search,
    .information {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    .logo {
      width: 69px;
      height: 69px;
    }
    .title {
      top: 90px;
      font-size: 13px;
      color: #fff;
    }
    .search {
      top: 142px;
      width: 288px;
      input {
        width: 215px;
        height: 40px;
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
        background-color: #5484c9;
        border: 1px solid #86b6fc;

        // position: absolute;
        // left: 0;
      }
      img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 88px;
        width: 20px;
        height: 19px;
        display: inline-block;
        z-index: 10;
      }
      .enter {
        position: absolute;
        width: 71px;
        height: 42px;
        right: 0;
        top: 0;
        line-height: 40px;
        text-align: center;
        background-color: #6cb4fd;
        font-size: 15px;
        color: #fff;
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
      }
    }
    .information {
      bottom: 140px;
      width: 100%;
      .left,
      .right {
        position: absolute;
        img {
          width: 17px;
          height: 13px;
        }
        span {
          margin-left: 5px;
          color: #ffffff;
          font-size: 14px;
        }
      }
      .left {
        left: 78px;
      }
      .right {
        right: 78px;
      }
    }
    .line {
      position: absolute;
      width: 1px;
      background-color: #fff;
      height: 15px;
      left: 50%;
      transform: translateX(-50%);
      bottom: 117px;
    }
  }
  .bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40%;
    background-color: #e7f5ff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 15px;
    box-sizing: border-box;
    .history {
      font-size: 14px;
      color: #a1a8ad;
    }
    .more {
      float: right;
      color: #a1a8ad;
      font-size: 12px;
    }
    .content {
      margin-top: 10px;
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #cbd7e0;
      .title {
        font-size: 13px;
        color: #444444;
      }
      .time {
        font-size: 12px;
        color: #a1a8ad;
      }
    }
  }
  // 卡券核销码
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
      height: 410px;
      background-color: #fff;
      border-radius: 5px;
      padding: 0 10px;
      box-sizing: border-box;
      z-index: 999;
      .line{
        position: absolute;
        left: 0;
        top: 19px;
        width: 4px;
        height: 15px;
        background-color: #e43949;
      }
      .title{
        position: absolute;
        top: 15px;
        left: 15px;
        font-size: 16px;
        color: #575757;
      }
      .top{
        position: absolute;
        top: 91px;
        left: 50%;
        transform: translateX(-50%);
        width: 166px;
        height: 85px;
        text-align: center;
        .card{
          margin-bottom: 25px;
          font-size: 27px;
          color: #0a0a0a;
          font-weight: bold;
        }
        span{
          font-size: 14px;
          color: #686868;
        }
        .hxNumber{
          font-size: 14px;
          color: #e43949;
        }
      }
      .content{
        position: absolute;
        top: 231px;
        width: 100%;
        height: 130px;
        background-color: #f2f2f2;
        right: 0;
        padding: 10px;
        box-sizing: border-box;
        font-size: 13px;
        color: #666666;
        .merchantName,.merchantAddress,.merchantUsed{
          display: flex;
          margin-bottom: 10px;
          .merchant{
            width: 67px;
          }
          .name,.address,.used{
            flex: 1;
          }
        }
      }
      .bottom{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 49px;
        background-color: #fff;
        right: 0;
        display: flex;
        
        .goback,.nowHX{
          flex: 1; 
          text-align: center;
        line-height: 23px;
        font-size: 15px;
        }
        .goback{
          color: #666666;
        }
        .nowHX{
          color: #e43949;
        }
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
}
</style>
