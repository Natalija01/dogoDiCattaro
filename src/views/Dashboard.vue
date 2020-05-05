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
            <p>
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis.
              Nam eget dui. Proin viverra, ligula sit amet ultrices semper,
              ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In
              dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>

            <p class="mb-0">
              Cras sagittis. Phasellus nec sem in justo pellentesque facilisis.
              Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec
              quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam
              at tortor in tellus interdum sagittis.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card></template
>

<script>
import CreateBlogs from "@/components/Blog/CreateBlogs.vue";
import CreateDogs from "@/components/Dog/CreateDog.vue";
export default {
  components: {
    CreateBlogs,
    CreateDogs,
  },
};
</script>

<style></style>
