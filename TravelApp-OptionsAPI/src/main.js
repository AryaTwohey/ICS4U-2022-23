import { createApp } from "vue";
import { createPinia } from "pinia";
import router from '@/router'
import App from "./App.vue";
import AppLink from "@/components/AppLink.vue"

// const app = createApp(App)

// app.use(createPinia())
// app.use(router)

// app.mount("#app")

createApp(App).component('AppLink', AppLink).use(router).mount('#app')
