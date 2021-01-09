import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        // {
        //     path: '/',
        //     component: () => import('../views/Home')
        // },
        {
            path: '/cart',
            component: () => import('../views/cart/Cart')
        },
        {
            path: '/contacts',
            component: () => import('../views/Contacts')
        },
        // {
        //     path: '/gallery',
        //     component: () => import('../views/Gallery')
        // },
        {
            path: '/',
            component: () => import('../views/menu/Menu')
        },
        {
            path: '/offers',
            component: () => import('../views/Offers')
        },
        {
            path: '/order',
            component: () => import('../views/order/Order')
        },
        {
            path: '/register',
            component: () => import('../views/profile/Register')
        },
        {
            path: '/login',
            component: () => import('../views/profile/Login')
        },
        {
            path: '/profile',
            component: () => import('../views/profile/Profile')
        }
    ]
})
