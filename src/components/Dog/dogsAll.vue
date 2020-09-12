<template>
  <!-- Meetups.vue -->
  <div>
    <div class="container">
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

      <div class="row">
        <div class="col">
          <h2 class="mb-3">Our dogs</h2>
          <hr
            class="line text-center"
            style="margin-bottom:20px; margin-top:-10px"
          />
        </div>
      </div>

      <div class="row" v-if="!loading">
        <div class="col-md-4" v-for="dog in dogs" :key="dog.id">
          <!-- {{dog}} -->
          <div class="card " v-if="dog" @click="onLoadDogs(dog.id)">
            <img
              :src="dog.images[0]"
              class="d-block w-100"
              width="100%"
              height="300px"
              alt="..."
            />
            <div
              class="card-img-overlay"
              style=" display: flex;
  flex-direction: column;"
            >
              <div
                class="card-body justify-content-between"
                style="padding-top: 0px;"
              >
                <a
                  class="btn btn-primary pt-1 pb-1 pl-3 pr-3 float-right"
                  style="color:#333333; border-radius: 2px; border:none; font-size: 12px; background-color: #f1bf7f"
                  v-if="dog.alive == true"
                  >In Memoriam</a
                >
                <a
                  class="btn btn-primary pt-1 pb-1 pl-3 pr-3 float-left"
                  style="color:white; border-radius: 2px; border:none; font-size: 12px; background-color: #33A5FF "
                  v-if="dog.dogForSale == true"
                  >Sale</a
                >
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">
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
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
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
  components: {
    Footer,
  },
};
</script>

<style scoped>
hr.line {
  border: 1px solid #ffd700;
  width: 100px;
  margin: 0px auto;
}
h2 {
  color: rgb(182, 178, 175);
}
</style>
