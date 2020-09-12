<template>
  <div class="about">
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
    <aboutDogo/>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import aboutDogo from '@/components/aboutDogo.vue';
export default {
  components: {
    aboutDogo,
    Footer
  },
};
</script>

<style scoped>
body {
  background-color: white;
}
</style>
