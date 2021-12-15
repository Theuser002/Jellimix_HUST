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
        }
    },
}

export default PlaylistServices;