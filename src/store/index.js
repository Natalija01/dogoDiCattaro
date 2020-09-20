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
    loadDogs: [],
    tmpImages: [],
  },

  mutations: {
    setLoadedBlog(state, payload) {
      state.loadBlogs = payload;
    },
    setLoadedDog(state, payload) {
      state.loadDogs = payload;
    },

    /* Dodavanje novih blogova u state  */
    createBlog(state, payload) {
      state.loadBlogs.push(payload);
    },
    createDog(state, payload) {
      state.loadDogs.push(payload);
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setTempImages(state, payload) {
      state.tmpImages.push(payload);
    },
    setFullTempImages(state, payload) {
      state.tmpImages = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    clearError(state) {
      state.error = null;
    },

    updateBlog(state, payload) {
      const blog = state.loadBlogs.find((blog) => {
        return blog.id === payload.id;
      });
      if (payload.title) {
        blog.title = payload.title;
      }
      if (payload.description) {
        blog.description = payload.description;
      }
      if (payload.date) {
        blog.date = payload.date;
      }
    },
  
  updateDog(state, payload) {
    const dog = state.loadDogs.find((dog) => {
      return dog.id === payload.id;
    });
    if (payload.name) {
      dog.name = payload.name;
    }
    if (payload.callname) {
      dog.callname = payload.callname;
    }
    if (payload.image) {
      dog.image = payload.image;
    }
    if (payload.genre) {
      dog.genre = payload.genre;
    }
    if (payload.alive) {
      dog.alive = payload.alive;
    }
    if (payload.dogForSale) {
      dog.dogForSale = payload.dogForSale;
    }
    if (payload.father) {
      dog.father = payload.father;
    }
    if (payload.mother) {
      dog.mother = payload.mother;
    }
    if (payload.born) {
      dog.born = payload.born;
    }
    if (payload.award) {
      dog.award = payload.award;
    }
    if (payload.images) {
      dog.images = payload.images;
    }
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
        .then(function(snapshot) {
          var blogs = [];

          snapshot.forEach((childSnapshot) => {
            var data = childSnapshot.val();
            data["id"] = childSnapshot.key;

            blogs.push(data);
          });

          commit("setLoading", false);
          commit("setLoadedBlog", blogs);
        })
        .catch((error) => {
          console.log(error);
          commit("setLoading", true);
        });
    },

    /*var query = firebase.database().ref("users").orderByKey();
query.on("value", function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    // key will be "ada" the first time and "alan" the second time
    var key = childSnapshot.key;
    // childData will be the actual contents of the child
    var childData = childSnapshot.val();
  });
}, function(error) {
  console.error(error);
}); */
    loadDog({ commit }) {
      commit("setLoading", true);

      firebase
        .database()
        .ref("dogs")
        .once("value")
        .then(function(snapshot) {
          var dogs = [];

          snapshot.forEach((childSnapshot) => {
            var data = childSnapshot.val();
            data.id = childSnapshot.key;

            dogs.push(data);
            console.log("posle pusha", data);
          });

          commit("setLoading", false);
          commit("setLoadedDog", dogs);
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
    getImageLinks({ commit }, payload) {
      const imgFile = payload.image;
      const ext = imgFile.name.slice(imgFile.name.lastIndexOf("."));
      commit("setLoading", true);
      if (payload.images.length > 1) {
        payload.images.forEach((item) => {
          const fileName = item.name.slice(0, item.name.lastIndexOf("."));
          const ext = item.name.slice(item.name.lastIndexOf("."));
          return firebase
            .storage()
            .ref("dogs" + "/" + fileName + ext)
            .put(item)
            .then(() => {
              var urlImage = "";
              firebase
                .storage()
                .ref("dogs" + "/" + fileName + ext)
                .getDownloadURL()
                .then((downloadURL) => {
                  urlImage = downloadURL;
                  commit("setTempImages", urlImage);
                  commit("setLoading", false);
                });
            });
        });
      } else {
        return firebase
          .storage()
          .ref("dogs" + "/name1" + ext)
          .put(imgFile)
          .then(() => {
            // console.log(fileData);
            var urlImage = "";
            firebase
              .storage()
              .ref("dogs" + "/name1" + ext)
              .getDownloadURL()
              .then((downloadURL) => {
                urlImage = downloadURL;
                commit("setTempImages", urlImage);
                commit("setLoading", false);
              });
          });
      }
    },
    createDog({ commit }, payload) {
      // const dog = {
      //   name: payload.name,
      //   award: payload.award,
      // };
      commit("setLoading", true);
      // let key;
      firebase
        .database()
        .ref("dogs")
        .push(payload)
        .then((data) => {
          console.log(data);
          // key = data.key;
          commit("setLoading", false);

          // return key;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    updateBlogData({ commit }, payload) {
      commit("setLoading", true);
      const updateObj = {};
      if (payload.title) {
        updateObj.title = payload.title;
      }
      if (payload.description) {
        updateObj.description = payload.description;
      }
      if (payload.date) {
        updateObj.date = payload.date;
      }
      firebase
        .database()
        .ref("blogs")
        .child(payload.id)
        .update(updateObj)

        .then(() => {
          commit("setLoading", false);
          commit("updateBlog", payload);
        })
        .catch((error) => {
          console.log(error);
          commit("setLoading", false);
        });
    },

    updateDogData({ commit }, payload) {
      commit("setLoading", true);
      const updateObj = {};
      if (payload.name) {
        updateObj.name = payload.name;
      }
      if (payload.callname) {
        updateObj.callname = payload.callname;
      }
      if (payload.image) {
        updateObj.image = payload.image;
      }
      if (payload.genre) {
        updateObj.genre = payload.genre;
      }
      if (payload.alive) {
        updateObj.alive = payload.alive;
      }
      if (payload.dogForSale) {
        updateObj.dogForSale = payload.dogForSale;
      }
      if (payload.father) {
        updateObj.father = payload.father;
      }
      if (payload.mother) {
        updateObj.mother = payload.mother;
      }
      if (payload.born) {
        updateObj.born = payload.born;
      }
      if (payload.award) {
        updateObj.award = payload.award;
      }
      if (payload.images) {
        updateObj.images = payload.images;
      }
      firebase
        .database()
        .ref("dogs")
        .child(payload.id)
        .update(updateObj)

        .then(() => {
          commit("setLoading", false);
          commit("updateDog", payload);
        })
        .catch((error) => {
          console.log(error);
          commit("setLoading", false);
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
    getTempSlika(state) {
      return state.tmpImages;
    },
    /* Ovaj getter uzima state u ovom slucaju loadBlogs i uporedjuje datume */
    loadedBlogs(state) {
      return state.loadBlogs.sort((blogA, blogB) => {
        return blogA.date > blogB.date;
      });
    },
    loadedDogs(state) {
      return state.loadDogs;
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
    loadedDog(state) {
      return (dogId) => {
        return state.loadDogs.find((dog) => {
          return dog.id === dogId;
        });
      };
    },
    zenskiPol: (state) => {
      return state.loadDogs.filter((dog) => dog.genre);
    },
    muskiPol: (state) => {
      return state.loadDogs.filter((dog) => !dog.genre);
    },
    alive: (state) => {
      return state.loadDogs.filter((dog) => !dog.alive);
    },
    isAlive: (state) => {
      return state.loadDogs.filter((dog) => dog.alive);
    },
    dogForSale: (state) => {
      return state.loadDogs.filter((dog) => dog.dogForSale);
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
