<template>
	<view class="shop-cart">
		<!-- 无商品时提示 -->
	     <!-- <no-data msg="暂无数据,快去选取商品吧~" v-if="cartData.length===0"/> -->
		 <!-- 购物车列表 -->
		 <van-swipe-cell :right-width="70" :left-width="0">
		      <view class="cart-product">
				  <!-- 商品勾选 -->
				  <view class="select-btn">
		            <van-checkbox use-icon-slot :value="true">
		              <image slot="icon" class="select-icon" :src="inactiveIcon" />
		            </van-checkbox> 			  
				  </view>
				  <!-- 商品图片 -->
				  <view class="product-pic">
				  	<van-image fit="contain" width="100%" height="100%" src="/static/images/test_product.jpg" />
				  </view>
				  <!-- 商品信息 -->
				  <view class="product-info">
					  <view class="product-name">
					  	Apple/苹果iPhone11全网通双
					  </view>
					  <view class="product-details">
						  无需合约版/黑色/128G
					  </view>
					  <view class="product-bottom">
					  	   <view class="product-price">
					  	   	     <view class="price">
					  	   	     	&#65509;10000
					  	   	     </view>
								 <view class="vip-price">
								 	<text>&#65509;100</text>
								 	<image fit="contain" class="vip-icon" src="/static/images/vip_price.png" />
								 </view>
					  	   </view>
						   <van-stepper :value="10"/>
					  </view>
				  </view>
			  </view>
			  <view slot="right" class="cart-remove">
				  <text>删除</text>
			  </view>
		 </van-swipe-cell>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex';
	import NoData from '@/components/noData.vue';
	export default {
		data() {
			return {
				activeIcon:'/static/images/checkbox_select.png',
				inactiveIcon :'/static/images/checkbox_default.png'
			}
		},
		computed:{
			...mapState(['routerWait','cartData'])
		},
		onShow() {
			if(this.routerWait.routerData){
				this.setCartData(this.routerWait.routerData);
			}
			console.log(this.cartData);
		},
		methods: {
			...mapMutations(['setCartData'])
			
		},
		components:{
			NoData
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F9F9F9;
	}
  .shop-cart{
	  .cart-remove{
		  width: 70px;
		  height: 100%;
		  background-color: #EC453B;
		  font-size: 30upx;
		  color: #FFFFFF;
		  display: flex;
		  justify-content: center;
		  align-items: center;
	  }
	  .cart-product{
		  display: flex;
		  align-items: center;
		  padding: 58upx 54upx 58upx 0;
		  background-color: #FFFFFF;
		  margin-top: 20upx;
	  }
	  .product-info{
		  flex: 1;
	  }
	  .select-btn{
		  padding: 0 32upx;
		  .select-icon{
			  width: 40upx;
			  height: 40upx;
		  }
	  }
	  .product-pic{
		  width: 184upx;
		  height: 184upx;
	  }
	  .product-name{
		  color: #333333;
		  font-size: 24upx;
	  }
	  .product-details{
		  font-size: 22upx;
		  color: #999999;
		  margin: 25upx 0;
	  }
	  .vip-icon {
	  	width: 60upx;
	  	height: 28upx;
	  }
	  .price{
		  color: #E51815;
		  font-size: 26upx;
		  font-weight: bold;
	  }
	  .product-bottom{
		  display: flex;
		  align-items: flex-end;
		  justify-content: space-between;
	  }
	  .vip-price{
		  font-size: 24upx;
		  color: #333333;
		  font-weight: bold;
		  display: flex;
		  align-items: center;
	  }
  }
</style>
