<template>
  <v-card>
    <v-toolbar flat color="primary" dark>
      <v-toolbar-title>User Profile</v-toolbar-title>
    </v-toolbar>
    <v-tabs horizontal>
      <v-tab>
        <v-icon left>fas fa-edit</v-icon>
        Kreiranje bloga
      </v-tab>
      <v-tab>
        <v-icon left>mdi-lock</v-icon>
        Dodavanja pasa
      </v-tab>
      <v-tab>
        <v-icon left>mdi-access-point</v-icon>
        Option 3
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <CreateBlogs />
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <CreateDogs />
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
           <CreateGalerija/>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card></template
>

<script>
import CreateBlogs from "@/components/Blog/CreateBlogs.vue";
import CreateDogs from "@/components/Dog/CreateDog.vue";
import CreateGalerija from "@/components/Galerija/CreateGalerija.vue";

export default {
  components: {
    CreateBlogs,
    CreateDogs,
    CreateGalerija
    
  },
};
</script>

<style></style>
