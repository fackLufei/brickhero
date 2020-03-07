<template>
	<view class="login">
		我是登录页{{userName}}
	</view>
</template>

<script>
	import {  
	        mapState
	    } from 'vuex'; 
		
	export default {
		 computed: {  
		            ...mapState(['userName'])  
		        }, 
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

</style>
