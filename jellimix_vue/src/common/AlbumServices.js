import axios from 'axios'
import { api_key, user } from './enums'

var AlbumServices = {
    methods: {
        async getAllAlbum() {
            let url = axios.defaults.baseURL +
                'Users/' + user +
                '/Items?SortBy=SortName&SortOrder=Ascending&IncludeItemTypes=MusicAlbum&Recursive=true&Fields=PrimaryImageAspectRatio%2CSortName%2CBasicSyncInfo&ImageTypeLimit=1&EnableImageTypes=Primary%2CBackdrop%2CBanner%2CThumb&StartIndex=0&Limit=1000&ParentId=7e64e319657a9516ec78490da03edccb&api_key=' + api_key
            return axios.get(url);
        },
        async getSingleAlbum(id) {
            let url = axios.defaults.baseURL +
                `Users/${user}/Items/${id}?` +
                `api_key=${api_key}`
            return await axios.get(url);
        },
        getImageLink(media_data) {
            var url;

            url =
                axios.defaults.baseURL +
                `Items/${media_data.Id}/Images/Primary?fillWidth=240&fillHeight=240&quality=100`;

            return url;
        },
    },
}

export default AlbumServices;