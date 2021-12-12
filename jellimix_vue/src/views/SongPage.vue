<template>
  <div class="song">
    <a @click="previousRoute">Back</a>
    <div class="feature-album">
      <div class="ms_rcnt_slider">
        <div class="ms_heading">
          <h1>Featured Album</h1>
        </div>
        <div style="display: flex; flex-direction: row" v-for="(num) in [0,1,2]" :key="num">
          <PrimaryMedia
            v-for="(item, index) in mediaList.slice(num*4,num*4+4)"
            :key="index"
            :media_data="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SongServices from "../common/SongServices";

export default {
  mixins: [SongServices],
  data() {
    return {
      mediaList: [],
    };
  },
  created() {
    this.getAllSong()
      .then((res) => {
        this.mediaList = res.data.Items;
      })
      .catch((res) => {
        console.log(res);
      });
  },
  methods: {
    previousRoute() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
</style>