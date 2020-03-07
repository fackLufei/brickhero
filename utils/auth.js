
export function setUserId(data){
	
	return uni.setStorageSync('userId',data);
	
}

export function getUserId(){
	return uni.getStorageSync('userId')
}