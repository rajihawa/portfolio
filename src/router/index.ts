import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Skills from "../views/Skills.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { transition: "fade" },
  },

  {
    path: "/about",
    name: "About",
    component: About,
    meta: { transition: "fade" },
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills,
    meta: { transition: "fade" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const DEFAULT_TITLE = "Raji Hawa";
router.afterEach((to) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  document.title = to.meta.title || DEFAULT_TITLE;
});

export default router;
