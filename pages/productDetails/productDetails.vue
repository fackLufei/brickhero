<template>
	<view class="product-details">
		<!-- 轮播 -->
		<swiper v-if="goods.gallery" class="goodsimgs" indicator-dots="true" autoplay="true" interval="3000" duration="1000">
			<swiper-item v-for="(item,index) in goods.gallery" :key="index">
				<image :src="item" background-size="cover"></image>
			</swiper-item>
		</swiper>
		<!-- 商品名字 -->
		<view class="product-name">{{goods.name}}</view>
		<!-- info -->
		<view class="goods-info">
			<view class="c">
				<text class="desc">{{goods.brief}}</text>
				<view class="price">
					<view class="counterPrice">原价：￥{{goods.counterPrice}}</view>
					<view class="retailPrice">现价：￥{{goods.retailPrice}}</view>
				</view>

				<view class="brand" v-if="brand.name">
					<navigator :url="'../brandDetails/brandDetails?id='+brand.id">
						<text>{{brand.name}}</text>
					</navigator>
				</view>
			</view>
		</view>
		<!-- html 详情 -->
		<jyf-parser v-if="goods.detail" :html="goods.detail" ref="article" style="font-size: 0;"></jyf-parser>
	</view>
</template>

<script>
	import {
		getProductDetail,
		getRelated
	} from '@/api/homeApi.js';
	import parser from "@/components/jyf-parser/jyf-parser"; //

	let _currProductId;
	export default {
		components: {
			"jyf-parser": parser
		},
		data() {
			return {
				goods: {}, //商品详情
				brand: {} //品牌
			}
		},
		onLoad(option) {
			_currProductId = option.id;
			getProductDetail(_currProductId).then(res => {
				if (res.errno === 0) {
					console.log(res.data);
					this.goods = res.data.info;
					this.brand = res.data.brand;
				}
			})
		},
		// 页面分享L
		onShareAppMessage: function() {

			return {
				title: '我是你亲爱的小黑',
				desc: '唯爱与美食不可辜负',
				path: '/pages/index/index?productId=' + _currProductId
			}

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f4f4f4;
	}

	.product-details {
		.info-details {
			font-size: 0;
		}

		.goodsimgs {
			width: 750upx;
			height: 750upx;
		}

		.goodsimgs image {
			width: 750upx;
			height: 750upx;
		}

		.product-name {
			height: 86upx;
			font-weight: 550;
			line-height: 86upx;
			margin-left: 35upx;
			font-size: 38upx;
			letter-spacing: 1upx;
			font-size: 29upx;
			color: #333;
		}

		.goods-info {
			overflow: hidden;
			background: #fff;
		}

		.goods-info .c {
			display: block;
			height: 100%;
			margin-left: 31.25upx;
			padding: 38upx 31.25upx 38upx 0;
			border-bottom: 1px solid #f4f4f4;
		}

		.goods-info .c text {
			display: block;
			width: 687.5upx;
			text-align: left;
		}

		.goods-info .desc {
			height: 43upx;
			margin-bottom: 41upx;
			font-size: 24upx;
			line-height: 36upx;
			color: #999;
		}

		.goods-info .price {
			display: flex;
		}

		.goods-info .counterPrice {
			padding-left: 0upx;
			text-decoration: line-through;
			font-size: 30upx;
			color: #999;
		}

		.goods-info .retailPrice {
			padding-left: 5%;
			font-size: 30upx;
			color: #a78845;
		}

		.goods-info .brand {
			margin-top: 23upx;
			min-height: 40upx;
			text-align: left;
		}

		.goods-info .brand {
			margin-top: 23upx;
			min-height: 40upx;
			text-align: left;
		}

		.goods-info .brand text {
			display: inline-block;
			width: auto;
			padding: 2px 30upx 2px 10.5upx;
			line-height: 35.5upx;
			border: 1px solid #f48f18;
			font-size: 25upx;
			color: #f48f18;
			border-radius: 4upx;
		}
	}
</style>
