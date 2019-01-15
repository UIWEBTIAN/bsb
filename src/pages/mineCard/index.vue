<template>
  <div class="index">
        <!-- 头部 -->
    <div class="top">
      <i class="iconfont goBack" @click="goBack">&#xe614;</i>
      <span>我的卡券</span>
    </div>
    <div class="category">
      <ul>
        <li class="item" :class="{active:selectedIndex==0}" @click="selectedIndex=0">未使用</li>
        <li class="item" :class="{active:selectedIndex==1}" @click="selectedIndex=1">已使用</li>
        <li class="item" :class="{active:selectedIndex==2}" @click="selectedIndex=2">已过期</li>
      </ul>
    </div>
    <div class="tap-content">
      <div class="item noUse" v-show="selectedIndex==0">
        <div class="content-box">
          <div class="giftBag" v-for="(item, index) in usable" :key="index">
            <div class="header" @click="goCardDetail(index)">
              <i></i>
              <span class="title">[{{item.merchantName}}]</span><span class="rule">{{item.itemTitle}}</span>
              <img :src="item.merchantLogo" alt>
              <div class="time">有效期至 : {{item.itemDeadline}}</div>
            </div>
            <div class="footer" :class="{showMore:item.isShow}">
              <span class="show" >使用条件 : {{item.itemRule}}</span>&nbsp&nbsp
              <span @click="show(index)" class="more">∨</span>
            </div>
          </div>
          <!-- <div class="giftBag">
            <div class="header" @click="goCardDetail">
              <i></i>
              <span class="title">[麦当劳] 麦辣鸡腿堡1个+薯条一份</span>
              <img src="/static/image/qrCode.png" alt>
              <div class="time">有效期至 : 2019.01.18</div>
            </div>
            <div class="footer">
              <span class="show">使用条件 : 仅限于周一到周五使用,节假日除外,单笔消费</span>&nbsp&nbsp
              <span @tap="show" class="more">∨</span>
              <span class="hide">满100元可用,不可叠加使用</span>
            </div>
          </div>
          <div class="giftBag">
            <div class="header" @click="goCardDetail">
              <i></i>
              <span class="title">[麦当劳] 麦辣鸡腿堡1个+薯条一份</span>
              <img src="/static/image/qrCode.png" alt>
              <div class="time">有效期至 : 2019.01.18</div>
            </div>
            <div class="footer">
              <span class="show">使用条件 : 仅限于周一到周五使用,节假日除外,单笔消费</span>&nbsp&nbsp
              <span @tap="show" class="more">∨</span>
              <span class="hide">满100元可用,不可叠加使用</span>
            </div>
          </div> -->
        </div>
      </div>
      <div class="item use" v-show="selectedIndex==1">
        <div class="giftBag">
          <div class="header" @click="goCardDetail">
            <i></i>
            <span class="title">[麦当劳] 麦辣鸡腿堡1个+薯条一份</span>
            <img src="/static/image/use.png" alt>
            <div class="time">有效期至 : 2019.01.18</div>
          </div>
          <div class="footer">
            <span class="show">使用条件 : 仅限于周一到周五使用,节假日除外,单笔消费</span>&nbsp&nbsp
            <span @tap="show" class="more">∨</span>
            <span class="hide">满100元可用,不可叠加使用</span>
          </div>
        </div>
      </div>
      <div class="item updated" v-show="selectedIndex==2">
        <div class="giftBag">
          <div class="header" @click="goCardDetail">
            <i></i>
            <span class="title">[麦当劳] 麦辣鸡腿堡1个+薯条一份</span>
            <img src="/static/image/updated.png" alt>
            <div class="time">有效期至 : 2019.01.18</div>
          </div>
          <div class="footer">
            <span class="show">使用条件 : 仅限于周一到周五使用,节假日除外,单笔消费</span>&nbsp&nbsp
            <span @tap="show" class="more">∨</span>
            <span class="hide">满100元可用,不可叠加使用</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import hxios from '../../../src/utils/hxios.js'
