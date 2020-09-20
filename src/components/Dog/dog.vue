<template>
  <!--Mora da se odradi ovo kako treba i da se doda edit dugme-->
  <div v-if="dog">
    <v-layout>
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
      <v-parallax
        height="7"
        src="https://i.pinimg.com/originals/32/8a/6c/328a6cf37271127972b7730494df7f04.jpg"
      ></v-parallax>
      <v-parallax
        height="300"
        src="https://firebasestorage.googleapis.com/v0/b/dogodicattaro-ccec6.appspot.com/o/all%2Fbannerlogo.png?alt=media&token=fa57bc76-3275-409c-bb08-56b469746e0f"
      ></v-parallax>
      <v-parallax
        height="7"
        src="https://i.pinimg.com/originals/32/8a/6c/328a6cf37271127972b7730494df7f04.jpg"
      ></v-parallax>
    </div>

    <div class="container">
      <h2>{{ dog.name }}</h2>
      <hr class="line text-left" style="margin-bottom:20px; margin-top:-5px" />
 <edit-Dog-dialog v-if="user" :dog="dog"> </edit-Dog-dialog>
      <div class="row">
        <!-- /*ovdje mora vfor */ -->
        <div class="col">
          <h3 class="mb-3">Awards</h3>
          <ul>
            <li v-for="(awr, i) in dog.award" :key="i">{{ awr }}</li>
          </ul>
        </div>
        <div class="col">
          <h3 class="mb-3">About {{ dog.name }}</h3>
          <ul class="tacke">
            <li>Born: {{ dog.born }}</li>

            <li>Mother: {{ dog.mother }}</li>

            <li>Father: {{ dog.father }}</li>
          </ul>
        </div>
      </div>
      <!--
      <v-carousel
        cycle
        height="500"
        hide-delimiter-background
        :show-arrows="false"
      >
        <v-carousel-item v-for="(img, i) in dog.images" :key="i" :src="img">
        </v-carousel-item>
      </v-carousel>-->

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
            height: '240px',
          }"
        ></div>
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
      index: null,
    };
  },
  props: ["id"],
  components: { gallery: VueGallery, Footer },
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
}
ul {
  text-align: left;
  color: rgb(182, 178, 175);
}
.tacke {
  list-style-type: none;
}
h3 {
  color: rgb(182, 178, 175);
  text-align: left;
}
h2 {
  color: rgb(182, 178, 175);
}
</style>
