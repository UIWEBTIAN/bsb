<template>
  <div class="aboutUs">
        <!-- 头部 -->
    <div class="top">
      <i class="iconfont goBack" @click="goBack">&#xe614;</i>
      <span>关于我们</span>
    </div>

    <div class="message">
      <div class="text">{{content.title}}</div>
      <span>{{content.date}}</span>
      <div v-html="content.content" class="imgContent"></div>
    </div>
  </div>
</template>

<script>
import hxios from '../../utils/hxios.js'
export default {
  data:function(){
    return {
      // 内容
      content:{}
    }
  },
  onShow(){
    hxios.post('/cms_article/viewinfo',{viewCode:"ABOUT_US"}).then(res=>{
      // console.log(res);
      this.content = res.data.data
      console.log(this.content);
      
    })
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
page{
  width: 100%;
}
.aboutUs {
  // padding: 15px 10px;
  width: 100%;
  // 头部
  padding-top: 70px;
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
  .message {
    position: relative;
    top: 0px;
    left: 10px;
    width: 100%;
    .text {
      font-weight: 600;
    }
    span{
      font-size: 14px;
      color: #bfbfbf;
    }

  }
}
</style>