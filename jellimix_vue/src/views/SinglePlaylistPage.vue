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
        <h2>{{ playlist.Name }}</h2>
        <p class="singer_name">Singer, New York</p>
        <div class="about_artist">
          The Artist (Real name Wingardium Leviosa) seems to be a great person
          so he is loved by many people but all is just the big, shiny, flashy
          friendly facade he puts on. &lt;The artist&gt; is in fact a psychopath
          and was convited of serial m.u.r.d.e.r of 13 victims and is now
          waiting on death row in Volatile prison. His music is good, he is not.
          Here are some...<a href="#">Read More</a>
        </div>
        <div class="album_btn">
          <a href="#" class="ms_btn play_btn"
            ><span class="play_all"
              ><img src="images/svg/play_all.svg" alt="" />Play All</span
            ><span class="pause_all"
              ><img src="images/svg/pause_all.svg" alt="" />Pause</span
            ></a
          >
          <a href="#" class="ms_btn"
            ><span class="play_all"
              ><img src="images/svg/add_q.svg" alt="" />Add To Queue</span
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
          <li>Year</li>
          <li class="text-center">Duration</li>
          <li class="text-center">More</li>
        </ul>
        <ul v-for="(item, index) in playlist_data" :key="index">
          <li>
            <a href="#"
              ><span class="play_no">{{ index + 1 }}</span
              ><span class="play_hover"></span
            ></a>
          </li>
          <li>
            <a href="#">{{ item.Name }}</a>
          </li>
          <li>
            <a href="#">{{ item.AlbumArtist }}</a>
          </li>
          <li class="text-center">
            <a href="#">{{ item.RunTimeTicks | convertTickToTime }}</a>
          </li>
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
import PlaylistServices from "../common/PlaylistServices";
import { mapGetters } from "vuex";

export default {
  mixins: [PlaylistServices],
  data() {
    return {
      playlist: null,
      playlist_data: null,
    };
  },
  computed: {
    ...mapGetters(["tokenAuth", "userId"]),
  },
  created() {
    this.getSinglePlaylist(
      this.$route.params.id,
      this.userId,
      this.tokenAuth
    ).then((res) => {
      this.playlist = res.data;
    });
    this.getSinglePlaylistSong(
      this.$route.params.id,
      this.userId,
      this.tokenAuth
    ).then((res) => {
      this.playlist_data = res.data.Items;
    });
  },
  methods: {
    routeBack() {
      this.$router.push("/Playlists");
    },
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
</style>