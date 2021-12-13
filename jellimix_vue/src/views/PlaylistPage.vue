<template>
  <div>
    <div class="not-login-playlist" v-if="!tokenAuth">
      <div class="text-holder">
        <h1>Log in to see your playlist</h1>
      </div>
    </div>
    <div class="not-login-playlist" v-else>
      <div class="text-holder">
        <h1>Here is your playlist</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  // variables
  data() {
    return {
      media_sample: null,
    };
  },
  computed: {
    ...mapGetters(["tokenAuth"]),
  },
  // functions
  methods: {},
};
</script>

<style scoped>
@import "../css/PlaylistPage.css";
</style>