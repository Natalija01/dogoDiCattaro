<template>
  <div style="background-color:white">
    <v-alert
      dense
      outlined
      dismissible
      type="error"
      @click="onClose()"
      :value="true"
    >
      {{ text }}
    </v-alert>
  </div>
</template>

<script>
export default {
  props: ["text"],

  methods: {
    onClose() {
      this.$emit("dissmised");
    },
  },
};
</script>

<style></style>
