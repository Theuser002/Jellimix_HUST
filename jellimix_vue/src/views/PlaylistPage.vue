<template>
  <div>
    <div class="not-login-playlist" v-if="!userId">
      <div class="text-holder">
        <h1>Log in to see your playlist</h1>
      </div>
    </div>
    <div class="ms_top_artist playlist_holder" v-else>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="ms_heading">
              <h1>Your Playlists</h1>
            </div>
          </div>
          <APlaylist
            v-for="item in playlists"
            :key="item.Id"
            :playlist_data="item"
          />
          <div class="col-lg-2" @click="isOpenCreateForm = true">
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
    <div
      id="create-playlist-modal"
      class="modal centered-modal ms_upload_box"
      v-if="isOpenCreateForm"
    >
      <div class="ms_heading">
        <h1>Playlist Information</h1>
      </div>
      <div class="ms_pro_form">
        <div class="form-group">
          <label>Playlist Name *</label>
          <input
            type="text"
            placeholder="Dream Your Moments"
            class="form-control"
            v-model="playlistName"
          />
        </div>
        <div class="pro-form-btn text-center marger_top15">
          <div class="ms_upload_btn">
            <a href="#" class="ms_btn" @click="uploadPlaylist">Upload Now</a>
            <a href="#" class="ms_btn" @click="isOpenCreateForm = false"
              >cancel</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlaylistServices from "../common/PlaylistServices";
import { mapGetters } from "vuex";
export default {
  mixins: [PlaylistServices],
  // variables
  data() {
    return {
      playlists: [],
      playlistName: "",
      isOpenCreateForm: false,
    };
  },
  computed: {
    ...mapGetters(["tokenAuth", "userId"]),
  },
  created() {
    this.getData();
  },
  watch: {
    tokenAuth() {
      this.getData();
    },
  },
  // functions
  methods: {
    getData() {
      this.getAllPlaylist(
        this.$cookies.get("userId"),
        this.$cookies.get("sessionId")
      )
        .then((res) => {
          this.playlists = res.data.Items;
          this.attachImage();
        })
        .catch();
    },
    attachImage() {
      this.playlists.forEach((playlist) => {
        playlist.img_url = this.getPlaylistImg(playlist);
      });
    },
    uploadPlaylist() {
      if (this.playlistName == "") {
        this.$toast.error("Tên playlist không được để trống");
      } else {
        this.addNewPlaylist(this.playlistName, this.userId, this.tokenAuth)
          .then(() => {
            this.$toast.success("Tạo playlist thành công");
          })
          .catch();
      }
    },
  },
};
</script>

<style scoped>
@import "../css/PlaylistPage.css";
</style>