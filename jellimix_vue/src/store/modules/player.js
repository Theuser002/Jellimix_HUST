const player = {
    state() {
        return {
            audio: []
        }
    },


    getters: {
        audio: state => state.audio
    },

    // actions: {
    //     updateName(context) {
    //         context.commit('setName', 'Nguyễn Thị Hồng Êinh')
    //     }
    // },

    mutations: {
        setAudio(state, newAudio) {
            state.audio = newAudio
        }
    },
}

export default player