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
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
    },
    // Dashboard routes
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
        {
          path: 'overlays',
          name: 'overlays',
          component: () => import('./views/Overlays.vue'),
        },
      ],
    },
    // Overlay routes
    {
      path: '/overlay/:id',
      name: 'overlay',
      component: () => import('./views/Overlay.vue'),
    },
    {
      path: '/overlay/:id/edit',
      name: 'overlay_edit',
      component: () => import('./views/OverlayEditor.vue'),
    },
  ],
});
