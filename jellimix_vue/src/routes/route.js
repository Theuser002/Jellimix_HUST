import Vue from 'vue'
import VueRouter from 'vue-router'

const HelloWorld = () =>
    import ('../views/HelloWorld.vue')
const Developing = () =>
    import ('../views/Developing.vue')
const Home = () =>
    import ('../views/Home.vue')
const SongPage = () =>
    import ('../views/SongPage.vue')
const ArtistPage = () =>
    import ('../views/ArtistPage.vue')
const AlbumPage = () =>
    import ('../views/AlbumPage.vue')

const routes = [
    { path: '/Hello', component: HelloWorld },
    { path: '/dev', component: Developing },
    { path: '/Home', component: Home },
    { path: '/Song', component: SongPage },
    { path: '/Artist', component: ArtistPage },
    { path: '/Album', component: AlbumPage },
]

const router = new VueRouter({
    mode: 'history',
    routes,
    base: process.env.BASE_URL,
    linkActiveClass: 'route-selected'
})

Vue.use(VueRouter)

export default router