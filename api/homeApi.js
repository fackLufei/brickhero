import http from '@/utils/http.js'

//首页数据展示
export function getHomeContent(){
	
	return http.get({
		url:'/home/index'
	});
	
}

 //分类目录全部分类数据接口 
export function productCateList(){
	
	return http.get({
		url:'/catalog/index'
	});
	
}

//分类目录当前分类数据接口
export function getCurrentCategory(id){
	
	return http.get({
		url:'/catalog/current?id='+id
	});
	
}

//商品页分类
export function getGoodsCategory(id){
	
	return http.get({
		url:'/goods/category?id='+id
	});
	
}

//获取商品列表
export function getProduct(id,pageSize,pageNum){
	return http.get({
		url:`/goods/list?categoryId=${id}&page=${pageNum}&limit=${pageSize}`
	});
}
//获取商品详情
export function getProductDetail(id){ 
	return http.get({
		url:`/goods/detail?id=${id}`
	});
}
//获取品牌详情
export function getBrandDetail(id){
	return http.get({
		url:`/brand/detail?id=${id}`
	});
}
//通过品牌查商品
export function getBrandProduct(id){ 
	return http.get({
		url:`/goods/list?brandId=${id}&page=1&limit=10`
	});
}
//获取关联商品
export function getRelated(id){
	return http.get({
		url:`/goods/related?id=${id}`
	});
}



