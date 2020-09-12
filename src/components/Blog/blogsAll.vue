<template>
  <!-- Meetups.vue --><div>
  <div class="container">
    <v-layout class="mt-5">
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
          indeterminate
          class="primary--text"
          :width="7"
          :size="70"
          v-if="loading"
        ></v-progress-circular>
      </v-flex>
    </v-layout>

    <div class="row" v-if="!loading">
      <div class="col-md-4" v-for="blog in blogs" :key="blog.id">
        <div class="card " style="width: 18rem; ">
          <img
            :src="blog.imageUrl"
            class="d-block w-100"
            width="100%"
            height="200px"
            alt="..."
            @click="onLoadBlog(blog.id)"
          />
          <div class="card-body">
            <h5 class="card-title" @click="onLoadBlog(blog.id)">
              {{ blog.title }}
            </h5>
            <hr
              class="line text-center"
              style="margin-bottom:20px; margin-top:-10px"
            />
            <p class="card-text">
              {{ blog.description | fixDescription }}

              <v-icon left right @click="onLoadBlog(blog.id)"
                >arrow_forward</v-icon
              >
            </p>

            <p class="card-text">
              <small class="text-muted">{{ blog.date | date }}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
     </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  computed: {
    blogs() {
      return this.$store.getters.loadedBlogs;
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
  filters: {
    fixDescription: function(value) {
      const findDot = value.indexOf(".");
      var result = "";
      if (findDot === -1) {
        result = value;
      } else {
        result = value.substr(0, findDot + 1);
      }
      return result;
    },
  },
  methods: {
    onLoadBlog(id) {
      this.$router.push("/blogs/" + id);
    },
  },
  components:{
    Footer
  }
};
</script>

<style scoped>
hr.line {
  border: 1px solid #ffd700;
  width: 100px;
  margin: 0px auto;
}
</style>
