import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false;

// Vue Router
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// Bootstrap Vue
import BootstrapVue from 'bootstrap-vue'
import { CardPlugin, NavbarPlugin, CollapsePlugin, NavPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue);
Vue.use(CardPlugin);
Vue.use(NavbarPlugin);
Vue.use(CollapsePlugin);
Vue.use(NavPlugin);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// custom components
import Now from './components/Now.vue'
import Resume from './components/resume/Resume.vue'
import Extras from './components/extras/Extras.vue'
import Visualizations from './components/visualizations/Visualizations.vue'
import Bezier from './components/visualizations/Bezier.vue'

// routing
const routes = [
  { path: '/', component: Now },
  { path: '/resume', component: Resume },
  { path: '/extras', component: Extras },
  {
    path: '/visualizations',
    component: Visualizations,
    children: [
      { path: 'bezier', component: Bezier }
    ]},
  { path: '*'}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

