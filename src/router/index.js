import Vue from 'vue';
import VueRouter from 'vue-router';
import loginPage from '../view/login';
import detailsPage from '../view/details';


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'login',
        component: loginPage
    },
    {
        path: '/details',
        name: 'details',
        component: detailsPage
    },
]

const router = new VueRouter({
    routes
})

export default router