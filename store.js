import Vue from 'vue';
import Vuex from 'vuex';
import {getToken,getUserInfo} from '@/utils/auth.js';

Vue.use(Vuex);

export default  new Vuex.Store({  
    state: {  
        userInfo:getUserInfo(), //用户信息
        token: getToken()||'',  //token
        classifyList:[],//首页分类数据
		currentCategory:[],//当前二级分类详情
		currentSubCategory:[],//当前二级分类列表
		routerWait:{},//{routerPath:'',routerData:{},routerType:''}//预添加购物车数据
		cartData:[],//购物车数据
    },  
    mutations: {    
        logout(state) {//退出登录
			 state.userInfo = {};
			 state.token = '';
             uni.clearStorageSync();
        },
		setClassifyList(state, data){//商品分类一级数据
			state.classifyList = data.categoryList;
			state.currentCategory = data.currentCategory;//二级分类详情
		    state.currentSubCategory = data.currentSubCategory;//二级分类列表
		},
		editCurrentCategory(state,data){//修改当前分类数据
			state.currentCategory = data.currentCategory;//二级分类详情  
			state.currentSubCategory = data.currentSubCategory;//二级分类列表
		},
		setRouterWait(state, data){//跳转拦截数据
			state.routerWait = data;
		},
		setCartData(state,data){//添加购物车数据 data = id   pic  name  number price isCheck  xxx待定字段
			  let index = state.cartData.findIndex(item => item.id === data.id);
			  if(index === -1){
				  state.cartData.push(data);
			  }else{
				  state.cartData[index].number +=  data.number;
			  }
		}
    }  
})  