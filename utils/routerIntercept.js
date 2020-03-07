//路由黑名单 未登录页面不允许跳转
const  blackList = [];

//路由函数
export default  {
	navigateTo(config){
		
		routeDetection(config).then(e=>{
			console.log(uni.navigateTo);
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
		// let isLogin = true||getUserId();
		// if(!isLogin){
		// 	if(blackList.indexOf(config.url)!=-1){
		// 		reject('未登录');
		// 		uni.navigateTo('../pages/login')
		// 		return;
		// 	}
		// }
		resolve();
	});
}