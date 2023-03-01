<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
  <TheNavigation/>

<div class="container">
  <router-view v-slot="{Component}">
    <transition name="fade" mode="out-in">

      <component :is="Component" :key="$route.path"></component>

  </transition>
  
  
  </router-view>



    </div>

  </div>
  <!-- <RouterView /> -->
</template>

<script>

import TheNavigation from "./components/TheNavigation.vue";
export default{
  components:{TheNavigation}
}


</script>

<style land="css">
.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.35s;
}

.fade-enter-from,
.fade-leave-to{
  opacity: 0;

}



</style>
 

