<template>
  <li class="jp-playlist-current">
    <div>
      <a
        href="javascript:;"
        class="jp-playlist-item-remove"
        style="display: none"
        >X</a
      ><a
        href="javascript:;"
        class="jp-playlist-item jp-playlist-current"
        tabindex="0"
        ><span class="que_img"
          ><img style="width: 100%"
            :src="
              img_url || require(`../../../assets/images/album/${defaultImg}`)
            "
        /></span>
        <div class="que_data">
          {{ queue_data.Name }}
          <span class="jp-artist">by {{ queue_data.AlbumArtist }}</span>
        </div></a
      >
      <div class="action">
        <span class="que_more"
          ><img src="../../../assets/images/svg/more.svg" /></span
        ><span class="que_close"
          ><img src="../../../assets/images/svg/close.svg"
        /></span>
      </div>
    </div>
    <ul class="more_option">
      <li class="jp-playlist-current">
        <a href="#"
          ><span class="opt_icon" title="Add To Favourites"
            ><span class="icon icon_fav"></span></span
        ></a>
      </li>
      <li>
        <a href="#"
          ><span class="opt_icon" title="Add To Queue"
            ><span class="icon icon_queue"></span></span
        ></a>
      </li>
      <li>
        <a href="#"
          ><span class="opt_icon" title="Download Now"
            ><span class="icon icon_dwn"></span></span
        ></a>
      </li>
      <li>
        <a href="#"
          ><span class="opt_icon" title="Add To Playlist"
            ><span class="icon icon_playlst"></span></span
        ></a>
      </li>
      <li>
        <a href="#"
          ><span class="opt_icon" title="Share"
            ><span class="icon icon_share"></span></span
        ></a>
      </li>
    </ul>
  </li>
</template>

<script>
import SongServices from "../../../common/SongServices";
export default {
  mixins: [SongServices],
  props: {
    queue_data: {
      type: Object,
    },
  },
  data() {
    return {
      img_url: null,
      defaultImg: "album1.jpg",
    };
  },
  created() {
      this.getImage()
  },
  methods: {
    getImage() {
      let url = this.getImageLink(this.queue_data);
      this.img_url = url;
      this.queue_data.img_url = url;
    },
  },
};
</script>

<style scoped>
</style>