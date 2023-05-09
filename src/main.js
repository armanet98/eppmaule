import './preload.js';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "semantic-ui-css/semantic.min.css"
import 'vuesax/dist/vuesax.css'
import 'sweetalert2/dist/sweetalert2.min.css';
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
createApp(App).use(Quasar, quasarUserOptions).use(store).use(router).mount('#app')
