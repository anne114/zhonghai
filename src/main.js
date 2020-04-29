import Vue from 'vue'
import App from './App'

import store from './store'

import MescrollUni from "@/components/libs/mescroll-uni/mescroll-uni.vue"
import MescrollBody from "@/components/libs/mescroll-uni/mescroll-body.vue"
Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)
Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()