import Vue from 'vue'
const user = {
    state() {
        return {
            tokenAuthentication: "",
            userId: "",
            isOpenLoginModalVuex: false,
            isOpenRegisterModalVuex: false,
        }
    },


    getters: {
        tokenAuth: state => state.tokenAuthentication,
        userId: state => state.userId,
        isOpenLoginModalVuex: state => state.isOpenLoginModalVuex,
        isOpenRegisterModalVuex: state => state.isOpenRegisterModalVuex,
    },

    mutations: {
        setTokenAuth(state, tokenAuth) {
            state.tokenAuthentication = tokenAuth
            if (state.tokenAuthentication == null || state.tokenAuthentication.length == 0) {
                Vue.$cookies.remove('sessionId');
            } else {
                Vue.$cookies.set('sessionId' , state.tokenAuthentication, "1h")
            }
        },
        setUserId(state, userId) {
            state.userId = userId
            if (state.userId == null || state.userId.length == 0) {
                Vue.$cookies.remove('userId');
            } else {
                Vue.$cookies.set('userId' , state.userId, "1h")
            }
        },
        setAddLoginModal(state, isOpen) {
            state.isOpenLoginModalVuex = isOpen
        },
        setAddRegisterModal(state, isOpen) {
            state.isOpenRegisterModalVuex = isOpen
        },
    },
}

export default user