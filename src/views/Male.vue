<template>
  <div class="">
    <v-layout >
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

    <div class="row" v-if="!loading">
      <div class="col-md-4" v-for="dog in dogs" :key="dog.id">
        <!-- {{dog}} -->
        <div class="card " style="width: 18rem; " v-if="dog"  @click="onLoadDogs(dog.id)">
          <img @click="onLoadDogs(dog.id)"
            :src="dog.images[0]"
            class="d-block w-100"
            width="100%"
            height="200px"
            alt="..."
          />
          <div
            class="card-img-overlay"
            style=" display: flex;
  flex-direction: column;" v-if="dog.alive==true"
          ><div
              class="card-body justify-content-between"
              style="padding-top: 0px;"  
            >
              <a
                
                class="btn btn-primary pt-1 pb-1 pl-3 pr-3 float-right"
                style="color:#333333; border-radius: 2px; border:none; font-size: 12px; background-color: #f1bf7f"
                >In Memoriam</a
              ><a
                  class="btn btn-primary pt-1 pb-1 pl-3 pr-3 float-left"
                  style="color:white; border-radius: 2px; border:none; font-size: 12px; background-color: #33A5FF "
                  v-if="dog.dogForSale==true">Sale</a
                ></div></div>
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
      </div></div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  computed: {
    dogs() {
      return this.$store.getters.muskiPol ;
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
  methods: {
    onLoadDogs(id) {
      this.$router.push("/dogs/" + id);
    },
  },
   components: {
    Footer
  }
  
};
</script>

<style>
h2 {
  color: rgb(182, 178, 175);
}
p{color: rgb(182, 178, 175);}
</style>
