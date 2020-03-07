import Vue from 'vue'
import App from './App'
import router from '@/utils/routerIntercept'
import store from './store'  

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$router = router;
Vue.prototype.$store = store  

const app = new Vue({
    ...App
})
app.$mount()
