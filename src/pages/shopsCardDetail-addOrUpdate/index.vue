<template>
  <div class="index">
    <div class="body">
      <div class="item shopCardName">
        <span class="shopCard">卡券名称</span>
        <input
          type="text"
          placeholder="输入名称"
        >
      </div>
      <div class="item password">
        <span class="newPwd">开始使用</span>
        <span class="openDay">{{openDate}}</span>
        <picker
          mode="date"
          :value="openDate"
          @change="bindDateChange"
        ><i class="iconfont">&#xe64c;</i></picker>
      </div>
      <div class="item">
        <span class="againPwd">结束使用</span>
        <span class="overDay">{{overDate}}</span>
        <picker
          mode="date"
          :value="overDate"
          @change="overDateChange"
        ><i class="iconfont">&#xe64c;</i>
        </picker>
      </div>
      <div class="item useRule">
        <span class="messageVerify ">使用规则</span>
        <input
          type="text"
          placeholder="输入规则"
        >
      </div>
      <div class="logout">
        <button>立即添加/修改</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data: function() {
    return {
      // 日期开始时间
      openDate: "请选择时间",
      // 日期结束时间
      overDate: "请选择时间"
    };
  },
  methods: {
    // 日期开始时间
    bindDateChange(e) {
      // console.log(e);
      this.openDate = e.mp.detail.value;
    },
    // 日期结束时间
    overDateChange(e) {
      this.overDate = e.mp.detail.value;
    }
  }
};
</script>

<style lang="less">
page {
  background-color: #efeff4;
  .index {
    .setHeader {
      position: relative;
      margin-top: 30rpx;
      background-color: #fff;
      height: 108rpx;
      line-height: 108rpx;
      .update {
        position: absolute;
        left: 30rpx;
        color: #000000;
      }
      img {
        width: 35px;
        height: 35px;
        position: absolute;
        right: 40px;
        top: 50%;
        transform: translateY(-50%);
      }
      .more {
        position: absolute;
        right: 30rpx;
        color: #c7c7cc;
        font-size: 40rpx;
      }
    }
    .body {
      margin-top: 30rpx;
      .item {
        position: relative;
        background-color: #fff;
        height: 85rpx;
        line-height: 85rpx;
        border-bottom: 1px solid #e5e5e5;

        .shopCard,
        .messageVerify,
        .newPwd,
        .againPwd {
          position: absolute;
          left: 30rpx;
        }
        input {
          position: absolute;
          left: 106px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 16px;
          color: #c8c8c8;
        }
        .overDay {
          position: absolute;
          left: 110px;
          color: #c7c7cc;
          font-size: 18px;
        }
        picker {
          position: absolute;
          right: 10px;
          i {
            color: #c7c7cc;
          }
        }
      }
      .shopCardName,
      .password,
      .useRule {
        margin-top: 30rpx;
      }
    }

    .password {
      position: relative;
      margin-top: 30rpx;
      background-color: #fff;
      height: 85rpx;
      line-height: 85rpx;
      .openDay {
        position: absolute;
        left: 110px;
        color: #c7c7cc;
        font-size: 18px;
      }
      .setPwd {
        position: absolute;
        left: 30rpx;
      }
      picker {
        position: absolute;
        right: 10px;
        i {
          color: #c7c7cc;
        }
      }
    }
    .logout {
      margin-top: 40px;
      width: 100%;
      padding-left: 20rpx;
      padding-right: 20rpx;
      padding-bottom: 10px;
      box-sizing: border-box;

      button {
        background-color: #e43949;
        color: #fff;
      }
    }
  }
}
</style>