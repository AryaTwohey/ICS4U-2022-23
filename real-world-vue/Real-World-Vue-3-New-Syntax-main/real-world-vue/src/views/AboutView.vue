<script>
import comments from "../components/comments.json"

export default{
data() {
  return{
    reviews: comments
  }
 
},
methods:{
    displayStars(){
      let counter =0;
      for(let i  = 0; i < this.reviews[i].stars; i++){


      }
    }

}
}




</script>
<template>
  <div class="about">
    
    <h1>A site for events to better the world.</h1>
    <div class="container">
      <center><h1>Reviews</h1></center>
    <div class="reviews" v-for="review in reviews " :key="review.id">
      <p class= "user">{{ review.user }} Posted This</p>
      <p class= "review">{{ review.review }}</p>

      <p class = "stars" v-if="review.stars == 5">
        <ul id = "star-container">
        <li><img class="stars" src="../assets/star.png" alt=""></li>
        <li><img class="stars" src="../assets/star.png" alt=""></li>
        <li><img class="stars" src="../assets/star.png" alt=""></li>
        <li><img class="stars" src="../assets/star.png" alt=""></li>
        <li><img class="stars" src="../assets/star.png" alt=""></li>
          </ul>

        </p>
        <p v-else-if="review.stars == 4">
          <ul id = "star-container">

         <li><img class="stars" src="../assets/star.png" alt=""></li>
         <li><img class="stars" src="../assets/star.png" alt=""></li>
         <li><img class="stars" src="../assets/star.png" alt=""></li>
         <li><img class="stars" src="../assets/star.png" alt=""></li>

          </ul>

        </p>
        <p v-else-if="review.stars == 3">
          <ul id = "star-container">

         <li><img class="stars" src="../assets/star.png" alt=""></li>
         <li><img class="stars" src="../assets/star.png" alt=""></li>
         <li><img class="stars" src="../assets/star.png" alt=""></li>

          </ul>

        </p>
        <p v-else-if="review.stars == 2">
          <ul id = "star-container">

         <li><img class="stars" src="../assets/star.png" alt=""></li>
         <li><img class="stars" src="../assets/star.png" alt=""></li>    
      </ul>
        </p>
        <p v-else-if="review.stars == 1">
          <ul id = "star-container">

         <li><img class="stars" src="../assets/star.png" alt=""></li>
    

          </ul>

        </p>

    </div>
   
    </div>
    <!-- <p class="comments" :v-for="Comment in Comments">{{ Comment.comment }} :key="Comment.id"</p> -->

  </div>
</template>
<style scoped>
p{
font-weight: 500;
}
.reviews{
  width: 50%;

}
.container{
  display: grid;
  justify-items: center;

}
.user{
  margin-right: 500px;
  font-weight: bolder;
  text-decoration: underline;
}
.stars{
  width: 45%;
}
ul{
  text-decoration: none;
  list-style: none;
}
#star-container{
  display: flex;

}



</style>
