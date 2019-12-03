import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let kejianrouter = new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: () => import('./views/GoIn.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('./views/News.vue'),
    },
    {
      path: '/want',
      name: 'want',
      component: () => import('./views/want.vue'),
    },
    {
      path: '/newsdetails',
      name: 'newsdetails',
      component: () => import('./views/NewsDetails.vue'),
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('./views/product.vue'),
    },
    {
      path: '/case',
      name: 'case',
      component: () => import('./views/Case.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/contact.vue')
    },
    {
      path: '/jishu',
      name: 'jishu',
      component: () => import('./views/jishu.vue')
    },
    {
      path: '/tupian',
      name: 'tupian',
      component: () => import('./views/tp.vue'),
    },
    {
      path: '/jsDetail',
      name: 'jsDetail',
      component: () => import('./views/jsDetail.vue'),
    },
    {
      path: '/dujia',
      name: 'dujia',
      component: () => import('./views/dujia.vue'),
      children:[
        {
        path: '/dujia/kecheng',
        name: 'kecheng',
        component: () => import('./views/dujia.vue'),
      },
      ]
    },
    {
      path: '/mingxingchanpin',
      name: 'mingxingchanpin',
      component: () => import('./views/mingxingchanpin.vue')
    },
    {
      path: '/casedetails/:id',
      name: 'casedetails',
      component: () => import('./views/CaseDetails.vue')
    },
    {
      path: '/goin',
      name: 'goin',
      component: () => import('./views/GoIn.vue')
    },
    {
      path: '/download',
      name: 'download',
      component: () => import('./views/Download.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },

  ]
})

// 判断是否需要登录权限 以及是否登录
kejianrouter.beforeEach((to, from, next) => {
  // 判断是否需要登录权限
  if (to.matched.some(res => res.meta.requireAuth)) {
    // 判断是否登录
    if (sessionStorage.getItem('token')) {
      next()
    } else {
      // 没登录则跳转到登录界面
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

export default kejianrouter