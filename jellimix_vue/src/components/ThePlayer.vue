<template>
  <div
    class="ms_player_wrapper"
    style="height: 70px"
    :class="{ close_player: !isOpenPlayer }"
  >
    <div class="ms_player_close" @click="setOpenPlayer(!isOpenPlayer)">
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
          <div
            class="player_left"
            :class="{
              open_list: isOpenOption,
            }"
          >
            <div class="ms_play_song">
              <div class="play_song_name">
                <a id="playlist-text">
                  <div class="jp-now-playing flex-item">
                    <div class="jp-track-name">
                      <span class="que_img"
                        ><img
                          :src="
                            audio.img_url ||
                            require(`../assets/images/album/album1.jpg`)
                          "
                      /></span>
                      <div class="que_data">
                        {{ audio.Name }}
                        <div class="jp-artist-name">
                          {{ audio.AlbumArtist }}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="play_song_options">
              <ul>
                <li>
                  <a @click="download"
                    ><span class="song_optn_icon"
                      ><i class="ms_icon icon_download"></i></span
                    >download now</a
                  >
                </li>
                <li>
                  <a
                    ><span class="song_optn_icon"
                      ><i class="ms_icon icon_fav"></i></span
                    >Add To Favourites</a
                  >
                </li>
                <li>
                  <a
                    ><span class="song_optn_icon"
                      ><i class="ms_icon icon_playlist"></i></span
                    >Add To Playlist</a
                  >
                </li>
              </ul>
            </div>
            <span class="play-left-arrow" @click="isOpenOption = !isOpenOption"
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
          <div class="jp-type-playlist" style="display: none">
            <audio ref="audio" :src="audio.song_url" controls autoplay></audio>
          </div>

          <div class="jp-type-playlist">
            <div class="jp-gui jp-interface flex-wrap">
              <div class="jp-controls flex-item">
                <button class="jp-previous" tabindex="0">
                  <i class="ms_play_control"></i>
                </button>
                <button class="jp-play" tabindex="0" @click="testPause">
                  <i class="ms_play_control" :class="{ pause: isPlaying }"></i>
                </button>
                <button class="jp-next" tabindex="0">
                  <i class="ms_play_control"></i>
                </button>
              </div>
              <div class="jp-progress-container flex-item">
                <div class="jp-time-holder">
                  <span class="jp-current-time" role="timer" aria-label="time"
                    >00:00</span
                  >
                  <span class="jp-duration" role="timer" aria-label="duration"
                    >04:27</span
                  >
                </div>
                <div class="jp-progress">
                  <div class="jp-seek-bar" style="width: 100%">
                    <div class="jp-play-bar" style="width: 0%">
                      <div class="bullet"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="jp-volume-controls flex-item">
                <div class="widget knob-container">
                  <div class="knob-wrapper-outer">
                    <div class="knob-wrapper">
                      <div class="knob-mask">
                        <div class="knob d3" style="transform: rotateZ(270deg)">
                          <span></span>
                        </div>
                        <div
                          class="handle"
                          style="transform: rotateZ(270deg)"
                        ></div>
                        <div class="round">
                          <img src="images/svg/volume.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="jp-toggles flex-item">
                <button class="jp-shuffle" tabindex="0" title="Shuffle">
                  <i class="ms_play_control"></i>
                </button>
                <button class="jp-repeat" tabindex="0" title="Repeat">
                  <i class="ms_play_control"></i>
                </button>
              </div>
              <div class="jp_quality_optn custom_select">
                <select style="display: none">
                  <option>quality</option>
                  <option value="1">HD</option>
                  <option value="2">High</option>
                  <option value="3">medium</option>
                  <option value="4">low</option>
                </select>
                <div class="nice-select" tabindex="0">
                  <span class="current">quality</span>
                  <ul class="list">
                    <li data-value="quality" class="option selected">
                      quality
                    </li>
                    <li data-value="1" class="option">HD</li>
                    <li data-value="2" class="option">High</li>
                    <li data-value="3" class="option">medium</li>
                    <li data-value="4" class="option">low</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--main div-->
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { saveAs } from "file-saver";

export default {
  data() {
    return {
      isOpenOption: false,
      // isOpenPlayer: true,
      // isPlaying: true,
    };
  },
  computed: {
    ...mapGetters(["audio","isPlaying","isOpenPlayer"]),
  },
  methods: {
    ...mapMutations(["setPlaying","setOpenPlayer"]),
    testPause() {
      if (this.isPlaying === true) {
        this.$refs.audio.pause();
      } else {
        this.$refs.audio.play();
      }
      this.setPlaying(!this.isPlaying)
    },
    download() {
      saveAs(this.audio.song_url, `Jellimix-${this.audio.Name}.mp3`);
    },
  },
};
</script>

<style scoped>
a{
  color: #fff !important;
  cursor: pointer;
}
button.jp-play .ms_play_control.pause {
    background-position: 1021px 0px !important;
}
</style>