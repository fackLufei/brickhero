<template>
  <view class="address-container">
    <scroll-view
      class="address-scroll-content"
      :class="{edit:isEdit}"
      scroll-y
    >
      <view v-if="addressList.length">
        <view
          class="address-item"
          v-for="(item,index) in addressList"
          :key="index"
        >
          <van-checkbox
            slot="right-icon"
            class="checkbox-icon"
            bind-group
            :value="item.default"
            @change="handlerSelect(item)"
            ref="checkboxes"
          />
          <view class="address-info-box">
            <view class="info-box">
              <view class="address">
                <text>{{item.address}}</text>
                <text
                  class="tag"
                  v-if="item.tag"
                >{{item.tag}}</text>
              </view>
              <view class="user">
                <text>{{item.userName}}</text>
                <text>{{item.phone}}</text>
              </view>
            </view>
            <text @click="edit(item)">编辑</text>
          </view>
        </view>
      </view>
    </scroll-view>
    <view class="address-footer">
      <button
        style="background:url(/static/images/order_btn.png);background-size: 105%;background-position-x: 20%;"
        @click.stop="add"
      >新增收货地址</button>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isEdit: false,
      isSelectAll: false,
      selectList: [1, 2],
      addressList: [
        {
          id: 1,
          default: true,
          address: "上河坊购物公园",
          userName: "腾腾",
          phone: "14598738739",
          tag: "家"
        },
        {
          id: 2,
          default: false,
          address: "彗星公寓",
          userName: "腾腾",
          phone: "14598738739",
          tag: ""
        },
        {
          id: 3,
          default: false,
          address: "长富金茂大厦",
          userName: "腾腾",
          phone: "14598738739",
          tag: ""
        }
      ]
    };
  },
  async onReady() {},
  onLoad(options) {
    uni.setNavigationBarTitle({
      title: "收货地址"
    });
  },
  methods: {
    add() {
      this.$router.navigateTo({ url: "./address" });
    },
    edit(item) {
      this.$router.navigateTo({ url: "./address" });
    },
    handlerEdit() {
      this.isEdit = true;
    },
    handlerSave() {
      this.isEdit = false;
    },
    handlerDelete() {},
    handlerSelect(item) {
      this.addressList.forEach(val=> val.default = false)
      let itemData = this.addressList.find(val => val.id === item.id);
      itemData.default = true;
    },
    selectChange() {
      console.log(this.selectList);
    },
    selectAll() {}
  }
};
</script>
<style lang="scss" scoped>
.address-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(249, 249, 249, 1);
  // position: relative;
  overflow: hidden;
  .address-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 39upx 0 40upx;
    height: 68upx;
    line-height: 68upx;
    background: rgba(249, 249, 249, 1);
    .total {
      font-size: 26upx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 44upx;
    }
    .btn {
      font-size: 26upx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(255, 69, 82, 1);
      line-height: 44upx;
    }
  }
  .address-scroll-content {
    flex: 1;
    overflow: hidden;
    position: relative;
    margin-bottom: 0;
    &.edit {
      margin-bottom: 165upx;
    }
    .address-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      height: 148upx;
      background: #fff;
      border-bottom: 1upx solid rgba(249, 249, 249, 1);
      text {
        font-size: 24upx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
      }
      .address-info-box {
        margin: 0 30upx 0 24upx;
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .info-box {
          display: flex;
          flex-direction: column;
          .address {
            position: relative;
            text:first-child {
              font-size: 28upx;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: rgba(51, 51, 51, 1);
            }
            .tag {
              position: absolute;
              top: -5upx;
              right: -30upx;

              background: linear-gradient(
                154deg,
                rgba(255, 169, 122, 0.29) 0%,
                rgba(255, 111, 66, 0.29) 46%,
                rgba(255, 43, 0, 0.29) 100%
              );
              border-radius: 4px;
              //   border: 1px solid #F84117;
              color: #f84117;
              margin: 0 10upx;
              padding: 0 10upx;
            }
          }
          .user {
            text {
              font-size: 24upx;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: rgba(153, 153, 153, 1);
            }
            text:first-child {
              margin-right: 20upx;
            }
          }
        }
      }
    }
    .checkbox-icon {
      margin-left: 32upx;
    }
  }
  .address-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 20;
    height: 98upx;
    background: rgba(249, 249, 249, 1);
    box-shadow: 0px -4upx 7upx 0px rgba(0, 0, 0, 0.03);
    padding: 10upx 30upx 68upx;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
