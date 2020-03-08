<template>
	<view class="product">
		
	</view>
</template>

<script>
	import {
		productCateList
	} from '@/api/homeApi.js';
	import {
		mapState
	} from 'vuex';
	export default {
		data() {
			return {
				
			}
		},
		computed: {
			...mapState(['classifyList'])
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
  .product{
	  
  }
</style>
