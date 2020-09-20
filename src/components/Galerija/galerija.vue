<template>
  <!-- Meetups.vue --><div>
  <div class="container">
    <v-layout class="mt-5">
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
          indeterminate
          class="primary--text"
          :width="7"
          :size="70"
          v-if="loading"
        ></v-progress-circular>
      </v-flex>
    </v-layout>

    <div class="row" v-if="!loading">
         <!-- <div class="row">
        <gallery
          :images="galerije.imageUrl"
          :index="index"
          @close="index = null"
        ></gallery>
        <div
          class="image"
          v-for="(imageUrl, imageIndex) in galerije.imageUrl"
          :key="imageIndex"
          @click="index = imageIndex"
          :style="{
            backgroundImage: 'url(' + imageUrl + ')',
            width: '360px',
            height: '240px',
          }"
        ></div>
      </div> -->
      <div class="col-md-4" v-for="galerija in galerija" :key="galerija.id">
        <div class="card mx-auto" style="width: 18rem; ">
          <img
            :src="galerija.imageUrl"
            class="d-block w-100"
            width="100%"
            height="200px"
            alt="..."
           
          />
         
        </div>
      </div>
    </div>
     </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
// import VueGallery from "vue-gallery";
export default {
//     data() {
//     return {
//       index: null,
//     };
//   },
  computed: {
   galerija() {
      return this.$store.getters.loadedGalerije;
    },
    user() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },
    loading() {
      return this.$store.getters.loading;
    },
  },
  
  methods: {
   
  },
  components:{
    Footer
  }
};
</script>

<style scoped>
hr.line {
  border: 1px solid #ffd700;
  width: 100px;
  margin: 0px auto;
}
</style>
