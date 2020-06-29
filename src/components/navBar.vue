<template>
  <div
    class="container-fluid noGutter"
    style="margin-top:-10px; margin-bottom:-15px; "
  >
    <nav class=" navbar navbar-expand-lg navbar-dark bg-light">
      <a class="navbar-brand" href="#"
        ><img
          src="logo.png"
          width="80px"
          height="100%"
          class="mr-auto navbar-brand d-inline-block"
          alt
        />Dogo di Cattaro</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">ABOUT</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/blogsAll">NEWS</router-link>
          </li>
          <li class="nav-item dropdown ">
            <router-link
              to="/DogsAll"
              class="nav-link dropdown-toggle "
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              OURDOGS
            </router-link>
            <div
              class="dropdown-menu navbar-dark bg-light"
              aria-labelledby="navbarDropdownMenuLink"
              dark
            >
              <router-link to="/female" class="dropdown-item" href="#"
                >Female</router-link
              >
              <router-link to="/male" class="dropdown-item" href="#"
                >Male</router-link
              >
            </div>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/puppies">PUPPIES</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/gallery">GALLERY</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">CONTACT</router-link>
          </li>
           <li class="nav-item" v-if="user">
            <router-link class="nav-link" to="/dashboard"><v-icon left dark>create</v-icon>Dashboard</router-link>
          </li>
           <li class="nav-item" v-if="user">
            <a class="nav-link"  @click="onLogout" ><v-icon left dark>exit_to_app</v-icon>Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  computed: {
   user() {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined;
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch('logout')
    }
  },
}
</script>

<style scoped>
.nav-link {
  margin-right: 1em;
  font-size: 1em;
}
#line {
  border-bottom: 1px solid rgb(201, 197, 197);
}

.bg-light {
  background-color: rgb(10, 10, 10) !important;
}

.navbar-light .navbar-nav .nav-link {
  color: rgb(255, 255, 255);
}
.title {
  font-size: 1em;
  color: rgb(139, 133, 133);
  text-align: center;
}

.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .nav-link:focus {
  color: white;
}
ul {
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: 1px;
}
@media only screen and (max-width: 980px) {
  .nav-item {
    border-bottom: 0.3px solid rgb(255, 255, 255);
  }
}
</style>
