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
import { mapMutations, mapActions } from "vuex";
import SongServices from "../../common/SongServices.js";

export default {
  mixins: [SongServices],
  data() {
    return {
      media_data: null,
    };
  },
  created() {
    this.playRandomSong();
  },
  methods: {
    ...mapMutations(["setSingleAudio", "setOpenPlayer"]),
    ...mapActions(["handlePlaySingleSong"]),
    playRandomSong() {
      this.getRandomSong()
        .then((res) => {
          this.media_data = res.data.Items[0];
          let img_url = this.getImageLink(this.media_data);
          this.media_data.img_url = img_url
          this.media_data.song_url = this.getAudioLink(this.media_data.Id);
        })
        .catch(() => {});
    },
    playAudio() {
      this.playRandomSong();
      this.handlePlaySingleSong(this.media_data);
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
@import "../../css/TheBanner.css";
</style>