<template>
    
    <div class="home">
        <h1>All Destinations</h1>


        <div class="destinations">
            <router-link v-for="destination in destinations" :key="destination.id" :to="{name:'destination.show', params:{id:destination.id, slug: destination.slug}}">
        
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name">
        
        </router-link>
        </div>
        <br>
        <hr>
        <center><h2>Reviews</h2></center>
        <div class="reviews" v-for="review in reviews" :key="review.id">
            <h3 class="user">{{ review.user }}  posted this</h3>
            <h2 class="stars">{{ review.stars }}</h2>
            <div class="user-review">
            <p class="review">{{ review.review }}</p>
            </div>

        </div>
        
    </div>
    

</template>

<script>

import sourceData from '@/data.json'
import allReviews from '@/reviews.json'
export default{
data(){
    return{
    destinations: sourceData.destinations,
    reviews: allReviews
}
}
}

</script>
<style>
.user-review{
    border: 1px solid black;
}
.review{
    margin: 10px;
}


</style>