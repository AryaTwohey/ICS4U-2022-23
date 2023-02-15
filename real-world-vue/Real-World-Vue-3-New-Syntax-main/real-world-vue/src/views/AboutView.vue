<script>
import comments from "../components/comments.json"

export default{
data() {
  return{
    reviews: comments
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


</style>
