import { createWebHistory, createRouter } from "vue-router";

import Landing from "../pages/landing/Landing.vue";
import Dashboard from "../pages/dashboard/Dashboard.vue";
import ComingSoon from "../pages/coming-soon/ComingSoon.vue";

const routes = [
  { path: "/", name: "ComingSoon", component: ComingSoon },
  { path: "/landing", name: "Landing", component: Landing },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
