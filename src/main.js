import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/common.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false;
Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'zh-CN', // 语言标识, 通过切换locale的值来实现语言切换,this.$i18n.locale
    messages: {
        'zh-CN': require('./components/lang/zh'), // 中文语言包
        'en-US': require('./components/lang/en') // 英文语言包
    }
})

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
