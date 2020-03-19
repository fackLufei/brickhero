import {getToken} from './auth.js'
//路由黑名单 未登录页面不允许跳转
const  blackList = ['cart'];

//路由函数
export default  {
	navigateTo(config){
		
		routeDetection(config).then(e=>{
			
			uni.navigateTo(config);
		})
		
	},
	redirectTo(config){
		routeDetection(config).then(e=>{
			uni.redirectTo(config);
		})
	},
	reLaunch(config){
		routeDetection(config).then(e=>{
			uni.reLaunch(config);
		})
	},
	switchTab(config){
		routeDetection(config).then(e=>{
			uni.switchTab(config);
		})
	},
	navigateBack(config){
		routeDetection(config).then(e=>{
			uni.navigateBack(config);
		})
	}
}

//路由拦截 用于需登录界面,重定向问题
function routeDetection(config){
	return new Promise((resolve, reject) => {
		//登录校验
		let isLogin = getToken();
		if(!isLogin){
			if(blackList.findIndex(item=>new RegExp(item).test(config.url))!=-1){
				uni.navigateTo({
					url:'/pages/login/login'
				})
				// reject('未登录');
				return;
			}
		}
		resolve();
	});
}