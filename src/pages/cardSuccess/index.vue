<template>
  <div class="friendCard">
    <img
      src="/static/image/cardBG.png"
      alt=""
      class="cardBG"
    >
    <div class="detailBox">
      <div class="top">
        <div class="title">麦当劳</div>
        <div class="money">50元代金券</div>
      </div>
      <div class="content">
        <div class="people">赠送人: <span class="name">一颗牙疼</span></div>
        <div class="time">有效期至: <span class="date">2018.01.20</span></div>
        <div class="use">使用条件: <span class="allDay">满100可用/不与店铺优惠叠加</span></div>
      </div>
      <div class="logo">

        <img
          src="/static/image/gift.png"
          alt=""
          class="logo"
        >
      </div>
    </div>
    <div class="bottom-title">卡券已经放入您的账户</div>
    <button>立即查看</button>
    <span class="left-yuan"></span>
    <span class="right-yuan"></span>
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
    .detailBox {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 53px;
      background-color: #fff;
      height: 255px;
      width: 290px;
      border-top: 1px dashed #fae0c0;
      border-bottom: 1px dashed #fae0c0;
      // overflow: hidden;
      .top {
        text-align: center;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-bottom: 1px dashed #e0e0e0;
        .title {
          font-size: 15px;
          color: #a1a1a1;
        }
        .money {
          font-size: 27px;
          color: #0a0a0a;
        }
      }
      .content {
        height: 50%;
        background-color: #fff;
        padding: 0 15px;
        .people {
          margin-top: 22px;
          font-size: 13px;
          color: #000000;
          .name {
            font-size: 13px;
            color: #666666;
          }
        }
        .time {
          margin-top: 10px;
          font-size: 13px;
          color: #000000;
          .date {
            font-size: 13px;
            color: #666666;
          }
        }
        .use {
          margin-top: 10px;
          font-size: 13px;
          color: #000000;
          .allDay {
            font-size: 13px;
            color: #666666;
          }
        }
      }
      .logo {
        position: absolute;
        width: 45px;
        height: 45px;
        background-color: #fff;
        border-radius: 50%;
        top: -22px;
        left: 50%;
        transform: translateX(-50%);
        img {
          width: 40px;
          height: 40px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
    .bottom-title {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      color: #e64352;
      bottom: 220px;
      font-size: 13px;
    }
    .left-yuan,.right-yuan{
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #f8e6c6;
      position: absolute;
      top: 173px;
    }
    .left-yuan{
      left: 33px;
    }
    .right-yuan{
      right: 33px;
    }
    button {
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