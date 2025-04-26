import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../layouts/index.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('../views/home/index.vue'),
        meta: {
          title: '首页',
          keepAlive: true
        }
      },
      {
        path: 'live-betting',
        name: 'LiveBetting',
        component: () => import('../views/live-betting/index.vue'),
        meta: {
          title: '滚球',
          keepAlive: true
        }
      },
      {
        path: 'upcoming',
        name: 'Upcoming',
        component: () => import('../views/upcoming/index.vue'),
        meta: {
          title: '即将开赛',
          keepAlive: true
        }
      },
      {
        path: 'hot',
        name: 'Hot',
        component: () => import('../views/hot/index.vue'),
        meta: {
          title: '热门',
          keepAlive: true
        }
      },
      {
        path: 'today',
        name: 'Today',
        component: () => import('../views/today/index.vue'),
        meta: {
          title: '今日',
          keepAlive: true
        }
      },
      {
        path: 'early',
        name: 'Early',
        component: () => import('../views/early/index.vue'),
        meta: {
          title: '早盘',
          keepAlive: true
        }
      },
      {
        path: 'champion',
        name: 'Champion',
        component: () => import('../views/champion/index.vue'),
        meta: {
          title: '冠军',
          keepAlive: true
        }
      },
      {
        path: 'parlay',
        name: 'Parlay',
        component: () => import('../views/parlay/index.vue'),
        meta: {
          title: '综合过关',
          keepAlive: true
        }
      },
      {
        path: 'sports',
        name: 'Sports',
        component: () => import('../views/sports/index.vue'),
        meta: {
          title: '体育',
          keepAlive: true
        }
      },
      {
        path: 'schedule',
        name: 'Schedule',
        component: () => import('../views/schedule/index.vue'),
        meta: {
          title: '赛程',
          keepAlive: true
        }
      },
      {
        path: 'bet-slip',
        name: 'BetSlip',
        component: () => import('../views/bet-slip/index.vue'),
        meta: {
          title: '投注',
          keepAlive: true
        }
      },
      {
        path: 'my-match',
        name: 'MyMatch',
        component: () => import('../views/my-match/index.vue'),
        meta: {
          title: '我的赛事',
          keepAlive: true
        }
      },
      {
        path: 'bet-history',
        name: 'BetHistory',
        component: () => import('../views/bet-history/index.vue'),
        meta: {
          title: '投注记录',
          keepAlive: true
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router