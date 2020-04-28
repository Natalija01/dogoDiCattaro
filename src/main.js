import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import "popper.js";
import "bootstrap";
import * as firebase from "firebase";
import "slick-carousel";
import vuetify from "./plugins/vuetify.js";
import "./assets/style.scss";
import DateFilter from "@/filters/date.js";
import alertComp from "@/components/Share/alert.vue";
import EditBlogdialog from "@/components/Blog/Edit/EditBlogdialog.vue";

Vue.config.productionTip = false;
Vue.filter("date", DateFilter);
Vue.component("app-alert", alertComp);
Vue.component("edit-Blog-dialog", EditBlogdialog);
new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyA-yPIAh0hvv_pZe9XpzOX6mfjhpecTSks",
      authDomain: "dogodicattaro-ccec6.firebaseapp.com",
      databaseURL: "https://dogodicattaro-ccec6.firebaseio.com",
      projectId: "dogodicattaro-ccec6",
      storageBucket: "dogodicattaro-ccec6.appspot.com",
    });
    //ovo je vezano za authGuard.js i router ukoliko imamo token da nas automatski uloguje
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch("autoSignIn", user);
      }
    });
    this.$store.dispatch("loadBlog");
  },
}).$mount("#app");
