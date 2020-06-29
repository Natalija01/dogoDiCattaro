<template>
  <!-- Create meetups -->
  <div>
    <v-container style="background-color: white;">
      <v-layout row>
        <v-flex xs12>
          <h2>Dodavanje psa</h2>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <form @submit.prevent="onCreateDogs">
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                  name="name"
                  label="Ime psa"
                  id="Name"
                  v-model="name"
                  :rules="['Required']"
                >
                </v-text-field> </v-flex
            ></v-layout>
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                  name="imeMajke"
                  label="Ime majke"
                  id="mother"
                  v-model="mother"
                  :rules="['Required']"
                >
                </v-text-field> </v-flex
            ></v-layout>
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                  name="imeOca"
                  label="Ime oca"
                  id="father"
                  v-model="father"
                  :rules="['Required']"
                >
                </v-text-field> </v-flex
            ></v-layout>

            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <p style="text-align:left; font-size:16px; font-weight: bold;">
                  Izaberi pol:
                </p>
                <v-radio-group
                  v-model="genre"
                  :mandatory="false"
                  @change="uzmiPol"
                >
                  <v-radio label="Muški" :value="false"></v-radio>
                  <v-radio
                    label="Ženski"
                    :value="true"
                  ></v-radio> </v-radio-group
              ></v-flex>
            </v-layout>

            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <p style="text-align:left; font-size:16px; font-weight: bold;">
                  Unesi nagrade:
                </p>
                <v-text-field
                  name="Award"
                  label="Nagrade"
                  id="Award"
                  v-model="award"
                >
                  <!-- vbtn @click=addAward (award => this.awards.push(award)) -->
                </v-text-field>
                <p v-for="award in awards" :key="award.id">
                  <span class="p-1 align-items-start">{{ award }},</span>
                </p>

                <v-btn raised @click="addAward" class="mb-3"
                  >Dodaj nagradu</v-btn
                >
              </v-flex></v-layout
            >

            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <!-- accept nam govori da uzme slike i nista vise-->
                <p style="text-align:left; font-size:16px; font-weight: bold;">
                  Izaberi slike:
                </p>
                <v-btn raised @click="onPickFile" class="mb-3"
                  >Upload image</v-btn
                >
                <input
                  type="file"
                  style="display:none"
                  ref="fileInput"
                  accept="image/*"
                  @change="onFilePicked"
                  multiple/></v-flex
            ></v-layout>

            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <div v-for="image in images" :key="image.id">
                  {{ image.name }}
                  <img class="mb-3" :src="image.name" width="50%" alt="" />
                </div> </v-flex
            ></v-layout>

            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-btn :disabled="!formIsValid" type="submit"
                  >Kreiraj Psa</v-btn
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
      name: "",
      genre: false,
      mother: "",
      father: "",
      imageUrl: "",
      images: [],
      awards: [],
      award: null,
    };
  },
  computed: {
    formIsValid() {
      return this.name != "" && this.imageUrl != "";
    },
  },
  methods: {
    onCreateDogs() {
      if (!this.formIsValid) {
        return;
      }
      if (!this.image) {
        return;
      }
      if (!this.award) {
        return;
      }
      const dogData = {
        //ovdje se store svi podaci koji su u data i salju se u store

        name: this.name,
        image: this.image,
        genre: this.genre,
        father: this.father,
        mother: this.mother,
        award: this.awards,
        images: this.$store.getters.getTempSlika,
      };
      //createBlog je iz action koji se nalazi u store ovo ustvari uzima podatke dogData i  salje ih u store
      this.$store.dispatch("createDog", dogData);
      this.$router.push("/dogsAll");
    },
    onPickFile() {
      this.$refs.fileInput.click();
    },
    addAward() {
      this.awards.push(this.award);
      console.log("addAward", this.awards);
      this.award = "";
    },
    uzmiPol(event) {
      this.genre = event.target.value;
    },
    onFilePicked(event) {
      const files = event.target.files;
      this.images = files.length > 0 ? files : [];
      // let filename = files[0].name;
      // if (filename.lastIndexOf('.') <= 0) {
      //   return alert('Please add a valid file');
      // }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result;
        // return this.imageUrl
      });
      // console.log(this.imageUrl)
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
      const dogData = {
        name: this.name,
        image: this.image,
        genre: this.genre,
        father: this.father,
        mother: this.mother,
        award: this.awards,
        images: this.images,
      };
      this.$store.dispatch("getImageLinks", dogData);
    },
  },
};
</script>

<style scoped>
body {
  background-color: white;
}
</style>
