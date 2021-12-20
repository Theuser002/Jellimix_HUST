import axios from 'axios'

var PlaylistServices = {
    methods: {
        async getAllPlaylist(userId, tokenAuth) {
            let url = axios.defaults.baseURL +
                `Users/${userId}/Items?Fields=PrimaryImageAspectRatio%2CSortName%2CPath%2C` +
                `PrimaryImageAspectRatio&ImageTypeLimit=1&` +
                `ParentId=f5eff6e0822ab58b88d7f68185e1f895&` +
                `SortBy=IsFolder%2CSortName&SortOrder=Ascending`;
            const config = {
                headers: {
                    "x-emby-authorization": `MediaBrowser Client="Jellyfin Web", ` +
                        `Device="Chrome", DeviceId="abc", Version="10.7.6", ` +
                        `Token="${tokenAuth}"`
                }
            }
            return await axios.get(url, config);
        },
        async getSinglePlaylist(id, userId, tokenAuth) {
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
        async getSinglePlaylistSong(id, userId, tokenAuth) {
            let url = axios.defaults.baseURL +
                `Playlists/${id}/Items?Fields=PrimaryImageAspectRatio&` +
                `EnableImageTypes=Primary%2CBackdrop%2CBanner%2CThumb&` +
                `UserId=${userId}`
            const config = {
                headers: {
                    "x-emby-authorization": `MediaBrowser Client="Jellyfin Web", ` +
                        `Device="Chrome", DeviceId="abc", Version="10.7.6", ` +
                        `Token="${tokenAuth}"`
                }
            }
            return await axios.get(url, config)
        },
        getPlaylistImg(playlist) {
            if (Object.keys(playlist.ImageTags)[0] == 'Primary') {
                let url = axios.defaults.baseURL +
                    `Items/${playlist.Id}/Images/Primary?fillHeight=225&fillWidth=225&quality=96`
                return url;
            } else {
                return null;
            }
        },
        async addNewPlaylist(name, userId, tokenAuth) {
            let url = axios.defaults.baseURL +
                `Playlists`
            const data = {
                "Name": name,
                "UserId": userId,
                "MediaType": "Playlist"
            }
            const config = {
                headers: {
                    "x-emby-authorization": `MediaBrowser Client="Jellyfin Web", ` +
                        `Device="Chrome", DeviceId="abc", Version="10.7.6", ` +
                        `Token="${tokenAuth}"`
                }
            }
            return await axios.post(url, data, config);
        }
    },
}

export default PlaylistServices;