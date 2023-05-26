import {createRouter, createWebHistory} from 'vue-router'
import Notify from '@/utils/notify.js'
import {getToken} from '@/utils/auth.js'
import Login from '@/views/Login.vue'
import NotFound from '@/views/404.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // {
        //     path: '/',
        //     name: 'INDEX',
        //     redirect: '/home',
        //     component: () => import('@/views/Layout.vue'),
        //     children: [
        //         {
        //             path: 'home',
        //             component: () => import('@/views/page/HomePage.vue')
        //         },
        //         {
        //             path: 'post/:uuid',
        //             props: true,
        //             component: () => import('@/views/page/DetailPage.vue')
        //         }
        //     ]
        // },
        // {
        //     path: '/admin',
        //     name: 'ADMIN',
        //     redirect: '/admin/home',
        //     component: () => import('@/views/page/admin/Layout.vue'),
        //     children: [
        //         {
        //             path: 'home',
        //             name: 'HOME',
        //             component: () => import('@/views/page/admin/HomePage.vue')
        //         },
        //         {
        //             path: 'post',
        //             name: 'POST',
        //             component: () => import('@/views/page/admin/PostPage.vue')
        //         },
        //         {
        //             path: 'edit/:uuid',
        //             name: 'EDIT',
        //             props: true,
        //             component: () => import('@/views/page/admin/EditPage.vue'),
        //         },
        //     ]
        // },
        {
            path: '/login',
            name: 'LOGIN',
            component: Login
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NOT FOUND',
            component: NotFound
        }
    ]
})

const whiteList = ['/login', '/403', '/404', '/home', '/post/']
// router.beforeEach((to, from, next) => {
//     if (getToken()) {
//         next()
//     } else {
//         if (whiteList.indexOf(to.path) !== -1) {
//             next();
//         } else {
//             Notify.notifyFailure('你还没有登录')
//             next({name: 'LOGIN'});
//         }
//     }
// })

export default router
