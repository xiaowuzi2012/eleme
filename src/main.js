// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import goods from 'components/goods/goods.vue';
import ratings from 'components/ratings/ratings.vue';
import seller from 'components/seller/seller.vue';

// import './common/stylus/index.styl';
import 'common/stylus/index.styl';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueResource);

// 定义路由
const routes = [
  { path: '/', redirect: '/goods' },
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
];

// 创建 router 实例，然后传 `routes` 配置
var router = new VueRouter({
  linkActiveClass: 'active',
  routes
});

/* eslint-disable no-new */
// =>是ES6的箭头语法
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
