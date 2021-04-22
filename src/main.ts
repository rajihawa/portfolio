import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueParticles from "particles.vue3";

import "./assets/tailwind.css";

createApp(App).use(store).use(router).use(VueParticles).mount("#app");
