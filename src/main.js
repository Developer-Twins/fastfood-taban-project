// import '@fortawesome/fontawesome-free/js/all.js'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { createApp, defineAsyncComponent } from "vue";
import router from "./router.js";
import vuex from "./store/index.js";

import App from "./App.vue";
import nav from "./component/TheNav.vue";


const BasePopup = defineAsyncComponent(() => import("./component/BasePopup.vue"));
const theContactUs = defineAsyncComponent(() => import("./component/TheContactUs.vue"));
const theLoader = defineAsyncComponent(() => import("./component/TheLoader.vue"));


const app = createApp(App);

app.component("nav-part", nav);
app.component("base-popup", BasePopup);
app.component("the-loader", theLoader);
app.component("contact-us", theContactUs);

app.use(vuex);
app.use(router);
router.isReady().then(function() {
  app.mount("#app");
});
