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
            if (Object.keys(media_data.ImageTags)[0] != undefined) {
                url =
                    axios.defaults.baseURL +
                    `Items/${media_data.Id}/Images/${Object.keys(media_data.ImageTags)[0]
                    }?fillWidth=240&fillHeight=240&quality=100`;
            } else if (media_data.ParentBackdropItemId != undefined) {
                url =
                    axios.defaults.baseURL +
                    `Items/${media_data.ParentBackdropItemId}/Images/Backdrop?fillWidth=240&fillHeight=240&quality=100`;
            } else if (media_data.AlbumId != undefined) {
                url =
                    axios.defaults.baseURL +
                    `Items/${media_data.AlbumId}/Images/${Object.keys(media_data.ImageBlurHashes)[0]
                    }?fillWidth=240&fillHeight=240&quality=100`;
            }
            console.log(media_data)

            return url;
        },
    },
}

export default AlbumServices;