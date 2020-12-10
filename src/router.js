import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: index,
            children: [
                {
                    path: '/',
                    meta: {
                        title: '首页',
                        show: true
                    },
                    name: 'home',
                    component: Home,
                }
            ]
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: index,
            children:[
                {
                    path:'/about',
                    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
                }
            ]
        }
    ]
})
