<template>
  <div>
    <v-app>
      <v-card>
        <v-parallax
        height="7"
        src="https://i.pinimg.com/originals/32/8a/6c/328a6cf37271127972b7730494df7f04.jpg"
      ></v-parallax>
        <v-carousel height="100vh" class="overlay">
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
        
      </v-card>
      
    </v-app>
    <v-parallax
        height="7"
        src="https://i.pinimg.com/originals/32/8a/6c/328a6cf37271127972b7730494df7f04.jpg"
      ></v-parallax>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "web01.jpg",
        },
        {
          src: "web02.jpg"
        },
      ],
    };
  },
};
</script>

<style scoped>
.overlay {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
}
</style>
