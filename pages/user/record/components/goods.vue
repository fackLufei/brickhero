<template>
  <view class="collection-goods-item-box">
    <view class="image-box">
      <image
        class="goods-img"
        :src="goodsItem.image"
        mode="aspectFill"
      ></image>
    </view>
    <view class="goods-info-box">
      <text class="title">nike鞋女2019冬季新款运动鞋女C10919 粉色38</text>
      <view class="description">
        <text>帮面材质:</text>
        <text>透气网布</text>
        <text>车缝线</text>
        <text>黑色</text>
      </view>
      <view class="goods-info-other">
        <!-- <text>暂无定价</text> -->
        <text class="price">¥598</text>
        <button
          class="action-btn"
          v-if="!isEdit"
        >看相似</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    goodsItem: {
      require: true,
      type: Object,
      default: {
        time: "2019-08-09 09:08:32",
        num: 1,
        price: 998.0,
        image:
          "http://img3.imgtn.bdimg.com/it/u=999277307,2658085126&fm=11&gp=0.jpg"
      }
    },
    isEdit: {
      require: true,
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  async onReady() {}
};
</script>
<style lang="scss" scoped>
.collection-goods-item-box {
  display: flex;
  border-top: 0.25upx solid #ededed;
  padding-top: 29upx;
  padding-bottom: 40upx;
  padding-left: 32upx;
  padding-right: 28upx;
  .image-box {
    .goods-img {
      width: 188upx;
      height: 188upx;
      margin-right: 40upx;
      margin-left: 11upx;
      display: block;
    }
  }
  .goods-info-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      font-size: u28px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 40upx;
    }
    .description {
      font-size: 22upx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      line-height: 30upx;
    }
    .goods-info-other {
      font-size: 24upx;
      height: 28upx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      position: relative;
      text-align: right;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .price {
        color: #e51815;
        font-size: 30upx;
      }
      .action-btn {
        display: inline-block;
        height: 48upx;
        //   width: 144upx;
        border-radius: 24upx;
        margin: 5upx;
        line-height: 48upx;
        font-size: 24upx;
        border: 0.25upx solid rgba(151, 151, 151, 1);
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        background: #fff;
        padding: 0 18upx;
      }
    }
  }
}
</style>
