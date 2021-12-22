const add_to_playlist = {
    state() {
        return {
            isAddFormOpen: false,
            listToAdd: [],
        }
    },


    getters: {
        isAddFormOpen: state => state.isAddFormOpen,
        listToAdd: state => state.listToAdd,
    },

    mutations: {
        setAddForm(state, isOpen) {
            state.isAddFormOpen = isOpen
        },
        setListToAdd(state, list) {
            state.listToAdd = list
        },
    },
}

export default add_to_playlist