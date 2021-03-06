import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import Layout from '@/views/layout/index'

export const routes = [
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
            hide: true
        },
        component: () => import('@/views/login/login')
    },
    {
        path: '/',
        redirect: '/dashboard',
        meta: {
            title: '主页',
            hide: true
        },
    },
    {
        path: '/dashboard',
        meta: {
            icon: 'el-icon-platform-eleme',
            title: '主页',
        },
        component: Layout,
        children: [
            {
                path: '',
                name: 'dashboard',
                meta: {
                    icon: 'el-icon-platform-eleme',
                    title: 'Dashboard',
                },
                component: () => import('@/views/dashboard/dashboard')
            }
        ]
    },
    {
        path: '/valueTransfer',
        redirect: '/valueTransfer/parentToChildren',
        meta: {
            icon: 'el-icon-user-solid',
            title: '传值',
        },
        component: Layout,
        children: [
            {
                path: 'parentToChildren',
                name: 'ParentToChildren',
                meta: {
                    title: '父传子',
                },
                component: () => import('@/views/valueTransfer/parentToChildren')
            },
            {
                path: 'childrenToParent',
                name: 'ChildrenToParent',
                meta: {
                    title: '子传父',
                },
                component: () => import('@/views/valueTransfer/childrenToParent')
            },
            {
                path: 'brotherToBrother',
                name: 'BrotherToBrother',
                meta: {
                    title: '兄弟传值',
                },
                component: () => import('@/views/valueTransfer/brotherToBrother')
            },
            {
                path: 'Provide',
                name: 'Provide',
                meta: {
                    title: 'provide/inject',
                },
                component: () => import('@/views/valueTransfer/provide')
            },
            {
                path: 'Vuex',
                name: 'Vuex',
                meta: {
                    title: 'Vuex传值',
                },
                component: () => import('@/views/valueTransfer/vuexTransfer')
            }
        ]
    },
    {
        path: '/keepAlive',
        meta: {
            title: '路由缓存',
            icon: 'el-icon-star-on'
        },
        component: Layout,
        children: [
            {
                path: '',
                name: 'KeepAlive',
                meta: {
                    title: 'KeepAlive',
                    icon: 'el-icon-star-on',
                    keepAlive: true
                },
                component: () => import('@/views/keepAlive/keepAlive')
            }
        ]
    },
    {
        path: '/hookFn',
        redirect: '/hookFn/life',
        meta: {
            title: '钩子函数',
            icon: 'el-icon-s-promotion'
        },
        component: Layout,
        children: [
            {
                path: 'life',
                name: 'Life',
                meta: {
                    title: '生命周期钩子',
                },
                component: () => import('@/views/hookFn/life')
            },
            {
                path: 'routing',
                name: 'Routing',
                meta: {
                    title: '路由钩子',
                },
                component: () => import('@/views/hookFn/routing')
            },
        ]
    },
    {
        path: '/chart',
        meta: {
            title: 'Chart',
            icon: 'el-icon-s-operation'
        },
        component: Layout,
        children: [
            {
                path: '',
                name: 'Bridge',
                meta: {
                    title: '图表',
                    icon: 'el-icon-s-operation'
                },
                component: () => import('@/views/chart/chart')
            }
        ]
    },
    {
        path: '/search',
        meta: {
            title: '搜索栏',
            icon: 'el-icon-picture'
        },
        component: Layout,
        children: [
            {
                path: '',
                name: 'Search',
                meta: {
                    title: '搜索栏',
                    icon: 'el-icon-picture'
                },
                component: () => import('@/views/search/search')
            }
        ]
    },
    {
        path: '/hole',
        meta: {
            title: '插槽',
            icon: 'el-icon-s-shop'
        },
        component: Layout,
        children: [
            {
                path: '',
                name: 'Hole',
                meta: {
                    title: '插槽',
                    icon: 'el-icon-s-shop'
                },
                component: () => import('@/views/hole/hole')
            }
        ]
    },
    {
        path: '/mix',
        meta: {
            title: '混入',
            icon: 'el-icon-upload'
        },
        component: Layout,
        children: [
            {
                path: 'example1',
                name: 'Example1',
                meta: {
                    title: '组件1'
                },
                component: () => import('@/views/mix/example1')
            },
            {
                path: 'example2',
                name: 'Example2',
                meta: {
                    title: '组件2'
                },
                component: () => import('@/views/mix/example2')
            }
        ]
    },
    {
        path: '/render',
        meta: {
            title: 'render函数',
            icon: 'el-icon-info'
        },
        component: Layout,
        children: [
            {
                path: '',
                name: 'Render',
                meta: {
                    title: 'render',
                    icon: 'el-icon-info'
                },
                component: () => import('@/views/render/render')
            }
        ]
    },
    {
        path: '/instance',
        redirect: '/instanceAd/adidas',
        meta: {
            icon: 'el-icon-user-solid',
            title: '阿迪案例',
        },
        component: Layout,
        children: [
            {
                path: 'adidas',
                meta: {
                    title: 'adidas',
                    icon: 'el-icon-info',
                },
                component: Layout,
                component: () => import('@/views/valueTransfer/parentToChildren')
            }
        ]
    },
]
const router = new VueRouter({
    mode: 'history',
    routes
})
export default router;