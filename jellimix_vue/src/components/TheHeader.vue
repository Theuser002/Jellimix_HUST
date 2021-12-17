<!--TODO: Phúc-->
<template>
  <div class="ms_header">
    <div class="ms_top_left">
      <div class="ms_top_search">
        <input
          type="text"
          class="form-control"
          placeholder="Search Music, Album or Artist Here..."
          v-model="inputValue"
          @keyup="debounceSearch"
          v-on:click="isHidden = false"
          v-on-clickaway="away"
        />
        <span class="search_icon">
          <img src="../assets/images/svg/search.svg" alt="" />
        </span>
        <div class="search-result" v-if="inputValue != '' && !isHidden">
          <div
            v-if="
              searchSongRes.length +
                searchAlbumRes.length +
                searchArtistRes.length ==
              0
            "
            class="search-item-wrapper"
          >
            <span class="result-item">Không có kết quả</span>
          </div>
          <div v-else class="search-item-wrapper">
            <div class="search-item-type" v-if="searchSongRes.length > 0">
              Songs
            </div>
            <a
              class="result-item"
              v-for="item in searchSongRes"
              :key="item.Id"
              @click="playSong(item)"
              :title="item.Name"
            >
              {{ item.Name }}
            </a>
            <div class="search-item-type" v-if="searchAlbumRes.length > 0">
              Albums
            </div>
            <a
              class="result-item"
              v-for="item in searchAlbumRes"
              :key="item.Id"
              :title="item.Name"
              href="#"
            >
              {{ item.Name }}
            </a>
            <div class="search-item-type" v-if="searchArtistRes.length > 0">
              Artists
            </div>
            <a
              class="result-item"
              v-for="item in searchArtistRes"
              :key="item.Id"
              :title="item.Name"
              href="#"
            >
              {{ item.Name }}
            </a>
          </div>
        </div>
      </div>
      <div class="ms_top_trend">
        <span><a href="#" class="ms_color">Trending Songs :</a></span>
        <span class="top_marquee"
          ><a href="#"
            >bla
            blahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</a
          ></span
        >
      </div>
    </div>
    <div class="ms_top_right">
      <!-- Theme toggle button -->
      <label>
        <input
          class="toggle-checkbox"
          type="checkbox"
          :checked="isLightTheme ? 'checked' : ''"
          id="switch-theme-toggle-btn"
          @click="switchTheme"
        />
        <div class="toggle-slot">
          <div class="sun-icon-wrapper">
            <div
              class="iconify sun-icon"
              data-icon="feather-sun"
              style="font-size: 4px"
              data-inline="false"
            ></div>
          </div>
          <div class="toggle-button"></div>
          <div class="moon-icon-wrapper">
            <div
              class="iconify moon-icon"
              data-icon="feather-moon"
              style="font-size: 4px"
              data-inline="false"
            ></div>
          </div>
        </div>
      </label>

      <!-- <div class="ms_top_lang">
                        <span data-toggle="modal" data-target="#lang_modal" style="margin-left: 15px">languages <img
                                src="../assets/images/svg/lang.svg" alt=""></span>
                    </div> -->
      <div
        class="ms_top_btn"
        v-if="this.tokenAuth == null || this.tokenAuth.length == 0"
      >
        <a @click="openRegisterForm" href="javascript:;" class="ms_btn reg_btn"
          ><span>register</span></a
        >
        <a @click="openLoginForm" href="javascript:;" class="ms_btn login_btn"
          ><span>login</span></a
        >
      </div>
      <div class="ms_top_btn" v-else>
        <a @click="logoutAction" href="javascript:;" class="ms_btn login_btn"
          ><span>logout</span></a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
import { mapMutations, mapGetters } from "vuex";
import SearchServices from "../common/SearchServices.js";
import SongServices from "../common/SongServices.js";

