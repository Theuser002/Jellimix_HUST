import Vue from 'vue'
import App from './App.vue'
import axiosConfig from './common/axiosConfig'
import router from './routes/route'
import VueToast from 'vue-toast-notification';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store';

import './css/swiper.css'
import './components/components'
import './css/custom-toast.css';
import "./css/bootstrap.css";
import './css/font-awesome.min.css';
import './css/fonts.css';
import './css/style.css';

Vue.config.productionTip = false

axiosConfig()

Vue.use(VueToast, {
    position: "top-right",
    duration: 3000,
    dismissible: true,
});

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')