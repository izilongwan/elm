import { LOCAL_TOKEN } from '@/config';
import Vue from 'vue';
import VueRouter from 'vue-router';

const Index = () => import('views/index/Index');
const IndexHome = () => import('views/index/Home');
const IndexMe = () => import('views/index/Me');
const IndexOrder = () => import('views/index/Order');
const Location = () => import('views/Location');
const Login = () => import('views/Login');
const Search = () => import('views/Search');
const City = () => import('views/City');
const Detail = () => import('views/Detail');
const Address = () => import('views/Address');
const AddressAddEdit = () => import('views/AddressAddEdit');
const Settlement = () => import('views/Settlement');
const Payment = () => import('views/Payment');
const OrderDetail = () => import('views/OrderDetail');


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Index,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: IndexHome,
        meta: { index: 0 },
      },
      {
        path: '/order',
        name: 'order',
        component: IndexOrder,
        meta: { index: 0 },
      },
      {
        path: '/me',
        name: 'me',
        component: IndexMe,
        meta: { index: 0 },
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { index: -1 }
  },
  {
    path: '/search',
    name: 'search',
    component: Search,
    meta: { index: 1 }
  },
  {
    path: '/location',
    name: 'location',
    component: Location,
    meta: { index: 1 }
  },
  {
    path: '/city',
    name: 'city',
    component: City,
    meta: { index: 2 }
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail,
    props: true,
    meta: { index: 2 }
  },
  {
    path: '/settlement',
    name: 'settlement',
    component: Settlement,
    meta: { index: 3 }
  },
  {
    path: '/address',
    name: 'address',
    component: Address,
    meta: { index: 4 }
  },
  {
    path: '/address/add',
    name: 'addressAdd',
    component: AddressAddEdit,
    meta: { index: 5 },
    props: true
  },
  {
    path: '/address/edit',
    name: 'addressEdit',
    component: AddressAddEdit,
    meta: { index: 5 },
    props: true
  },
  {
    path: '/payment',
    alias: '/pay',
    name: 'payment',
    component: Payment,
    meta: { index: 5 }
  },
  {
    path: '/order/detail/:id',
    name: 'orderDetail',
    component: OrderDetail,
    meta: { index: 5 },
    props: true
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.getItem(LOCAL_TOKEN);

  if (to.path === '/login') {
    next();
  } else {
    isLogin ? next() : next('/login');
  }
})

export default router;