export default {
  data() {
    return {
      inputValue: "",
      searchSongRes: [],
      searchAlbumRes: [],
      searchArtistRes: [],
      timer: 500,
      timeout: null,
      isHidden: null,
      lightTheme: true,
      // msLogo: "musical-note-ver1.png",
      // msLogoOpen: "musical-note-logo-text-ver1.png",
    };
  },

  mixins: [clickaway, SearchServices, SongServices],
  computed: {
    ...mapGetters(["tokenAuth"]),
  },
  created() {
    this.autoLogin();
  },
  methods: {
    ...mapMutations(["setAudio", "setOpenPlayer", "setTokenAuth", "setUserId"]),
    away: function () {
      this.isHidden = true;
    },

    /**
     * Bắt đầu search sau khi ngừng nhập input 0.5s
     * By: Tran Phi Hung
     */
    debounceSearch() {
      clearTimeout(this.timeout);
      if (this.inputValue.trim().length > 0) {
        this.timeout = setTimeout(() => {
          this.searchSongRes = [];
          this.searchAlbumRes = [];
          this.searchArtistRes = [];
          // search song, album
          this.searchItem(this.inputValue.trim())
            .then((res) => {
              res.data.Items.forEach((item) => {
                if (item.Type == "Audio") {
                  this.searchSongRes.push(item);
                } else {
                  this.searchAlbumRes.push(item);
                }
              });
            })
            .catch((res) => {
              console.log(res);
            });

          // search artist
          this.searchArtist(this.inputValue.trim())
            .then((res) => {
              this.searchArtistRes = res.data.Items;
            })
            .catch((res) => {
              console.log(res);
            });
        }, this.timer);
      }
    },

    autoLogin() {
      this.setTokenAuth(this.$cookies.get("sessionId"));
      this.setUserId(this.$cookies.get("userId"));
    },

    /**
     * Phát sự kiện bấm mở form đăng kí user
     * By: Tran Phi Hung
     */
    openRegisterForm() {
      this.$emit("open-register-form");
    },

    /**
     * Phát sự kiện bấm mở form đăng nhập
     * By: Tran Thai Duong
     */
    openLoginForm() {
      this.$emit("open-login-form");
    },

    /**
     * Phát sự kiện bấm logout user
     * By: Tran Thai Duong
     */
    logoutAction() {
      this.setTokenAuth("");
      this.setUserId("");
    },

    /**
     * Xử lý hành động bấm chọn bài hát trong thanh search
     * By: Tran Phi Hung
     */
    playSong(song) {
      song.img_url = this.getImageLink(song);
      song.song_url = this.getAudioLink(song.Id);
      this.setAudio(song);
      this.setOpenPlayer(true);
    },

    isLightTheme() {
      return localStorage.getItem("lightTheme");
    },

    switchTheme() {
      let body = document.querySelector("body");
      // let msLogo = document.querySelector("#ms-img");
      // let msLogoOpen = document.querySelector("#ms-img-open");
      // let msLogoFooter = document.querySelector("#footer-logo");
      this.lightTheme = !this.lightTheme;

      if (!this.lightTheme) {
        body.setAttribute("id", "theme--dark");
        // this.msLogo = "musical-note-ver2.png";
        // this.msLogoOpen = "musical-note-logo-text-ver2.png";
        // msLogo.src = "../assets/images/musical-note-ver2.png";
        // msLogoOpen.setAttribute(
        //   "src",
        //   "../assets/images/musical-note-logo-text-ver2.png"
        // );
        // msLogoFooter.setAttribute(
        //   "src",
        //   "../assets/images/musical-note-logo-text-ver2.png"
        // );
        // localStorage.setItem("lightTheme", false);
      } else {
        body.removeAttribute("id", "theme--dark");
        // this.msLogo = "musical-note-ver1.png";
        // this.msLogoOpen = "musical-note-logo-text-ver1.png";
        // msLogo.src = "../assets/images/musical-note-ver1.png";
        // msLogoOpen.setAttribute(
        //   "src",
        //   "../assets/images/musical-note-logo-text-ver1.png"
        // );
        // msLogoFooter.setAttribute(
        //   "src",
        //   "../assets/images/musical-note-logo-text-ver1.png"
        // );
        // localStorage.setItem("lightTheme", true);
      }
    },
  },
};
</script>

<style>
@import "../css/TheHeader.css";
</style>