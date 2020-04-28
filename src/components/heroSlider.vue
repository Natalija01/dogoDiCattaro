<template>
  <div>
    <v-app>
      <v-card>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "heroSlika.jpg",
        },
        {
          src: "heroImage.jpg",
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
