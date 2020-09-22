<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn floating v-on="on"> <v-icon>edit</v-icon>Edit </v-btn>
    </template>

    <v-card>
      <v-layout row wrap class="mr-3 ml-3"
        ><v-flex xs12>
          <v-card-title class="headline grey lighten-2" primary-title>
            Modifikovanje psa
          </v-card-title></v-flex
        ></v-layout
      >
      <v-divider></v-divider>
      <v-layout row wrap class="mr-3 ml-3"
        ><v-flex xs12>
          <v-text-field
            name="name"
            label="Ime psa"
            id="Name"
            v-model="editedName"
            :rules="['Required']"
          >
          </v-text-field> 
          <v-text-field
                  name="callname"
                  label="Naziv psa"
                  id="callname"
                  v-model="editedCallname"
                  :rules="['Required']"
                >
                </v-text-field>
             <v-text-field
                  name="imeMajke"
                  label="Ime majke"
                  id="mother"
                  v-model="editedMother"
                  :rules="['Required']"
                >
                </v-text-field>   
                <v-text-field
                  name="imeOca"
                  label="Ime oca"
                  id="father"
                  v-model="editedFather"
                  :rules="['Required']"
                >
                </v-text-field>

                <v-text-field
                  name="rodjen"
                  label="Datum rodjenja"
                  id="born"
                  v-model="editedBorn"
                  :rules="['Required']"
                >
                </v-text-field>
                <p style="text-align:left; font-size:16px; font-weight: bold;">
                  Izaberi pol:
                </p>
                <v-radio-group
                  v-model="editedGenre"
                  :mandatory="false"
                  @change="uzmiPol"
                >
                  <v-radio label="Muški" :value="false"></v-radio>
                  <v-radio
                    label="Ženski"
                    :value="true"
                  ></v-radio> </v-radio-group
              > 
                <p style="text-align:left; font-size:16px; font-weight: bold;">
                  Da li je pas ziv:
                </p>
                <v-radio-group
                  v-model="editedAlive"
                  :mandatory="false"
                  @change="uzmiAlive"
                >
                  <v-radio label="Nije ziv" :value="false"></v-radio>
                  <v-radio
                    label="Ziv"
                    :value="true"
                  ></v-radio> </v-radio-group
              >
              <p style="text-align:left; font-size:16px; font-weight: bold;">
                  Da li je pas na prodaju:
                </p>
                <v-radio-group
                  v-model="editedDogForSale"
                  :mandatory="false"
                  @change="uzmiDogForSale"
                >
                  <v-radio label="Nije na prodaju" :value="false"></v-radio>
                  <v-radio
                    label="Na prodaju"
                    :value="true"
                  ></v-radio> </v-radio-group
              >
               <p style="text-align:left; font-size:16px; font-weight: bold;">
                  Unesi nagrade:
                </p>
                <v-text-field
                  name="Award"
                  label="Nagrade"
                  id="Award"
                  v-model="editedAwards"
                >
                  <!-- vbtn @click=addAward (award => this.awards.push(award)) -->
                </v-text-field>
                <p v-for="award in awards" :key="award.id">
                  <span class="p-1 align-items-start">{{ award }},</span>
                </p>
                
                <v-btn raised @click="addAward" class="mb-3"
                  >Dodaj nagradu</v-btn
                >
                </v-flex
      ></v-layout>
      <v-divider></v-divider>
      <v-layout
        ><v-flex xs12>
          <v-card-actions>
            <v-btn color="primary" text @click="dialog = false">
              Close
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="onSaveChanges" text>
              Save
            </v-btn>
          </v-card-actions></v-flex
        ></v-layout
      >
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: ["dog"],
  data() {
    return {
      dialog: false,
      editedName: this.dog.name,
      editedCallname: this.dog.callname,
      editedImage: this.dog.image,
      editedGenre: this.dog.genre,
      editedAlive: this.dog.alive,
      editedDogForSale: this.dog.dogForSale,
      editedFather: this.dog.father,
      editedMother: this.dog.mother,
      editedBorn: this.dog.born,
      editedAwards: this.dog.award,
      editedImages: this.dog.images,
    };
  },
  methods: {
    
    onSaveChanges() {
      if (
        this.editedName.trim() === "" ||
        this.editedCallname.trim() === "" ||
        this.editedImage.trim() === "" ||
        this.editedGenre.trim() === "" ||
        this.editedAlive.trim() === "" ||
        this.editedDogForSale.trim() === "" ||
        this.editedFather.trim() === "" ||
        this.editedMother.trim() === "" ||
        this.editedBorn.trim() === "" ||
        this.editedAwards.trim() === "" ||
        this.editedImages.trim() === ""
      ) {
        return;
      }
      this.dialog = false;
      this.$store.dispatch("updateDogData", {
        id: this.dog.id,
        name: this.editedName,
        callname: this.editedCallname,
        image: this.editedImage,
        genre: this.editedGenre,
        alive: this.editedAlive,
        dogForSale: this.editedDogForSale,
        father: this.editedFather,
        mother: this.editedMother,
        born: this.editedBorn,
        award: this.editedAwards,
        images: this.editedImages,
      });
    },
  },
};
</script>
<style scoped>
.v-dialog__container {
  display: unset;
}
</style>
