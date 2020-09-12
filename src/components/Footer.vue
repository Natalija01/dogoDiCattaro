<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Get connected with us on social networks!</strong>

        

         <a href="https://sr-rs.facebook.com/Dogo-Di-Cattaro-992178320795339/"
              target="_blank">
            <img src="facebook.png" width="40px" alt="" class="mx-4"
          /></a>

          <a href="https://www.instagram.com/dogodicattaro/?hl=sr" target="_blank">
            <img src="instagram-sketched.png" width="40px" alt="" class="mx-4"
          /></a>
        
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>N studio</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>
<style  scoped>
.teal{
    background-color: #DAA520;
}
</style>