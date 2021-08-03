import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import { ValidationProvider, ValidationObserver, setInteractionMode } from 'vee-validate/dist/vee-validate.full'

import './vee-validate'

Vue.config.productionTip = false

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

setInteractionMode('eager')

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
