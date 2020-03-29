<template>
  <view class="add-address-container">
    <view>
      <van-field
        v-model="formData.userName"
        readonly
        style="height:128upx"
        placeholder="手机号码"
      />
      <van-field
        v-model="formData.phone"
        placeholder="手机号码"
        input-class="address-info"
      />
      <van-field
        v-model="formData.address"
        @click-icon="chooseLocation"
        readonly
        right-icon="arrow"
        placeholder="所在地区"
        input-class="address-info"
      />
      <van-field
        v-model="formData.message"
        rows="2"
        autosize
        type="textarea"
        maxlength="50"
        placeholder="详细地址：如道路、门牌号、小区、楼栋号、单元等"
        input-class="address-info"
        show-word-limit
      />
    </view>
    <view class="address-info tag">
      <text class="label">标签</text>
      <view class="tag-info">
        <view>家</view>
        <view>公司</view>
      </view>
    </view>
    <view class="address-info switch">
      <text class="label">设为默认地址</text>
      <van-switch
        v-model="formData.default"
        size="24px"
      />
    </view>
    <view class="address-footer">
      <button
        style="background:url(/static/images/order_btn.png);background-size: 105%;background-position-x: 20%;"
        @click.stop="save"
      >保存</button>
      <button style="background:url(/static/images/user-grayBtn.png);background-size: 105%;background-position-x: 20%;margin-top:30upx">删除地址</button>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      formData: {
        userName: "腾腾",
        phone: "",
        address: "",
        addressMore: "",
        tag: "",
        default: false
      }
    };
  },
  async onReady() {},
  onLoad(options) {
    uni.setNavigationBarTitle({
      title: "新增收货地址"
    });
  },
  methods: {
    save() {},
    chooseLocation() {
      		uni.chooseLocation({
					success: (data)=> {
            this.formData.address = data.name;
            debugger
					}
				})
    }
  }
};
</script>
<style lang="scss">
.address-info.van-field__input.van-field__input--textarea {
  height: 180upx !important;
  padding: 10upx 0;
}
.address-info.van-field__input {
  height: 108upx !important;
  line-height: 108upx !important;
  padding: 10upx 0;
}
</style>
<style lang="scss" scoped>
.add-address-container {
  position: absolute;
  top:0;
  bottom: 0;
  left:0;
  right:0;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f9f9f9;
  .address-info {
    background: rgba(255, 255, 255, 1);
    .label {
      font-size: 28upx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 40px;
      margin-right: 92upx;
    }
    &.tag {
      margin-top: 59upx;
      height: 128upx;
      line-height: 128upx;
      padding-left: 49upx;
      display: flex;
      align-items: center;
      border-bottom: 1upx solid #fdfdfd;
      .tag-info {
        view {
          display: inline-block;
          text-align: center;
          width: 104upx;
          height: 44upx;
          line-height: 44upx;
          border-radius: 34upx;
          border: 1upx solid rgba(153, 153, 153, 1);
          margin-right: 30upx;
          font-size: 28upx;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
        }
      }
    }
    &.switch {
      height: 128upx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 30upx 0 49upx;
    }
  }
  .tag-box {
    height: 44upx;
    display: flex;
    justify-content: space-between;
  }
  .address-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 20;
    // height: 98upx;
    background: #f9f9f9;
    box-shadow: 0px -4upx 7upx 0px rgba(0, 0, 0, 0);
    padding: 10upx 30upx 68upx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    button {
      height: 90upx;
      width: 100%;
      line-height: 90upx;
      font-size: 30upx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      background-size: 100%;
      margin: 0;
    }
  }
}
</style>
