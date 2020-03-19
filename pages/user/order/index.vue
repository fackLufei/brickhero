<template>
  <view class="order-container">
    <van-sticky>
      <van-search
        v-model="value"
        show-action
        :clearable="false"
        action-text="搜索"
        disabled
        placeholder="请输入商品名称/订单号"
      >
        <div slot="action"></div>
      </van-search>
    </van-sticky>
    <!-- 订单类型 -->
    <view class="navbar">
      <view
        v-for="(itemName,index) in navNamelist"
        :key="index"
        class="nav-item"
        :class="{current: tabCurrentIndex === index}"
        @click="tabClick(index)"
      >
        {{itemName}}
      </view>
    </view>
    <!-- 订单内容 -->
    <swiper
      class="order-swiper"
      :current="tabCurrentIndex"
      :duration="300"
    >
      <swiper-item
        v-for="(item, index) in navOrderList"
        :key="index"
      >
        <order-list :orderList="item"></order-list>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
import orderList from "./components/orderList";
export default {
  data() {
    return {
      tabCurrentIndex: 0,
      navMap: {
        全部: [],
        待支付: [
          {
            state: "待支付",
            time: "2019-08-09 09:08:32",
            num: 1,
            price: 998.0,
            image:
              "http://img3.imgtn.bdimg.com/it/u=999277307,2658085126&fm=11&gp=0.jpg"
          }
        ],
        待发货: [
          {
            state: "待发货",
            time: "2019-08-09 09:08:32",
            num: 1,
            price: 998.0,
            image:
              "http://img3.imgtn.bdimg.com/it/u=999277307,2658085126&fm=11&gp=0.jpg"
          },
          {
            state: "待发货",
            time: "2019-08-09 09:08:32",
            num: 1,
            price: 998.0,
            image:
              "http://img3.imgtn.bdimg.com/it/u=999277307,2658085126&fm=11&gp=0.jpg"
          }
        ],
        待收货: [
          {
            state: "待收货",
            time: "2019-08-09 09:08:32",
            num: 1,
            price: 998.0,
            image:
              "http://img3.imgtn.bdimg.com/it/u=999277307,2658085126&fm=11&gp=0.jpg"
          }
        ]
      }
    };
  },
  computed: {
    navNamelist() {
      return Object.keys(this.navMap);
    },
    navOrderList() {
      return Object.values(this.navMap);
    }
  },
  components: {
    orderList
  },
  onLoad(options) {
    uni.setNavigationBarTitle({
      title: "我的订单"
    });
  },
  methods: {
    //顶部tab点击
    tabClick(index) {
      this.tabCurrentIndex = index;
    }
  }
};
</script>
<style lang="scss">
.order-container {
  position: absolute;
  left: 0;
  right: 0;
  height: 100%;
  background: rgba(249, 249, 249, 1);
  display: flex;
  flex-direction: column;
  .navbar {
    display: flex;
    height: 40px;
    padding: 0 5px;
    background: #fff;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.06);
    position: relative;
    z-index: 10;
    .nav-item {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      color: #666666;
      position: relative;
      font-size: 24upx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 33px;
      &.current {
        color: #666666;
        font-size: 28upx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 40upx;
        &:after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          width: 44px;
          height: 0;
          border-bottom: 2px solid #e51815;
        }
      }
    }
  }
  .order-swiper {
    flex: 1;
  }
  .uni-swiper-item {
    height: auto;
  }
}
</style>
