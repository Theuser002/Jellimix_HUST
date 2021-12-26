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


    mutations: {
        /**
         * Gán 1 bài hát đơn vào player
         * @param {*} state 
         * @param {*} newAudio 
         */
        setSingleAudio(state, newAudio) {
            state.audio = newAudio
            state.isPlaying = true
        },

        /**
         * Gán 1 list bài hát vào player
         * @param {*} state 
         * @param {*} newList 
         */
        setListAudio(state, newList) {
            state.audio = newList[0]
            state.queueIndex = 0
            state.queue = newList
            state.isOpenPlayer = true
            state.isPlaying = true
        },

        /**
         * Thay đổi thứ tự chơi trong 1 list
         * @param {*} state 
         * @param {*} newIndex 
         */
        setQueueIndex(state, newIndex) {
            state.queueIndex = newIndex
        },

        /**
         * Gán trạng thái đóng mở player
         * @param {*} state 
         * @param {*} newOpenPlayer 
         */
        setOpenPlayer(state, newOpenPlayer) {
            state.isOpenPlayer = newOpenPlayer
        },

        /**
         * Gán trạng thái play/pause
         * @param {*} state 
         * @param {*} newIsPlaying 
         */
        setPlaying(state, newIsPlaying) {
            state.isPlaying = newIsPlaying
        }
    },

    actions: {
        /**
         * Xử lý việc đưa bài hát vào player bao gồm:
         * -Gán thông tin bài hát vào player
         * -Đẩy thông tin bài hát vào queue nếu chưa có
         * -Gán lại queueIndex tương đương
         * @param {*} param0 
         * @param {*} newSong 
         */
        handlePlaySingleSong({ commit, state }, newSong) {
            //Gán bài hát vào player
            commit('setSingleAudio', newSong)

            //Đẩy thông tin vào queue nếu chưa có
            if (!state.queue.some(item => item.Id === newSong.Id)) {
                state.queue.push(newSong)
            }

            //Gán lại queueIndex tương ứng
            commit('setQueueIndex', state.queue.findIndex(song => song.Id === newSong.Id))
        }
    },
}

export default player