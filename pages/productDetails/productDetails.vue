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
				goods:{}
			}
		},
		onLoad(option) {
			_currProductId = option.id;
			getProductDetail(_currProductId).then(res => {
				if (res.errno === 0) {
					console.log(res.data);
					this.goods = res.data.info
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
	page{
		background-color: #f4f4f4;
	}
	.product-details {
		.info-details {
			font-size: 0;
		}

		.goodsimgs {
			width: 750rpx;
			height: 750rpx;
		}

		.goodsimgs image {
			width: 750rpx;
			height: 750rpx;
		}
		
		.product-name{
			height: 86upx;
			font-weight: 550;
			line-height: 86upx;
			margin-left: 35upx;
			font-size: 38upx;
			letter-spacing: 1upx;

		}
	}
</style>
