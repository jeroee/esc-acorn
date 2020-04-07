import Vue from 'vue'
import Router from 'vue-router'
import Homepage from "./views/Homepage";


Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Homepage
        },
        {
            path: '/chat',
            name: 'chat',
            component: () => import('./views/Chatpage.vue')
        },

        {
            path: '/WaitPage',
            name: 'WaitPage',
            component: () => import('./views/Waitpage.vue')
        },

        {
            path: '/call',
            name: 'call',
            props: true,
            component: () => import('./views/Call.vue')
        },

        {
            path: '/QandAPage1',
            name: 'QandAPage1',
            component: () => import('./views/QandAPage1.vue')
        },

        {
            path: '/ThanksForSubmit',
            name: 'ThanksForSubmit',
            component: () => import('./components/ThanksForSubmit.vue')
        },

        {
            path: '/FeedBack',
            name: 'FeedBack',
            component: () => import('./views/FeedBack.vue')
        },

        {
            path: '/ExitPopup',
            name: 'ExitPopup',
            component: () => import('./components/ExitPopup.vue')
        },

        {
            path: '/Pic',
            name: 'Pic',
            component: () => import('./components/Pic.vue')
        },

        {
            path: '/FirstPagePic',
            name: 'FirstPagePic',
            component: () => import('./components/FirstPagePic.vue')
        },

        {
            path: '/Menu',
            name: 'Menu',
            component: () => import('./components/Menu.vue')
        },

        {
            path: '/ProductCard',
            name: 'ProductCard',
            component: () => import('./components/ProductCard.vue')
        },

        {
            path: '/ManyCard',
            name: 'ManyCard',
            component: () => import('./components/ManyCard.vue')
        },

        {
            path: '/Popmotion',
            name: 'Popmotion',
            component: () => import('./views/Popmotion.vue')
        },

        {
            path: '/layout',
            name: 'layout',
            component: () => import('./Dashboard/layout.vue')
        },

        {
            path: '/AgentList',
            name: 'AgentList',
            component: () => import('./Dashboard/AgentList.vue')},

        {
            path: '/CustomersList',
            name: 'CustomersList',

            component: () => import('./Dashboard/CustomersList.vue')
        },

        {
            path: '/notification',
            name: 'notification',
            component: () => import('./Dashboard/notification.vue')
        },

        {
            path: '/Calling',
            name: 'Calling',
            component: () => import('./Dashboard/Calling.vue')
        },

        {
            path: '/Login',
            name: 'Login',
            component: () => import('./Dashboard/Login.vue')
        },

        {
            path: '/PersonalInformation',
            name: 'PersonalInformation',
            component: () => import('./Dashboard/PersonalInformation.vue')
        },

        {
            path: '/Chatting',
            name: 'Chatting',
            component: () => import('./Dashboard/Chatting.vue')
        },

        {
            path: '/Sidebar',
            name: 'Sidebar',
            component: () => import('./Dashboard/Sidebar.vue')

        }

    ]
})
