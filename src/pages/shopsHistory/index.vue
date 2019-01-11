<template>
  <div class="shopsHistory">
    <div class="header">
      <ul class="first">
        <li
          class="item"
          :class="{active:selectIndex==0}"
          @click="selectIndex=0"
        >今天</li>
        <li
          class="item"
          :class="{active:selectIndex==1}"
          @click="selectIndex=1"
        >昨天</li>
        <li
          class="item"
          :class="{active:selectIndex==2}"
          @click="selectIndex=2"
        >
          <img
            src="/static/image/shops/historylogo.png"
            alt=""
          ><span>2019年01月</span>
          <ul v-show="selectIndex==2">
            <li class="last"><img
                src="/static/image/shops/historylogo.png"
                alt=""
              ><span>自定义</span></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="historyContent">
      <div class="history" v-show="selectIndex==0">
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
        <div class="content">
          <div class="title">麦辣鸡腿堡1个+薯条一份</div>
          <span class="time">2018/12/28 11:29</span>
        </div>
      </div>
      <div class="history" v-show="selectIndex==0"></div>
      <div class="history" v-show="selectIndex==0"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      // 点击索引
      selectIndex: 0
    };
  },
  methods: {}
};
</script>

<style lang="less">
page{
  width: 100%;
  height: 100%;
  background-color: #efeff4;
}
.shopsHistory {
  .header {
    width: 100%;
    .first {
      width: 100%;
      display: flex;
      height: 50px;
      border-bottom: 1px solid #cccccc;
      li {
        background-color: #fafafa;
      }
      .active {
        background-color: #eaeaea;
      }
      .item {
        flex: 3;
        height: 50px;
        float: left;
        text-align: center;
        line-height: 50px;
        font-size: 15px;
        color: #353535;
        border-right: 1px solid #cccccc;
        &:last-child {
          border-right: none;
        }
        img {
          width: 13px;
          height: 13px;
        }
        span {
          margin-left: 3px;
        }
        .last {
          margin-top: 5px;
        }
      }
    }
  }
  .historyContent {
    .history {
      padding: 0 10px;
      box-sizing: border-box;
      .content {
        margin-top: 10px;
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #cbd7e0;
        background-color: #efeff4;
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
  }
}
</style>
