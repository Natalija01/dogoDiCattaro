<template>
  <!-- Meetups.vue -->
  <div class="container">
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

    <div class="row" v-if="!loading">
      <div class="col-md-4" v-for="dog in dogs" :key="dog.id">
        <!-- {{dog}} -->
        <div class="card " style="width: 18rem; " v-if="dog">
          <img
            :src="dog.images[0]"
            class="d-block w-100"
            width="100%"
            height="200px"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title" @click="onLoadDogs(dog.id)">
              {{ dog.name }}
            </h5>
            <hr
              class="line text-center"
              style="margin-bottom:20px; margin-top:-10px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    dogs() {
      return this.$store.getters.loadedDogs;
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
  filters: {
    fixDescription: function(value) {
      const findDot = value.indexOf(".");
      var result = "";
      if (findDot === -1) {
        result = value;
      } else {
        result = value.substr(0, findDot + 1);
      }
      return result;
    },
  },
  methods: {
    onLoadDogs(id) {
      this.$router.push("/dogs/" + id);
    },
  },
};
</script>

<style scoped>
hr.line {
  border: 1px solid #ffd700;
  width: 100px;
  margin: 0px auto;
}
</style>
