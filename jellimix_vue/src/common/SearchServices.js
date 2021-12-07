import axios from 'axios'
import { api_key, user } from './enums'

var SearchServices = {
    methods: {
        async searchItem(term) {
            let url =
                axios.defaults.baseURL +
                `Users/${user}/` +
                `Items?searchTerm=${term}&IncludePeople=false&` +
                `IncludeMedia=true&IncludeGenres=false&` +
                `IncludeStudios=false&IncludeArtists=true&` +
                `IncludeItemTypes=Audio,MusicAlbum,MusicArtist&` +
                `Limit=24&Fields=PrimaryImageAspectRatio%2C` +
                `CanDelete%2CBasicSyncInfo%2CMediaSourceCount` +
                `&Recursive=true&EnableTotalRecordCount=false` +
                `&ImageTypeLimit=1&api_key=${api_key}`;
            return axios.get(url);
        },
        async searchArtist(term) {
            let url =
                axios.defaults.baseURL +
                `Artists?searchTerm=${term}&IncludePeople=false&` +
                `IncludeMedia=false&IncludeGenres=false&` +
                `IncludeStudios=false&IncludeArtists=true&Limit=24&` +
                `ParentId=7e64e319657a9516ec78490da03edccb&` +
                `Fields=PrimaryImageAspectRatio%2CCanDelete%2CBasicSyncInfo%2C` +
                `MediaSourceCount&Recursive=true&EnableTotalRecordCount=false&ImageTypeLimit=1&` +
                `userId=${user}&api_key=${api_key}`;
            return axios.get(url)
        }
    },
}

export default SearchServices;