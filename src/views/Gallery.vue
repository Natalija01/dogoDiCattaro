<template>
<div>
<div class="container">
   <h2>Gallery</h2><nr/>
     <div class="row mt-3" >
      
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '350px', height: '220px' }"
    ></div></div></div>
    <Footer/>
  </div>
  
</template>

<script>
import Footer from "@/components/Footer.vue";
import VueGallery from "vue-gallery";
export default {
  data() {
    return {
      images: [
          'https://dogodicattaro.com/img/15.jpg',
          'https://dogodicattaro.com/img/20160711_135950.jpg',
          'https://dogodicattaro.com/img/20160727_230453.jpg',
          'https://dogodicattaro.com/img/20160828_191617.jpg',
          'https://dogodicattaro.com/img/20161115_175012.jpg',
          'https://dogodicattaro.com/img/20170531_092106.jpg',
          'https://dogodicattaro.com/img/_DSC1149.jpg',
          'https://dogodicattaro.com/img/_DSC1153.jpg',
          'https://dogodicattaro.com/img/FB_IMG_1462181467772.jpg',
          'https://dogodicattaro.com/img/FB_IMG_1497713508878.jpg',

          'https://dogodicattaro.com/img/FB_IMG_1507571700101.jpg',
          'https://dogodicattaro.com/img/FB_IMG_1512247867494.jpg',
          'https://dogodicattaro.com/img/image-0-02-04-3febd7b85b35c7e266525e4cf1a3f47953bdfd8a42626e5e65531674bb14888a-V.jpg',
          'https://dogodicattaro.com/img/image-0-02-04-943911f643a0cc0bddf65a44e715d5ef8d76fd8abbc35325f6b58165d0e1ab49-V.jpg',
          'https://dogodicattaro.com/img/image-0-02-05-7e6de8ef6de0f583b345e6bf78a803fba4e3ba32936d1dc61683251f8eaedd7f-V.jpg',
          'https://dogodicattaro.com/img/image-b9d3158542314179c97f361a358b543fa308b32db360771c06ac6efcebb43ace-V.jpg',
          'https://dogodicattaro.com/img/IMG_20170929_204211_193.jpg',
          'https://dogodicattaro.com/img/received_10154831016536397.jpeg',
          'https://dogodicattaro.com/img/received_10209777665379795.jpeg',
          'https://dogodicattaro.com/img/received_1171584482896113.jpeg',
          'https://dogodicattaro.com/img/received_1562986830414631.jpeg',
          'https://dogodicattaro.com/img/received_1816720531922086.jpeg',
          'https://dogodicattaro.com/img/received_1816720631922076.jpeg',
          'https://dogodicattaro.com/img/received_1816724245255048.jpeg',
          'https://dogodicattaro.com/img/received_217756705418364.jpeg',
          'https://dogodicattaro.com/img/received_217756712085030.jpeg',

          
          
        ],
        index: null
    };
  },
   components: {
      'gallery': VueGallery,
      Footer
    },
  
};
</script>

<style>

</style>