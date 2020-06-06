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
      <v-parallax height="300" width="100%" :src="dog.imageUrl"></v-parallax>
    </div>
    
    
    <div class="container" >
      <h2>{{ dog.name }}</h2>
      <hr class="line text-left" style="margin-bottom:20px; margin-top:-5px" />
       
      <div class="row">
        
        <div class="col-12">{{ dog.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  components: {},
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

<style></style>
