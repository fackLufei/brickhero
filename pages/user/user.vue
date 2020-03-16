<template>
  <view class="user-container">
    <user-info></user-info>
    <view class="setting-box">
      <view class="setting-list">
        <view
          class="setting-list-item"
          v-for="(_item,index) in settingConfg"
          :key="index"
          @click="handlerNavigateToUser(_item.path, _item.name)"
        >
          <van-icon
            class="my-icon"
            :name="_item.icon"
            info="9"
          />
          <text>{{_item.name}}</text>
        </view>
      </view>
    </view>
    <view class="order-box">
      <view class="order-list-header">
        <text>我的订单</text>
      </view>
      <view class="order-list">
        <view
          class="order-list-item"
          v-for="(_item,index) in orderConfig"
          :key="index"
          @click="handlerNavigateToOrder(_item.path, _item.name)"
        >
          <van-icon
            class="my-icon"
            :name="_item.icon"
            info="9"
          />
          <text>{{_item.name}}</text>
        </view>
      </view>
    </view>
    <view class="server-box">
      <view class="server-list-hearder">
        <text>我的服务</text>
      </view>

      <view class="server-list">
        <view
          class="server-list-item"
          v-for="(_item,index) in serverConfig"
          :key="index"
          @click="handlerNavigateTo(_item.path)"
        >
          <van-icon
            class="my-icon"
            :name="_item.icon"
            info="9"
          />
          <text>{{_item.name}}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import UserInfo from "./user/userInfo";
import VipInfo from "./user/vipInfo";
export default {
  components: {
    UserInfo,
    VipInfo
  },
  data() {
    return {
      user: {},
      settingConfg: [
        {
          name: "VIP",
          path: "./user/vipRenewal"
        },
        {
          name: "地址"
        },
        {
          name: "浏览",
          path: "./record/index"
        },
        {
          name: "收藏",
          path: "./collection/index"
        }
      ],
      orderConfig: [
        {
          name: "全部订单",
          path: "./order/index"
        },
        {
          name: "待支付",
          path: "./order/index"
        },
        {
          name: "待发货",
          path: "./order/index"
        },
        {
          name: "待收货",
          path: "./order/index",
          icon: "chat-o",
          num: 1
        }
      ],
      serverConfig: [
        {
          name: "合作"
        },
        {
          name: "客服"
        },
        {
          name: "关于"
        }
      ]
    };
  },
  async onReady() {},
  onLoad(options) {
    uni.setNavigationBarTitle({
      title: "浏览记录"
    });
  },
  methods: {
    handlerNavigateToUser(path, settingType) {
      if (settingType === "VIP" && !this.user.vip) {
        this.$router.navigateTo({ url: "./user/vipPay" });
        return;
      }
      this.$router.navigateTo({ url: path });
    },
    handlerNavigateTo(path) {
      this.$router.navigateTo({ url: path });
    },
    handlerNavigateToOrder(path, orderType) {
      this.$router.navigateTo({ url: path });
    }
  }
};
</script>
<style lang="scss" scoped>
.user-container {
  background: rgba(249, 249, 249, 1);
  .setting-box {
    height: 220upx;
    background: #fff;
  }
  .order-box {
    height: 284upx;
    background: #fff;
    margin-top: 20upx;
  }
  .server-box {
    height: 284upx;
    background: #fff;
    margin-top: 20upx;
  }
  .my-icon {
    width: 74upx;
    height: 74upx;
    border: 1px dashed red;
  }
  .order-list-header,
  .server-list-hearder {
    margin: 0 31upx;
    padding-bottom: 14upx;
    padding-top: 30upx;
    border-bottom: 1upx solid #ededed;
    text {
      font-size: 30upx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
    }
  }
  .order-list,
  .server-list,
  .setting-list {
    height: 197upx;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .order-list-item,
  .server-list-item,
  .setting-list-item {
    width: 99upx;
    margin: 0 55upx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text {
      font-size: 24upx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 33upx;
      position: absolute;
      margin-top: 64rpx;
    }
  }
}
</style>
