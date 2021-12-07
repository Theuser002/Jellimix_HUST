<!--TODO: Hùng 4-->
<template>
  <div class="ms-banner">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <div class="ms_banner_img">
            <!-- Put image here -->
            <img
              src="../../assets/images/singer1.png"
              alt="simger image"
              style="height: 70%; width: 70%"
              class="img-fluid"
            />
          </div>
          <div class="ms_banner_text">
            <h1>Welcome to</h1>
            <h1 class="ms_color" id="brand">Jellimix</h1>
            <p>
              Jellimix Website is free, easy to use and will bring you
              unforgetable experience when listening to music.
              <br />
              Enjoy!
            </p>
            <div class="ms_banner_btn">
              <a href="#" class="ms_btn" style="float: auto" @click="playAudio"
                >Listen Now</a
              >
              <!-- <a href="#" class="ms_btn">Add To Queue</a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import js file here
import axios from "axios";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      media_data: null,
    };
  },
  created() {
    this.playRandomSong()
  },
  methods: {
    ...mapMutations(["setAudio", "setOpenPlayer"]),
    playRandomSong() {
      let url =
        "http://14.248.21.233:8096/Users/4c6717a89bec419c8e396db40eb9713f/Items?ParentId=7e64e319657a9516ec78490da03edccb&Filters=IsNotFolder&Recursive=true&SortBy=Random&MediaTypes=Audio%2CVideo&Limit=1&Fields=Chapters&ExcludeLocationTypes=Virtual&EnableTotalRecordCount=false&CollapseBoxSetItems=false&api_key=0727c7e03dfa4b46bc5925ce7c6fff9c";
      axios
        .get(url)
        .then((res) => {
          this.media_data = res.data.Items[0];
          let img_url;
          if (Object.keys(this.media_data.ImageTags)[0] != undefined) {
            img_url =
              axios.defaults.baseURL +
              `Items/${this.media_data.Id}/Images/${
                Object.keys(this.media_data.ImageTags)[0]
              }?fillWidth=240&fillHeight=240&quality=100`;
          } else if (this.media_data.AlbumId != undefined) {
            img_url =
              axios.defaults.baseURL +
              `Items/${this.media_data.AlbumId}/Images/${
                Object.keys(this.media_data.ImageBlurHashes)[0]
              }?fillWidth=240&fillHeight=240&quality=100`;
          }
          this.media_data.img_url = img_url;
          let song_url =
            axios.defaults.baseURL +
            `Audio/${this.media_data.Id}` +
            `/universal?UserId=4c6717a89bec419c8e396db40eb9713f` +
            `&DeviceId=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzk0LjAuNDYwNi44MSBTYWZhcmkvNTM3LjM2IEVkZy85NC4wLjk5Mi40N3wxNjM0MjI2OTQ2MDU0` +
            `&MaxStreamingBitrate=140000000` +
            `&Container=opus,mp3,aac,m4a,flac,webma,webm,wav,ogg,aac,mp3,mpa,wav,wma,mp2,ogg,oga,webma,ape,opus,flac,m4a` +
            `&TranscodingContainer=ts` +
            `&TranscodingProtocol=hls` +
            `&AudioCodec=aac` +
            `&MaxSampleRate=48000` +
            `&PlaySessionId=1496213367201` +
            `&api_key=0727c7e03dfa4b46bc5925ce7c6fff9c`;
          this.media_data.song_url = song_url;
        })
        .catch(() => {});
    },
    playAudio() {
      this.playRandomSong();
      this.setAudio(this.media_data);
      this.setOpenPlayer(true);
    },
  },
};
</script>

<style>
/* global styles */
</style>

<style scoped>
/* local styles */
@import "../../css/MediaBlock/TheBanner.css";
</style>