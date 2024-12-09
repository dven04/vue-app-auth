import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.js';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Import Toastification CSS
import 'vue-toastification/dist/index.css';

// Import Vue Toastification
import Toast from 'vue-toastification';



// Create the Vue app and use the necessary plugins
createApp(App)
  .use(store)
  .use(router)
  .use(Toast) // Add Toastification here
  .mount('#app')
