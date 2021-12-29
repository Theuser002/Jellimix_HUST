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

            //Mở thanh player
            commit('setOpenPlayer', true)
        },

        /**
         * Xử lý việc đưa thêm bài hát hoặc 1 list bài hát thêm vào queue hiện có:
         * -Nếu queue trống thì xử lý như là set queue mới thông thường
         * -Nếu queue đang chạy thì push bài hát hoặc list mới vào queue
         * @param {*} param0 
         * @param {*} newItem 
         */
        handleAddToQueue({ commit, dispatch, state }, newItem) {
            //Queue đang trống
            if (state.queue.length == 0) {
                //Nếu newItem truyền vào là 1 array bài hát thì array chính là queue queue
                if (Array.isArray(newItem)) {
                    commit("setListAudio", newItem)
                }
                //Nếu newItem truyền vào là 1 bài hát đơn thì set bài hát vào player như 1 bài hát đơn
                else {
                    dispatch("handlePlaySingleSong", newItem)
                }
            }
            //Nếu queue không trống
            else {
                //Nếu newItem là 1 array bài hát thì concat array vào queue hiện tại
                if (Array.isArray(newItem)) {
                    state.queue = state.queue.concat(newItem)
                }
                //Nếu newItem là 1 bài hát đơn thì push bài hát vào queue
                else {
                    state.queue.push(newItem)
                }
            }
        }
    },
}

export default player