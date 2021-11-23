<template>
  <div class="swiper-slide" style="width: 240px; margin-right: 10px">
    <div class="ms_rcnt_box">
      <div class="ms_rcnt_box_img">
        <img
          :src="
            img_url || require(`../../../assets/images/album/${defaultImg}`)
          "
        />
        <div class="ms_main_overlay">
          <div class="ms_box_overlay"></div>
          <div class="ms_more_icon" @click="isOpenOption = !isOpenOption">
            <img src="../../../assets/images/svg/more.svg" alt="" />
          </div>
          <ul
            class="more_option"
            :class="{ open_option: isOpenOption }"
            v-if="isOpenOption"
          >
            <li>
              <a href="#"
                ><span class="opt_icon"
                  ><span class="icon icon_fav"></span></span
                >Add To Favourites</a
              >
            </li>
            <li>
              <a href="#"
                ><span class="opt_icon"
                  ><span class="icon icon_queue"></span></span
                >Add To Queue</a
              >
            </li>
            <li>
              <a href="#" @click="download"
                ><span class="opt_icon"
                  ><span class="icon icon_dwn"></span></span
                >Download Now</a
              >
            </li>
            <li>
              <a href="#"
                ><span class="opt_icon"
                  ><span class="icon icon_playlst"></span></span
                >Add To Playlist</a
              >
            </li>
            <li>
              <a href="#"
                ><span class="opt_icon"
                  ><span class="icon icon_share"></span></span
                >Share</a
              >
            </li>
          </ul>
          <div class="ms_play_icon" @click="playAudio">
            <img src="../../../assets/images/svg/play.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="ms_rcnt_box_text">
        <h3>
          <a href="#">{{ media_data.Name }}</a>
        </h3>
        <p>{{ media_data.AlbumArtist }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { saveAs } from 'file-saver';
export default {
  props: {
    media_data: {
      type: Object,
    },
  },
  data() {
    return {
      isOpenOption: false,
      img_url: null,
      song_url: null,
      defaultImg: "album1.jpg",
    };
  },
  created() {
    this.song_url =
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
  },
  mounted() {
    this.getImage();
  },
  methods: {
    getImage() {
      var url;
      if (Object.keys(this.media_data.ImageTags)[0] != undefined) {
        url =
          axios.defaults.baseURL +
          `Items/${this.media_data.Id}/Images/${
            Object.keys(this.media_data.ImageTags)[0]
          }?fillWidth=240&fillHeight=240&quality=100`;
      } else if (this.media_data.AlbumId != undefined) {
        url =
          axios.defaults.baseURL +
          `Items/${this.media_data.AlbumId}/Images/${
            Object.keys(this.media_data.ImageBlurHashes)[0]
          }?fillWidth=240&fillHeight=240&quality=100`;
      }
      this.img_url = url;
    },
    playAudio() {
      this.$emit(
        "play-song",
        this.song_url,
        this.media_data.Name,
        this.media_data.AlbumArtist,
        this.img_url
      );
    },
    download(){
      saveAs(this.song_url, `Jellimix-${this.media_data.Name}.mp3`)
    }
  },
};
</script>

<style scoped>
@import "../../../css/MediaBlock/Media/PrimaryMedia.css";
</style>