<template>
  <view class="empty-box">
    <image
      class="on-order-img"
      :src="image"
      mode="aspectFit"
    ></image>
  </view>
</template>

<script>
export default {
  data() {
    return {
      image: "/static/images/order_empty.png"
    };
  },
  async onReady() {}
};
</script>
<style lang="scss" scoped>
.empty-box {
  background: rgba(249, 249, 249, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .on-order-img {
    width: 209upx;
    height: 300upx;
    margin-top: 164upx;
  }
}
</style>
