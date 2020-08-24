import Vue from 'vue';
import Router from 'vue-router';
import index from '@/page/index/index';
import home from '@/page/home/index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/home',
      name: 'home',
      component: home,
    },
  ],
});
