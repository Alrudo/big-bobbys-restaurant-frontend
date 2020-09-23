import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export  default new Router({
    mode: 'history',
    routs: [
        {
            path: '/',
            components: () => import('./views/Home')
        },
        {
            path: '/order',
            components: () => import('./views/Order')
        },
        {
            path: '/gallery',
            components: () => import('./views/Gallery')
        },
        {
            path: '/menu',
            components: () => import('./views/Order')
        },
        {
            path: '/contacts',
            components: () => import('./views/Contacts')
        }
    ]
})
