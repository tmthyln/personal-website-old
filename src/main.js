import Vue from 'vue'
import App from './App.vue'

// Vue Router
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Now from './components/Now.vue'
import Resume from './components/Resume.vue'
import Extras from './components/Extras.vue'

// Bootstrap Vue
import BootstrapVue from 'bootstrap-vue'
import { CardPlugin, NavbarPlugin } from 'bootstrap-vue'
Vue.use(CardPlugin);
Vue.use(BootstrapVue);
Vue.use(NavbarPlugin);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;

const routes = [
  { path: '/', component: Now },
  { path: '/resume', component: Resume },
  { path: '/extras', component: Extras }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

