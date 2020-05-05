<template>
  <!--Mora da se odradi ovo kako treba i da se doda edit dugme-->
  <div>
   
    <div class="container">
      <h2>{{ dog.name }}</h2>
      <hr class="line text-left" style="margin-bottom:20px; margin-top:-5px" />
      
      <div class="row">
       
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
