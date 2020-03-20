import Vue from 'vue';
import Vuex from 'vuex';
import {getToken,getUserInfo} from '@/utils/auth.js';

Vue.use(Vuex);

export default  new Vuex.Store({  
    state: {  
        userInfo:getUserInfo(), //用户信息
        token: getToken()||'',  //token
        classifyList:[],//首页分类数据
		routerWait:{}//{routerPath:'',routerData:{}}
    },  
    mutations: {    
        logout(state) {//退出登录
			 state.userInfo = {};
			 state.token = '';
             uni.clearStorageSync();
        },
		setClassifyList(state, data){//商品分类一级数据
			state.classifyList = data;
		},
		setRouterWait(state, data){//跳转拦截数据
			state.routerWait = data;
		}
    }  
})  