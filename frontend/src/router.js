import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '@/views/Homepage.vue';
import createNewRequestPage from '@/views/createNewRequest.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Homepage,
  },
  {
    path: '/createNewRequest',
    name: 'CreateRequest',
    component: createNewRequestPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;