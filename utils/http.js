import {getToken} from './auth.js';

let token;

//默认请求头
const defaultHeader = {
	contentType: 'application/x-www-form-urlencoded'
	// 'Content-Type': 'application/json'
};


//请求封装
function XHService(data, request, response) {

	this.baseUrl = data.baseUrl;
	this.header = data.header || defaultHeader;
	this.timeout = data.timeout || 30000;
	this.dataType = data.dataType || 'json';
	this.responseType = data.responseType || 'text';
	this.interceptor = {
		request: request, //请求前拦截
		response: response //响应结果拦截
	}

}

XHService.prototype.get = function(config) {

    config.method = 'get';
	
	return this._request(config);
}

XHService.prototype.post = function(config) {

    config.method = 'post';
	
	return this._request(config);
}

// XHService.prototype.uploadFile = function(config){
	
// 	return new Promise((resolve, reject) => {
	
		
// 	});
	
// }token
//请求函数
XHService.prototype._request = function(config){
	
	//如果是用户API则给header添加
	if(config.userApi){
		token = token||getToken();
		config.header = {
			"Bearer":token
		}
	}
	
	return new Promise((resolve, reject) => {
	
		//请求拦截处理请求数据
		if (this.interceptor.request) {
			config = this.interceptor.request(config);
		}
		uni.request({
			url: this.baseUrl + config.url,
			method: config.method,
			data: config.data||{},
			header: config.header || this.header,
			dataType: config.dataType || this.dataType,
			responseType: config.responseType || this.responseType,
			timeout: config.timeout || this.timeout,
			complete:(response)=>{
				let res = response;
				if (this.interceptor.response) {
					res = this.interceptor.response(res);
				}
				if (!res) {
					reject('返回值已被您拦截！');
					return;
				} else {
					resolve(res);
				}
			}
		});
	});
	
}


export default new XHService({
	baseUrl:'http://47.115.50.116:8080/api'
},function(config){//请求拦截

	if(!config.isNoLoading){//开启loading
		uni.showLoading({
			title: '加载中'
		});
	}
	return config;
},function(response){//响应拦截

	 uni.hideLoading();//隐藏
	 	
	if(response.statusCode == 200){
		return response.data;
		
	}
	
});


