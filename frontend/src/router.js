import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import CreateRequestPage from './components/CreateRequestPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/createNewRequest',
    name: 'CreateRequest',
    component: CreateRequestPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
