<template>
  <div class="feature-artist">
    <div class="ms_rcnt_slider">
      <div class="ms_heading">
        <h1>Featured Artist</h1>
        <span class="veiw_all"><router-link to="/Artists">View more</router-link></span>
      </div>
    </div>
    <swiper v-if="mediaList" class="swiper" ref="swiper" :options="swiperOption">
      <swiper-slide v-for="(media, index) in mediaList" :key="index"
        ><AnArtist :media_data="media"
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
import ArtistServices from "../../common/ArtistServices.js";

export default {
  mixins: [ArtistServices],
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
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
      mediaList: null,
    };
  },
  created() {
    this.getFeaturedArtist()
      .then((res) => {
          this.mediaList = res.data.Items;
      })
      .catch((err) => {
        this.$toast.error(err.message)
      });
  },

};
</script>

<style scoped>
.feature-artist {
  width: 100%;
}
</style>