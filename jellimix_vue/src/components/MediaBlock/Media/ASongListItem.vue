<template>
  <ul>
    <li>
      <a @click="playAudio"
        ><span class="play_no">{{ media_data.IndexNumber }}</span
        ><span class="play_hover"></span
      ></a>
    </li>
    <li>
      <a  class="album-song-name" @click="playAudio">{{
        media_data.Name
      }}</a>
    </li>
    <li>
      <router-link :to="`/Artists/${media_data.ArtistItems[0].Id}`"  >{{ media_data.Artists.join(", ") }}</router-link>
    </li>
    <li class="text-center">
      <a href="#">{{ media_data.RunTimeTicks | convertTickToTime }}</a>
    </li>
    <li class="text-center">
      <a href="#"><i class="far fa-heart"></i></a>
    </li>
    <li class="text-center ms_more_icon">
      <a href="javascript:;"><i class="fas fa-ellipsis-h"></i> </a>
      <ul class="more_option">
        <li>
          <a href="#"
            ><span class="opt_icon"><span class="icon icon_fav"></span></span
            >Add To Favourites</a
          >
        </li>
        <li>
          <a href="#"
            ><span class="opt_icon"><span class="icon icon_queue"></span></span
            >Add To Queue</a
          >
        </li>
        <li>
          <a href="#" @click="download"
            ><span class="opt_icon"><span class="icon icon_dwn"></span></span
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
        <li>
          <a href="#"
            ><span class="opt_icon"><span class="icon icon_share"></span></span
            >Share</a
          >
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
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
      
      song_url: null,
      
    };
  },
  computed: {
    ...mapGetters(["tokenAuth", "isOpenLoginModalVuex"]),
  },
  created() {
    this.getSong();
 
  },
  watch: {
    media_data() {
      this.getSong();
     
    },
  },
  filters: {
    convertTickToTime(ticks) {
      if (ticks != null) {
        var seconds = Math.floor(ticks / 10000000);
        var minute = Math.floor((seconds / 60) % 60);
        var second = seconds % 60;

        var result =
          String(minute).padStart(2, "0") +
          ":" +
          String(second).padStart(2, "0");
        return result;
      } else {
        return "no source";
      }
    },
  },
  methods: {
    ...mapMutations([
      "setSingleAudio",
      "setOpenPlayer",
      "setAddForm",
      "setAddLoginModal",
      "setListToAdd",
    ]),
   
    getSong() {
      let url = this.getAudioLink(this.media_data.Id);
      this.song_url = url;
      this.media_data.song_url = url;
    },
    playAudio() {
      this.setSingleAudio(this.media_data);
      this.setOpenPlayer(true);
    },
    download() {
      saveAs(this.song_url, `Jellimix-${this.media_data.Name}.mp3`);
    },
    displaySingleArtist(id) {
      console.log("hihi");
      //   this.$router.go({name: `/SingleArtist/${this.media_data.Id}`})
      this.$router.push(`/Artists/${id}`);
    },
    addMediaToPlaylist() {
      if (this.tokenAuth == null || this.tokenAuth.length == 0) {
        if (!this.isOpenLoginModalVuex) {
          this.setAddLoginModal(true);
        }
      } else {
        this.setListToAdd([this.media_data.Id]);
        this.setAddForm(true);
      }
    },
  },
};
</script>

<style scoped>

</style>