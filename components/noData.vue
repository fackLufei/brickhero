<template>
	<!-- 无数据显示 -->
	<view class="no-data">
		{{msg||'暂无数据'}}
	</view>
</template>

<script>
	export default {
		props:['msg']
	}
</script>

<style>
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
</style>
