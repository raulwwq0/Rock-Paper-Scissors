import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VuePageTransition from 'vue-page-transition';
import ClassicGame from './components/ClassicGame.vue';
import ExtendedGame from './components/ExtendedGame.vue';
import Round from './components/Round.vue';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VuePageTransition);


const routes = [
  {path: '/', component: ClassicGame},
  {path: '/classic', component: ClassicGame},
  {path: '/extended', component: ExtendedGame},
  {path: '/round', component: Round},
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
