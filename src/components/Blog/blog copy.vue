<template>
<!--Mora da se odradi ovo kako treba i da se doda edit dugme-->
  <div>
    <banner />

    <div>
      <edit-Blog-dialog v-if="user" :blog="blog"> </edit-Blog-dialog>

      <h5 class="card-title">{{ blog.title }}</h5>
      <hr class="line text-left" style="margin-bottom:20px; margin-top:-10px" />

      <p class="text-left">
        {{ blog.description }}
      </p>

      <p class="text-left">
        <small class="text-muted">{{ blog.date | date }}</small>
      </p>
    </div>
  </div>
</template>

<script>
import banner from "@/components/banner.vue";
export default {
  props: ["id"],
  components: {
    banner,
  },
  computed: {
    blog() {
      return this.$store.getters.loadedBlog(this.id);
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
};
</script>

<style></style>
