<template>
  <!-- Create meetups -->
  <div>
    <v-container style="background-color: white;">
      <v-layout row>
        <v-flex xs12>
          <h2>Dodaj sliku u galeriju</h2>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <form @submit.prevent="onCreateGalerija">
            
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <!-- accept nam govori da uzme slike i nista vise-->
                <v-btn raised @click="onPickFile">Upload image</v-btn>
                <input
                  type="file"
                  style="display:none"
                  ref="fileInput"
                  accept="image/*"
                  @change="onFilePicked"/></v-flex
            ></v-layout>
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <img class="mb-3" :src="imgURL" width="50%" alt="" /> </v-flex
            ></v-layout>
           
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-btn :disabled="!formIsValid" type="submit"
                  >Dodaj sliku</v-btn
                ></v-flex
              ></v-layout
            >
          </form>
        </v-flex></v-layout
      >
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgURL: "",
      image: null,
    };
  },
  computed: {
    formIsValid() {
      return  this.imgURL != "";
    },
   
  },
  methods: {
    onCreateGalerija() {
      if (!this.formIsValid) {
        return;
      }
      if (!this.image) {
        return
      }
      const galerijaData = {
        //ovdje se store svi podaci koji su iznad u data

        image: this.image,
      };
      //createBlog je iz action koji se nalazi u store
      this.$store.dispatch("createGalerija", galerijaData);
     this.$router.push("/galerija");
    },
    onPickFile() {
      this.$refs.fileInput.click();
    },
    onFilePicked(event) {
      //files is list of imaages by puting files[0] we are taking just one
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf(".") <= 0) {
        return alert("Please add a valid file!");
      }
      const fileReader = new FileReader()
      fileReader.addEventListener("load", () => {
        this.imgURL = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
    },
  },
};
</script>

<style scoped>
body {
  background-color: white;
}
</style>
