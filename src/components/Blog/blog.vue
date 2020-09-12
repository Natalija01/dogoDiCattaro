<template>
  <!--Mora da se odradi ovo kako treba i da se doda edit dugme-->
  <div>
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
      <h2>{{ blog.title }}</h2>
      <hr class="line text-left" style="margin-bottom:20px; margin-top:-5px" />
      <edit-Blog-dialog v-if="user" :blog="blog"> </edit-Blog-dialog>

      <div class="row d-flex ">
        <div class="col justify-content-left ">
          <img height="300" width="400" :src="blog.imageUrl" />
        </div>
        <div class="col justify-content-right">{{ blog.description }}</div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  props: ["id"],
  components: {
    Footer
  },
  computed: {
    blog() {
      return this.$store.getters.loadedBlog(this.id);
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

<style></style>
