<template>
  <div class="feature-album">
    <div class="ms_rcnt_slider">
      <div class="ms_heading">
        <h1>Featured Genres</h1>
        <span class="veiw_all"><router-link to="/Genres">View more</router-link></span>
      </div>
    </div>
    <swiper v-if="genreList" class="swiper" ref="swiper" :options="swiperOption">
      <swiper-slide v-for="(genre, index) in genreList" :key="index"
        ><AGenre :genre_data="genre"
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
import GenreServices from "../../common/GenreServices.js";

export default {
  mixins: [GenreServices],
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
      genreList: [],
    };
  },
  created() {
    this.getAllGenre()
      .then((res) => {
        setTimeout(() => {
          this.genreList = res.data.Items;
        }, 500);
        this.genreList.forEach(genre => {
          genre.img_url = this.getImageLink(genre)
        });
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