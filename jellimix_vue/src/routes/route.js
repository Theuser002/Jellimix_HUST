import Vue from 'vue'
import VueRouter from 'vue-router'

//thực hiện import các component áp dụng lazy loading, đọc tài liệu để hiểu
const Home = () =>
    import ('../views/Home.vue')
const SongPage = () =>
    import ('../views/SongPage.vue')
const ArtistPage = () =>
    import ('../views/ArtistPage.vue')
const SingleArtistPage = () =>
    import ('../views/SingleArtistPage.vue')
const AlbumPage = () =>
    import ('../views/AlbumPage.vue')
const AlbumDetailPage = () =>
    import ('../views/AlbumDetailPage.vue')
const PlaylistPage = () =>
    import ('../views/PlaylistPage.vue')
const SinglePlaylistPage = () =>
    import ('../views/SinglePlaylistPage.vue')
const SingleGenrePage = () =>
    import ('../views/SingleGenrePage.vue')
const GenresPage = () =>
    import ('../views/GenresPage.vue')

const routes = [
    { path: '/Home', component: Home },
    { path: '/Songs', component: SongPage },
    { path: '/Artists', component: ArtistPage },
    { path: '/Artists/:id', component: SingleArtistPage },
    { path: '/Albums', component: AlbumPage },
    { path: '/Playlists', component: PlaylistPage },
    { path: '/Genres', component: GenresPage },
    { path: '/Playlists/:id', component: SinglePlaylistPage },
    { path: '/SingleArtist', component: SingleArtistPage },
    { path: '/Albums/:id', component: AlbumDetailPage },
    { path: '/Genres/:id', component: SingleGenrePage },
    { path: '/', redirect: '/Home' }
]

const router = new VueRouter({
    mode: 'history',
    routes,
    base: process.env.BASE_URL, //URL gốc của môi trường đang chạy, dưới local chính là localhost:8080, trên môi trường product chính là domain name
    linkExactActiveClass: 'route-selected', //router-link của trang hiện tại sẽ có class này, tương tự như class active
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})

Vue.use(VueRouter)

export default router