import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Field, Form, ErrorMessage, defineRule, configure } from "vee-validate";
import { required, email, min } from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import zh_TW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import "bootstrap";

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
configure({
    generateMessage: localize({ zh_TW: zh_TW }), // 載入繁體中文語系
    validateOnInput: true, // 當輸入任何內容直接進行驗證
});
setLocale("zh_TW");

const app = createApp(App).use(router);
app.component("Field", Field);
app.component("Form", Form);
app.component("ErrorMessage", ErrorMessage);
app.mount("#app");
