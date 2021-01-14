import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { firebaseConfig, Firebase } from './config/firebase-config';
import { VuelidatePlugin } from '@vuelidate/core';

Firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(store)
  .use(VuelidatePlugin)
  .use(router)
  .mount('#app');
