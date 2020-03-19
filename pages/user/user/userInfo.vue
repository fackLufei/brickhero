<template>
  <view class="user-box">
    <view class="user-info">
      <image
        mode="aspectFill"
        class="user-icon"
        :src="user.icon"
      ></image>
      <text class="user-name">杨*龙</text>
      <!-- <image
          mode="aspectFill"
          :src="user.image"
          class="user-vip"
        ></image> -->
      <text class="user-normal">普通用户</text>
    </view>
    <text class="user-info-more">></text>
  </view>
</template>
<script>
export default {
    data() {
        return {
            user: {}
        }
    }
}
</script>
<style lang="scss" scoped>
.user-box {
  height: 131upx;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 69upx 0 57upx;
  .user-info {
    height: 100%;
    display: flex;
    align-items: center;
    .user-icon {
      width: 58upx;
      height: 58upx;
      border: 1px dashed red;
      margin-right: 28upx;
    }
    .user-name {
      margin-right: 14upx;
      font-size: 30upx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
    }
    .user-vip {
      width: 46upx;
      height: 23upx;
    }
    .user-normal {
      display: inline-block;
      height: 48upx;
      margin: 5upx;
      line-height: 48upx;
      font-size: 24upx;
      border: 0.25upx solid rgba(151, 151, 151, 1);
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      background: #fff;
    }
  }
  .user-info-more {
    height: 31upx;
    width: 31upx;
  }
}
</style>