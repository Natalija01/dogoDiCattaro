<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      
    >
      <v-card-title class="sub  text-center"   >
        <strong class="subheading mx-4" >Get connected with us on social networks!</strong>

       <v-spacer></v-spacer>
       <div>
          <img src="facebook.png"  width="40px" alt=""   class="mx-4">
          <img src="instagram-sketched.png"  width="40px" alt="" class="mx-4"></div>
          
        
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>N Studio</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
   
  }
</script>
<style scoped>
.sub{
    background-color: #ffd700;
}
</style>