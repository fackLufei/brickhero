<template>
  <scroll-view
    class="list-scroll-content"
    scroll-y
    @scrolltolower="loadData"
  >
    <empty v-if="!orderList.length" />
    <view v-if="orderList.length">
      <view
        class="order-item"
        v-for="(item,index) in orderList"
        :key="index"
      >
        <wait-to-delivery
          :orderItem="item"
          v-if="item.state=='待发货'"
        ></wait-to-delivery>
        <wait-to-pay
          :orderItem="item"
          v-if="item.state=='待支付'"
        ></wait-to-pay>
        <wait-to-receive
          :orderItem="item"
          v-if="item.state=='待收货'"
        ></wait-to-receive>
      </view>
    </view>
  </scroll-view>
</template>

<script>
import Empty from "./empty";
import WaitToDelivery from "./waitToDelivery";
import WaitToPay from "./waitToPay";
import WaitToReceive from "./waitToReceive";
export default {
  props: {
    orderList: {
      require: true,
      type: Array,
      default: () => []
    }
  },
  components: {
    Empty,
    WaitToDelivery,
    WaitToPay,
    WaitToReceive
  },
  data() {
    return {};
  },
  async onReady() {
    console.log(this.orderList);
  },
  onLoad() {}
};
</script>
<style lang="scss" scoped>
.list-scroll-content {
  height: 100%;
  .order-item {
    margin-bottom: 20upx;
  }
}
</style>
