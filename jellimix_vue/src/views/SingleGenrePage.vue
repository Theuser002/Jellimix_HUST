<template>
  <div class="ms_album_single_wrapper ms_artist_single">
    <div @click="routeBack">Back</div>
    <div class="album_single_data">
      <div class="album_single_img">
        <img
          :src="img_url || require(`../assets/images/genrs/${default_img}`)"
          alt="genre pic"
          class="img-fluid"
        />
      </div>
      <div class="album_single_text">
        <h2>{{genre.Name}}</h2>
        <div class="album_btn">
          <a href="#" class="ms_btn play_btn" @click="playAll"
            ><span class="play_all"
              ><img src="images/svg/play_all.svg" alt="" />Play All</span
            ><span class="pause_all"
              ><img src="images/svg/pause_all.svg" alt="" />Pause</span
            ></a
          >
          <a href="#" class="ms_btn" @click="addToQueue"
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
        <ul v-for="(item,index) in genre_data" :key="index">
          <li>
            <a href="#"
              ><span class="play_no">{{index+1}}</span><span class="play_hover"></span>
            </a>
          </li>
          <li><a href="#">{{item.Name}}</a></li>
          <li><a href="#">{{item.ProductionYear}}</a></li>
          <li class="text-center"><a href="#">{{item.RunTimeTicks | convertTickToTime}}</a></li>
          <li class="text-center ms_more_icon">
            <a href="javascript:;"
              ><span class="ms_icon1 ms_active_icon"></span
            ></a>
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
import GenreServices from '../common/GenreServices';
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  mixins: [GenreServices],
  data() {
      return {
          genre: null,
          genre_data: null,
          img_url: null,
          default_img:"default-genre.png"
      }
  },
  computed: {
      ...mapGetters(["tokenAuth", "userId"]),
  },
  created() {
      this.getSingleGenre(this.$route.params.id).then((res)=>{
          this.genre = res.data
        this.getImage();
      });
      this.getSingleGenreSongs(this.$route.params.id).then((res)=>{
          this.genre_data = res.data.Items
      });
  },
  methods: {
    ...mapMutations(["setListAudio"]),
    ...mapActions(["handleAddToQueue"]),
    routeBack(){
      this.$router.push('/Genres')
    },
    getImage() {
      this.img_url = this.getImageLink(this.genre);
      console.log(this.img_url);
    },
    playAll() {
      this.setListAudio(this.genre_data);
    },
    addToQueue(){
      this.handleAddToQueue(this.genre_data)
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