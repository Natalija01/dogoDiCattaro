<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn floating v-on="on"> <v-icon>edit</v-icon>Edit </v-btn>
    </template>

    <v-card>
      <v-layout row wrap class="mr-3 ml-3"
        ><v-flex xs12>
          <v-card-title class="headline grey lighten-2" primary-title>
            Modifikovanje bloga
          </v-card-title></v-flex
        ></v-layout
      >
      <v-divider></v-divider>
      <v-layout row wrap class="mr-3 ml-3"
        ><v-flex xs12>
          <v-text-field
            name="title"
            label="Naslov"
            id="title"
            v-model="editedTitle"
            :rules="['Required']"
          >
          </v-text-field>
          <v-textarea
            filled
            name="description"
            label="Opis"
            v-model="editedDescription"
            value="Ovdje treba upisati tekst."
            :rules="['Required']"
          ></v-textarea></v-flex
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
  props: ["blog"],
  data() {
    return {
      dialog: false,
      editedTitle: this.blog.title,
      editedDescription: this.blog.description,
    };
  },
  methods: {
    onSaveChanges() {
      if (
        this.editedTitle.trim() === "" ||
        this.editedDescription.trim() === ""
      ) {
        return;
      }
      this.dialog = false;
      this.$store.dispatch("updateBlogData", {
        id: this.blog.id,
        title: this.editedTitle,
        description: this.editedDescription,
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
