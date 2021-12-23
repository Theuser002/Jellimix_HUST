import axios from 'axios'
import { api_key, user } from './enums'

var GenreServices = {
    methods: {
        async getAllGenre() {
            let url =
                axios.defaults.baseURL +
                `Genres?SortBy=SortName&SortOrder=Ascending&` +
                `Recursive=true&Fields=PrimaryImageAspectRatio%2CItemCounts&` +
                `StartIndex=0&ParentId=7e64e319657a9516ec78490da03edccb&` +
                `userId=${user}&api_key=${api_key}`;
            return axios.get(url);
        },
        getImageLink(genre_data) {
            var url;
            if (Object.keys(genre_data.ImageTags)[0] != undefined) {
                url =
                    axios.defaults.baseURL +
                    `Items/${genre_data.Id}/Images/${
                    Object.keys(genre_data.ImageTags)[0]
                  }?fillWidth=240&fillHeight=240&quality=100`;
            } else if (genre_data.ParentBackdropItemId != undefined) {
                url =
                    axios.defaults.baseURL +
                    `Items/${genre_data.ParentBackdropItemId}/Images/Backdrop?fillWidth=240&fillHeight=240&quality=100`;
            } else if (genre_data.AlbumId != undefined) {
                url =
                    axios.defaults.baseURL +
                    `Items/${genre_data.AlbumId}/Images/${
                    Object.keys(genre_data.ImageBlurHashes)[0]
                  }?fillWidth=240&fillHeight=240&quality=100`;
            } else {
                url = null
            }
            return url;
        },
        async getSingleGenre(id, userId, tokenAuth) {
            let url = axios.defaults.baseURL +
                `Users/${userId}/Items/${id}`
            const config = {
                headers: {
                    "x-emby-authorization": `MediaBrowser Client="Jellyfin Web", ` +
                        `Device="Chrome", DeviceId="abc", Version="10.7.6", ` +
                        `Token="${tokenAuth}"`
                }
            }
            return await axios.get(url, config)
        },
        async getSingleGenreSongs(id, userId, tokenAuth) {
            let url = axios.defaults.baseURL +
                `Users/${userId}/Items?GenreIds=${id}` +
                `&Filters=IsNotFolder&Recursive=true&` + 
                `SortBy=SortName&MediaTypes=Audio&Limit=300&` + 
                `Fields=Chapters&ExcludeLocationTypes=Virtual&`+
                `EnableTotalRecordCount=false&CollapseBoxSetItems=false`
            const config = {
                headers: {
                    "x-emby-authorization": `MediaBrowser Client="Jellyfin Web", ` +
                        `Device="Chrome", DeviceId="abc", Version="10.7.6", ` +
                        `Token="${tokenAuth}"`
                }
            }
            return await axios.get(url, config)
        },
        async getGGenreImg(genre) {
            if (Object.keys(genre.ImageTags)[0] == 'Primary') {
                let url = axios.defaults.baseURL +
                    `Items/${genre.Id}/Images/Primary?fillHeight=225&fillWidth=225&quality=96`
                return url;
            } else {
                return null;
            }
        }
    },
}

export default GenreServices;