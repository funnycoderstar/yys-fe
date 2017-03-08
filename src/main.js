// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import axios from 'axios';
import vueAxios from 'vue-axios';
import vuex from 'vuex';
import stores from './stores/index.js';

import './match.js';
require('normalize.css');

Vue.use(MintUI);
Vue.use(vueAxios, axios);
Vue.use(vuex);

Vue.config.productionTip = false;
window.apiUrl = '192.168.199.220:6600/hero';

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store: stores,
    template: '<App/>',
    components: { App }
});
