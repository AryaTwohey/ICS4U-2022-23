app.component('review-form', {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit" autocomplete ="false">
      <h3>Leave a review</h3>
      <label for="name">Name:</label>
      <input id="Name" v-model="name" autocomplete="false">

   
      <label for="review">Review:</label>      
      <textarea id="review"></textarea>
   
      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
      <br>
      <br>
      <label for="reccommend">Would You Reccomend This Product?:</label>
    <select id="reccommend" v-model.value = "reccommend" >
    <option>Yes</option>
    <option>No</option>
    
    </select>

   
      <input class="button" type="submit" value="Submit">
    </form>`,
    data() {
      return {
        name: '',
        review: '',
        rating: null,
        reccomend: ''
      }
    },
    methods: {
        onSubmit() {
          let productReview = {
            name: this.name,
            review: this.review,
            rating: this.rating,
            reccomend:this.reccomend
          }
          this.$emit('review-submitted', productReview)
      
          this.name = ''
          this.review = ''
          this.rating = null
          this.reccomend=''
        }
      }
     
  })