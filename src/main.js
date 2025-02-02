//import './assets/main.css'
import './assets/style.css' // Import Tailwind styles

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.config.devtools = false // Disable Vue DevTools completely

app.use(createPinia())
app.use(router)

app.mount('#app')
