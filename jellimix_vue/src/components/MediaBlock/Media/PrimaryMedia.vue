<template>
  <div class="swiper-slide" style="width: 240px; margin-right: 10px">
    <div class="ms_rcnt_box">
      <div class="ms_rcnt_box_img">
        <img
          class="ms_rcnt_box_media_image"
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
              <a href="#" @click="addToQueue"
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
              <a href="#" @click="addMediaToPlaylist"
                ><span class="opt_icon"
                  ><span class="icon icon_playlst"></span></span
                >Add To Playlist</a
              >
            </li>
          </ul>
          <div class="ms_play_icon" @click="playAudio">
            <img src="../../../assets/images/svg/play.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="ms_rcnt_box_text">
        <h3 @click="playAudio">
          <a :title="media_data.Name">{{ media_data.Name }}</a>
        </h3>
        <p>{{ media_data.AlbumArtist }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import { saveAs } from "file-saver";
import SongServices from "../../../common/SongServices.js";

export default {
  mixins: [SongServices],
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
  computed: {
    ...mapGetters(["tokenAuth", "isOpenLoginModalVuex"]),
  },
  created() {
    this.getSong();
    this.getImage();
  },
  watch: {
    media_data() {
      this.getSong();
      this.getImage();
    },
  },
  methods: {
    ...mapMutations(["setSingleAudio", "setOpenPlayer", "setAddForm", "setAddLoginModal", "setListToAdd"]),
    ...mapActions(["handlePlaySingleSong","handleAddToQueue"]),
    getImage() {
      let url = this.getImageLink(this.media_data);
      this.img_url = url;
      this.media_data.img_url = url;
    },
    getSong() {
      let url = this.getAudioLink(this.media_data.Id);
      this.song_url = url;
      this.media_data.song_url = url;
    },
    playAudio() {
      this.handlePlaySingleSong(this.media_data);
      this.setOpenPlayer(true);
    },
    addToQueue(){
      this.handleAddToQueue(this.media_data);
    },
    download() {
      saveAs(this.song_url, `Jellimix-${this.media_data.Name}.mp3`);
    },
    addMediaToPlaylist() {
      if (this.tokenAuth == null || this.tokenAuth.length == 0) {
        if (!this.isOpenLoginModalVuex) {
          this.setAddLoginModal(true);
        }
      } else {
        this.setListToAdd([this.media_data.Id])
        this.setAddForm(true);
      }
    }
  },
};
</script>

<style scoped>
@import "../../../css/MediaBlock/Media/PrimaryMedia.css";
</style>