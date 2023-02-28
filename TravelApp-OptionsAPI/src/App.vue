<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
  <TheNavigation/>

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
 

