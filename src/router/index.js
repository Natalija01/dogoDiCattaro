import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blog from "@/components/Blog/blog.vue";
import Dog from "@/components/Dog/dog.vue";
import Blogs from "@/components/Blog/blogs.vue";
import DogsAll from "@/components/Dog/dogsAll.vue";
import BlogsAll from "@/components/Blog/blogsAll.vue";
import CreateBlog from "@/components/Blog/CreateBlogs.vue";
import CreateDog from "@/components/Dog/CreateDog.vue";
import Dashboard from "@/views/Dashboard.vue";
import authGuard from "./authGuard";
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
    path: "/edit",
    name: "Edit",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("@/components/Blog/Edit/EditBlogdialog.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter: authGuard,
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
  },
  {
    path: "/dogsAll",
    name: "Dogs All",
    component: DogsAll,
  },
  {
    path: "/blogsAll",
    name: "Blogs All",
    component: BlogsAll,
  },
  {
    path: "/blog/new",
    name: "Create Blogs",
    component: CreateBlog,
    beforeEnter: authGuard,
  },
  {
    path: "/dog/new",
    name: "Create Dog",
    component: CreateDog,
    beforeEnter: authGuard,
  },
  {
    path: "/blogs/:id",
    name: "Blog",
    props: true,
    component: Blog,
  },

  {
    path: "/dogs/:id", // route path
    props: true, //enabled props
    name: "dog", // route name
    component: Dog,
  },

  {
    path: "/female",
    name: "Female",
    component: () => import("../views/Female.vue"),
  },
  {
    path: "/ancestors",
    name: "Ancestors",
    component: () => import("../views/Ancestors.vue"),
  },
  {
    path: "/dogForSale",
    name: "dogForSale",
    component: () => import("../views/dogForSale.vue"),
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: () => import("@/components/user/SignUp.vue"),
  },
  {
    path: "/SignIn",
    name: "SignIn",
    component: () => import("@/components/user/SignIn.vue"),
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
