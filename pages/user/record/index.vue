<template>
  <view class="record-container">
    <view class="record-header">
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
      class="record-scroll-content"
      scroll-y
    >
      <view v-if="goodsList.length">
        <van-checkbox-group v-model="selectList">
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
              v-if="item.state === '无货'"
            ></goods>
            <no-goods
              :goodsItem="item"
              :isEdit="isEdit"
              v-if="item.state!== '无货'"
            ></no-goods>
          </view>
        </van-checkbox-group>
      </view>
    </scroll-view>
    <view>

    </view>
  </view>
</template>

<script>
import Goods from "./components/goods";
import NoGoods from "./components/noGoods";
export default {
  components: {
    Goods,
    NoGoods
  },
  data() {
    return {
      isEdit: false,
      selectList: [1,2],
      goodsList: [
        {
          id: 1,
          state: "无货",
          _isChecked: true,
          image:
            "http://img3.imgtn.bdimg.com/it/u=999277307,2658085126&fm=11&gp=0.jpg"
        },
        {
          id: 2,
           _isChecked:false,
          image:
            "http://img3.imgtn.bdimg.com/it/u=999277307,2658085126&fm=11&gp=0.jpg"
        },
        {
          id: 3,
           _isChecked:false,
          image:
            "http://img3.imgtn.bdimg.com/it/u=999277307,2658085126&fm=11&gp=0.jpg"
        },
        {
          id: 4,
           _isChecked:false,
          image:
            "http://img3.imgtn.bdimg.com/it/u=999277307,2658085126&fm=11&gp=0.jpg"
        },
        {
          id: 5,
           _isChecked:false,
          image:
            "http://img3.imgtn.bdimg.com/it/u=999277307,2658085126&fm=11&gp=0.jpg"
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
    handlerEdit() {
      this.isEdit = true;
    },
    handlerSave() {
      this.isEdit = false;
    },
    handlerDelete() {},
    handlerSelect(item) {
      let itemData = this.goodsList.find(val=>val.id === item.id)
      item._isChecked.detail = !item._isChecked.detail
      console.log(this.selectList,item._isChecked,itemData._isChecked);
    },
    selectChange() {
      console.log(this.selectList);
    },
    selectAll() {}
  }
};
</script>
<style lang="scss" scoped>
.record-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  .record-header {
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
  .record-scroll-content {
    flex: 1;
    overflow-x: hidden;
    .order-item {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .checkbox-icon {
      margin-left: 32upx;
    }
  }
}
</style>
