import Vue from 'vue'
import App from './App.vue'
import axiosConfig from './common/axiosConfig'
import router from './routes/route'
import VueToast from 'vue-toast-notification';
import './components/components'
import './css/custom-toast.css';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false

axiosConfig()

Vue.use(VueToast, {
    position: "top-right",
    duration: 3000,
    dismissible: true,
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')