<template>
	<view>
		 shopCart
	</view>
</template>

<script>
	import {mapState} from 'vuex';
	export default {
		data() {
			return {
				
			}
		},
		computed:{
			...mapState(['routerWait'])
		},
		onShow() {
			console.log(this.routerWait);
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
