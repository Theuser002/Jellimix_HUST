import Vue from "vue";
const TheMenu = () =>
    import ('../components/TheMenu.vue')
const TheHeader = () =>
    import ('../components/TheHeader.vue')
const TheFooter = () =>
    import ('../components/TheFooter.vue')
const TheBanner = () =>
    import ('../components/MediaBlock/TheBanner.vue')
const TheFeaturedAlbum = () =>
    import ('../components/MediaBlock/TheFeaturedAlbum.vue')
const TheFeaturedArtist = () =>
    import ('../components/MediaBlock/TheFeaturedArtist.vue')
const TheFeaturedSong = () =>
    import ('../components/MediaBlock/TheFeaturedSong.vue')
const TheRecentPlayed = () =>
    import ('../components/MediaBlock/TheRecentPlayed.vue')
const TheWeeklyTop = () =>
    import ('../components/MediaBlock/TheWeeklyTop.vue')
const PrimaryMedia = () =>
    import ('../components/MediaBlock/Media/PrimaryMedia.vue')
const MiniMedia = () =>
    import ('../components/MediaBlock/Media/MiniMedia.vue')

//Global components
Vue.component('TheMenu', TheMenu);
Vue.component('TheHeader', TheHeader);
Vue.component('TheFooter', TheFooter);
Vue.component('TheBanner', TheBanner);
Vue.component('TheFeaturedAlbum', TheFeaturedAlbum);
Vue.component('TheFeaturedArtist', TheFeaturedArtist);
Vue.component('TheFeaturedSong', TheFeaturedSong);
Vue.component('TheRecentPlayed', TheRecentPlayed);
Vue.component('TheWeeklyTop', TheWeeklyTop);
Vue.component('PrimaryMedia', PrimaryMedia);
Vue.component('MiniMedia', MiniMedia);