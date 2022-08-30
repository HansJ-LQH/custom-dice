import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';

// 引入公共样式
import Public from './assets/css/public.css';
// 引入 element-ui
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Public);
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
