<template>
  <div class="home">
    <the-banner></the-banner>
    <the-featured-song />
    <div class="container" style="padding: 20px 0px">
      <div class="row">
        <div class="col-lg-12" style="display: flex; justify-content:center">
          <a href="#"
            ><img src="../assets/images/adv-alt.jpg" alt="" class="img-fluid"
          /></a>
        </div>
      </div>
    </div>
    <the-featured-album />
    <the-genres />
    <the-featured-artist />
  </div>
</template>

<script>
import TheGenres from "../components/TheGenres.vue";
export default {
  components: { TheGenres },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  margin-right: 50px;
}
</style>