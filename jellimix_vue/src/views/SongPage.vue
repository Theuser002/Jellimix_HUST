<template>
  <div class="album">
    <!-- <div v-if="mediaList == null" class="wrap">
      <img src="../assets/loader1.gif" alt="" />
    </div> -->
    <div>
      <router-link to="/Home">Back to home</router-link>
      <div class="content-block">
        <ul class="media-list">
          <li v-for="(media, index) in pageContent" :key="index">
            <div class="col-md-3">
              <PrimaryMedia :media_data="media" />
            </div>
          </li>
        </ul>
      </div>
      
    </div>
    <vue-ads-pagination
        :total-items="mediaList.length"
        :items-per-page="itemPerPage"
        :max-visible-pages="5"
        :page="page"
        :loading="loading"
        @page-change="pageChange"
        @range-change="rangeChange"
      >
        <template slot-scope="props">
          <div class="vue-ads-pr-2 vue-ads-leading-loose">
            Songs {{ props.start }} - {{ props.end }} of {{ props.total }}
          </div>
        </template>
        <template slot="buttons" slot-scope="props">
          <vue-ads-page-button
            v-for="(button, key) in props.buttons"
            :key="key"
            v-bind="button"
            @page-change="page = button.page"
            @range-change="
              start = button.start;
              end = button.end;
            "
          />
        </template>
      </vue-ads-pagination>
  </div>
</template>

<script>
import "../../node_modules/vue-ads-pagination/dist/vue-ads-pagination.css";
import VueAdsPagination, { VueAdsPageButton } from "vue-ads-pagination";
import SongServices from "../common/SongServices.js";

export default {
  name: "App",

  components: {
    VueAdsPagination,
    VueAdsPageButton,
  },

  mixins: [SongServices],

  data() {
    return {
      isOpenOption: false,
      mediaList: null,
      pageContent: [],
      loading: false,
      itemPerPage: 12,
      page: 0,
      start: 0,
      end: 0,
      defaultImg: "album1.jpg",
    };
  },
  watch: {
    page() {
      window.scrollTo(0, 0);
    },
  },
  created() {
    this.getAllSong()
      .then((res) => {
          this.mediaList = res.data.Items;
          this.pageContent = this.mediaList;
      })
      .catch((res) => {
        console.log(res);
      });
  },

  methods: {
    pageChange(page) {
      this.page = page;
    },

    rangeChange(start, end) {
      console.log(start, end);
      this.start = start;
      this.end = end;
      this.pageContent = this.mediaList.slice(start, end);
      console.log(this.pageContent);
    },
  },
};
</script>

<style scoped>
.album {
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  margin-right: 50px;
}
</style>