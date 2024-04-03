import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/part1-1',
      name: 'part1-1',
      component: () => import('../components/part1.vue')
    },
    {
      path: '/part1-2',
      name: 'part1-2',
      component: () => import('../components/part1-2.vue')      
    },
    {
      path: '/part1-3',
      name: 'part1-3',
      component: () => import('../components/part1-3.vue')      
    },
    {
      path: '/part1-3-r',
      name: 'part1-3-r',
      component: () => import('../components/part-1-3-r.vue')         
    },
    {
      path: '/part1-3-i',
      name: 'part1-3-i',
      component: () => import('../components/part-1-3-i.vue')         
    },
    {
      path: '/part1-3-j',
      name: 'part1-3-j',
      component: () => import('../components/part-1-3-j.vue')         
    },
    {
      path: '/part4-1',
      name: 'part4-1',
      component: () => import('../components/part4-1.vue')            
    },
    {
      path: '/part4-2',
      name: 'part4-2',
      component: () => import('../components/part4-2.vue')            
    },
    {
      path: '/part2-2',
      name: 'part2-2',
      component: () => import('../components/part2-2.vue')
    },
    {
      path: '/part2-1',
      name: 'part2-1',
      component: () => import('../components/part2-1.vue')
    },
    {
      path:'/part3-1',
      name: 'part3-1',
      component: () => import('../components/part3-1.vue')
    },
    {
      path:'/part3-1-1',
      name: 'part3-1-1',
      component: () => import('../components/part3-1-1.vue')
    },
    {
      path:'/part3-1-2',
      name: 'part3-1-2',
      component: () => import('../components/part3-1-2.vue')
    },
    {
      path:'/part3-1-3',
      name: 'part3-1-3',
      component: () => import('../components/part3-1-3.vue')
    },
    {
      path:'/part2-1',
      name: 'part2-1',
      component: () => import('../components/part2-1.vue')      
    },
    {
      path:'/part2-4',
      name: 'part2-4',
      component: () => import('../components/part2-4.vue')      
    },
    {
      path:'/part2-3',
      name: 'part2-3',
      component: () => import('../components/part2-3.vue')      
    }

    // ,
    // {
    //   path: '/part1',
    //   name: 'part1',
    //   component: Part1
    // },
    // {
    //   path: '/part2',
    //   name: 'part2',
    //   component: Part2
    // },
    // {
    //   path: '/part3',
    //   name: 'part3',
    //   component: Part3
    // },
    // {
    //   path: '/part4',
    //   name: 'part4',
    //   component: Part4
    // }
  ]
})

export default router
