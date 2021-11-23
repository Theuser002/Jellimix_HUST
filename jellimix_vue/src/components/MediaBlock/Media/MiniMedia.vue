<template>
  <div class="ms_weekly_box">
    <div class="weekly_left">
      <span class="w_top_no"> {{top_no}} </span>
      <div class="w_top_song">
        <div class="w_tp_song_img">
          <img src="../../../assets/images/album/album1.jpg" alt="" class="img-fluid" />
          <div class="ms_song_overlay"></div>
          <div class="ms_play_icon">
            <img src="../../../assets/images/svg/play.svg" alt="" />
          </div>
        </div>
        <div class="w_tp_song_name">
          <h3><a href="#">Dark Alley Acoustic</a></h3>
          <p>Ava Cornish</p>
        </div>
      </div>
    </div>
    <div class="weekly_right">
      <span class="w_song_time">5:10</span>
      <span class="ms_more_icon" data-other="1">
        <img src="../../../assets/images/svg/more.svg" alt="" />
      </span>
    </div>
    <ul class="more_option">
      <li>
        <a href="#"
          ><span class="opt_icon"><span class="icon icon_fav"></span></span>Add
          To Favourites</a
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
          ><span class="opt_icon"><span class="icon icon_playlst"></span></span
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
</template>

<script>
// import js file here

export default {
    props:{
        top_no: Number
    }
};
</script>

<style scoped>
@import "../../../css/MediaBlock/Media/MiniMedia.css";
</style>