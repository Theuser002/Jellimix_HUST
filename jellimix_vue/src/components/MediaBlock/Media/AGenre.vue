<template>
  <div class="swiper-slide" style="width: 240px; margin-right: 10px">
    <div class="ms_rcnt_box">
      <div class="ms_rcnt_box_img">
        <img
          class="ms_rcnt_box_media_image"
          :src="img_url || require(`../../../assets/images/${defaultImg}`)"
        />
        <div
          class="ms_main_overlay"
          @click="displaySingleGenre"
          style="cursor: pointer"
        >
          <div class="ms_box_overlay"></div>
          <!-- <div class="ms_more_icon" @click="isOpenOption = !isOpenOption">
            <img src="../../../assets/images/svg/more.svg" alt="" />
          </div> -->
          <!-- <ul
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
          </ul> -->
          <!-- <div class="ms_play_icon" @click="displaySingleArtist">
            <img src="../../../assets/images/svg/search.svg" alt="" />
          </div> -->
        </div>
      </div>
      <div class="ms_rcnt_box_text">
        <h3 @click="displaySingleGenre" style="cursor: pointer">
          <a :title="genre_data.Name">{{ genre_data.Name }}</a>
          <img src="../../../assets/images/svg/play.svg" alt="" />
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import GenreServices from "../../../common/GenreServices.js";

export default {
  mixins: [GenreServices],
  props: {
    genre_data: {
      type: Object
    }
  },
  data() {
    return {
      img_url: null,
      defaultImg: "default-genre.png"
    }
  },
  created() {
    this.getImage();
  },
  methods: {
    displaySingleGenre(){
      console.log("into display single genre")
      console.log(this.genre_data.Id)
      this.$router.push(`/Genres/${this.genre_data.Id}`)
    },
    getImage(){
      this.img_url = this.getImageLink(this.genre_data)
    }
  },
  filters: {
    convertTickToTime(ticks) {
      var seconds = Math.floor(ticks / 10000000);
      var hour = Math.floor(seconds / 3600);
      var minute = Math.floor((seconds / 60) % 60);
      var second = seconds % 60;

      var result =
        String(hour).padStart(2, "0") +
        ":" +
        String(minute).padStart(2, "0") +
        ":" +
        String(second).padStart(2, "0");
      return result;
    },
  },
};
</script>

<style scoped>
@import "../../../css/MediaBlock/Media/PrimaryMedia.css";

</style>