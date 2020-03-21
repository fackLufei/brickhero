<template>
  <view class="vip-container">
    <view
      class="vip-header"
      style="background:url(/static/images/vip_box.png);background-size: 100% 101%;"
    >
      <view class="vip-user">
        <image
          class="vip-img"
          :src="vipName"
          mode="aspectFill"
        ></image>
        <text class="user-name">杨*龙</text>
        <image
          class="vip-img-logo"
          :src="vipLogo"
          mode="aspectFill"
        ></image>
      </view>
      <view class="vip-img-description">
        <text>会员有效期至：2020-10-10</text>
      </view>
    </view>
    <view class="vip-list">
      <text class="header">VIP会员四大权益</text>
      <view class="vip-list-box">
        <view
          class="vip-list-item"
          v-for="(_item,index) in vipConfig"
          :key="index"
        >
          <image
            class="vip-img"
            :src="_item.image"
            mode="aspectFill"
          ></image>
          <text>{{_item.name}}</text>
        </view>
      </view>
    </view>
    <view class="pay-way-box">
      <text class="header">选择套餐</text>
      <view class="pay-way-list">
        <view
          v-for="(_item,index) in payConfig"
          :class="[{'pay-way-item active': selectIndex === index},{'pay-way-item': selectIndex !== index}]"
          :key="index"
          @click="choose(index)"
        >
          <text class="month">{{_item.month}}</text>
          <view>
            <text class="RMB">¥</text>
            <text class="money">{{_item.pay}}</text>
          </view>
        </view>
      </view>
    </view>

    <view class="vip-agreement-box">
      <view class="agreement-box">
        <text class="info1">开通会员表示您同意</text>
        <text class="info2"> 会员服务协议</text>
      </view>
      <button style="background:url(/static/images/order_btn.png);background-size:100%">立即续费</button>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      vipName: "http://img3.imgtn.bdimg.com/it/u=999277307,2658085126&fm=11&gp=0.jpg",
      vipLogo: "/static/images/vip_logo.png",
      vipDescription: "",
      selectIndex: 2,
      vipConfig: [
        {
          name: "全场低价",
          image: "/static/images/vip_low.png"
        },
        {
          name: "专属客服",
          image: "/static/images/vip_service.png"
        },
        {
          name: "免运退换",
          image: "/static/images/vip_car.png"
        },
        {
          name: "无痕代发",
          image: "/static/images/vip_delivery.png"
        }
      ],
      payConfig: [
        {
          month: "1个月",
          pay: "18"
        },
        {
          month: "3个月",
          pay: "50"
        },
        {
          month: "12个月",
          pay: "180"
        }
      ]
    };
  },
  async onReady() {},
  onLoad(options) {
    uni.setNavigationBarTitle({
      title: "VIP"
    });
  },
  methods: {
    choose(index) {
      this.selectIndex = index
    }
  }
};
</script>
<style lang="scss" scoped>
.vip-container {
  background: rgba(249, 249, 249, 1);
  .vip-header {
    padding: 30rpx 0 40rpx;
    box-sizing: border-box;

    height: 328upx;
    margin: 0 31upx 0 29upx;
    // width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    // border: 1px dashed red;
    background: linear-gradient(
      137deg,
      rgba(238, 238, 238, 0) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    box-shadow: 0px 10px 15px -14px #464141;
    .vip-user {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 58upx;
    }
    .vip-img {
      height: 58upx;
      width: 58upx;
      // border: 1px dashed red;
      margin-left: 60upx;
      margin-top: 30upx;
    }
    .user-name {
      font-size: 34upx;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
      line-height: 48upx;
      margin-left: 24upx;
      margin-top: 30upx;
    }
    .vip-img-logo {
      height: 32upx;
      width: 66upx;
      // border: 1px dashed red;
      margin-left: 10upx;
      margin-top: 30upx;
    }
    .vip-img-description {
      font-size: 20upx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(236, 215, 174, 1);
      line-height: 28upx;
      margin-left: 72upx;
      margin-bottom: 30upx;
    }
  }
  .vip-list {
    height: 268upx;
    background: #fff;
    padding-top: 32upx;
    .header {
      margin-left: 40upx;
      font-size: 30upx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(0, 0, 0, 1);
      line-height: 42upx;
    }
  }
  .vip-list-box {
    margin-top: 25upx;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .vip-list-item {
      width: 99upx;
      margin: 0 47upx;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .vip-img {
        width: 88upx;
        height: 88upx;
        // border: 1px dashed red;
      }
      text {
        font-size: 24upx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 33upx;
        position: absolute;
        margin-top: 80rpx;
      }
    }
  }
  .pay-way-box {
    margin-top: 20upx;
    background: #fff;
    flex: 1;
    padding-top: 32upx;
    .header {
      margin-left: 40upx;
      font-size: 30upx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(0, 0, 0, 1);
      line-height: 42upx;
    }
    .pay-way-list {
      display: flex;
      flex-direction: row;
      margin-top: 25upx;
      padding: 0 15upx;
    }
    .pay-way-item {
      height: 210upx;
      width: 210upx;
      margin: 0 15upx;
      border-radius: 6upx;
      border: 1px solid rgba(220, 220, 220, 1);
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .month {
        margin-left: 10upx;
        margin-bottom: 20upx;
        font-size: 28upx;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
        line-height: 40upx;
      }
      .RMB {
        font-size: 28upx;
        font-family: SFNSDisplay;
        color: rgba(102, 102, 102, 1);
        line-height: 33upx;
      }
      .money {
        font-size: 58upx;
        font-family: SFNSDisplay;
        color: rgba(102, 102, 102, 1);
        line-height: 68upx;
      }
      &.active {
        border-radius: 6upx;
        border: 2upx solid;
        border-image: linear-gradient(
            135deg,
            rgba(255, 169, 122, 1),
            rgba(255, 52, 9, 1)
          )
          2 2;
        .RMB {
          font-size: 28upx;
          font-family: SFNSDisplay;
          color: rgba(255, 117, 71, 1);
          line-height: 33upx;
        }
        .money {
          font-size: 58upx;
          font-family: SFNSDisplay;
          color: rgba(255, 71, 27, 1);
          line-height: 68upx;
          background: linear-gradient(
              154deg,
              rgba(255, 169, 122, 1) 0%,
              rgba(255, 111, 66, 1) 46%,
              rgba(255, 43, 0, 1) 100%
            ),
            linear-gradient(
              154deg,
              rgba(255, 169, 122, 1) 0%,
              rgba(255, 111, 66, 1) 46%,
              rgba(255, 43, 0, 1) 100%
            );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }
  .vip-agreement-box {
    background: #fff;
    margin: 0 30upx;
    .agreement-box {
      padding: 20upx;
      padding-left: 29upx;
      .info1 {
        font-size: 24upx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        line-height: 33upx;
        margin-right: 10upx;
      }
      .info2 {
        font-size: 24upx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 33upx;
        text-decoration:underline 
      }
      margin-bottom: 248upx;
    }
    button {
      height: 90upx;
      line-height: 90upx;
      font-size: 30upx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      margin-bottom: 100upx;
      background-size: 100%;
    }
  }
}
</style>
