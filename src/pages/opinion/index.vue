<template>
  <div class="opinion">
    <textarea name id placeholder="写下您的宝贵建议"></textarea>
    <div class="logout" @click="save">
      <button>提交</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
page {
  background-color: #efeff4;
}
.opinion {
  width: 100%;
  padding-top: 15px;
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