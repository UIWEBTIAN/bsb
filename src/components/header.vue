<template>
  <div class="index">
    <div class="top">
      <i class="iconfont goBack">&#xe614;</i>
      <i class="iconfont home">&#xe626;</i>
      <span>百商邦</span>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less">
  page{
  width: 100%;
  
  height: 100%;
}
.index{
  width: 100%;
  height: 100%;
  padding-top: 70px;
}
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
    font-size: 30px;
  }
  .home{
    position: absolute;
    top: 35%;
    left: 60px;
    font-size: 38px;
  }
}
</style>

