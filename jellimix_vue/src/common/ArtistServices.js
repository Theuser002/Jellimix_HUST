import axios from 'axios'
import { api_key, user } from './enums'

var ArtistServices = {
    methods: {
        async getFeaturedArtist() {
            let url = axios.defaults.baseURL +
                `Artists?SortBy=SortName` +
                `&SortOrder=Ascending&` +
                `Recursive=true&` +
                `Fields=PrimaryImageAspectRatio%2CSortName%2CBasicSyncInfo&` +
                `StartIndex=0&ImageTypeLimit=1&` +
                `EnableImageTypes=Primary%2CBackdrop%2CBanner%2CThumb&` +
                `Limit=10&ParentId=7e64e319657a9516ec78490da03edccb&userId=${user}&api_key=${api_key}`
            return axios.get(url);
        },
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
        },
        async getArtistSong(id) {
            let url = axios.defaults.baseURL +
                `Users/${user}/Items?SortOrder=Ascending&` +
                `IncludeItemTypes=Audio&Recursive=true&` +
                `Fields=AudioInfo%2CParentId%2CPrimaryImageAspectRatio%2C` +
                `BasicSyncInfo%2CAudioInfo%2CParentId%2C` +
                `PrimaryImageAspectRatio%2CBasicSyncInfo&Limit=100&` +
                `StartIndex=0&CollapseBoxSetItems=false&ArtistIds=${id}` +
                `&SortBy=PremiereDate%2CProductionYear%2CSortname&api_key=${api_key}`
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

export default ArtistServices;