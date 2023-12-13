import { createApp } from 'vue'
import App from './App.vue'
// vue-router
import router from './router';
// css
import '@css/style.css'
import 'primevue/resources/themes/lara-light-green/theme.css'
// plugins
import {PrimeVue , PrimeVueConfig} from '@plugin/primevue.js'

createApp(App).use(router).use(PrimeVue,PrimeVueConfig).mount('#app')
