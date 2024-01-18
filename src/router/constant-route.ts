import { RouteRecordRaw } from 'vue-router'

const constantRoute: RouteRecordRaw[] = [
  {
    path: '/signIn',
    meta: { title: 'SignIn', hidden: true },
    component: () => import('pages/sign-in/SignIn.vue'),
  },
  {
    path: '/',
    meta: { title: '', hidden: true },
    redirect: '/Dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/Dashboard',
        meta: { title: 'Dashboard', hidden: false, icon: 'dashboard' },
        component: () => import('pages/dashboard/Dashboard.vue'),
      },
    ],
  },
  {
    path: '/permission',
    meta: { title: 'Permission', hidden: false, icon: 'manage_accounts' },
    redirect: '/permission/user-manager',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/permission/user-manager',
        meta: { title: 'User Manager', hidden: false, icon: 'person' },
        component: () => import('pages/permission/UserManager.vue'),
      },
      {
        path: '/permission/role-manager',
        meta: { title: 'Role Manager', hidden: false, icon: 'switch_account' },
        component: () => import('pages/permission/RoleManager.vue'),
      },
      {
        path: '/permission/menu-manager',
        meta: { title: 'Menu Manager', hidden: false, icon: 'menu' },
        component: () => import('pages/permission/MenuManager.vue'),
      },
    ],
  },
  {
    path: '/404',
    meta: { title: '404', hidden: true },
    component: () => import('pages/error/ErrorNotFound.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    meta: { title: 'Any', hidden: true },
    component: () => import('pages/error/ErrorNotFound.vue'),
  },
]

export default constantRoute
