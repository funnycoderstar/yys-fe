import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home';
import Hero from '@/components/hero';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: '首页',
        component: Home
    },
    {
        path: '/hero/*',
        name: '式神',
        component: Hero
    }
    ]
});