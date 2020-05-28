import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import RandomQuote from '../views/RandomQuote.vue';
import AuthorQuotes from '../views/AuthorQuotes.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/random',
    component: RandomQuote
  },
  {
    path: '/author/:authorName',
    component: AuthorQuotes
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
