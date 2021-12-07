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
            <span>Songs</span>
            <a
              class="result-item"
              v-for="item in searchSongRes"
              :key="item.Id"
              @click="playSong(item)"
            >
              {{ item.Name }}
            </a>
            <span>Albums</span>
            <a
              class="result-item"
              v-for="item in searchAlbumRes"
              :key="item.Id"
              href="#"
            >
              {{ item.Name }}
            </a>
            <span>Artists</span>
            <a
              class="result-item"
              v-for="item in searchArtistRes"
              :key="item.Id"
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
      <!-- <label>
        <input
          class="toggle-checkbox"
          type="checkbox"
          checked
          id="switch-theme-toggle-btn"
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
      </label> -->

      <!-- <div class="ms_top_lang">
                        <span data-toggle="modal" data-target="#lang_modal" style="margin-left: 15px">languages <img
                                src="../assets/images/svg/lang.svg" alt=""></span>
                    </div> -->
      <div class="ms_top_btn">
        <a
          @click="openRegisterForm"
          href="javascript:;"
          class="ms_btn reg_btn"
          data-toggle="modal"
          data-target="#myModal"
          ><span>register</span></a
        >
        <a
          href="javascript:;"
          class="ms_btn login_btn"
          data-toggle="modal"
          data-target="#myModal1"
          ><span>login</span></a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
import { mapMutations } from "vuex";
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
    };
  },

  mixins: [clickaway, SearchServices,SongServices],
  watch: {
    inputValue(newValue) {
      if (newValue === "") {
        this.searchSongRes = [];
        this.searchAlbumRes = [];
        this.searchArtistRes = [];
      }
    },
  },
  methods: {
    ...mapMutations(["setAudio", "setOpenPlayer"]),
    away: function () {
      this.isHidden = true;
    },

    debounceSearch() {
      clearTimeout(this.timeout);
      if (this.inputValue.trim().length > 0) {
        this.timeout = setTimeout(() => {
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
    openRegisterForm() {
      this.$emit("open-form", this.timer);
    },
    playSong(song){
      song.img_url = this.getImageLink(song)
      this.setAudio(song);
      this.setOpenPlayer(true);
    }
  },
};
</script>

<style>
.search-result {
  top: 45px;
  left: 0;
  border-radius: 5px;
  position: absolute;
  background-color: white;
  width: 100%;
  min-height: 0px;
  max-height: 450px;
  overflow: auto;
  z-index: 0;
}

.search-item-wrapper {
  max-height: calc(100vh - 100px);
}

.search-item-wrapper span {
  color: var(--dark);
}

.search-result .result-item {
  padding: 7px 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: block;
  color: unset;
}
.search-result .result-item:hover {
  color: var(--primary-color) !important;
  cursor: pointer;
  background: #e6fffc !important ;
}

/* width */
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--nav-button-color);
}
</style>