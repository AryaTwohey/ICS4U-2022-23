<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'

 onMounted(() => {
  axios
    .get('https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3/events')
    .then((response) => {
      events.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
const events = ref(null)

onMounted(() => {
  EventService.getEvents()
    .then((response) => {
      events.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>


<template>
  <div>
  <h1>Events For Good</h1>
  
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
  </div>
</template>


<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
