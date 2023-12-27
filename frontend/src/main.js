import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useToast } from 'vue-toast-notification'

import App from './App.vue'
import router from './router'

import "vue-toast-notification/dist/theme-bootstrap.css"

const toast = useToast({
    duration: 5000,
    position: 'bottom-right'
})

const app = createApp(App)

// app.provide('toast', toast)
app.use(createPinia())
app.use(router)

app.mount('#app')
