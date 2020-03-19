
export function setToken(data){
	
	return uni.setStorageSync('token',data);
}

export function getToken(){ 
	
	return uni.getStorageSync('token')
}

export function setUserInfo(data){
	
	return uni.setStorageSync('userInfo',JSON.stringify(data))
}

export function getUserInfo(){
	let userInfo = uni.getStorageSync('userInfo');
	if(userInfo){
		return JSON.parse(userInfo);
	}else{
		return {};
	}
}

export function getCodeMax(){
	return uni.getStorageSync('codeMax');
}

export function setCodeMax(max){
	return uni.setStorageSync('codeMax',max);
}

export function getCodeEnd(){
	return uni.getStorageSync('codeEnd');
}

export function setCodeEnd(date){
	return uni.setStorageSync('codeEnd',date);
}
