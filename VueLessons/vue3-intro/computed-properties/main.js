const app = Vue.createApp({
   data() {
      return {
         selectedVariant: 0,
         cart: 0,
         product: 'Socks',
         brand: 'Vue Mastery',
         details: ['50% cotton', '30% wool', '20% polyester'],
         variants: [
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50, onSale: true },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0, onSale: false },
         ]
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
   //these are computed properties
   //Must use this keyword -> because it refers to 'this instance', as these are reusable componenets
   //Creates new properties/data that you can use, which are combinations of other properties
   computed:{
      title(){
         return this.brand + ' ' + this.product 
      },
      image(){
         //grabbing the index of each variant and finding the image
        return this.variants[this.selectedVariant].image
      },
      inStock(){ // 0 is considered false along with null, undefined, NaN, " & null"
         return this.variants[this.selectedVariant].quantity 

      //this returning 0 is saying false
      },
      //This computed property, will allow us to use v-show to determine whether or not onsale is true or false
      onSale(){
         //if this first condition is true -> do all the other stuff
         return this.variants[this.selectedVariant].onSale ?  'On Sale' : ''
      },
      description(){
         return this.inStock && this.onSale ? 'In Stock - On Sale' : 'In Stock'

      },
   }
})