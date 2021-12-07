const player = {
    state() {
        return {
            audio: [],
            isOpenPlayer: false,
            isPlaying: false
        }
    },


    getters: {
        audio: state => state.audio,
        isOpenPlayer: state => state.isOpenPlayer,
        isPlaying: state => state.isPlaying
    },

    // actions: {
    //     updateName(context) {
    //         context.commit('setName', 'Nguyễn Thị Hồng Êinh')
    //     }
    // },

    mutations: {
        setAudio(state, newAudio) {
            state.audio = newAudio
        },
        setOpenPlayer(state, newOpenPlayer) {
            state.isOpenPlayer = newOpenPlayer
        },
        setPlaying(state, newIsPlaying) {
            state.isPlaying = newIsPlaying
        }
    },
}

export default player