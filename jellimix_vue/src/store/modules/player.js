const player = {
    state() {
        return {
            name: 'Tran Phi Hung'
        }
    },


    getters: {
        name: state => state.name
    },

    actions: {
        updateName(context) {
            context.commit('setName', 'Nguyễn Thị Hồng Êinh')
        }
    },

    mutations: {
        setName(state, newName) {
            state.name = newName
        }
    },
}

export default player