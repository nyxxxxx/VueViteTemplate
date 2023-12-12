import { createApp } from 'vue'
import App from './App.vue'
import '@css/style.css'
// vue-router
import router from './router';


createApp(App).use(router).mount('#app')
