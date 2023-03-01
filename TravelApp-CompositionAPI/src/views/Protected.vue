<template>
    <div>
        <h1>Greetings, {{ username }}</h1>
        <button @click="logout">Logout</button>
        <br>
        <router-link :to="{name:'invoices'}">
        <button>Invoices</button>
        
        </router-link>
    </div>
</template>
<script>
import {ref} from  'vue'
import {useRouter, useRoute} from 'vue-router'
const router = useRouter()
const route = useRoute()

export default{
    setup(){
        const username = ref(window.user)
        const logout = () =>{
            window.user = null
            
            router.push({name:'Home'})
        }
        return {username, logout}
    },

//     data(){
//          return{
//              username:window.user
//          }
//  },
//      methods:{        
//              logout(){
//              window.user = null
//              this.$router.push({name:'Home'})
//          }   
//   }
}


</script>