<!--TODO: Phúc-->
<template>
  <div class="ms_header">
    <div class="ms_top_left">
      <div class="ms_top_search">
        <input
          type="text"
          class="form-control"
          placeholder="Search Music Here.."
          v-model="inputValue"
          @keyup="debounceSearch"
        />
        <span class="search_icon">
          <img src="../assets/images/svg/search.svg" alt="" />
        </span>
        <div class="search-result" v-if="inputValue != ''">
          <div
            v-if="searchResponse == null || searchResponse.length == 0"
            class="search-item-wrapper"
          >
            <span class="result-item" href="#">Không tìm thấy</span>
          </div>
          <div v-else class="search-item-wrapper">
            <a
              class="result-item"
              v-for="(item, index) in searchResponse"
              :key="index"
              href="#"
            >
              {{ item.Name }},{{ index }}
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
        <a @click="openRegisterForm"
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
import axios from "axios";

export default {
  data() {
    return {
      inputValue: "",
      searchResponse: null,
      timer: 500,
      timeout: null,
    };
  },
  // watch:{
  //   inputValue(newValue, oldValue){
  //     console.log(newValue, oldValue);
  //     let url = axios.defaults.baseURL+
  //     `Users/4c6717a89bec419c8e396db40eb9713f/`+
  //     `Items?searchTerm=${newValue}&IncludePeople=false&`+
  //     `IncludeMedia=true&IncludeGenres=false&`+
  //     `IncludeStudios=false&IncludeArtists=false&`+
  //     `IncludeItemTypes=Audio,MusicAlbum&`+
  //     `Limit=24&Fields=PrimaryImageAspectRatio%2C`+
  //     `CanDelete%2CBasicSyncInfo%2CMediaSourceCount`+
  //     `&Recursive=true&EnableTotalRecordCount=false`+
  //     `&ImageTypeLimit=1&api_key=0727c7e03dfa4b46bc5925ce7c6fff9c`
  //     axios.get(url).then((res)=>{
  //       this.searchResponse = res.data.Items;
  //       console.log(res.data.Items);
  //     }).catch((res)=>{
  //       console.log(res);
  //     })
  //   }
  // },
  methods: {
    debounceSearch() {
      clearTimeout(this.timeout);
      if (this.inputValue.trim().length > 0) {
        console.log(this.inputValue.trim().length, this.inputValue);
        this.timeout = setTimeout(() => {
          let url =
            axios.defaults.baseURL +
            `Users/4c6717a89bec419c8e396db40eb9713f/` +
            `Items?searchTerm=${this.inputValue.trim()}&IncludePeople=false&` +
            `IncludeMedia=true&IncludeGenres=false&` +
            `IncludeStudios=false&IncludeArtists=false&` +
            `IncludeItemTypes=Audio,MusicAlbum&` +
            `Limit=24&Fields=PrimaryImageAspectRatio%2C` +
            `CanDelete%2CBasicSyncInfo%2CMediaSourceCount` +
            `&Recursive=true&EnableTotalRecordCount=false` +
            `&ImageTypeLimit=1&api_key=0727c7e03dfa4b46bc5925ce7c6fff9c`;
          axios
            .get(url)
            .then((res) => {
              this.searchResponse = res.data.Items;
              console.log(res.data.Items);
            })
            .catch((res) => {
              console.log(res);
            });
        }, this.timer);
      }
    },
    openRegisterForm(){
      this.$emit('open-form', this.timer)
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
  min-width: 100%;
  max-width: 100%;
  overflow: auto;
  border: 1px solid #ddd;
  z-index: 0;
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
</style>