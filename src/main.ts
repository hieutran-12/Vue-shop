/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import "@fortawesome/fontawesome-free/css/all.min.css";

import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Styles
import "unfonts.css";

import { install } from "vue3-recaptcha-v2";

const app = createApp(App);
registerPlugins(app);
app.mount("#app");
