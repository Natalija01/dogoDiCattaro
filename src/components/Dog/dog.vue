<template>
  <!--Mora da se odradi ovo kako treba i da se doda edit dugme-->
  <div v-if="dog">
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
    <div class="container-fluid noGutter">
      <v-parallax height="300" width="100%" :src="dog.images[1]"></v-parallax>
    </div>

    <div class="container">
      <h2>{{ dog.name }}</h2>
      <hr class="line text-left" style="margin-bottom:20px; margin-top:-5px" />

      <div class="row">
        <!-- /*ovdje mora vfor */ -->
        <p v-for="(awr, i) in dog.award" :key="i">{{ awr }},</p>
      </div>

      <v-carousel
        cycle
        height="500"
        hide-delimiter-background
        :show-arrows="false"
      >
        <v-carousel-item v-for="(img, i) in dog.images" :key="i" :src="img">
        </v-carousel-item>
      </v-carousel>

     <div class="row">
        <gallery
          :images="dog.images"
          :index="index"
          @close="index = null"
        ></gallery>
        <div
          class="image"
          v-for="(image, imageIndex) in dog.images"
          :key="imageIndex"
          @click="index = imageIndex"
          :style="{
            backgroundImage: 'url(' + image + ')',
            width: '360px',
            height: '240px'
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import VueGallery from "vue-gallery";
export default {
  data() {
    return {
      index: null,}},
  props: ["id"],
  components: { gallery: VueGallery },
  computed: {
    dog() {
      return this.$store.getters.loadedDog(this.id);
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
};
</script>

<style>
.image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #b9b6b6;
  margin: 5px;
}</style>
