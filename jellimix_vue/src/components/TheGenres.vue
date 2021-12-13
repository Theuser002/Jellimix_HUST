<template>
  <div class="ms_genres_wrapper">
    <div class="row">
      <div class="col-lg-12">
        <div class="ms_heading">
          <h1>Top Genres</h1>
          <span class="veiw_all"><a href="#">view more</a></span>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="ms_genres_box">
          <img
            :src="genreList[0].img_url"
            @error="setAltImg"
            alt=""
            class="img-fluid"
          />
          <div class="ms_main_overlay">
            <div class="ms_box_overlay"></div>
            <div class="ms_play_icon">
              <img src="../assets/images/svg/play.svg" alt="" />
            </div>
            <div class="ovrly_text_div">
              <span class="ovrly_text1"
                ><a href="#">{{ genreList[0].Name }}</a></span
              >
              <span class="ovrly_text2"><a href="#">view song</a></span>
            </div>
          </div>
          <div class="ms_box_overlay_on">
            <div class="ovrly_text_div">
              <span class="ovrly_text1"
                ><a href="#">{{ genreList[0].Name }}</a></span
              >
              <span class="ovrly_text2"><a href="#">view song</a></span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="row">
          <div class="col-lg-6">
            <div class="ms_genres_box">
              <img
                :src="genreList[1].img_url"
                @error="setAltImg"
                alt=""
                class="img-fluid"
              />
              <div class="ms_main_overlay">
                <div class="ms_box_overlay"></div>
                <div class="ms_play_icon">
                  <img src="../assets/images/svg/play.svg" alt="" />
                </div>
                <div class="ovrly_text_div">
                  <span class="ovrly_text1"
                    ><a href="#">{{ genreList[1].Name }}</a></span
                  >
                </div>
              </div>
              <div class="ms_box_overlay_on">
                <div class="ovrly_text_div">
                  <span class="ovrly_text1"
                    ><a href="#">{{ genreList[1].Name }}</a></span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="ms_genres_box">
              <img
                :src="genreList[2].img_url"
                @error="setAltImg"
                alt=""
                class="img-fluid"
              />
              <div class="ms_main_overlay">
                <div class="ms_box_overlay"></div>
                <div class="ms_play_icon">
                  <img src="../assets/images/svg/play.svg" alt="" />
                </div>
                <div class="ovrly_text_div">
                  <span class="ovrly_text1"
                    ><a href="#">{{ genreList[2].Name }}</a></span
                  >
                </div>
              </div>
              <div class="ms_box_overlay_on">
                <div class="ovrly_text_div">
                  <span class="ovrly_text1"
                    ><a href="#">{{ genreList[2].Name }}</a></span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="ms_genres_box">
              <img
                :src="genreList[3].img_url"
                @error="setAltImg"
                alt=""
                class="img-fluid"
              />
              <div class="ms_main_overlay">
                <div class="ms_box_overlay"></div>
                <div class="ms_play_icon">
                  <img src="../assets/images/svg/play.svg" alt="" />
                </div>
                <div class="ovrly_text_div">
                  <span class="ovrly_text1"
                    ><a href="#">{{ genreList[3].Name }}</a></span
                  >
                </div>
              </div>
              <div class="ms_box_overlay_on">
                <div class="ovrly_text_div">
                  <span class="ovrly_text1"
                    ><a href="#">{{ genreList[3].Name }}</a></span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="ms_genres_box">
              <img
                :src="genreList[4].img_url"
                @error="setAltImg"
                alt=""
                class="img-fluid"
              />
              <div class="ms_main_overlay">
                <div class="ms_box_overlay"></div>
                <div class="ms_play_icon">
                  <img src="../assets/images/svg/play.svg" alt="" />
                </div>
                <div class="ovrly_text_div">
                  <span class="ovrly_text1"
                    ><a href="#">{{ genreList[4].Name }}</a></span
                  >
                </div>
              </div>
              <div class="ms_box_overlay_on">
                <div class="ovrly_text_div">
                  <span class="ovrly_text1"
                    ><a href="#">{{ genreList[4].Name }}</a></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="ms_genres_box">
          <img
            :src="genreList[5].img_url"
            @error="setAltImg"
            alt=""
            class="img-fluid"
          />
          <div class="ms_main_overlay">
            <div class="ms_box_overlay"></div>
            <div class="ms_play_icon">
              <img src="../assets/images/svg/play.svg" alt="" />
            </div>
            <div class="ovrly_text_div">
              <span class="ovrly_text1"
                ><a href="#">{{ genreList[5].Name }}</a></span
              >
            </div>
          </div>
          <div class="ms_box_overlay_on">
            <div class="ovrly_text_div">
              <span class="ovrly_text1"
                ><a href="#">{{ genreList[5].Name }}</a></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SongServices from "../common/SongServices";
export default {
  mixins: [SongServices],
  data() {
    return {
      genreList: [],
    };
  },
  created() {
    this.getGenres();
  },
  methods: {
    getGenres() {
      let url =
        axios.defaults.baseURL +
        `Genres?SortBy=SortName&SortOrder=Ascending&` +
        `Recursive=true&Fields=PrimaryImageAspectRatio%2CItemCounts&` +
        `StartIndex=0&ParentId=7e64e319657a9516ec78490da03edccb&` +
        `userId=4c6717a89bec419c8e396db40eb9713f&api_key=6fd2df2760de413995271a2d1e305d6c`;
      axios
        .get(url)
        .then((res) => {
          this.genreList = res.data.Items;

          this.genreList.forEach((item) => {
            item.img_url = this.getImageLink(item);
          });
        })
        .catch((res) => {
          console.log(res);
        });
    },
    setAltImg(event) {
      event.target.src = "../assets/images/album/album1.jpg";
    },
  },
};
</script>

<style scoped>
</style>