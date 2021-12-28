<template>
  <div class="album">
    <div>
      <div class="content-block">
        <router-link to="/Home">Back to home</router-link>
        <ul class="media-list">
          <li v-for="(media, index) in pageContent" :key="index">
            <div class="col-md-3">
              <AGenre :genre_data="media" />
            </div>
          </li>
        </ul>
      </div>
      <vue-ads-pagination
        :total-items="genreList.length"
        :items-per-page="itemPerPage"
        :max-visible-pages="5"
        :page="page"
        :loading="loading"
        @page-change="pageChange"
        @range-change="rangeChange"
      >
        <template slot-scope="props">
          <div class="vue-ads-pr-2 vue-ads-leading-loose">
            Genres {{ props.start }} - {{ props.end }} of {{ props.total }}
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
  </div>
</template>

<script>
import "../../node_modules/vue-ads-pagination/dist/vue-ads-pagination.css";
import VueAdsPagination, { VueAdsPageButton } from "vue-ads-pagination";
import GenreServices from "../common/GenreServices.js";

export default {
  name: "App",

  components: {
    VueAdsPagination,
    VueAdsPageButton,
  },

  mixins: [GenreServices],

  data() {
    return {
      isOpenOption: false,
      genreList: null,
      pageContent: [],
      loading: false,
      itemPerPage: 12,
      page: 0,
      start: 0,
      end: 0,
      defaultImg: "default-genre.png",
    };
  },

  created() {
    this.getAllGenre()
      .then((res) => {
          this.genreList = res.data.Items;
          this.pageContent = this.genreList;
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
      this.pageContent = this.genreList.slice(start, end);
      console.log(this.pageContent);
    },

    previousRoute() {
      this.$router.back();
    },

    singleGenre() {
      this.$router.back();
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