<template>
	<view class="index">
		<!-- 搜索 -->
		<van-sticky>
			<van-search placeholder="搜索" :clearable="false" disabled>
				<!-- 	use-left-icon-slot	<van-image
				  width="15"
				  height="15"
				  src="/static/images/search.png"
				  slot="left-icon"
				/> -->
			</van-search>
		</van-sticky>
		<!-- 头部轮播 -->
		<view class="carousel-section">
			<swiper @change="swiperChange" circular :indicator-dots="false" :autoplay="true" :interval="4000" :duration="500">
				<swiper-item v-for="item in carouselList" :key="item.id">
					<van-image class="swiper-item" width="100%" height="100%" :src="item.url" />
				</swiper-item>

			</swiper>
			<!-- 自定义swiper指示器 -->
			<view class="swiper-dots">
				<view v-for="(item,index) in carouselList" :key="index" class="swiper-dots-item" :class="swiperCurrent == index?'swiper-dots-active':''"></view>
			</view>
		</view>
		<!-- 分类 -->
		<view class="class-ification">
			<view class="cate-section">
				<view class="cate-item" v-for="_item in classifyList" :key="_item.id" @tap="classify(_item)">
					<image :src="_item.iconUrl"></image>
					<text>{{_item.name}}</text>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		getHomeContent,
		productCateList
	} from '@/api/homeApi.js'
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {
				swiperCurrent: 0,
				carouselList: []
			}
		},
		computed: {
			...mapState(['classifyList'])
		},
		onLoad(options) {
			// 页面初始化 options为页面跳转所带来的参数
			if (options.productId) {
				
					this.$router.navigateTo({
						url: '../productDetails/productDetails?id=' + options.productId
					});
		
			}
		},
		onReady() {
			//获取轮播数据
			getHomeContent().then(res => {
				if (res.data.banner) {
					this.carouselList = res.data.banner;
				}
			})
		},
		methods: {
			...mapMutations(['setClassifyList']),
			//轮播图切换修改自定义指示器
			swiperChange(e) {
				const index = e.detail.current;
				this.swiperCurrent = index;
			},
			classify(item) {
				this.$router.navigateTo({
					url: `/pages/product/product?id=${item.id}`
				});
			}
		}
	}
</script>

<style lang="scss">
	.index {
		.carousel-section {
			height: 360upx;
			position: relative;

			swiper {
				height: 100%;
			}
		}

		.swiper-dots {
			position: absolute;
			bottom: 30upx;
			left: 50%;
			transform: translate(-50%, 0);
			display: flex;
			justify-content: space-between;

			.swiper-dots-item {
				width: 20upx;
				height: 10upx;
				border-radius: 5px;
				background-color: rgba(255, 255, 255, 0.39);
				transition: 0.3s;
				margin-right: 10upx;
			}

			.swiper-dots-item:last-child {
				margin-right: 0;
			}

			.swiper-dots-active {
				width: 40upx;
				background-color: #ffffff;
			}
		}

		.class-ification {
			padding: 36upx 50upx 21upx;
		}

		.cate-section {
			display: flex;
			flex-wrap: wrap;
			// margin-bottom: 54upx;

			.cate-item {
				display: flex;
				flex-direction: column;
				align-items: center;
				color: #303133;
				font-size: 26upx;
				width: 33.33%;
				margin-bottom: 54upx;
			}

			image {
				width: 140upx;
				height: 140upx;
				margin-bottom: 14upx;
				display: block;
			}
		}
	}
</style>
