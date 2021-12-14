import axios from 'axios'
import { api_key, user } from './enums'

var AlbumServices = {
    methods: {
        async getAllAlbum() {
            let url = axios.defaults.baseURL +
                'Users/' + user +
                '/Items?SortBy=SortName&SortOrder=Ascending&IncludeItemTypes=MusicAlbum&Recursive=true&Fields=PrimaryImageAspectRatio%2CSortName%2CBasicSyncInfo&ImageTypeLimit=1&EnableImageTypes=Primary%2CBackdrop%2CBanner%2CThumb&StartIndex=0&Limit=1000&ParentId=7e64e319657a9516ec78490da03edccb&api_key=' + api_key
            return axios.get(url);
        }
    },
}

export default AlbumServices;