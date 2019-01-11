<template>
  <div class="map">
    <map
      id="map"
      :longitude='merchantLon'
      :latitude='merchantLat'
      scale="14"
      :markers='markers'
      bindcontroltap="controltap"
      @markertap="go"
      bindregionchange="regionchange"
      show-location
    ></map>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      // 商户位置经度
      merchantLon: 0,
      // 商户位置纬度
      merchantLat: 0,
      // 商户地址
      address:"",
      // 商户名
      shopName:"",
      // 标记点
      markers: []

    };
  },
  onLoad(option) {
    // 商家位置的经度
    this.merchantLon = parseFloat(option.merchantLon);
    // 商家位置的纬度
    this.merchantLat = parseFloat(option.merchantLat);
    // 商家位置
    this.address = option.address;
    // 商户名
    this.shopName = option.shopName
    wx.getLocation({
      type: "wgs84", //默认为 wgs84 返回 gps 坐标，gcj02 返回可用于wx.openLocation的坐标,
      success: res => {
        console.info("getLocation success: ", res);
        const latitude = this.merchantLat;
        const longitude = this.merchantLon;
        const speed = res.speed;
        const accuracy = res.accuracy;

        this.markers = [
          {
            iconPath: "/static/image/m-icon.png",
            id: 0,
            latitude: latitude,
            longitude: longitude,
            width: 35,
            height: 35,
            title: "当前位置",
            callout: {
              padding: 10,
              content: "当前位置",
              bgColor: "#DC143C",
              color: "#FFFF00",
              display: "ALWAYS"
            },
            label: { content: "标题" },
            anchor: {}
          }
        ];
      },
      fail: () => {
        console.log("getLocation failed");
      }
    });
  },
  methods: {
    go(e) {
      wx.showModal({
        title: "导航位置", //提示的标题,
        content: "导航到当前位置", //提示的内容,
        showCancel: true, //是否显示取消按钮,
        cancelText: "取消", //取消按钮的文字，默认为取消，最多 4 个字符,
        cancelColor: "#000000", //取消按钮的文字颜色,
        confirmText: "确定", //确定按钮的文字，默认为取消，最多 4 个字符,
        confirmColor: "#3CC51F", //确定按钮的文字颜色,
        success: res => {
          if (res.confirm) {
            wx.openLocation({
              latitude: this.merchantLat, //纬度，范围为-90~90，负数表示南纬,
              longitude: this.merchantLon, //经度，范围为-180~180，负数表示西经,
              scale: 15, //缩放比例，范围5~18,
              name: this.shopName, //位置名,
              address: this.address, //地址的详细说明,
              success: res => {
                console.log(res);
              }
            });
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    }
  }
};
</script>

<style lang="less">
page {
  width: 100%;
  height: 100%;
}
.map {
  width: 100%;
  height: 100%;
  map {
    width: 100%;
    height: 100%;
  }
}
</style>