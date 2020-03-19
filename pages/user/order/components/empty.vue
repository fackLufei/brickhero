<template>
  <view class="empty-box">
    <image
      class="on-order-img"
      :src="image"
      mode="aspectFill"
    ></image>
  </view>
</template>

<script>
export default {
  data() {
    return {
      image:
        "http://img3.imgtn.bdimg.com/it/u=999277307,2658085126&fm=11&gp=0.jpg"
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
    height: 209upx;
    margin-top: 164upx;
  }
}
</style>
