import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default  new Vuex.Store({  
    state: {  
        login: false,  
        token: '',  
        classifyList:[]//首页分类数据
    },  
    mutations: {  
        login(state, provider) {  
            console.log(state)  
            console.log(provider)  
            state.login = true;  
            state.token = provider.token;  
   
        },  
        logout(state) {  
            state.login = false;  
            state.token = '';  
        },
		setClassifyList(state, data){
			state.classifyList = data;
		}
    }  
})  