<template>
	<view class="product">
		<!-- tbas -->
		<van-tabs :active="tabActive" sticky swipeable tab-class="my-nav-item" @change="tabChange"  tab-active-class="my-active">
			<van-tab :title="item.name" :name="item.id" v-for="item in tabsData" :key="item.id">
				<!-- 商品集合 -->
				<view class="product-list" v-if="goodsData.length>0">
					<!-- 商品 -->
					<view class="product-item" v-for="item in goodsData" :key="item.id">
						<!-- 商品图片 -->
						<view class="product-pic">
							<van-image fit="contain" width="100%" height="100%" :src="item.pic" />
						</view>
						<!-- 商品名称 -->
						<view class="product-name">
							{{item.name}}
						</view>
						<!-- 商品标签 -->
						<view class="product-label">
							<text class="product-label-1">九成新</text>
							<text class="product-label-2">全国联保</text>
						</view>
						<!-- 价格 与销售信息 -->
						<view class="product-info">
							<text class="product-price">&#65509; {{item.price}}</text>
							<text class="product-sale">已销售{{item.sale}}{{item.unit}}</text>
						</view>
						<van-icon class="shopping-cart" name="shopping-cart-o" />
					</view>
				</view>
			</van-tab>
		</van-tabs>
		<!-- 筛选条件 -->
		<view class="screening-condit">
			<view class="sc-item sc-rewest" :class="{'sc-active':screenActive===0}" @tap="screen(0)">最新</view>
			<view class="sc-item sc-sale" :class="[{'sc-active':screenActive===1},screenDirection?'sc-active-top':'sc-active-bottom']"
			 @tap="screen(1)">销量</view>
			<view class="sc-item sc-price" :class="[{'sc-active':screenActive===2},screenDirection?'sc-active-top':'sc-active-bottom']"
			 @tap="screen(2)">价格</view>
		</view>
		<!-- 无商品时提示 -->
		<view class="no-data" v-if="goodsData.length===0">
			暂无数据
		</view>
	</view>
</template>

<script>
	import {
		productCateList,
		getProduct
	} from '@/api/homeApi.js';
	import {
		mapState
	} from 'vuex';
	
	let currTabId;
	
	export default {
		data() {
			return {
				tabActive: 0,
				screenActive: 0,
				screenDirection: true,
				tabsData: [],
				goodsData: [],
				// params: {
				// 	"keyword": "",
				// 	"productCategoryId": 0
				// },
				pageSize: 10,
				pageNum: 1
			}
		},
		onLoad(option) {
			let id = option.id;
			let tabId = option.tabId - 0;
			productCateList(id).then(res => {
				if (res.code == 200) {
					this.tabsData = res.data;
					if (!tabId) {
						tabId = res.data[0].id;
					}
					this.tabActive = tabId;
					this.getGoodsData(tabId);
				}
			})
		},
		onReachBottom(e){
			console.log(e);
		},
		methods: {
			getGoodsData(id) {//获取商品列表
				let params = {
					keyword:"",
					productCategoryId:id
				} 
				if(this.screenActive === 0){//最新
					params.sale = false;
					params.price = false;
				}else if(this.screenActive === 1){//销售
					params.sale = this.screenDirection;
				}else{//价格
					params.price = this.screenDirection;
				}
				getProduct({
						...params
					},
					this.pageSize,
					this.pageNum).then(res => {
					if (res.code == 200) {
						this.goodsData = res.data.list;
					}
				})
			},
			screen(index) { //条件筛选
			
				if (this.screenActive != index) {
					this.screenActive = index;
					this.screenDirection = true;
				} else {
					this.screenDirection = !this.screenDirection;
				}
				this.getGoodsData(this.tabActive);
			},
			tabChange(e) {//类别选择
				this.tabActive = e.detail.name;
				this.getGoodsData(this.tabActive);
			}

		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F9F9F9;
	}

	.product {
		.product-list {
			display: flex;
			flex-wrap: wrap;
			padding-left: -10upx;
			padding-top: 100upx;
		}

		.product-item {
			flex: 1;
			min-width: 40%;
			max-width: 50%;
			margin-right: 10upx;
			height: 510upx;
			box-sizing: border-box;
			padding-top: 20upx;
			padding-left: 28upx;
			padding-right: 28upx;
			display: flex;
			flex-direction: column;
			align-items: center;
			background-color: #ffffff;
			margin-bottom: 10upx;
			position: relative;

			.product-pic {
				width: 280upx;
				height: 280upx;
			}

			.product-name {
				font-size: 24upx;
				color: #333333;
				width: 100%;
				margin-top: 38upx;
			}

			.product-label {
				color: #FF4552;
				font-size: 20upx;
				text-align: left;
				width: 100%;
				margin-top: 10upx;
				margin-bottom: 20upx;

				text {
					background-color: #FFEEEA;
					padding: 0 8upx;
				}
			}

			.product-label-1 {
				margin-right: 37upx;
			}

			.product-info {
				width: 100%;
				line-height: 1;
			}

			.product-price {
				color: #E51815;
				font-size: 24upx;
				font-weight: 600;
				margin-right: 13upx;
			}

			.product-sale {
				font-size: 20upx;
				color: #999999;
			}

			.shopping-cart {
				position: absolute;
				right: 32upx;
				bottom: 40upx;
			}
		}

		.my-active.my-nav-item {
			font-size: 24upx;
			color: #333333;
		}

		.my-nav-item {
			font-size: 24upx;
			color: #999;
		}

		.van-tabs__line {
			background-image: linear-gradient(#FFA97A, #FF6F42, #FF2B00);
		}

		.no-data {
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			width: 100%;
			top: 0;
			bottom: 0;
			z-index: 100;
			font-size: 30upx;
			color: #999999;
			z-index: -1;
		}

		.screening-condit {
			height: 100upx;
			background-color: #FFFFFF;
			display: flex;
			width: 100%;
			position: absolute;
			top: 44px;
			align-items: center;

			.sc-item {
				flex: 1;
				text-align: center;
				color: #999999;
				font-size: 24upx;
				position: relative;
			}

			.sc-sale,
			.sc-price {
				&::before {
					content: '';
					position: absolute;
					width: 0;
					height: 0;
					border-left: 7rpx solid transparent;
					border-right: 7rpx solid transparent;
					border-bottom: 10rpx solid #B9B9B9;
					top: 5rpx;
					right: 82rpx;
				}

				&::after {
					content: '';
					position: absolute;
					width: 0;
					height: 0;
					border-left: 7rpx solid transparent;
					border-right: 7rpx solid transparent;
					border-top: 10rpx solid #B9B9B9;
					bottom: 5rpx;
					right: 82rpx;
				}
			}

			.sc-active {
				color: #333333;
			}

			.sc-active.sc-active-top {
				&::before {
					border-bottom-color: #E51815;
				}
			}

			.sc-active.sc-active-bottom {
				&::after {
					border-top-color: #E51815;
				}
			}
		}

	}
</style>
