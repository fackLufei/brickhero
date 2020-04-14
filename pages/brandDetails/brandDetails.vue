<template>
	<view class="brand-details">
		<view class="brand-info">
			<view class="name">
				<image class="img" :src="brand.picUrl" background-size="cover"></image>
				<view class="info-box">
					<view class="info">
						<text class="txt">{{brand.name}}</text>
						<text class="line"></text>
					</view>
				</view>
			</view>
			<view class="desc">
				{{brand.desc}}
			</view>
		</view>

		<view class="cate-item">
			<view class="b">
				<block v-for="(item,index) in goodsList" :key="item.id">
					<navigator class="item" :class="index % 2 == 0 ? 'item-b' : ''" :url="'../goods/goods?id='+item.id">
						<image class="img" :src="item.picUrl" background-size="cover"></image>
						<text class="name">{{item.name}}</text>
						<text class="price">￥{{item.retailPrice}}</text>
					</navigator>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	import {getBrandProduct,getBrandDetail} from '@/api/homeApi.js';
	export default {
		onLoad(option){
			let id  = option.id;
			getBrandDetail(id).then(res=>{
				if(res.errno === 0){
					this.brand = res.data;
				}
			});
			getBrandProduct(id).then(res=>{
				if(res.errno === 0){
					this.goodsList = res.data.list;
				}
			});
		},
		data() {
			return {
				goodsList: [],
				brand: {}
			};
		}
	}
</script>

<style lang="scss">
	.brand-details {
		box-sizing: border-box;
		
		view, image, text, navigator {
		  box-sizing: border-box;
		  padding: 0;
		  margin: 0;
		}
		
		.brand-info .name {
			width: 100%;
			height: 290upx;
			position: relative;
		}

		.brand-info .img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 290upx;
		}

		.brand-info .info-box {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 290upx;
			text-align: center;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.brand-info .info {
			display: block;
		}

		.brand-info .txt {
			display: block;
			height: 37.5upx;
			font-size: 37.5upx;
			color: #fff;
		}

		.brand-info .line {
			margin: 0 auto;
			margin-top: 16upx;
			display: block;
			height: 2upx;
			width: 145upx;
			background: #fff;
		}

		.brand-info .desc {
			background: #fff;
			width: 100%;
			height: auto;
			overflow: hidden;
			padding: 41.5upx 31.25upx;
			font-size: 30upx;
			color: #666;
			line-height: 41.5upx;
			text-align: center;
		}

		.cate-item .b {
			width: 750upx;
			height: auto;
			overflow: hidden;
			border-top: 1upx solid #f4f4f4;
			margin-top: 20upx;
		}

		.cate-item .b .item {
			float: left;
			background: #fff;
			width: 375upx;
			padding-bottom: 33.333upx;
			border-bottom: 1upx solid #f4f4f4;
			height: auto;
			overflow: hidden;
			text-align: center;
		}

		.cate-item .b .item-b {
			border-right: 1upx solid #f4f4f4;
		}

		.cate-item .item .img {
			margin-top: 10upx;
			width: 302upx;
			height: 302upx;
		}

		.cate-item .item .name {
			display: block;
			width: 365.625upx;
			height: 35upx;
			padding: 0 20upx;
			overflow: hidden;
			margin: 11.5upx 0 22upx 0;
			text-align: center;
			font-size: 30upx;
			color: #333;
		}

		.cate-item .item .price {
			display: block;
			width: 365.625upx;
			height: 30upx;
			text-align: center;
			font-size: 30upx;
			color: #b4282d;
		}
	}
</style>
