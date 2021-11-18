import Vue from "vue";
const TheMenu = () =>
    import ('../components/TheMenu.vue')
const TheHeader = () =>
    import ('../components/TheHeader.vue')

//Global components
Vue.component('TheMenu', TheMenu);
Vue.component('TheHeader', TheHeader);