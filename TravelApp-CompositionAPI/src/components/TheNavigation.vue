<template>
    <div id="nav">

        <AppLink id="logo" to="/">Travel App</AppLink>

        <AppLink v-for="destination in destinations" :key="destination.id" :to="{name:'destination.show', params:{id:destination.id, slug:destination.slug}}">
        
        {{ destination.name }}
        
        </AppLink>
        <AppLink :to="{name:'protected'}">Dashboard</AppLink>
        <AppLink to="https://travelappcompositionapi.onrender.com/">Deployed App</AppLink>


</div>
</template>


<script>
 import sourceData from '@/data.json'
import {ref} from  'vue'
import {useRouter, useRoute} from 'vue-router'
const router = useRouter()
const route = useRoute()

export default{
    setup(){
        const destinations = ref(sourceData.destinations)
        return{
        destinations
    }
    }

    // data(){
    //     return  {   
    //     destinations: sourceData.destinations
    //     }
    

}
</script>



<style land="css">

#nav .vue-school-active-link{
    color: lightskyblue;
    border-bottom: 2px solid lightskyblue;
}

</style>
