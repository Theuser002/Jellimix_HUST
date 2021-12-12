import axios from 'axios'

var AuthenticationServices = {
    methods: {
        loginService(userInfo) {
            let url = axios.defaults.baseURL +
                'Users/authenticatebyname'
            const data = {
                "Username": userInfo[0],
                "Pw": userInfo[1]
            }
            const config = {
                headers: {
                    "x-emby-authorization": `MediaBrowser Client="Jellyfin Web", Device="Chrome", DeviceId="abc", Version="10.7.6"`
                }
                }
            return axios.post(url, data, config)
        },
        
    },
}

export default AuthenticationServices;