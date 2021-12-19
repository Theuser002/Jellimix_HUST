<template>
  <div class="col-lg-2 col-md-6">
    <div class="ms_rcnt_box marger_bottom25">
      <div class="ms_rcnt_box_img">
        <img
          :src="
            playlist_data.img_url || require(`../../../assets/images/album/${defaultImg}`)
          "
          class="img-fluid"
        />
        <div class="ms_main_overlay">
          <div class="ms_box_overlay"></div>
          <div class="ms_play_icon" @click="displaySinglePlaylist">
            <img src="../../../assets/images/svg/play.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="ms_rcnt_box_text">
        <h3>
          <a href="#">{{ playlist_data.Name }}</a>
        </h3>
        <p>{{ playlist_data.RunTimeTicks | convertTickToTime }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    playlist_data: {
      type: Object
    }
  },
  data() {
    return {
      defaultImg: "album1.jpg"
    }
  },
  methods: {
    displaySinglePlaylist(){
      this.$router.push(`/Playlists/${this.playlist_data.Id}`)
    }
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