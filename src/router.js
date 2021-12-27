import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import home from "./component/page/Home.vue";
// import store from "./component/page/Store.vue";

const menu = defineAsyncComponent(() => import("./component/page/Menu.vue"));
const ourMenu = defineAsyncComponent(() =>
  import("./component/page/OurMenu.vue")
);
const store = defineAsyncComponent(() => import("./component/page/Store.vue"));

const aboutUs = defineAsyncComponent(() =>
  import("./component/page/AboutUs.vue")
);
const form = defineAsyncComponent(() => import("./component/page/Form.vue"));

let router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: home },
    {
      path: "/menu",
      component: menu,
      children: [{ path: ":type", component: ourMenu }],
    },
    {
      path: "/store",
      component: store,
      beforeEnter(_to, _from, next) {
        if (localStorage.getItem("userToken")) {
          next(true);
        } else {
          next("/form");
        }
      },
    },
    { path: "/aboutUs", component: aboutUs },
    {
      path: "/form",
      component: form,
      beforeEnter(_to, _from, next) {
        if (localStorage.getItem("userToken")) {
          next("/home");
        } else {
          next(true);
        }
      },
    },
    { path: "/:notFound(.*)", redirect: "/home" },
  ],
});
export default router;
