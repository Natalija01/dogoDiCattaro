<template>
<div class="container">
     <div class="row mt-3" >
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '350px', height: '220px' }"
    ></div></div>
  </div>
  
</template>

<script>
import VueGallery from "vue-gallery";
export default {
  data() {
    return {
      images: [
          'https://dummyimage.com/800/ffffff/000000',
          'https://dummyimage.com/1600/ffffff/000000',
          'https://dummyimage.com/1280/000000/ffffff',
          'https://dummyimage.com/400/000000/ffffff',
        ],
        index: null
    };
  },
   components: {
      'gallery': VueGallery
    },
  
};
</script>

<style>

</style>