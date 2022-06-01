import { createApp } from 'vue'
import App from './App.vue'
import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'animate.css'
import './assets/theme/index.css'

createApp(App).use(VueFullPage).use(ElementPlus).mount('#app')
