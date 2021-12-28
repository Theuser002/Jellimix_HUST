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
                        <span :title="audio.Name"> {{ audio.Name }} </span>
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
                  <a @click="addMediaToPlaylist"
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
            <span
              class="que_text"
              id="myPlaylistQueue"
              @click="isOpenQueue = true"
              ><i class="fa fa-angle-up" aria-hidden="true"></i> queue</span
            >
            <div
              id="playlist-wrap"
              class="jp-playlist find_li"
              v-show="isOpenQueue"
            >
              <div class="jp_queue_cls" @click="isOpenQueue = false">
                <i class="fa fa-times" aria-hidden="true"></i>
              </div>
              <h2>queue</h2>
              <div class="jp_queue_list_inner">
                <!-- <div tabindex="0"> -->
                <!-- <div style="position: relative; top: 0; left: 0" dir="ltr"> -->
                <ul style="">
                  <AQueueItem
                    v-for="(item, index) in queue"
                    :key="index"
                    :queue_data="item"
                    :selected="queueIndex === index"
                  />
                </ul>
                <!-- </div> -->
                <!-- </div> -->
                <div style="display: block">
                  <div>
                    <div
                      style="
                        position: absolute;
                        min-height: 50px;
                        top: 0px;
                        display: block;
                        height: 122px;
                        max-height: 311px;
                      "
                    >
                      <div style="line-height: 50px"></div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
              <div class="jp_queue_btn">
                <a
                  href="javascript:;"
                  class="ms_clear"
                  data-toggle="modal"
                  data-target="#clear_modal"
                  >clear</a
                >
              </div>
            </div>
          </div>
          <div class="jp-type-playlist" style="display: none">
            <audio
              ref="audio"
              id="myAudio"
              :src="audio.song_url"
              controls
              :loop="isLoop"
              autoplay
              @timeupdate="time = $event.target.currentTime"
            ></audio>
          </div>

          <div class="jp-type-playlist">
            <div class="jp-gui jp-interface flex-wrap">
              <div class="jp-controls flex-item">
                <button
                  class="jp-previous"
                  tabindex="0"
                  @click="toPreviousSong"
                >
                  <i class="ms_play_control"></i>
                </button>
                <button
                  class="jp-play"
                  tabindex="0"
                  @click="switchPlayingState"
                >
                  <i class="ms_play_control" :class="{ pause: isPlaying }"></i>
                </button>
                <button class="jp-next" tabindex="0" @click="toNextSong">
                  <i class="ms_play_control"></i>
                </button>
              </div>
              <div class="jp-progress-container flex-item">
                <div class="jp-time-holder">
                  <span
                    class="jp-current-time"
                    role="timer"
                    aria-label="time"
                    >{{ timeConverter(time) }}</span
                  >
                  <span
                    class="jp-duration"
                    role="timer"
                    aria-label="duration"
                    >{{ audio.RunTimeTicks | convertTickToTime }}</span
                  >
                </div>
                <div class="jp-progress">
                  <div
                    ref="seekbar"
                    class="jp-seek-bar"
                    style="width: 100%"
                    @mousedown="updateProgressPercentage"
                  >
                    <div
                      class="jp-play-bar"
                      :style="{ width: progressPercentage }"
                    >
                      <div class="bullet"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="jp-volume-controls flex-item">
                <div class="widget knob-container">
                  <div class="knob-wrapper-outer">
                    <div class="knob-wrapper">
                      <div
                        class="knob-mask"
                        style="
                          display: flex;
                          flex-direction: row;
                          align-item: center;
                        "
                      >
                        <div class="round">
                          <img src="../assets/images/svg/volume.svg" alt="" />
                        </div>
                        <div data-v-8c84849c="" class="jp-progress">
                          <div
                            ref="volume"
                            data-v-8c84849c=""
                            class="jp-seek-bar"
                            style="width: 100px"
                            @mousedown="updateVolume"
                          >
                            <div
                              data-v-8c84849c=""
                              class="jp-play-bar"
                              :style="{ width: volPercentage }"
                            >
                              <div data-v-8c84849c="" class="bullet"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- <input></input> -->
                  </div>
                </div>
              </div>
              <div class="jp-toggles flex-item">
                <button
                  class="jp-shuffle"
                  tabindex="0"
                  title="Shuffle"
                  @click="isShuffle = !isShuffle"
                >
                  <i class="ms_play_control" :class="{ 'is-repeat': isShuffle }"></i>
                </button>
                <button
                  class="jp-repeat"
                  tabindex="0"
                  title="Repeat"
                  @click="isLoop = !isLoop"
                >
                  <i
                    class="ms_play_control"
                    :class="{ 'is-repeat': isLoop }"
                  ></i>
                </button>
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
      isOpenQueue: false,
      time: 0,
      progressPercentage: "0%",
      volPercentage: "100%",
      isShuffle: false,
      isLoop: false,
      tempQueue: [],
    };
  },
  computed: {
    ...mapGetters([
      "audio",
      "queue",
      "queueIndex",
      "isPlaying",
      "isOpenPlayer",
      "isOpenLoginModalVuex",
      "tokenAuth",
    ]),
  },
  mounted() {
    let myAudio = document.getElementById("myAudio");

    myAudio.addEventListener("ended", () => {
      if (this.isShuffle == false) {
        this.toNextSong();
      }else{
        console.log("to random");
        this.toRandomSong();
      }
    });
  },
  methods: {
    ...mapMutations([
      "setSingleAudio",
      "setQueueIndex",
      "setPlaying",
      "setOpenPlayer",
      "setAddLoginModal",
      "setListToAdd",
      "setAddForm",
    ]),
    switchPlayingState() {
      if (this.isPlaying === true) {
        this.$refs.audio.pause();
      } else {
        this.$refs.audio.play();
      }
      this.setPlaying(!this.isPlaying);
    },
    download() {
      saveAs(this.audio.song_url, `Jellimix-${this.audio.Name}.mp3`);
    },
    timeConverter(seconds) {
      seconds = Math.floor(seconds);
      let min = parseInt(seconds / 60),
        sec = parseInt(seconds % 60);
      min = min < 10 ? "0" + min : min;
      sec = sec < 10 ? "0" + sec : sec;
      seconds = min + ":" + sec;
      return seconds;
    },
    convertTickToSecond(ticks) {
      var seconds = Math.floor(ticks / 10000000);
      return seconds;
    },
    updateProgressPercentage(event) {
      // jp-play-bar changes relative position when we update, we should getBoundingClientRect() from jp-seek-bar
      let currentProgress =
          event.clientX - this.$refs.seekbar.getBoundingClientRect().left,
        // because we can click in jp-seek-bar or jp-play-bar, we should get the width of jp-seek-bar, not the target of click event
        currentProgressPercentage = Math.floor(
          (currentProgress / this.$refs.seekbar.offsetWidth) * 100,
          5
        );
      this.progressPercentage = currentProgressPercentage + "%";
      if (this.audio.song_url != null) {
        this.$refs.audio.currentTime =
          (currentProgressPercentage / 100) *
          this.convertTickToSecond(this.audio.RunTimeTicks);
      }
    },
    updateVolume(event) {
      // jp-play-bar changes relative position when we update, we should getBoundingClientRect() from jp-seek-bar
      let currentVol =
          event.clientX - this.$refs.volume.getBoundingClientRect().left,
        // because we can click in jp-seek-bar or jp-play-bar, we should get the width of jp-seek-bar, not the target of click event
        currentVolPercentage = Math.floor(
          (currentVol / this.$refs.volume.offsetWidth) * 100,
          5
        );
      this.volPercentage = currentVolPercentage + "%";
      if (this.audio.song_url != null) {
        this.$refs.audio.volume = currentVolPercentage / 100;
      }
    },
    addMediaToPlaylist() {
      if (this.tokenAuth == null || this.tokenAuth.length == 0) {
        if (!this.isOpenLoginModalVuex) {
          this.setAddLoginModal(true);
        }
      } else {
        if (this.audio.Id == null || this.audio.Id.length == 0) {
          this.$toast.error("Audio is not available!");
          return;
        }
        this.setListToAdd([this.audio.Id]);
        this.setAddForm(true);
      }
    },
    toPreviousSong() {
      if (this.queue.length > 0) {
        this.setQueueIndex(this.queueIndex - 1);
        if (this.queueIndex < 0) {
          this.setQueueIndex(this.queue.length - 1);
        }
        this.setSingleAudio(this.queue[this.queueIndex]);
      }
    },
    toNextSong() {
      if (this.queue.length > 0) {
        this.setQueueIndex(this.queueIndex + 1);
        if (this.queueIndex == this.queue.length) {
          this.setQueueIndex(0);
        }
        this.setSingleAudio(this.queue[this.queueIndex]);
      }
    },
    toRandomSong(){
      let tmp = this.queueIndex
      let i
      do {
        i =  Math.floor(Math.random()*this.queue.length)
      } while (i==tmp);
      this.setQueueIndex(i)
      this.setSingleAudio(this.queue[this.queueIndex]);
    }
  },
  filters: {
    convertTickToTime(ticks) {
      if (ticks != null) {
        var seconds = Math.floor(ticks / 10000000);
        var minute = Math.floor((seconds / 60) % 60);
        var second = seconds % 60;

        var result =
          String(minute).padStart(2, "0") +
          ":" +
          String(second).padStart(2, "0");
        return result;
      } else {
        return "no source";
      }
    },
  },
  watch: {
    audio() {
      this.volPercentage = "100%";
    },
    time() {
      // if (Math.abs(time - this.$refs.audio.currentTime) > 0.5) {
      //   this.$refs.audio.currentTime = time;
      // }
      let progressPer =
        (this.time / this.convertTickToSecond(this.audio.RunTimeTicks)) * 100;
      this.progressPercentage = progressPer + "%";
    },
  },
};
</script>

<style scoped>
a {
  color: #fff !important;
  cursor: pointer;
}
button.jp-play .ms_play_control.pause {
  background-position: 1021px 0px !important;
}

.ms_play_control.is-repeat {
  background-position: 20px 0px !important;
  background-color: #fff !important;
}
</style>
