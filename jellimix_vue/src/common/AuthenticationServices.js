import axios from 'axios'
import { api_key } from './enums'

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
        registerService(userInfo) {
            let url = axios.defaults.baseURL +
                'Users/new'
            const data = {
                "Name": userInfo[0],
                "Password": userInfo[1]
            }
            const config = {
                headers: {
                    "x-emby-authorization": `MediaBrowser Client="Jellyfin Web", Device="Chrome", DeviceId="abc", Version="10.7.6", Token="${api_key}"`
                }
                }
            return axios.post(url, data, config)
        },
    },
}

export default AuthenticationServices;