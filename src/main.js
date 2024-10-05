import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import Vuebar from 'vuebar'
import VueNumber from 'vue-number-animation'
import { router } from '@/routes'
import "@/assets/css/tailwind.css"

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
  .use(router)
  .use(Vuebar)
  .use(VueNumber)
  .mount('#app')
