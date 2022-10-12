import Vue from 'vue';
import VueRouter from 'vue-router';
import ProductList from '@/components/ProductList.vue';
import ProductInfo from '@/components/ProductInfo.vue';
import CartDetail from '@/components/CartDetail.vue';
import AdminView from '@/views/AdminView.vue';
// import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView,
  // },
  {
    path: '/product',
    name: 'product',
    component: ProductList,
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
  },
  {
    path: '/product/:id',
    name: 'product-info',
    component: ProductInfo,
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartDetail,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
