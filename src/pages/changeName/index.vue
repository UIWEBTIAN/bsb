<template>
  <div>
    <div class="name">
      <span class="whoName">昵称</span>
      <input type="text" class="yourName" @input="yourName">
    </div>
    <div class="logout" @click="save">
      <button>保存</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: ""
    };
  },
  methods: {
    yourName(e) {
      this.name = e.target.value;
      // console.log(e.target.value);
    },
    // 保存
    save() {
      wx.navigateTo({ url: "/pages/set/main" });
    }
  },
  mounted() {}
};
</script>

<style lang="less">
page {
  background-color: #efeff4;
}
.name {
  position: relative;
  margin-top: 30rpx;
  background-color: #fff;
  height: 85rpx;
  line-height: 85rpx;
  border-bottom: 1px solid #e5e5e5;
  .whoName {
    position: absolute;
    left: 30rpx;
  }
  .yourName {
    position: absolute;
    left: 212rpx;
    height: 85rpx;
  }
  .more {
    position: absolute;
    right: 30rpx;
    color: #c7c7cc;
    font-size: 40rpx;
  }
}
.logout {
  width: 100%;
  padding-left: 20rpx;
  padding-right: 20rpx;
  box-sizing: border-box;
  margin-top: 30px;
  button {
    background-color: #e43949;
    color: #fff;
  }
}
</style>