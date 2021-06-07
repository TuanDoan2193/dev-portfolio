import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Works from "../views/Works.vue";
import Error404 from "../views/Error404.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/works",
    name: "Works",
    component: Works,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Error404,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
