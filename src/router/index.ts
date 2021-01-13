import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '../views/login/login.vue';
import Firebase from 'firebase';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter(to, from, next) {
      Firebase.auth().onAuthStateChanged(userCredential => {
        if (userCredential) {
          next({ path: '/' });
        } else {
          next();
        }
      });
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register/register.vue'),
    beforeEnter(to, from, next) {
      Firebase.auth().onAuthStateChanged(userCredential => {
        if (userCredential) {
          next({ path: '/' });
        } else {
          next();
        }
      });
    }
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/home.vue'),
    beforeEnter(to, from, next) {
      Firebase.auth().onAuthStateChanged(userCredential => {
        if (userCredential) {
          next();
        } else {
          next({ path: '/login' });
        }
      });
    }
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('@/views/not-found/not-found.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
