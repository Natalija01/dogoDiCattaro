<template>
<div>
  <div class="container">
    
    <h2 class="mt-5">Our latest litter</h2> 
      <hr class="line text-left" style="margin-bottom:20px; margin-top:-5px" />
      <div class="row">
        <div class="col mx-auto">
     <img src="https://firebasestorage.googleapis.com/v0/b/dogodicattaro-ccec6.appspot.com/o/all%2Fdogo.jpg?alt=media&token=965c25a9-d052-43ae-afab-673aba1c4b1f"  class="d-block w-100"
            width="100%"
            height="100%" alt="">
  </div></div></div>
  <Footer/>
  </div>
</template>


<script>
import Footer from "@/components/Footer.vue";
export default {
  components:{
    Footer
  }
}
</script>


<style scoped>
hr.line {
  border: 1px solid #ffd700;
  width: 100px;
  margin: 0px auto;
}
</style>