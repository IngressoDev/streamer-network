import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
    },
    {
      path: '/dashboard',
      component: () => import('./views/Dashboard.vue'),
      children: [
        {
          path: '/',
          name: 'dashboard',
          component: () => import('./components/Dashboard.vue'),
        },
        {
          path: 'profile',
          name: 'profile',
          component: () => import('./components/Profile.vue'),
        },
        {
          path: 'channel',
          name: 'channel',
          component: () => import('./components/Channel.vue'),
        },
      ],
    },
  ],
});
