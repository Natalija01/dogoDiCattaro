<template>
  <!-- Meetups.vue -->
  <div class="container">
    <v-layout>
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
        <div class="card " style="width: 18rem; "  @click="onLoadBlog(blog.id)">
          
            <img
              :src="blog.imageUrl"
              class="d-block w-100"
              width="100%"
              height="200px"
              alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{{ blog.title }}</h5>
            <hr
              class="line text-center"
              style="margin-bottom:20px; margin-top:-10px"
            />
            <p class="card-text">
              {{ blog.description | fixDescription }}
              
                <v-icon left right>arrow_forward</v-icon>
              
            </p>

            <p class="card-text">
              <small class="text-muted">{{ blog.date | date }}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    blogs() {
      return this.$store.getters.featuredBlogs;
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
