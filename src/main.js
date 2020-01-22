import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import VueI18n from 'vue-i18n';
import { messages } from './components/common/i18n';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
// import './assets/css/theme-green/index.css'; // 浅绿色主题
import './assets/css/icon.css';
import './components/common/directives';
import 'babel-polyfill';
import axios from 'axios';
import Vuex from 'vuex';

Vue.config.devtools = true;


Vue.prototype.axios = axios;
Vue.use(Vuex);
Vue.config.productionTip = false;



const ADD_COUNT = 'ADD_COUNT'; // 用常量代替事件类型，使得代码更清晰
const REMOVE_COUNT = 'REMOVE_COUNT';
//注册状态管理全局参数
var store = new Vuex.Store({
    state:{
        token:'',
        userID:'',
    },
    mutations: {
        //写法与getters相类似
        //组件想要对于vuex 中的数据进行的处理
        //组件中采用this.$store.commit('方法名') 的方式调用，实现充分解耦
        //内部操作必须在此刻完成(同步)
        [ADD_COUNT] (state, token) { // 第一个参数为 state 用于变更状态 登录
            sessionStorage.setItem("token", token);
            state.token = token;
        },
        [REMOVE_COUNT] (state, token) { // 退出登录

            sessionStorage.removeItem("token", token);

            state.token = token;
        },
    }
});



Vue.use(VueI18n);
Vue.use(ElementUI, {
    size: 'small'
});
const i18n = new VueI18n({
    locale: 'zh',
    messages
});




new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount('#app');
// 配置
