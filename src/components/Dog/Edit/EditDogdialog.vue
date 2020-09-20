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
                  @change="uzmiPol()"
                >
                  <v-radio label="Muški" :value="false"></v-radio>
                  <v-radio
                    label="Ženski"
                    :value="true"
                  ></v-radio> </v-radio-group
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
      editedFather: this.dog.father,
      editedMother: this.dog.mother,
      editedBorn: this.dog.born,
      editedGenre: this.dog.genre
    };
  },
  methods: {
    uzmiPol(event) {
      this.genre = event.target.value;
    },
    onSaveChanges() {
      if (
        this.editedName.trim() === "" ||
        this.editedCallname.trim() === "" ||
        this.editedFather.trim() === "" ||
        this.editedMother.trim() === "" ||
        this.editedGenre === "" ||
        this.editedBorn.trim() === ""
      ) {
        return;
      }
      this.dialog = false;
      this.$store.dispatch("updateDogData", {
        id: this.dog.id,
        name: this.editedName,
        callname: this.editedCallname,
        father: this.editedFather,
        mother: this.editedMother,
        born: this.editedBorn,
        genre: this.editedGenre
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
