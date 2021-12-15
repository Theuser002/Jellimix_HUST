<template>
  <div>
    <div class="not-login-playlist" v-if="!userId">
      <div class="text-holder">
        <h1>Log in to see your playlist</h1>
      </div>
    </div>
    <div class="ms_top_artist" v-else>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="ms_heading">
              <h1>Your Playlists</h1>
            </div>
          </div>
          <div class="col-lg-2 col-md-6">
            <div class="ms_rcnt_box marger_bottom25">
              <div class="ms_rcnt_box_img">
                <img src="images/radio/img1.jpg" alt="" class="img-fluid" />
                <div class="ms_main_overlay">
                  <div class="ms_box_overlay"></div>
                  <div class="ms_play_icon">
                    <img src="images/svg/play.svg" alt="" />
                  </div>
                </div>
              </div>
              <div class="ms_rcnt_box_text">
                <h3><a href="#">My Favourites</a></h3>
                <p>15 songs</p>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-6">
            <div class="ms_rcnt_box marger_bottom25">
              <div class="ms_rcnt_box_img">
                <img src="images/radio/img2.jpg" alt="" class="img-fluid" />
                <div class="ms_main_overlay">
                  <div class="ms_box_overlay"></div>
                  <div class="ms_play_icon">
                    <img src="images/svg/play.svg" alt="" />
                  </div>
                </div>
              </div>
              <div class="ms_rcnt_box_text">
                <h3><a href="#">My Music</a></h3>
                <p>15 songs</p>
              </div>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="ms_rcnt_box marger_bottom25">
              <div class="create_playlist">
                <i class="ms_icon icon_playlist"></i>
              </div>
              <div class="ms_rcnt_box_text">
                <h3><a href="#">Create New Playlist</a></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlaylistServices from '../common/PlaylistServices';
import { mapGetters } from "vuex";
export default {
  mixins: [PlaylistServices],
  // variables
  data() {
    return {
      playlists: null
    };
  },
  computed: {
    ...mapGetters(["tokenAuth","userId"]),
  },
  created() {
    this.getData();
  },
  // functions
  methods: {
    getData(){
      this.getAllPlaylist(this.$cookies.get('userId'), this.$cookies.get('sessionId')).then((res)=>{
        this.playlists = res.data.Items;
      }).catch()
    }
  },
};
</script>

<style scoped>
@import "../css/PlaylistPage.css";
</style>