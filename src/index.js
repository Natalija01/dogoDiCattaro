import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blog from "@/components/Blog/blog.vue";
import Blogs from "@/components/Blog/blogs.vue";
import CreateBlog from "@/components/Blog/CreateBlogs.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
  },
  {
    path: "/blog/new",
    name: "Create Blogs",
    component: CreateBlog,
  },
  {
    path: "/blogs/:id",
    name: "Blog",
    component: Blog,
  },

  {
    path: "/female",
    name: "Female",
    component: () => import("../views/Female.vue"),
  },
  {
    path: "/male",
    name: "Male",
    component: () => import(/* webpackChunkName: "Male" */ "../views/Male.vue"),
  },
  {
    path: "/puppies",
    name: "Puppies",
    component: () =>
      import(/* webpackChunkName: "Puppies" */ "../views/Puppies.vue"),
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Gallery.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
