<template>
    <div class="card">
        <img :src="`/images/${experience.image}`" :alt="experience.name">

        
    </div>
</template>

<script>

export default{
    props:{
        experience:{type:Object, required}
    }
}
</script>