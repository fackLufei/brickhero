<template>
	<view class="classify">
		<!-- 搜索 -->
		<van-sticky>
			<van-search placeholder="搜索" :clearable="false" disabled>
			</van-search>
		</van-sticky>
		<view class="tree-select">
			<scroll-view scroll-y class="left-aside">
				<view v-for="(item,index) in classifyList" :key="index" class="f-item" :class="{active: index == currentId}" @tap="onClickNav(item,index)">
					{{item.name}}
				</view>
			</scroll-view>
			<scroll-view scroll-with-animation scroll-y class="right-aside">
					<view class="t-list">
						<view @tap="rightItemClick(titem)"  class="t-item" v-for="titem in currentSubCategory"
						 :key="titem.id">
							<image :src="titem.picUrl"></image>
							<text>{{titem.name}}</text>
						</view>
					</view>
			</scroll-view>
		</view>

	</view>
</template>

<script>
	import {
		getCurrentCategory
	} from '@/api/homeApi.js';
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		computed: {
			...mapState(['classifyList','currentCategory','currentSubCategory'])
		},
		data() {
			return {
				currentId: 0
			}
		},
		methods: {
			...mapMutations(['editCurrentCategory']),
			onClickNav(item,index) {
				this.currentId = index;
				this.getItemData(item.id);
			},
			rightItemClick(item){
				this.$router.navigateTo({
					url: `../product/product?id=${item.id}`
				});
			},
			getItemData(id) {
				getCurrentCategory(id).then(res => {
					if (res.errno === 0) {
						this.editCurrentCategory(res.data);
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.classify {
		.tree-select {
			position: absolute;
			top: 50px;
			bottom: 0;
			width: 100%;
			display: flex;
			background-color:#EDEDED;
		}

		.left-aside {
			flex-shrink: 0;
			width: 200upx;
			height: 100%;
			background-color: #fff;
		}
		.right-aside{
			flex: 1;
			height: 100%;
			padding-left: 2upx;
		}
		.f-item {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100upx;
			font-size: 28upx;
			color: #333333;
			position: relative;

			&.active {

				&:before {
					content: '';
					position: absolute;
					left: 0;
					top: 50%;
					transform: translateY(-50%);
					height: 36upx;
					width: 8upx;
					background-image: linear-gradient(#FFA97A, #FF6F42, #FF2B00);
					border-radius: 0 4px 4px 0;
					opacity: .8;
				}
			}
		}
		.t-list{
			display: flex;
			flex-wrap: wrap;
			width: 100%;
			background: #fff;
			padding-top: 12upx;
			&:after{
				content: '';
				flex: 99;
				height: 0;
			}
		}
		.t-item{
			flex-shrink: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			width: 176upx;
			font-size: 26upx;
			color: #666;
			padding-bottom: 20upx;
			
			image{
				width: 140upx;
				height: 140upx;
			}
		}

	}
</style>
