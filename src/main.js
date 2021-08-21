import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'animate.css';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';
import VueKinesis from 'vue-kinesis';
// 時間轉換
import toLocaleDate from '@/assets/js/toLocaleDate';
import toTimestamp from '@/assets/js/toTimestamp';
// 千分符號轉換
import toComma from '@/assets/js/toComma';
import LuckDraw from 'vue-luck-draw/vue3';
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import App from './App.vue';
import router from './router';

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');
const app = createApp(App);
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.use(LuckDraw);
app.use(VueKinesis);
AOS.init();
// 時間轉換
app.config.globalProperties.$toTimestamp = toTimestamp;
app.config.globalProperties.$toLocaleDate = toLocaleDate;
app.config.globalProperties.$toComma = toComma;
app.use(VueAxios, axios);
app.use(router);
app.mount('#app');
