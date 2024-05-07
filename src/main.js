import "./assets/style.css";
import { createApp } from "vue";
import store from "./store";
import App from "./App.vue";

import VOtpInput from "vue3-otp-input";

const app = createApp(App);
app.use(store);

app.component("v-otp-input", VOtpInput).mount("#app");
