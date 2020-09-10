<template>
  <div class="home">
    <heroSlider />
    <aboutDogo />
<v-parallax
        height="7"
        src="https://i.pinimg.com/originals/32/8a/6c/328a6cf37271127972b7730494df7f04.jpg"
      ></v-parallax>
    <v-parallax src="puppies.jpg"> </v-parallax><v-parallax
        height="7"
        src="https://i.pinimg.com/originals/32/8a/6c/328a6cf37271127972b7730494df7f04.jpg"
      ></v-parallax>
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
