import { createApp } from "vue";
import { createPinia } from "pinia";
import router from '@/router'
import App from "./App.vue";
// import Home from '@/views/Home.vue'
// import About from '@/views/About.vue'

// // import router from "./router";


// import { createRouter, createWebHistory } from "vue-router";

// const router = createRouter({
//     history:createWebHistory(),
//     routes:[
//         {path:'/',name:'Home', component:Home},
//         {path:'/about',name:'About', component:About}

//     ]
// })
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
