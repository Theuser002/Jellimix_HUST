import axios from 'axios'

const api_key = '0727c7e03dfa4b46bc5925ce7c6fff9c'
const user = '4c6717a89bec419c8e396db40eb9713f/'
var SongServices = {
    methods: {
        async getAllSong() {
            let url = axios.defaults.baseURL + 'emby/Users/' + user + 'Items?parentId=7e64e319657a9516ec78490da03edccb&api_key=' + api_key
            console.log(url);
            return axios.get(url);
        }
    },
}

export default SongServices;