import Vue from 'vue';
import Vuex from 'vuex';
import {getToken,getUserInfo} from '@/utils/auth.js';

Vue.use(Vuex);

export default  new Vuex.Store({  
    state: {  
        userInfo:getUserInfo(), 
        token: getToken()||'',  
        classifyList:[]//首页分类数据
    },  
    mutations: {    
        logout(state) { 
			 state.userInfo = {};
			 state.token = '';
             uni.clearStorageSync();
        },
		setClassifyList(state, data){
			state.classifyList = data;
		}
    }  
})  