import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mitt from 'mitt'

const app = createApp(App)

app.use(router)
app.provide('event', mitt())

app.mount('#app')
