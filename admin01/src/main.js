import Vue from 'vue'
import App from './App.vue'

import router from './router'
import './style.css'

Vue.config.productionTip = false

import http from './http'
import './plugins/element.js'
Vue.prototype.$http=http

Vue.mixin({
  computed:{
    uploadUrl(){
      return this.$http.defaults.baseURL+'/upload'
    }
  },
  methods:{
    getAuthHeader(){
      return{
        Authoriztion:`Bearer ${localStorage.token|| ''}` 
      }
    }
  }
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
