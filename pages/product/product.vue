<template>
	<view class="product">
		<!-- tbas -->
			<van-tabs :active="tabActive" custom-class="nav-style"  tab-class="my-nav-item" @change="tabChange" tab-active-class="my-active">
				<van-tab :title="item.name" :name="item.id" v-for="item in brotherCategory" :key="item.id"/>
			</van-tabs>
		<!-- 广告词 -->
		<view class="adverti-words">
			<view class="adverti-words-name">
				{{currentCategory.name}}
			</view>
			<view class="adverti-words-desc">
				{{currentCategory.desc}}
			</view>
		</view>
		<!-- 商品集合 -->
		<view class="product-list" v-if="goodsData.length>0">
			<!-- 商品 -->
			<view class="product-item" v-for="item in goodsData" :key="item.id" @tap="productTab(item.id)">
				<!-- 商品图片 -->
				<view class="product-pic">
					<van-image fit="contain" width="100%" height="100%" :src="item.picUrl" />
				</view>
				<!-- 商品名称 -->
				<view class="product-name">
					{{item.name}}
				</view>
				<!-- 商品标签 -->
				<view class="product-label">
					<text class="product-label-1">{{item.brief}}</text>
					<!-- <text class="product-label-2">全国联保</text> -->
				</view>
				<!-- 价格 与销售信息 -->
				<view class="product-info">
					<text class="product-price">&#65509; {{item.retailPrice}}</text>
					<!-- <text class="product-sale">已销售{{item.sale}}{{item.unit}}</text> -->
				</view>
				<!-- 会价格 -->
				<!-- 					<view class="vip-info">
					<text class="vip-price">&#65509;100</text>
					<image fit="contain" class="vip-icon" src="/static/images/vip_price.png" />
				</view> -->
				<van-icon class="shopping-cart" name="shopping-cart-o" @tap="shopCart(item)" />
			</view>
		</view>
		<!-- 筛选条件 -->
		<!-- 		<view class="screening-condit">
			<view class="sc-item sc-rewest" :class="{'sc-active':screenActive===0}" @tap="screen(0)">最新</view>
			<view class="sc-item sc-sale" :class="[{'sc-active':screenActive===1},screenDirection?'sc-active-top':'sc-active-bottom']"
			 @tap="screen(1)">销量</view>
			<view class="sc-item sc-price" :class="[{'sc-active':screenActive===2},screenDirection?'sc-active-top':'sc-active-bottom']"
			 @tap="screen(2)">价格</view>
		</view> -->
		<!--  -->
		<view v-if="isEndData&&goodsData.length!==0" class="is-end-data">
			数据已经到底了
		</view>
		<!-- 无商品时提示 -->
		<no-data v-if="goodsData.length===0"/>
	</view>
</template>

