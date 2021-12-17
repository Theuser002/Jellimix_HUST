<template>
  <div class="col-lg-2 col-md-6">
    <div class="ms_rcnt_box marger_bottom25">
      <div class="ms_rcnt_box_img">
        <img
          :src="
            img_url || require(`../../../assets/images/album/${defaultImg}`)
          "
          class="img-fluid"
        />
        <div class="ms_main_overlay">
          <div class="ms_box_overlay"></div>
          <div class="ms_play_icon">
            <img src="../../../assets/images/svg/play.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="ms_rcnt_box_text">
        <h3>
          <a href="#">{{ title }}</a>
        </h3>
        <p>{{ duration | convertTickToTime }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    duration: {
      type: Number,
    },
    img_url: {
      type: String
    }
  },
  data() {
    return {
      defaultImg: "album1.jpg"
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