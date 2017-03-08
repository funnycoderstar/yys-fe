import vue from 'vue';
import vuex from 'vuex';

import hero from './hero.js';

vue.use(vuex);

const store = new vuex.Store({
    modules: {
        hero
    }
});

export default store;
