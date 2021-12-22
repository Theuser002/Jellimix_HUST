<template>
  <div class="marger_top60">
    <div class="ms_upload_box" id="add-to-playlist">
      <div class="ms_heading">
        <h1>Add to playlist</h1>
      </div>
      <div class="ms_pro_form">
        <div class="form-group">
          <label>Select Album</label>
          <select ref="choseplaylist" class="form-control">
            <option v-for="item in playlists" :key="item.Id">{{item.Name}}</option>
          </select>
        </div>
        <div class="pro-form-btn text-center marger_top15">
          <div class="ms_upload_btn">
            <a href="#" class="ms_btn" @click="addMediaToPlaylist">Add Now</a>
            <a href="#" class="ms_btn" @click="setAddForm(false)">cancle</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import PlaylistServices from "../common/PlaylistServices";

export default {
  mixins: [PlaylistServices],
  props:{
    playlists: {
      type: Array
    }
  },
  computed: {
    ...mapGetters(["userId", "tokenAuth"]),
  },
  methods: {
    ...mapMutations(['setAddForm']),
    addMediaToPlaylist() {
      this.addNewPlaylist(this.$refs.choseplaylist.value, this.userId, this.tokenAuth)
      .then(() => {
        this.$toast.success("Add media to playlist successfully!");
      })
      .catch((err) => {
        this.$toast.error(err.message)
      });
      this.setAddForm(false);
    },
  },
};
</script>

<style scoped>
#add-to-playlist{
    margin: 0;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
}
</style>