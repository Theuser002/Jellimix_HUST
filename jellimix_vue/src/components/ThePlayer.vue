<template>
  <div class="ms_player_wrapper" style="height: 70px" :class="{ 'close_player': !isOpenPlayer}">
    <div class="ms_player_close" @click="isOpenPlayer = !isOpenPlayer">
      <i class="fa fa-angle-up" aria-hidden="true"></i>
    </div>
    <div class="player_mid">
      <div class="audio-player">
        <div id="jquery_jplayer_1" class="jp-jplayer"></div>
        <div
          id="jp_container_1"
          class="jp-audio"
          role="application"
          aria-label="media player"
        >
          <div class="player_left">
            <div class="ms_play_song">
              <div class="play_song_name">
                <a id="playlist-text">
                  <div class="jp-now-playing flex-item">
                    <div class="jp-track-name">
                      <span class="que_img"
                        ><img src="../assets/images/album/album1.jpg"
                      /></span>
                      <div class="que_data">
                        {{name}}
                        <div class="jp-artist-name">Mushroom Records</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="play_song_options">
              <ul>
                <li>
                  <a href="#"
                    ><span class="song_optn_icon"
                      ><i class="ms_icon icon_download"></i></span
                    >download now</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><span class="song_optn_icon"
                      ><i class="ms_icon icon_fav"></i></span
                    >Add To Favourites</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><span class="song_optn_icon"
                      ><i class="ms_icon icon_playlist"></i></span
                    >Add To Playlist</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><span class="song_optn_icon"
                      ><i class="ms_icon icon_share"></i></span
                    >Share</a
                  >
                </li>
              </ul>
            </div>
            <span class="play-left-arrow"
              ><i class="fa fa-angle-right" aria-hidden="true"></i
            ></span>
          </div>
          <!----Right Queue---->
          <div class="jp_queue_wrapper">
            <span class="que_text" id="myPlaylistQueue"
              ><i class="fa fa-angle-up" aria-hidden="true"></i> queue</span
            >
            <div id="playlist-wrap" class="jp-playlist">
              <div class="jp_queue_cls">
                <i class="fa fa-times" aria-hidden="true"></i>
              </div>
              <h2>queue</h2>
              <div class="jp_queue_list_inner">
                <ul>
                  <li>&nbsp;</li>
                </ul>
              </div>
              <div class="jp_queue_btn">
                <a
                  href="javascript:;"
                  class="ms_clear"
                  data-toggle="modal"
                  data-target="#clear_modal"
                  >clear</a
                >
                <a
                  href="clear_modal"
                  class="ms_save"
                  data-toggle="modal"
                  data-target="#save_modal"
                  >save</a
                >
              </div>
            </div>
          </div>
          <div class="jp-type-playlist">
            <audio src="" controls></audio>
          </div>
        </div>
      </div>
    </div>
    <!--main div-->
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data() {
        return {
            isOpenPlayer:true
        }
    },
    computed:{
      ...mapGetters(['name'])
    }
};
</script>

<style scoped>
</style>