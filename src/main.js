// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import router

createApp(App)
  .use(router)  // Tell Vue to use the router
  .mount('#app');
