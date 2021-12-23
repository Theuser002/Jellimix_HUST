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
        getImageLink(genre) {
            var url;
            if (Object.keys(genre.ImageTags)[0] != undefined) {
                url =
                    axios.defaults.baseURL +
                    `Items/${genre.Id}/Images/${
                    Object.keys(genre.ImageTags)[0]
                  }?fillWidth=240&fillHeight=240&quality=100`;
            } else if (genre.ImageTags[0] == 'PRIMARY') {
                url =
                    axios.defaults.baseURL +
                    `Items/${genre.ImageTags}/Images/Primary?fillWidth=240&fillHeight=240&quality=100`;
            } else if (genre.ParentBackdropItemId != undefined) {
                url =
                    axios.defaults.baseURL +
                    `Items/${genre.ParentBackdropItemId}/Images/Backdrop?fillWidth=240&fillHeight=240&quality=100`;
            } else if (genre.AlbumId != undefined) {
                url =
                    axios.defaults.baseURL +
                    `Items/${genre.AlbumId}/Images/${
                    Object.keys(genre.ImageBlurHashes)[0]
                  }?fillWidth=240&fillHeight=240&quality=100`;
            } else {
                url = null
            }
            return url;
        },
        async getSingleGenre(id) {
            let url = axios.defaults.baseURL +
                `Users/${user}/Items/${id}?api_key=${api_key}`
            return await axios.get(url)
        },
        async getSingleGenreSongs(id) {
            let url = axios.defaults.baseURL +
                `Users/${user}/Items?GenreIds=${id}` +
                `&Filters=IsNotFolder&Recursive=true&` +
                `SortBy=SortName&MediaTypes=Audio&Limit=300&` +
                `Fields=Chapters&ExcludeLocationTypes=Virtual&` +
                `EnableTotalRecordCount=false&CollapseBoxSetItems=false&api_key=${api_key}`
            return await axios.get(url)
        },
    },
}

export default GenreServices;