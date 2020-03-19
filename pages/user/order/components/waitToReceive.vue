<template>
  <view class="goods-box">
    <view class="goods-box-header">
      <text class="time">{{orderItem.time}}</text>
      <text
        class="state"
        style="color: #FF4552"
      >待收货</text>
    </view>
    <view class="goods-box-body">
      <image
        class="goods-img"
        :src="orderItem.image"
        mode="aspectFill"
      ></image>
      <view class="goods-info">
        <text class="title">nike鞋女2019冬季新款运动鞋女C10919 粉色38</text>
        <view class="price-box">

          <text class="num">共{{orderItem.num||0}}件商品</text>
          <text class="default-text">实付金额:</text>

          <text class="price">¥{{orderItem.price}}</text>
        </view>
      </view>
    </view>
    <view class="goods-box-footer">
      <button class="action-btn">申请退款</button>
      <button class="action-btn">查看物流</button>
      <button class="action-btn warn">确认收货</button>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    orderItem: {
      require: true,
      type: Object,
      default: {
        time: "2019-08-09 09:08:32",
        num: 1,
        price: 998.0,
        image:
          "http://img3.imgtn.bdimg.com/it/u=999277307,2658085126&fm=11&gp=0.jpg"
      }
    }
  },
  data() {
    return {};
  },
  async onReady() {}
};
</script>
<style lang="scss" scoped>
.goods-box {
  padding-left: 32upx;
  padding-right: 28upx;
  height: 420upx;
  background: #fff;
  .goods-box-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 76upx;
    .time {
      font-size: 20upx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      line-height: 33upx;
    }
    .state {
      font-size: 28upx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(255, 69, 82, 1);
      line-height: 40upx;
    }
  }
  .goods-box-body {
    display: flex;
    border-top: 0.25upx solid #ededed;
    padding-top: 29upx;
    padding-bottom: 40upx;
    .goods-img {
      width: 188upx;
      height: 188upx;
      margin-right: 40upx;
      margin-left: 11upx;
      display: block;
    }
    .goods-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .price-box {
      font-size: 24upx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      position: relative;
      text-align: right;
      .default-text {
        margin: 0 8upx 0 16upx;
      }
      .price {
        color: #e51815;
        font-size: 30upx;
      }
    }
  }
  .goods-box-footer {
    height: 94upx;
    line-height: 126rpx;
    position: relative;
    text-align: right;

    border-top: 0.25upx solid #ededed;
    .action-btn {
      display: inline-block;
      height: 48upx;
      //   width: 144upx;
      margin: 5upx;
      line-height: 40upx;
      font-size: 24upx;
      border: 0.25upx solid rgba(151, 151, 151, 1);
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      background: #fff;
      &.warn {
        color: rgba(255, 69, 82, 1);
        border-color: rgba(255, 69, 82, 1);
      }
    }
  }
}
</style>
