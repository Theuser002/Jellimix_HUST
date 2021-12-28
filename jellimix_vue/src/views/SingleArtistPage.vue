<template>
  <div class="ms_album_single_wrapper ms_artist_single">
    <div @click="routeBack">Back</div>
    <div class="album_single_data">
      <div class="album_single_img">
        <img
          src="../assets/images/default-singer.png"
          alt="artist profile pic"
          class="img-fluid"
        />
      </div>
      <div class="album_single_text">
        <h2>{{ artist_data.Name }}</h2>
        <div class="album_feature">
          <span href="#" class="album_date"
            >{{ artist_data.RunTimeTicks | convertTickToTime }}</span
          >
          
          <span href="#" class="album_date"
            ><strong>Overview:</strong> <span>{{artist_data.Overview!=null?artist_data.Overview.slice(0,200)+"...":"No info"}}</span></span
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
      <div class="album_more_optn ms_more_icon">
        <span><img src="images/svg/more.svg" alt="" /></span>
      </div>
      <ul class="more_option">
        <li>
          <a href="#"
            ><span class="opt_icon"><span class="icon icon_fav"></span></span
            >Add To Favourites</a
          >
        </li>
        <li>
          <a href="#"
            ><span class="opt_icon"><span class="icon icon_queue"></span></span
            >Add To Queue</a
          >
        </li>
        <li>
          <a href="#"
            ><span class="opt_icon"><span class="icon icon_dwn"></span></span
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
            ><span class="opt_icon"><span class="icon icon_share"></span></span
            >Share</a
          >
        </li>
      </ul>
    </div>
    <div class="album_inner_list">
      <div class="album_list_wrapper">
        <ul class="album_list_name">
          <li>#</li>
          <li>Song Title</li>
          <li>Artist</li>
          <li class="text-center">Duration</li>
          <li class="text-center">Add To Favourites</li>
          <li class="text-center">More</li>
        </ul>
        <ul>
          <li>
            <a href="#"
              ><span class="play_no">01</span><span class="play_hover"></span
            ></a>
          </li>
          <li><a href="#">I am innocent</a></li>
          <li><a href="#">The artist</a></li>
          <li class="text-center"><a href="#">5:26</a></li>
          <li class="text-center">
            <a href="#"><i class="far fa-heart"></i></a>
          </li>
          <li class="text-center ms_more_icon">
            <a href="javascript:;"><i class="fas fa-ellipsis-h"></i> </a>
            <ul class="more_option">
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
                <a href="#"
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
            </ul>
          </li>
        </ul>
        <ul>
          <!-- Next song here -->
        </ul>
      </div>
    </div>
    <div class="ms_view_more padder_bottom20">
      <a href="#" class="ms_btn"> &gt; View more &lt;</a>
    </div>
  </div>
</template>

<script>
import ArtistServices from "../common/ArtistServices";

export default {
  mixins: [ArtistServices],
  data() {
    return {
      artist_data: null,
    };
  },
  created() {
    console.log("hihi");
    this.getSingleArtist(this.$route.params.id).then((res) => {
      this.artist_data = res.data;
    });
  },
  methods: {
    routeBack() {
      this.$router.push("/Artists");
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
};
</script>

<style>
/* global styles */
</style>

<style scoped>
/* local styles */
@import "../css/ArtistPage.css";
</style>