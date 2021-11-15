import Vue from 'vue'
import VueRouter from 'vue-router'

const HelloWorld = () =>
    import ('../views/HelloWorld.vue')
const Developing = () =>
    import ('../views/Developing.vue')

const routes = [
    { path: '/Hello', component: HelloWorld },
    { path: '', component: Developing }
]

const router = new VueRouter({
    mode: 'history',
    routes,
    base: process.env.BASE_URL,
    linkActiveClass: 'route-selected'
})

Vue.use(VueRouter)

export default router