import Vue from 'vue'
import Vuex from 'vuex'
import player from './modules/player'
import user from './modules/user'
import add_to_playlist from './modules/add_to_playlist'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        player,
        user,
        add_to_playlist
    },
})