<template>
  <div>
    <banner />
    <h5 class="card-title">{{blog.title}}</h5>
    <hr class="line text-left" style="margin-bottom:20px; margin-top:-10px" />

    <p class="text-left">
      {{blog.description}}
    </p>

    <p class="text-left">
      <small class="text-muted">{{blog.date | date}}</small>
    </p>
  </div>
</template>

<script>
import banner from "@/components/banner.vue";
export default {
  props: ['id'],
  components: {
    banner,
  },
  computed: {
    blog() {
      return this.$store.getters.loadedBlog(this.id);
    },
  },
};
</script>

<style></style>
