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
const TheFeaturedSong = () =>
    import ('../components/MediaBlock/TheFeaturedSong.vue')
const TheFeaturedAlbum = () =>
    import ('../components/MediaBlock/TheFeaturedAlbum.vue')
const TheFeaturedGenre = () =>
    import ('../components/MediaBlock/TheFeaturedGenre.vue')
const TheFeaturedArtist = () =>
    import ('../components/MediaBlock/TheFeaturedArtist.vue')
const ThePlayer = () =>
    import ('../components/ThePlayer.vue')
const TheRegisterForm = () =>
    import ('./TheRegisterForm.vue')
const TheLoginForm = () =>
    import ('./TheLoginForm.vue')
const APlaylist = () =>
    import ('./MediaBlock/Media/APlaylist.vue')
const AnArtist = () =>
    import ('./MediaBlock/Media/AnArtist.vue')
const AnAlbum = () =>
    import ('./MediaBlock/Media/AnAlbum.vue')
const AGenre = () =>
    import ('./MediaBlock/Media/AGenre.vue')
const AddToPlaylist = () =>
    import ('./AddToPlaylist.vue')
const ASongListItem = () =>
    import ('./MediaBlock/Media/ASongListItem.vue')
const AQueueItem = () =>
    import ('./MediaBlock/Media/AQueueItem.vue')

//Global components
Vue.component('TheMenu', TheMenu);
Vue.component('TheHeader', TheHeader);
Vue.component('TheFooter', TheFooter);
Vue.component('TheBanner', TheBanner);
Vue.component('TheWeeklyTop', TheWeeklyTop);
Vue.component('PrimaryMedia', PrimaryMedia);
Vue.component('MiniMedia', MiniMedia);
Vue.component('TheFeaturedSong', TheFeaturedSong);
Vue.component('TheFeaturedAlbum', TheFeaturedAlbum);
Vue.component('TheFeaturedGenre', TheFeaturedGenre);
Vue.component('TheFeaturedArtist', TheFeaturedArtist);
Vue.component('ThePlayer', ThePlayer);
Vue.component('TheRegisterForm', TheRegisterForm);
Vue.component('TheLoginForm', TheLoginForm);
Vue.component('APlaylist', APlaylist);
Vue.component('AnArtist', AnArtist);
Vue.component('AGenre', AGenre);
Vue.component('AnAlbum', AnAlbum);
Vue.component('AQueueItem', AQueueItem);
Vue.component('AddToPlaylist', AddToPlaylist);
Vue.component('ASongListItem', ASongListItem);