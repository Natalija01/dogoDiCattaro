<template>
  <div class="home">
    <heroSlider />
    <aboutDogo />

    <v-parallax src="puppy.jpg"> </v-parallax>
    <blogs></blogs>
  </div>
</template>

<script>
// @ is an alias to /src
import heroSlider from "@/components/heroSlider.vue";
import aboutDogo from "@/components/aboutDogo.vue";
import blogs from "@/components/Blog/blogs.vue";
export default {
  components: {
    heroSlider,
    aboutDogo,
    blogs
  }
};
</script>

<style scoped></style>
