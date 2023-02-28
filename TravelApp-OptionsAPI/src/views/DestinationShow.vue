<!-- <template>
    <section class = "destination">
        <h1>{{ destination.name }}</h1>
        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name">
            <p>{{ destination.description }}</p>
        </div>
    </section>

    <section class="experiences">
   

</template>


<script>
import sourceData from '@/data.json'
export default {
    components:{ExperienceCard},
    computed:{
        destinationId(){
            return parseInt(this.$route.params.id)
        },
        destination(){
            return sourceData.destinations.find(destination => destination.id === this.destinationId)
        }
    }
}
</script> -->
<template>
    <section class = "destination">
        <h1>{{ destination.name }}</h1>
        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name">
            <p>{{ destination.description }}</p>
        </div>
    </section>

<section class="experiences">
<h2>Top Experiences in {{ destination.name }}</h2>

<div class="cards">

<ExperienceCard
v-for="experience in destination.experiences" 
:key="experience.slug" 
:experience="experience"
/>

</div>


</section>
   

</template>


<script>
import sourceData from '@/data.json'
import ExperienceCard from '@/components/ExperienceCard.vue'
export default {
    components:{
        ExperienceCard
    },
   
    computed:{
        destinationId(){
            return parseInt(this.$route.params.id)
        },
        destination(){
            return sourceData.destinations.find(destination => destination.id === this.destinationId)
        }
    }
}
</script>