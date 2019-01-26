/* Layout */
import Layout from '../views/layout/layout'

// 配置公共router-view组件容器
const CommonView = () => import('@/components/commonView/commonView.vue')
const allRouterMap = [
  { path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  { path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: 'home',
    hidden: true,
    children: [{
      path: '/home',
      component: () => import('@/views/home/home')
    }]
  },
  {
    path: '/vip',
    component: Layout,
    redirect: '/vipc',
    name: 'v',
    meta: {
      title: 'vip',
      icon: 'grape'
    },
    children: [
      {
        path: '/vipc',
        meta: { title: 'IVP', icon: 'cherry' },
        name: 'vv',
        component: () => import('@/views/nested/menu1/secondary.vue')
      },
      {
        path: '/vipt',
        meta: { title: 'IVPt' },
        name: 'vww',
        component: () => import('@/views/nested/menu1/secondary.vue')
      }
    ]
  },
  {
    path: '/11',
    component: Layout,
    redirect: '',
    name: '111',
    meta: {
      title: '添加',
      icon: 'banana'
    },
    children: []
  },
  {
    path: '/1112',
    component: Layout,
    redirect: '',
    name: '111',
    meta: {
      title: '添加',
      icon: 'apple'
    },
    children: []
  },
  {
    path: '/21',
    component: Layout,
    redirect: '/',
    name: '111',
    meta: {
      title: '添加',
      icon: 'blueberry'
    },
    children: []
  },
  {
    path: '/32',
    component: Layout,
    redirect: '',
    name: '111',
    meta: {
      title: '添加',
      icon: 'carambola'
    },
    children: []
  },
  {
    path: '/34',
    component: Layout,
    redirect: '',
    name: '111',
    meta: {
      title: '添加',
      icon: 'grape'
    },
    children: []
  },
  {
    path: '/45',
    component: Layout,
    redirect: '',
    name: '111',
    meta: {
      title: '添加',
      icon: 'peach'
    },
    children: []
  },
  {
    path: '/56',
    component: Layout,
    redirect: '',
    name: '111',
    meta: {
      title: '添加',
      icon: 'watermelon'
    },
    children: []
  },
  {
    path: '/12',
    component: Layout,
    redirect: '',
    name: '111',
    meta: {
      title: '添加',
      icon: 'strawberry'
    },
    children: []
  },
  {
    path: '/22',
    component: Layout,
    redirect: '',
    name: '111',
    meta: {
      title: '添加',
      icon: 'pineapple'
    },
    children: []
  },
  {
    path: '/nested',
    component: Layout,
    redirect: '/menu1',
    name: 'Nested',
    meta: {
      title: '添加1',
      icon: 'hlg'

    },
    children: [
      {
        path: '/menu1',
        component: CommonView, // Parent router-view
        name: 'Menu1222',
        meta: { title: 'menu1' },
        redirect: '/nested/mm111111',
        children: [
          {
            path: '/nested/mm111111',
            name: 'mmmm00',
            component: () => import('@/views/nested/menu1/first.vue'),
            hidden: true,
            meta: { title: '666666' }
          },
          {
            path: '/nested/mm',
            name: 'mmmm00',
            component: () => import('@/views/nested/menu1/secondary.vue'),
            hidden: true,
            meta: { title: '66666----2222' }
          }
        ]
      },
      {
        path: 'menu2',
        component: CommonView,
        name: 'menu2',
        meta: { title: 'menu2' },
        redirect: '/sec222',
        children: [
          {
            path: '/sec222',
            name: 'mp',
            component: () => import('@/views/nested/menu2/index.vue'),
            hidden: true,
            meta: { title: '66666----33' }
          },
          {
            path: '/three333',
            hidden: true,
            meta: { title: '3333' },
            component: () => import('@/views/nested/menu1/secondary.vue')
          }
        ]
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export const routers = [
  ...allRouterMap
]
