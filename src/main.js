import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

import { ValidationProvider, ValidationObserver, setInteractionMode } from 'vee-validate/dist/vee-validate.full'

import './vee-validate'

Vue.config.productionTip = false

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

setInteractionMode('eager')

firebase.initializeApp({
  apiKey: "AIzaSyAejUf44VZrqtgCKehBXGoAYY_B4X7Ngqw",
  authDomain: "rocketseat-auth.firebaseapp.com",
  projectId: "rocketseat-auth",
  storageBucket: "rocketseat-auth.appspot.com",
  messagingSenderId: "302480636850",
  appId: "1:302480636850:web:691de888f06a09a352c2ab"
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
