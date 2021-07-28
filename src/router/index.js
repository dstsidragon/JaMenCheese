import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/front/Index.vue'),
      },
      {
        path: '/products',
        component: () => import('../views/front/Products.vue'),
      },
      {
        path: '/carts',
        component: () => import('../views/front/Carts.vue'),
        children: [
          {
            path: '',
            component: () => import('../views/front/CartsIndex.vue'),
          },
          {
            path: '/order',
            component: () => import('../views/front/Order.vue'),
          },
          {
            path: '/payment/:orderId',
            component: () => import('../views/front/Payment.vue'),
          },
          {
            path: '/finishpay',
            component: () => import('../views/front/FinishPay.vue'),
          },
        ],
      },
      {
        path: '/orders',
        component: () => import('../views/front/Orders.vue'),
        children: [
          {
            path: '',
            component: () => import('../views/front/OrdersIndex.vue'),
          },
          {
            path: '/order/:id',
            component: () => import('../views/front/OrderSearch.vue'),
          },
        ],
      },
      // {
      //   path: '/product/:id',
      //   component: () => import('../views/front/Product.vue'),
      // },
      {
        path: '/q&a',
        component: () => import('../views/front/QA.vue'),
      },
      {
        path: '/favorites',
        component: () => import('../views/front/Favorites.vue'),
      },
      {
        path: '/login',
        component: () => import('../views/Login.vue'),
      },
      {
        path: '/lotteryturntable',
        component: () => import('../views/front/LotteryTurntable.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/backend/Index.vue'),
      },
      {
        path: '/productsControl',
        component: () => import('../views/backend/ProductsControl.vue'),
      },
      {
        path: '/articles',
        component: () => import('../views/backend/Articles.vue'),
      },
      {
        path: '/ordersList',
        component: () => import('../views/backend/OrdersList.vue'),
      },
      {
        path: '/coupons',
        component: () => import('../views/backend/Coupons.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth',
    };
  },
});

export default router;
