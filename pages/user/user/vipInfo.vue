<template>
  <view
    class="user-box"
    style="background:url(/static/images/user-vipbg.png);background-size: 100% 101%;"
  >
    <view class="user-info">
      <image
        mode="aspectFill"
        class="user-icon"
        :src="user.icon"
      ></image>
      <text class="user-name">杨*龙</text>
      <image
        mode="aspectFill"
        :src="vipLogo"
        class="user-vip"
      ></image>
      <!-- <text class="user-normal">普通用户</text> -->
    </view>
     <image
        mode="aspectFill"
        :src="moreLogo"
        class="user-info-more"
      ></image>
  </view>
</template>
<script>
export default {
  data() {
    return {
      bg: "/static/images/user-vipbg.png",
      vipLogo: "/static/images/vip_logo.png",
      moreLogo: "/static/images/vip_enter.png",
      user: {
        icon:
          "http://img3.imgtn.bdimg.com/it/u=999277307,2658085126&fm=11&gp=0.jpg"
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.user-box {
  height: 131upx;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 36upx 0 36upx;
  position: relative;
  background-repeat: no-repeat;
  background-size: 100%;
  .user-info {
    height: 100%;
    width: 100%;
    padding: 0 30upx;
    display: flex;
    align-items: center;
    .user-icon {
      width: 58upx;
      height: 58upx;
      border-radius: 50%;
      // border: 1px dashed red;
      margin-right: 28upx;
      margin-top: -30upx;
    }
    .user-name {
      margin-right: 14upx;
      font-size: 34upx;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      margin-top: -40upx;
      color: rgba(255, 255, 255, 1);
    }
    .user-vip {
      width: 46upx;
      height: 23upx;
       margin-top: -30upx;
    }
    .user-normal {
      display: inline-block;
      height: 48upx;
      margin: -25upx 5upx 5upx;
      line-height: 48upx;
      font-size: 24upx;
      border: 0.25upx solid rgba(151, 151, 151, 1);
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      background: rgb(34, 25, 25);
    }
  }
  .user-info-more {
    height: 31upx;
    width: 31upx;
    margin-right: 30upx;
    margin-top: -30upx;
  }
}
</style>