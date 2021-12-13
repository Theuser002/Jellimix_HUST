import Vue from 'vue'
const user = {
    state() {
        return {
            tokenAuthentication: "",
            userId: "",
        }
    },


    getters: {
        tokenAuth: state => state.tokenAuthentication,
        userId: state => state.userId,
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
                Vue.$cookies.set('userId' , state.tokenAuthentication, "1h")
            }
        },
    },
}

export default user