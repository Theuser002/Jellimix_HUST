import axios from 'axios'
import { api_key, user } from './enums'

var ArtistServices = {
    methods: {
        async getAllArtist() {
            let url = axios.defaults.baseURL +
                `Artists?SortBy=SortName` +
                `&SortOrder=Ascending&` +
                `Recursive=true&` +
                `Fields=PrimaryImageAspectRatio%2CSortName%2CBasicSyncInfo&` +
                `StartIndex=0&ImageTypeLimit=1&` +
                `EnableImageTypes=Primary%2CBackdrop%2CBanner%2CThumb&` +
                `Limit=100&ParentId=7e64e319657a9516ec78490da03edccb&userId=${user}&api_key=${api_key}`
            return axios.get(url);
        },
        async getSingleArtist(id) {
            let url = axios.defaults.baseURL +
                `Users/${user}/Items/${id}?` +
                `api_key=${api_key}`
            return await axios.get(url);
        }
    },
}

export default ArtistServices;