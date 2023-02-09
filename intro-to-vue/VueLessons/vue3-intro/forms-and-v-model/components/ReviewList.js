app.component('review-list', {
    props: {
      reviews: {
        type: Array,
        required: true
      }
    },
    template:
    /*html*/
    `
    <div class="review-container">
    <h3>Reviews:</h3>
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
          {{ review.name }} gave this {{ review.rating }} stars 

          <p v-if="review.reccommend == 'Yes'">{{review.name}} reccommends this product<p>
          <p v-if="review.reccommend == 'No'">{{review.name}} does not reccommend this product<p>


          <br/>
          "{{ review.review }}"
          <br/>
        </li>
      </ul>
    </div>
  `
  })
  