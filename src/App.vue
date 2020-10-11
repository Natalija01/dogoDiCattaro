<template>
  <div id="app">
    <v-app>
    <navBar />
    <router-view />
    </v-app>
  </div>
</template>

<script>
import navBar from "@/components/navBar.vue";
//import Footer from "@/views/Footer.vue";
export default {
  components: {
    navBar,
    //Footer
  },
  computed: {
    userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
