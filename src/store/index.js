import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loadBlogs: [],
    user: null,
    loading: false,
    error: null,
  },

  mutations: {
    setLoadedBlog(state, payload) {
      state.loadBlogs = payload;
    },
    /* Dodavanje novih blogova u state  */
    createBlog(state, payload) {
      state.loadBlogs.push(payload);
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
  actions: {
    //uzimanje vrijednosti(value) iz Firebase baze
    loadBlog({ commit }) {
      commit("setLoading", true);
      firebase
        .database()
        .ref("blogs")
        .once("value")
        .then((data) => {
          const blogs = [];
          const obj = data.val();
          for (let key in obj) {
            blogs.push({
              id: key,
              title: obj[key].title,
              description: obj[key].description,
              imageUrl: obj[key].imageUrl,
              date: obj[key].date,
              creatorId: obj[key].creatorId,
            });
          }
          commit("setLoading", false);
          commit("setLoadedBlog", blogs);
        })
        .catch((error) => {
          console.log(error);
          commit("setLoading", true);
        });
    },

    //dodavanje u Firebase bazu podatke tj kreiranje Blog-a
    createBlog({ commit, getters }, payload) {
      const blog = {
        title: payload.title,
        description: payload.description,
        date: payload.date.toISOString(),
        creatorId: getters.user.id,
      };
      let imageUrl;
      let key;
      firebase
        .database()
        .ref("blogs")
        .push(blog)
        .then((data) => {
          key = data.key;

          return key;
        })
        .then((key) => {
          const filename = payload.image.name;
          const ext = filename.slice(filename.lastIndexOf("."));
          return firebase
            .storage()
            .ref("blogs/" + key + "." + ext)
            .put(payload.image);
        })
        .then((filedata) => {
          let imagePath = filedata.metadata.fullPath;
          // creating ref to our image file and get the url
          return firebase
            .storage()
            .ref()
            .child(imagePath)
            .getDownloadURL();
        })
        .then((url) => {
          imageUrl = url;
          return firebase
            .database()
            .ref("blogs")
            .child(key)
            .update({ imageUrl: imageUrl });
        })

        .then(() => {
          commit("createBlog", {
            ...blog,
            imageUrl: imageUrl,
            id: key,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },

    signUserIn({ commit }, payload) {
      commit("setLoading", true);
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          commit("setLoading", false);
          commit("clearError");
          const newUser = {
            id: user.user.uid,
            registredBlogs: [],
          };
          commit("setUser", newUser);
        })
        .catch((error) => {
          commit("setLoading", false);
          commit("setError", error);
          console.log(error);
        });
    },
    //vezano za authGuar.js i mainjs i router
    autoSignIn({ commit }, payload) {
      commit("setUser", { id: payload.uid, registredBlogs: [] });
    },
    logout({ commit }) {
      firebase.auth().signOut();
      commit("setUser", null);
    },
    clearError({ commit }) {
      commit("clearError");
    },
  },
  modules: {},
  getters: {
    /* Ovaj getter uzima state u ovom slucaju loadBlogs i uporedjuje datume */
    loadedBlogs(state) {
      return state.loadBlogs.sort((blogA, blogB) => {
        return blogA.date > blogB.date;
      });
    },
    /* Ovaj getter uzima sve blogove i prikazuje samo zadnja tri */
    featuredBlogs(state, getters) {
      return getters.loadedBlogs.slice(0, 3);
    },
    /* Ovaj getter omgucava da se po id blog moze otvarati tj. da je sadrzaj svudje razlicit */
    loadedBlog(state) {
      return (blogId) => {
        return state.loadBlogs.find((blog) => {
          return blog.id === blogId;
        });
      };
    },
    user(state) {
      return state.user;
    },
    error(state) {
      return state.error;
    },
    loading(state) {
      return state.loading;
    },
  },
});
