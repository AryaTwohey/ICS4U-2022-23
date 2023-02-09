const app = Vue.createApp({
   data() {
      return {
         cart:[],
         premium: true
      }
   },
   methods: {
      updateCart(id){
         this.cart.push(id)

      },
      removeFromCart(){
         this.cart.pop(this.cart.length -1)

      }
   }
})