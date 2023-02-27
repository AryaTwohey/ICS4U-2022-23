<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
  <div id="nav">
  <header>

      <br>
      <router-link to="/">Home </router-link>  
      <router-link to="/brazil">Brazil </router-link>
      <router-link to="/hawaii">Hawaii </router-link>
      <router-link to="/jamacia">Jamacia </router-link>
      <router-link to="/panama">Panama </router-link>

    
    
  
  </header>
</div>

<div class="container">
    <router-view></router-view>
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
 

