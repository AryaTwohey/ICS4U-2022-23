import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import Home from '@/views/Home.vue'

const routes = [
  {path:'/', name:'Home', component:Home},
  {path:'/:pathMatch(.*)*',name:'NotFound',component:() => import('@/views/NotFound.vue')
},
  {
    path:'/destination/:id/:slug',
    name:'destination.show', 
    component:()=>import('@/views/DestinationShow.vue'),
    props:route=>({...route.params, id:parseInt(route.params.id)}),
    children:[
      {
        path:':experienceSlug',
        name:'experience.show', 
        component: ()=>import('@/components/ExperienceShow.vue'),
        props:route=>({...route.params, id:parseInt(route.params.id)})
      }
    ]
},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes 
  // linkActiveClass:'vue-school-active-link'
  
});

export default router;
