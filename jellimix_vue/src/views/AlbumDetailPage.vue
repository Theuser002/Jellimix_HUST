<template>
  <div class="ms_album_single_wrapper ms_artist_single">
    <div @click="routeBack">Back</div>
    <div class="album_single_data">
      <div class="album_single_img">
        <img
          :src="
            img_url || require(`../assets/../assets/images/album/${defaultImg}`)
          "
          alt="album pic"
          class="img-fluid"
        />
      </div>
      <div class="album_single_text">
        <h2>{{ album_data.Name }}</h2>
        <p class="singer_name">
          <router-link :to="`/Artists/${album_data.AlbumArtists[0].Id}`">{{
            album_data.AlbumArtist
          }}</router-link>
        </p>
        <div class="album_feature">
          <span href="#" class="album_date"
            >{{ album_data.ChildCount }} songs |
            {{ album_data.RunTimeTicks | convertTickToTime }}</span
          >
          <span href="#" class="album_date"
            >Released: {{ album_data.ProductionYear }}</span
          >
          <span href="#" class="album_date"
            >Genres:
            <span v-for="(genre, index) in album_data.GenreItems" :key="index"
              ><router-link :to="`/Genres/${genre.Id}`">{{
                genre.Name
              }}</router-link
              ><span
                v-if="
                  album_data.GenreItems.length > 1 &&
                  index != album_data.GenreItems.length - 1
                "
                >,
              </span>
            </span></span
          >
        </div>
        <div class="album_btn">
          <a href="#" class="ms_btn play_btn" @click="playAll"
            ><span class="play_all"
              ><img src="../assets/images/svg/play_all.svg" alt="" />Play
              All</span
            ><span class="pause_all"
              ><img
                src="../assets/images/svg/pause_all.svg"
                alt=""
              />Pause</span
            ></a
          >
          <a href="#" class="ms_btn"
            ><span class="play_all"
              ><img src="../assets/images/svg/add_q.svg" alt="" />Add To
              Queue</span
            ></a
          >
        </div>
      </div>
      <!-- <div class="album_more_optn ms_more_icon">
                    <span><img src="../assets/images/svg/more.svg" alt=""></span>
                </div>
                <ul class="more_option">
                    <li><a href="#"><span class="opt_icon"><span class="icon icon_fav"></span></span>Add To Favourites</a></li>
                    <li><a href="#"><span class="opt_icon"><span class="icon icon_queue"></span></span>Add To Queue</a></li>
                    <li><a href="#"><span class="opt_icon"><span class="icon icon_dwn"></span></span>Download Now</a></li>
                    <li><a href="#"><span class="opt_icon"><span class="icon icon_playlst"></span></span>Add To Playlist</a></li>
                    <li><a href="#"><span class="opt_icon"><span class="icon icon_share"></span></span>Share</a></li>
                </ul> -->
    </div>
    <div class="album_inner_list">
      <div class="album_list_wrapper">
        <div>
          <ul class="album_list_name">
            <li>#</li>
            <li>Song Title</li>
            <li>Artist</li>
            <li class="text-center">Duration</li>
            <li class="text-center">Add To Favourites</li>
            <li class="text-center">More</li>
          </ul>
        </div>

        <div v-for="(song, index) in pageContent" :key="index">
          <ASongListItem :media_data="song" />
        </div>
      </div>
      <vue-ads-pagination
        :total-items="album_song.length"
        :items-per-page="itemPerPage"
        :max-visible-pages="5"
        :page="page"
        :loading="loading"
        @page-change="pageChange"
        @range-change="rangeChange"
      >
        <template slot-scope="props">
          <div class="vue-ads-pr-2 vue-ads-leading-loose">
            Songs {{ props.start }} - {{ props.end }} of {{ props.total }}
          </div>
        </template>
        <template slot="buttons" slot-scope="props">
          <vue-ads-page-button
            v-for="(button, key) in props.buttons"
            :key="key"
            v-bind="button"
            @page-change="page = button.page"
            @range-change="
              start = button.start;
              end = button.end;
            "
          />
        </template>
      </vue-ads-pagination>
    </div>
  </div>
</template>

<script>
import AlbumServices from "../common/AlbumServices";
import "../../node_modules/vue-ads-pagination/dist/vue-ads-pagination.css";
import VueAdsPagination, { VueAdsPageButton } from "vue-ads-pagination";
import { mapMutations } from "vuex";

export default {
  components: {
    VueAdsPagination,
    VueAdsPageButton,
  },
  mixins: [AlbumServices],
  data() {
    return {
      isOpenOption: false,
      mediaList: null,
      pageContent: [],
      loading: false,
      itemPerPage: 10,
      page: 0,
      start: 0,
      end: 0,
      album_data: null,
      img_url: null,
      defaultImg: "album1.jpg",
      album_song: null,
    };
  },
  created() {
    this.getSingleAlbum(this.$route.params.id).then((res) => {
      this.album_data = res.data;
    });
    // this.getAlbumSong(this.$route.params.id).then((res) => {
    //   this.album_song = res.data;
    //   this.pageContent = res.data;
    // });
    this.getAlbumSong(this.$route.params.id)
      .then((res) => {
          this.album_song = res.data.Items;
          this.pageContent = this.album_song;
          // this.pageContent = this.pageContent.filter(
          //   (song) => song.AlbumId == this.$route.params.id
          // );
          // console.log(this.pageContent[0].AlbumId == this.$route.params.id);
      })
      .catch((res) => {
        console.log(res);
      });
    this.getImage();
  },
  watch: {
    album_data() {
      this.getImage();
    },
    page() {
      window.scrollTo(0, 0);
    },
  },
  filters: {
    convertTickToTime(ticks) {
      if (ticks != null) {
        var seconds = Math.floor(ticks / 10000000);
        var minute = Math.floor(
          seconds / 60 < 60 ? (seconds / 60) % 60 : seconds / 60
        );
        var second = seconds % 60;

        var result =
          String(minute).padStart(minute > 99 ? 3 : 2, "0") +
          ":" +
          String(second).padStart(2, "0");
        return result;
      } else {
        return "no source";
      }
    },
  },
  methods: {
    ...mapMutations(["setListAudio"]),
    getImage() {
      let url = this.getImageLink(this.album_data);
      this.img_url = url;
      console.log(this.img_url);
    },
    routeBack() {
      this.$router.push("/Albums");
    },
    pageChange(page) {
      this.page = page;
    },

    rangeChange(start, end) {
      console.log(start, end);
      this.start = start;
      this.end = end;
      this.pageContent = this.album_song.slice(start, end);
      console.log(this.pageContent);
    },
    playAll() {
      this.setListAudio(this.album_song);
    },
  },
};
</script>

<style>
/* global styles */
</style>

<style scoped>
/* local styles */
/* @import "../css/ArtistPage.css"; */
</style>