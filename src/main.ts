import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initI18n } from './i18n'
import './style.css'

initI18n()

createApp(App).use(router).mount('#app')
