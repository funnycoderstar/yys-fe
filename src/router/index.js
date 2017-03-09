import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/components/index';
import Player from '@/components/search';
import Hero from '@/components/hero';
import HeroList from '@/components/heroList';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/index',
        name: '首页',
        component: Index,
        alias: '/',
        children: [{
            path: 'player',
            name: '玩家',
            alias: '',
            component: Player
        },
        {
            path: 'heroList',
            name: '式神列表',
            component: HeroList
        }
        ]
    },
    {
        path: '/hero/*',
        name: '式神',
        component: Hero
    }
    ]
});