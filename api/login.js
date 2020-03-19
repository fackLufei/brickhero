import http from '@/utils/http.js';

//微信会员登录
export function wxLogin(data){
	return http.post({
		url:'/sso/login/wx',
		data
	});
}
//会员登录 POST /api/sso/login
export function login(data){
	return http.post({
		url:`/sso/login?username=${data.username}&password=${data.password}`,
		isNoLoading:true
	});
}
//获取验证码
export function getAuthCode(telephone){  
	return http.get({
		url:'/sso/getAuthCode',
		data:{telephone}
	});
}
//注冊 POST /api/sso/register
export function register(data){
	return http.post({
		url:`/sso/register?username=${data.telephone}&password=${data.password}&telephone=${data.telephone}&authCode=${data.authCode}`
	});
}