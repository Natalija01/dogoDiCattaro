<template>
  <div>
    <div class="container">
      <h2>Gallery</h2>
      <h2 />
      <div class="row mt-3">
        <gallery
          :images="images"
          :index="index"
          @close="index = null"
        ></gallery>
        <div
          class="image"
          v-for="(image, imageIndex) in images"
          :key="imageIndex"
          @click="index = imageIndex"
          :style="{
            backgroundImage: 'url(' + image + ')',
            width: '350px',
            height: '220px'
          }"
        >
          <div></div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import VueGallery from "vue-gallery";
export default {
  data() {
    return {
      index: null
    };
  },
  components: {
    gallery: VueGallery,
    Footer
  },
  created() {
    this.$store.dispatch('loadGallery');
  },
  computed :{
    images() {
      return this.$store.getters.getGallery;
    }
  }
};
</script>

<style scoped>
.image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #b9b6b6;
}
</style>