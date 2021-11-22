<template>
  <div class="swiper-slide" style="width: 240px; margin-right: 10px">
    <div class="ms_rcnt_box">
      <div class="ms_rcnt_box_img">
        <img :src="img_url || require(`../../../assets/images/album/${defaultImg}`)" />
        <div class="ms_main_overlay">
          <div class="ms_box_overlay"></div>
          <div class="ms_more_icon" @click="isOpenOption = !isOpenOption">
            <img src="../../../assets/images/svg/more.svg" alt="" />
          </div>
          <ul class="more_option" :class="{ open_option: isOpenOption }">
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
              <a href="#"
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
          <div class="ms_play_icon">
            <img src="../../../assets/images/svg/play.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="ms_rcnt_box_text">
        <h3>
          <a href="#">{{ media_data.Name }}</a>
        </h3>
        <p>{{media_data.AlbumArtist}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
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
      defaultImg: 'album1.jpg'
    };
  },
  mounted() {
    this.getImage()
  },
  methods: {
    getImage(){
      if(Object.keys(this.media_data.ImageTags)[0]!=undefined){
        let url = axios.defaults.baseURL+`Items/${this.media_data.Id}/Images/${Object.keys(this.media_data.ImageTags)[0]}?fillWidth=240&fillHeight=240&tag=${Object.values(this.media_data.ImageTags)[0]}&quality=100`
        this.img_url = url
      }
    }
  },
};
</script>

<style scoped>
@import "../../../css/MediaBlock/Media/PrimaryMedia.css";
</style>