import Vue from 'vue';
// 工具函数
// import Util11 from '../utils/auth';
import VueRouter from 'vue-router';
import {routers} from './router.js';
// import Auth from '@/libs/auth';
// import store from '../store';
// import Cookies from 'js-cookie';

Vue.use(VueRouter);

// 路由配置
const RouterConfig = {
    // mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: routers
};

// const whiteList = [];// 设置白名单

export const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
  console.log(to)
	next()
});

// router.afterEach((to,from) => {
		
// });
export default router