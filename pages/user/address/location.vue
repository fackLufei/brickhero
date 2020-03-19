<template>
   <view>
        <view class="page-body">
            <view class="page-section page-section-gap">
                <!-- <map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude">
                </map> -->
            </view>
        </view>
    </view>
</template>

<script>
	import UniMap from '../../utils/map'
	export default {
		 computed: {  
					location() {
						return this.map && this.map.location

					},

					  
		        }, 
		data() {
			return {
		            title: 'map',
		            latitude: 39.909,
					longitude: 116.39742,
					map:null
			};
		  },
		  async onReady() {
			  this.map = new UniMap()
			  this.map.chooseLocation()
		  }
			
	}
</script>

<style>
</style>
