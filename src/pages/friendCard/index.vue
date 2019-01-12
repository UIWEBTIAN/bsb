<template>
  <div class="friendCard">
    <img
      src="/static/image/cardBG.png"
      alt=""
      class="cardBG"
    >
    <img
      src="/static/image/装饰.png"
      alt=""
      class="show"
    >
    <img
      src="/static/image/配图.png"
      alt=""
      class="hongbao"
    >
    <div class="content">
      <span class="title">您的好友: <span class="name">一颗牙疼</span></span>
      <div>赠送你一张券</div>
      <span class="top-left"></span>
      <span class="top-right"></span>
      <span class="bottom-left"></span>
      <span class="bottom-right"></span>
    </div>
    <button>立即领取</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
page {
  width: 100%;
  height: 100%;
  .friendCard {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .cardBG {
      width: 100%;
      height: 100%;
    }
    .show {
      position: absolute;
      top: 80px;
      left: 50%;
      transform: translateX(-50%);
      width: 270px;
      height: 170px;
    }
    .hongbao {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 177px;
      height: 135px;
      top: 108px;
    }
    .content {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 269px;
      width: 290px;
      height: 90px;
      background-color: #fff;
      overflow: hidden;
      .title {
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        color: #333333;
        font-size: 16px;
        .name {
          color: #e34762;
          font-size: 16px;
        }
      }
      div{
        font-size: 12px;
        color: #666666;
        position: absolute;
        bottom: 28px;
        left: 50%;
        transform: translateX(-50%);
      }
      .top-left,.top-right,.bottom-left,.bottom-right{
        position: absolute;
        width: 18px;
        height: 18px;
        background-color: #fee3c1;
        border-radius: 50%;
      }
      .top-left{
        top: -8px;
        left: -8px;
      }
      .top-right{
         top: -8px;
          right: -8px;
      }
      .bottom-left{
        bottom: -8px;
        left: -8px;
      }
      .bottom-right{
        bottom: -8px;
        right: -8px;
      }
    }
    button{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 160px;
      width: 290px;
      height: 45px;
      background-color: #df093b;
      font-size: 16px;
      color: #fff;
    }
  }
}
</style>