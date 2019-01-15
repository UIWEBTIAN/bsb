<template>
  <div class="opinion">
        <!-- 头部 -->
    <div class="top">
      <i class="iconfont goBack" @click="goBack">&#xe614;</i>
      <span>意见反馈</span>
    </div>
    <textarea name id placeholder="写下您的宝贵建议"></textarea>
    <div class="logout" @click="save">
      <button>提交</button>
    </div>
  </div>
</template>

<script>
export default {
  data:function(){
    return {

    }
  },
  methods:{
        // 返回上一页
    goBack(){
      wx.navigateBack({
        delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
      });
    },
  }
};
</script>

<style lang="less">
page {
  background-color: #efeff4;
}
.opinion {
  width: 100%;
  padding-top: 85px;
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

  textarea {
    width: 100%;
    background-color: #fff;
    height: 187px;
    color: #bfbfbf;
    padding-top: 10px;
    padding-left: 10px;
    font-size: 15px;
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
}
</style>