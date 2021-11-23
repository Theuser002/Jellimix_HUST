import Vue from "vue";
const TheMenu = () =>
    import ('../components/TheMenu.vue')
const TheHeader = () =>
    import ('../components/TheHeader.vue')
const TheFooter = () =>
    import ('../components/TheFooter.vue')
const TheBanner = () =>
    import ('../components/MediaBlock/TheBanner.vue')
const TheWeeklyTop = () =>
    import ('../components/MediaBlock/TheWeeklyTop.vue')
const PrimaryMedia = () =>
    import ('../components/MediaBlock/Media/PrimaryMedia.vue')
const MiniMedia = () =>
    import ('../components/MediaBlock/Media/MiniMedia.vue')
const MediaSlider = () =>
    import ('../components/MediaBlock/MediaSlider.vue')

//Global components
Vue.component('TheMenu', TheMenu);
Vue.component('TheHeader', TheHeader);
Vue.component('TheFooter', TheFooter);
Vue.component('TheBanner', TheBanner);
Vue.component('TheWeeklyTop', TheWeeklyTop);
Vue.component('MediaSlider', MediaSlider);
Vue.component('PrimaryMedia', PrimaryMedia);
Vue.component('MiniMedia', MiniMedia);