import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBEec_ShUYMnxNv2A_qKQysEoJZLGjhRe4",
  authDomain: "addressbook-569c3.firebaseapp.com",
  projectId: "addressbook-569c3",
  storageBucket: "addressbook-569c3.appspot.com",
  messagingSenderId: "111267875095",
  appId: "1:111267875095:web:37e37348cf70990d0d4f52"
};

firebase.initializeApp(firebaseConfig);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
