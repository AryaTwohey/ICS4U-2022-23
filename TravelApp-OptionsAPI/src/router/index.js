import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import Home from '@/views/Home.vue'

const routes = [
  {path:'/', name:'Home', component:Home},
  // {path:'/brazil',name:'brazil', component:() => import('@/views/Brazil.vue')},
  // {path:'/hawaii',name:'hawaii', component:() => import('@/views/Hawaii.vue')},
  // {path:'/jamacia',name:'jamacia', component:() => import('@/views/Jamacia.vue')},
  // {path:'/panama',name:'panama', component:() => import('@/views/Panama.vue')},
  {path:'/destination/:id/:slug',name:'destination.show', component:()=>import('@/views/DestinationShow.vue')}

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes 
  // linkActiveClass:'vue-school-active-link'
  
});

export default router;
