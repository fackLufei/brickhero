<template>
  <view class="collection-container">
    <view class="collection-header">
      <text class="total">共{{goodsList.length}}件商品</text>
      <text
        class="btn"
        v-if="isEdit===false"
        @click="handlerEdit"
      >编辑</text>
      <text
        class="btn"
        v-if="isEdit===true"
        @click="handlerSave"
      >完成</text>
    </view>
    <scroll-view
      class="collection-scroll-content"
      :class="{edit:isEdit}"
      scroll-y
    >
      <view v-if="goodsList.length">
          <view
            class="order-item"
            v-for="(item,index) in goodsList"
            :key="index"
          >
            <van-checkbox
              slot="right-icon"
              class="checkbox-icon"
              bind-group
              v-model="item.id"
              @change="handlerSelect(item)"
              v-if="isEdit"
              ref="checkboxes"
            />
            <goods
              :goodsItem="item"
              :isEdit="isEdit"
              v-if="item.state === '已下架'"
            ></goods>
            <closed-goods
              :goodsItem="item"
              :isEdit="isEdit"
              v-if="item.state!== '已下架'"
            ></closed-goods>
          </view>
      </view>
    </scroll-view>
    <view
      class="collection-footer"
      v-if="isEdit"
    >
      <van-checkbox
        slot="right-icon"
        class="checkbox-All"
        v-model="isSelectAll"
        @change="selectAll()"
        ref="checkboxes"
      >全选</van-checkbox>
      <button style="background:url(/static/images/order_btn.png);background-size: 105%;background-position-x: 20%;">取消收藏</button>
    </view>
  </view>
</template>

<script>
import Goods from "./components/goods";
import ClosedGoods from "./components/closedGoods";
export default {
  components: {
    Goods,
    ClosedGoods
  },
  data() {
    return {
      isEdit: false,
      isSelectAll: false,
      selectList: [1, 2],
      goodsList: [
        {
          id: 1,
          state: "已下架",
          _isChecked: true,
          image:
            "http://img3.imgtn.bdimg.com/it/u=999277307,2658085126&fm=11&gp=0.jpg"
        },
        {
          id: 2,
          _isChecked: false,
          image:
            "http://img3.imgtn.bdimg.com/it/u=999277307,2658085126&fm=11&gp=0.jpg"
        },
        {
          id: 3,
          _isChecked: false,
          image:
            "http://img3.imgtn.bdimg.com/it/u=999277307,2658085126&fm=11&gp=0.jpg"
        },
        {
          id: 4,
          _isChecked: false,
          image:
            "http://img3.imgtn.bdimg.com/it/u=999277307,2658085126&fm=11&gp=0.jpg"
        },
        {
          id: 5,
          _isChecked: false,
          image:
            "http://img3.imgtn.bdimg.com/it/u=999277307,2658085126&fm=11&gp=0.jpg"
        },
        {
          id: 6,
          _isChecked: false,
          image:
            "http://img3.imgtn.bdimg.com/it/u=999277307,2658085126&fm=11&gp=0.jpg"
        }
      ]
    };
  },
  async onReady() {},
  onLoad(options) {
    uni.setNavigationBarTitle({
      title: "收藏"
    });
  },
  methods: {
    handlerEdit() {
      this.isEdit = true;
    },
    handlerSave() {
      this.isEdit = false;
    },
    handlerDelete() {},
    handlerSelect(item) {
      let itemData = this.goodsList.find(val => val.id === item.id);
      item._isChecked.detail = !item._isChecked.detail;
      console.log(this.selectList, item._isChecked, itemData._isChecked);
    },
    selectChange() {
      console.log(this.selectList);
    },
    selectAll() {}
  }
};
</script>
<style lang="scss" scoped>
.collection-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  // position: relative;
  overflow: hidden;
  .collection-header {
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
  .collection-scroll-content {
    flex: 1;
    overflow: hidden;
    position: relative;
    margin-bottom: 0;
    &.edit {
      margin-bottom: 165upx;
    }
    .order-item {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .checkbox-icon {
      margin-left: 32upx;
    }
  }
  .collection-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 20;
    height: 98upx;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px -4upx 7upx 0px rgba(0, 0, 0, 0.03);
    padding: 10upx 30upx 68upx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      height: 90upx;
      line-height: 90upx;
      width: 276upx;
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
