import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/find',
    name: 'Find',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/components/find.vue')
  },
  {
    path: '/topbar',
    name: 'Topbar',
    component: () => import(/* webpackChunkName: "about" */ '@/components/topbar.vue'),
    children: [
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'Find',
        // name: 'Session',
        component: () => import('@/components/find.vue')
      },
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'Search',
        // name: 'Session',
        component: () => import('@/components/search.vue')
      },
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'Tpwd',
        // name: 'Session',
        component: () => import('@/components/tpwd.vue')
      },
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'Onsell',
        // name: 'Session',
        component: () => import('@/components/onsell.vue')
      },

    ]

    
  }
]

const router = new VueRouter({
  routes
})

export default router
