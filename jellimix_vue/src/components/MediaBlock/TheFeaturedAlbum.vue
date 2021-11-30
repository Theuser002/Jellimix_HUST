<template>
  <div class="feature-album">
    <div class="ms_rcnt_slider">
      <div class="ms_heading">
        <h1>Featured Album</h1>
        <span class="veiw_all"><router-link to="/Album">View more</router-link></span>
      </div>
    </div>
    <swiper v-if="mediaList" class="swiper" ref="swiper" :options="swiperOption">
      <swiper-slide v-for="(media, index) in mediaList" :key="index"
        ><PrimaryMedia :media_data="media"
      /></swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <div v-else class="wrap">
      <img src="../../assets/loader1.gif" alt="" />
    </div>
  </div>
</template>

<script>
import AlbumServices from "../../common/AlbumServices.js";

export default {
  mixins: [AlbumServices],
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 0,
        direction: "horizontal",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
          resize: () => {
            this.$refs.swiper.$swiper.changeDirection(
              window.innerWidth <= 960 ? "vertical" : "horizontal"
            );
          },
        },
      },
      mediaList: null,
    };
  },
  created() {
    this.getAllAlbum()
      .then((res) => {
        setTimeout(() => {
          this.mediaList = res.data.Items;
        }, 500);
      })
      .catch((res) => {
        console.log(res);
      });
  },

};
</script>

<style scoped>
@import "../../css/MediaBlock/TheFeaturedSong.css";
.feature-album {
  width: 100%;
}
</style>