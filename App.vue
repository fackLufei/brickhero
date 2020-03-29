<script>
	import {
		productCateList
	} from '@/api/homeApi.js'
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
			if(this.classifyList.length===0){
				//获取首页分类
				productCateList().then(res => {
					if(res.errno === 0){
						this.setClassifyList(res.data);
					}
				})
			}
		},
		onHide: function() {
			console.log('App Hide')
		},
		computed: {
			...mapState(['classifyList'])
		},
		methods:{
			...mapMutations(['setClassifyList'])
		}
	}
</script>

<style>
	/*每个页面公共css */
	
</style>
