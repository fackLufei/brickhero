<template>
	<view class="classify">
		<!-- 搜索 -->
		<van-sticky>
			<van-search placeholder="搜索" :clearable="false" disabled>
			</van-search>
		</van-sticky>
		<view class="tree-select">
			<scroll-view scroll-y class="left-aside">
				<view v-for="item in classifyList" :key="item.id" class="f-item" :class="{active: item.id == currentId}" @click="onClickNav(item)">
					{{item.name}}
				</view>
			</scroll-view>
			<scroll-view scroll-with-animation scroll-y class="right-aside">
					<view class="t-list">
						<view @click="rightItemClick(titem)" v-if="titem.pid === item.id" class="t-item" v-for="titem in rightItemList"
						 :key="titem.id">
							<image :src="titem.icon"></image>
							<text>{{titem.name}}</text>
						</view>
					</view>
			</scroll-view>
		</view>

	</view>
</template>

<script>
	import {
		productCateList
	} from '@/api/homeApi.js';
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		onLoad() {
			if(this.classifyList.length>0){
				this.initData(this.classifyList[0].id);
			}else{
				//获取首页分类
				productCateList(0).then(res => {
					if (res.code == 200) {
						this.setClassifyList(res.data);
						this.initData(res.data[0].id);
					}
				})
			}
		},
		computed: {
			...mapState(['classifyList'])
		},
		data() {
			return {
				currentId: 0,
				rightItemList:[]
			}
		},
		methods: {
			...mapMutations(['setClassifyList']),
			initData(id){
				this.currentId = id;
				this.getItemData(id);
			},
			onClickNav(item) {
				this.currentId = item.id;
				this.getItemData(this.currentId);
			},
			rightItemClick(item){
				this.$router.navigateTo({
					url: `../product/product?id=${this.currentId}&tabId=${item.id}`
				});
			},
			getItemData(id) {
				productCateList(id).then(res => {
					if (res.code == 200) {
						this.rightItemList = res.data;
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