<script>
	import {
		getGoodsCategory,
		getProduct
	} from '@/api/homeApi.js';
	import {
		mapMutations
	} from 'vuex';
	import NoData from '@/components/noData.vue';

	let currTabId;

	export default {
		data() {
			return {
				tabActive: 0,
				// screenActive: 0,
				// screenDirection: true,
				brotherCategory: [],
				currentCategory: {
					name:'',
					desc:''
				},
				parentCategory: {},
				goodsData: [],
				pageSize: 10,
				pageNum: 1,
				isEndData:false
			}
		},
		onLoad(option) {
			let id = option.id;
			getGoodsCategory(id).then(res => {

				if (res.errno === 0) {
					this.currentCategory = res.data.currentCategory;
					this.parentCategory = res.data.parentCategory;
					this.tabActive = this.currentCategory.id;
					this.brotherCategory = res.data.brotherCategory;
					this.getGoodsData(); //获取当前分类商品
				}

			})
		},
		onReachBottom(e) {
			if (!this.isEndData) {
				this.pageNum++;
				this.getGoodsData();
			}
		},
		methods: {
			...mapMutations(['setRouterWait']),
			getGoodsData() { //获取商品列表

				getProduct(this.tabActive,
					this.pageSize,
					this.pageNum).then(res => {
					if (res.errno === 0) {
						let result = res.data;
						this.goodsData = this.goodsData.concat(result.list);
						if (result.page === result.pages) {
							this.isEndData = true; //当前分类数据已经加载完毕
						}
					}
				})
			},
			productTab(id){//跳转详情页
				this.$router.navigateTo({
					url:`../../pages/productDetails/productDetails?id=${id}`
				})
			},
			// screen(index) { //条件筛选

			// 	if (this.screenActive != index) {
			// 		this.screenActive = index;
			// 		this.screenDirection = true;
			// 	} else {
			// 		this.screenDirection = !this.screenDirection;
			// 	}
			// 	this.getGoodsData(this.tabActive);
			// },
			tabChange(e) { //类别选择
				this.tabActive = e.detail.name;
				this.goodsData = [];
				this.isEndData = false;
				this.pageNum = 1;
				this.getGoodsData(this.tabActive);
			},
			shopCart(item) {

				this.setRouterWait({
					routerPath: '../cart/cart',
					routerType: 'switchTab',
					routerData: {
						id: item.id,
						pic: item.picUrl,
						name: item.name,
						price: item.retailPrice,
						number: 1,
						isCheck: true
					}
				});

				this.$router.switchTab({
					url: `../cart/cart`
				});

			}
		},
		components: {
			NoData
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F9F9F9;
	}

	.product {
		
		.nav-style{
			 position: fixed;
			  top: 0;
			  left: 0;
			  right: 0;
			  z-index: 1000;
			  box-shadow: 0 2px 2px #F8F8F8;
		}
		
		.product-list {
			display: flex;
			flex-wrap: wrap;
			padding-left: -10upx;
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

			.vip-info {
				width: 100%;
				line-height: 1;
				display: flex;
				align-items: center;
				margin-top: 5upx;

				.vip-price {
					color: #333333;
					font-size: 22rpx;
					font-weight: 600;

				}

				.vip-icon {
					width: 60upx;
					height: 28upx;
				}
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

		.adverti-words {
			height: 145upx;
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin-top: 44px;

			.adverti-words-name {
				height: 35upx;
				margin-bottom: 18upx;
				font-size: 30upx;
				color: #333;
			}

			.adverti-words-desc {
				height: 24rpx;
				font-size: 24rpx;
				color: #999;
			}
		}
		
		.is-end-data{
			padding: 30upx 0;
			text-align: center;
			background-color: #F1F1F1;
			font-size: 22upx;
			color: #999999;
		}
			

		// .screening-condit {
		// 	height: 100upx;
		// 	background-color: #FFFFFF;
		// 	display: flex;
		// 	width: 100%;
		// 	position: absolute;
		// 	top: 44px;
		// 	align-items: center;

		// 	.sc-item {
		// 		flex: 1;
		// 		text-align: center;
		// 		color: #999999;
		// 		font-size: 24upx;
		// 		position: relative;
		// 	}

		// 	.sc-sale,
		// 	.sc-price {
		// 		&::before {
		// 			content: '';
		// 			position: absolute;
		// 			width: 0;
		// 			height: 0;
		// 			border-left: 7rpx solid transparent;
		// 			border-right: 7rpx solid transparent;
		// 			border-bottom: 10rpx solid #B9B9B9;
		// 			top: 5rpx;
		// 			right: 82rpx;
		// 		}

		// 		&::after {
		// 			content: '';
		// 			position: absolute;
		// 			width: 0;
		// 			height: 0;
		// 			border-left: 7rpx solid transparent;
		// 			border-right: 7rpx solid transparent;
		// 			border-top: 10rpx solid #B9B9B9;
		// 			bottom: 5rpx;
		// 			right: 82rpx;
		// 		}
		// 	}

		// 	.sc-active {
		// 		color: #333333;
		// 	}

		// 	.sc-active.sc-active-top {
		// 		&::before {
		// 			border-bottom-color: #E51815;
		// 		}
		// 	}

		// 	.sc-active.sc-active-bottom {
		// 		&::after {
		// 			border-top-color: #E51815;
		// 		}
		// 	}
		// }

	}
</style>
