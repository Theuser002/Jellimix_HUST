import Vue from 'vue'
import VueRouter from 'vue-router'

//thực hiện import các component áp dụng lazy loading, đọc tài liệu để hiểu
const HelloWorld = () =>
    import ('../views/HelloWorld.vue')
const Home = () =>
    import ('../views/Home.vue')
const SongPage = () =>
    import ('../views/SongPage.vue')
const ArtistPage = () =>
    import ('../views/ArtistPage.vue')
const AlbumPage = () =>
    import ('../views/AlbumPage.vue')

const routes = [
    { path: '/', component: Home },
    { path: '/Hello', component: HelloWorld },
    { path: '/Song', component: SongPage },
    { path: '/Artist', component: ArtistPage },
    { path: '/Album', component: AlbumPage },
    { path: '*', redirect: '/' }
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