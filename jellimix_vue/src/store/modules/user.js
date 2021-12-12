import Vue from 'vue'
const user = {
    state() {
        return {
            tokenAuthentication: "",
        }
    },


    getters: {
        tokenAuth: state => state.tokenAuthentication,
    },

    mutations: {
        setTokenAuth(state, tokenAuth) {
            state.tokenAuthentication = tokenAuth
            if (state.tokenAuthentication == null || state.tokenAuthentication.length == 0) {
                Vue.$cookies.remove('sessionId');
                console.log("im logging out: ", state.tokenAuthentication, " and ", Vue.$cookies.get('sessionId'))
            } else {
                Vue.$cookies.set('sessionId' , state.tokenAuthentication, "1h")
            }
        },
    },
}

export default user