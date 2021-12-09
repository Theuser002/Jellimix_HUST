<template>
  <div>
    <PrimaryMedia :media_data="media_sample" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  // variables
  data() {
    return {
      media_sample: null,
    };
  },

  // initialization
  created() {
    this.initData();
    // ,anotherFunction()
  },

  // functions
  methods: {
    initData() {
      let url =
        axios.defaults.baseURL +
        `Users/4c6717a89bec419c8e396db40eb9713f/Items/` +
        `b66567d4aa89087148c55b457f36d084?` +
        `api_key=cf8b1134702b42c790966bedc4adf878`;

      // let url = axios.defaults.baseURL + `Users/4c6717a89bec419c8e396db40eb9713f/Items?SortBy=Name&SortOrder=Ascending&IncludeItemTypes=Audio&Recursive=true&Fields=AudioInfo%2CParentId&StartIndex=0&ImageTypeLimit=1&EnableImageTypes=Primary&Limit=100&ParentId=7e64e319657a9516ec78490da03edccb&api_key=0727c7e03dfa4b46bc5925ce7c6fff9c`
      axios
        .get(url)
        // res: returned variable of get(url)
        .then((res) => {
          console.log(res.data);
          this.media_sample = res.data;
        }) // get successfully -> go to then
        .catch((res) => {
          console.log("Getting data from api failed: " + res);
        }); // else go to catch
    },
  },
};
</script>

<style scoped>
@import "../css/PlaylistPage.css";
</style>