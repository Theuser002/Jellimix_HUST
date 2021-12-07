import axios from 'axios'
import { api_key, user } from './enums'

var SongServices = {
    methods: {
        async getAllSong() {
            let url = axios.defaults.baseURL +
                'Users/' + user +
                '/Items?SortBy=Name&SortOrder=Ascending&IncludeItemTypes=Audio&Recursive=true&Fields=AudioInfo%2CParentId&StartIndex=0&ImageTypeLimit=1&EnableImageTypes=Primary&Limit=10&ParentId=7e64e319657a9516ec78490da03edccb&api_key=' + api_key
            return axios.get(url);
        }
    },
}

export default SongServices;