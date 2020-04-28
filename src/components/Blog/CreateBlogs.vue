<template>
  <!-- Create meetups -->
  <div>
    <v-container style="background-color: white;">
      <v-layout row>
        <v-flex xs12>
          <h2>Create a new blog</h2>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <form @submit.prevent="onCreateBlogs">
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                  name="title"
                  label="Naslov"
                  id="title"
                  v-model="title"
                  :rules="['Required']"
                >
                </v-text-field> </v-flex
            ></v-layout>
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
                <v-textarea
                  filled
                  name="description"
                  label="Opis"
                  value="Ovdje treba upisati tekst."
                  v-model="description"
                  :rules="['Required']"
                ></v-textarea> </v-flex
            ></v-layout>
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <h4>Izaberi vrijeme i datum bloga</h4>
              </v-flex></v-layout
            >
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-date-picker
                  v-model="date"
                  width="290"
                  class="mt-4"
                ></v-date-picker> </v-flex
            ></v-layout>
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-time-picker
                  v-model="time"
                  type="month"
                  width="290"
                  class="mb-3"
                  format="24h"
                ></v-time-picker> </v-flex
            ></v-layout>
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-btn :disabled="!formIsValid" type="submit"
                  >Kreiraj Blog</v-btn
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
      title: "",
      description: "",
      imgURL: "",
      date: new Date().toISOString().substr(0, 10),
      time: new Date(),
      image: null,
    };
  },
  computed: {
    formIsValid() {
      return this.title != "" && this.description != "" && this.imgURL != "";
    },
    submittableDateTime() {
      const date = new Date(this.date);
      if (typeof this.time === "string") {
        let hours = this.time.match(/^(\d+)/)[1];
        const minutes = this.time.match(/:(\d+)/)[1];
        date.setHours(hours);
        date.setMinutes(minutes);
      } else {
        date.setHours(this.time.getHours());
        date.setMinutes(this.time.getMinutes());
      }
      return date;
    },
  },
  methods: {
    onCreateBlogs() {
      if (!this.formIsValid) {
        return;
      }
      if (!this.image) {
        return
      }
      const blogData = {
        //ovdje se store svi podaci koji su iznad u data

        title: this.title,
        description: this.description,
        image: this.image,
        date: this.submittableDateTime,
      };
      //createBlog je iz action koji se nalazi u store
      this.$store.dispatch("createBlog", blogData);
      this.$router.push("/blogsAll");
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
