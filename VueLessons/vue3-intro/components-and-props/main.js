const app = Vue.createApp({
   data() {
      //this is like the parent, the product display has everything else
      return {
         cart: 0,
         premium: true,
      }
   },
   methods: {
      addToCart() {
         this.cart += 1
      },
      updateVariant(index) {
         this.selectedVariant = index
      }
   },
   computed: {
      title() {
         return this.brand + ' ' + this.product
      },
      image() {
         return this.variants[this.selectedVariant].image
      },
      inStock() {
         return this.variants[this.selectedVariant].quantity
      },
   }
})