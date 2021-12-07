import axios from 'axios'
import { api_key, user } from './enums'

var SongServices = {
    methods: {
        async getAllSong() {
            let url = axios.defaults.baseURL +
                'Users/' + user +
                '/Items?SortBy=Name&SortOrder=Ascending&IncludeItemTypes=Audio&Recursive=true&Fields=AudioInfo%2CParentId&StartIndex=0&ImageTypeLimit=1&EnableImageTypes=Primary&Limit=10&ParentId=7e64e319657a9516ec78490da03edccb&api_key=' + api_key

            return axios.get(url);
        },
        getImageLink(media_data) {
            var url;
            if (Object.keys(media_data.ImageTags)[0] != undefined) {
                url =
                    axios.defaults.baseURL +
                    `Items/${media_data.Id}/Images/${
                    Object.keys(media_data.ImageTags)[0]
                  }?fillWidth=240&fillHeight=240&quality=100`;
            } else if (media_data.ParentBackdropItemId != undefined) {
                url =
                    axios.defaults.baseURL +
                    `Items/${media_data.ParentBackdropItemId}/Images/Backdrop?fillWidth=240&fillHeight=240&quality=100`;
            } else if (media_data.AlbumId != undefined) {
                url =
                    axios.defaults.baseURL +
                    `Items/${media_data.AlbumId}/Images/${
                    Object.keys(media_data.ImageBlurHashes)[0]
                  }?fillWidth=240&fillHeight=240&quality=100`;
            }
            return url;
        },
        getAudioLink(id) {
            let song_url =
                axios.defaults.baseURL +
                `Audio/${id}` +
                `/universal?UserId=${user}` +
                `&DeviceId=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzk0LjAuNDYwNi44MSBTYWZhcmkvNTM3LjM2IEVkZy85NC4wLjk5Mi40N3wxNjM0MjI2OTQ2MDU0` +
                `&MaxStreamingBitrate=140000000` +
                `&Container=opus,mp3,aac,m4a,flac,webma,webm,wav,ogg,aac,mp3,mpa,wav,wma,mp2,ogg,oga,webma,ape,opus,flac,m4a` +
                `&TranscodingContainer=ts` +
                `&TranscodingProtocol=hls` +
                `&AudioCodec=aac` +
                `&MaxSampleRate=48000` +
                `&PlaySessionId=1496213367201` +
                `&api_key=${api_key}`;
            return song_url;
        },
        getRandomSong() {
            let url =
                axios.defaults.baseURL +
                `Users/${user}/Items?ParentId=7e64e319657a9516ec78490da03edccb&` +
                `Filters=IsNotFolder&Recursive=true&SortBy=Random&` +
                `MediaTypes=Audio%2CVideo&Limit=1&Fields=Chapters&` +
                `ExcludeLocationTypes=Virtual&EnableTotalRecordCount=false&` +
                `CollapseBoxSetItems=false&api_key=${api_key}`;
            return axios.get(url)
        }
    },
}

export default SongServices;