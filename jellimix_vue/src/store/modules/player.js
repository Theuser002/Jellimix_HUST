const player = {
    state() {
        return {
            audio: [],
            queue: [],
            queueIndex: 0,
            isOpenPlayer: false,
            isPlaying: false
        }
    },


    getters: {
        audio: state => state.audio,
        queue: state => state.queue,
        queueIndex: state => state.queueIndex,
        isOpenPlayer: state => state.isOpenPlayer,
        isPlaying: state => state.isPlaying
    },

    // actions: {
    //     updateName(context) {
    //         context.commit('setName', 'Nguyễn Thị Hồng Êinh')
    //     }
    // },

    mutations: {
        setSingleAudio(state, newAudio) {
            state.audio = newAudio
            state.isPlaying = true
        },
        setListAudio(state, newList) {
            state.audio = newList[0]
            state.queueIndex = 0
            state.queue = newList
            state.isOpenPlayer = true
            state.isPlaying = true
        },
        setQueueIndex(state, newIndex) {
            state.queueIndex = newIndex
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