export default {
  data: function() {
    return {
      // 选中的索引
      selectedIndex: 0,
      // 用户ID
      userID:0,
      // 未使用卡券
      usable:[],
      // 消费卡券ID
      consumeId:[],
      // 消费码
      consumeCode:[]
    };
  },
  methods: {
    goUseCard() {
      wx.navigateTo({ url: "/pages/userCard/main" });
    },
    // 去卡券详情页
    goCardDetail(index){
      wx.navigateTo({ url: '/pages/shopsHXM/main?consumeId='+this.consumeId[index]});
    },
    show(index){
      let item = this.usable[index]

      item.isshow = !item.isshow

      this.$set(this.usable, index, item)
    },
        // 返回上一页
    goBack(){
      wx.navigateBack({
        delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
      });
    },
  },
  onLoad(option){
     // 页面加载的时候.默认索引等于0
     console.log(option);
     if(option.index==1){
       this.selectedIndex = option.index
     }else if(option.index==2){
       this.selectedIndex = option.index
     }else if(option.index==0){
       this.selectedIndex = option.index
     }
    
  },
  onShow(){
   
    // 获取本地存储的用户ID
    wx.getStorage({
      key: '用户ID',
      success: (res) => {
        // 用户ID
        this.userID = res.data
        // console.log(this.userID);
        
        hxios.post('/member_consume/itemlist',{memberId:this.userID,status:'usable'}).then(res=>{
          console.log(res);
          
          // 未使用卡券
          this.usable = res.data.data;

          // 循环添加false属性
          this.usable.forEach(value=>{
            value.isShow = false
          })
          // console.log(this.usable);
          
          
          let arr = [];
          let array = []
          this.usable.forEach(element => {
            arr.push(element.consumeId)
            array.push(element.consumeCode)
          });
          // 消费卡券ID
          this.consumeId = arr;
          // 消费码
          this.consumeCode = array 
    })
      },
      fail: () => { },
      complete: () => { }
    })
    // 发请求

  },
  watch:{
    selectedIndex:function(newQuestion,oldQuestion){
      console.log(newQuestion);
      if(newQuestion==1){
        hxios.post('/member_consume/itemlist',{memberId:this.userID,status:"used"}).then(res=>{
          console.log(res);
        })
      }else if(newQuestion==2){
        hxios.post('/member_consume/itemlist',{memberId:this.userID,status:"expire"}).then(res=>{
          console.log(res);
        })
      }else if(newQuestion==0){
        hxios.post('/member_consume/itemlist',{memberId:this.userID,status:"usable"}).then(res=>{
          console.log(res);
        })
      }
      
    }
  }
};
</script>

<style lang="less">
page {
  background-color: #efeff4;
}
.index{
  padding-top: 70px;
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
}
ul {
  display: flex;
  li {
    text-align: center;
    flex: 3;
    background-color: #fafafa;
    height: 50px;
    line-height: 50px;
    border-right: 1px solid #cccccc;
    color: #353535;
    font-size: 15px;
  }
  :last-child {
    border-right: none;
  }
  .active {
    background-color: #eaeaea;
  }
}
.tap-content {
  padding: 30rpx 22rpx;
  .noUse,
  .use,
  .updated {
    .giftBag {
      background-color: #fafafa;
      margin-bottom: 20rpx;
      .header {
        height: 132rpx;
        position: relative;
        border-top-right-radius: 10rpx;
        border-top-left-radius: 10rpx;
        .title {
          position: absolute;
          left: 16px;
          font-size: 30rpx;
          color: #222222;
          top: 15rpx;
        }
        .rule{
          position: absolute;
          left: 73px;
          font-size: 30rpx;
          color: #222222;
          top: 15rpx;
        }
        img {
          position: absolute;
          top: 15rpx;
          right: 16px;
          width: 17px;
          height: 17px;
        }
        .time {
          font-size: 23rpx;
          position: absolute;
          top: 68rpx;
          left: 32rpx;
          color: #888888;
        }
      }
      .footer {
        height: 55rpx;
        background-color: #e43949;
        font-size: 24rpx;
        color: #f2f2f2;
        line-height: 45rpx;
        border-bottom-right-radius: 10rpx;
        border-bottom-left-radius: 10rpx;
        position: relative;
        padding: 0 20rpx;
        box-sizing: border-box;
        .show {
          display: inline-block;
          font-size: 12px;
          width: 317px;
          overflow: hidden;
          // text-overflow:ellipsis;
          white-space: nowrap;
        }
        .showMore {
        height: 50px;
        overflow: visible;
        white-space: normal;
        .show {
          overflow: visible;
          // text-overflow:ellipsis;
          white-space: normal;
        }
      }
        .more {
          font-size: 40rpx;
          position: absolute;
          top: 0px;
          right: 5px;
        }
        .hide {
          display: none;
        }
      }
    }
  }
  .use {
    .giftBag {
      .header {
        img {
          width: 65px;
          height: 49px;
        }
      }
      .footer {
        background-color: #848484;
      }
    }
  }
  .updated{
    .giftBag{
      .header{
        img {
          width: 65px;
          height: 49px;
        }
      }
    }
  }
}
</style>