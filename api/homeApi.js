import http from '@/utils/http.js'

//首页数据展示
export function getHomeContent(){
	
	return http.get({
		url:'/home/content'
	});
	
}

//获取首页分类 
export function productCateList(parentId){
	
	return http.get({
		url:`/home/productCateList/${parentId}`
	});
	
}
