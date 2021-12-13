<template>
  <div class="song">
    <a @click="previousRoute">Back</a>
    <div class="feature-album">
      <div class="ms_rcnt_slider">
        <div class="ms_heading">
          <h1>Featured Album</h1>
        </div>
        <div
          style="display: flex; flex-direction: row"
          v-for="num in [0, 1, 2]"
          :key="num"
        >
          <PrimaryMedia
            v-for="(item, index) in mediaList.slice(num * 4, num * 4 + 4)"
            :key="index"
            :media_data="item"
          />
        </div>
      </div>
    </div>
    <div class="pagination">
      <div class="page" v-for="index in getPaginationList" :key="index">
        <div @click="changePage(index)">
          {{ index }}
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
      currentPage: 1,
      totalPage: 1,
    };
  },
  created() {
    this.getData();
  },
  computed: {
    getPaginationList() {
      let numberList = [];
      let count = 0;
      if (this.currentPage > 1 && this.currentPage < this.totalPage - 1) {
        for (let i = this.currentPage - 1; i <= this.totalPage; i++) {
          count++;
          if (count > 4) {
            break;
          }
          numberList.push(i);
        }
      } else if (this.currentPage == 1) {
        for (let i = 1; i <= this.totalPage; i++) {
          count++;
          if (count > 4) {
            break;
          }
          numberList.push(i);
        }
      } else if (this.currentPage >= this.totalPage - 1) {
        for (let i = this.totalPage - 3; i <= this.totalPage; i++) {
          count++;
          if (count > 4) {
            break;
          }
          if (i > 0) {
            numberList.push(i);
          }
        }
      }
      return numberList;
    },
  },
  methods: {
    previousRoute() {
      this.$router.back();
    },
    getData() {
      this.getSongByPage(this.currentPage)
        .then((res) => {
          this.mediaList = res.data.Items;
          this.totalPage = Math.floor(res.data.TotalRecordCount / 12) + 1;
        })
        .catch((res) => {
          console.log(res);
        });
    },
    changePage(index) {
      this.currentPage = index;
      this.getData();
    },
  },
};
</script>

<style scoped>
.page {
  background-color: aqua;
  width: 20px;
  height: 20px;
}
</style>