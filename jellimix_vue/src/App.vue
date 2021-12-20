<template>
  <div id="app">
    <the-register-form
      id="register-form"
      v-if="isOpenRegisterModal"
      @close-form="toggleRegisterForm(false)"
      @switch-login="toggleLoginForm(true)"
    />
    <the-login-form
      id="login-form"
      v-if="isOpenLoginModal"
      @close-form="toggleLoginForm(false)"
      @switch-register="toggleRegisterForm(true)"
    />
    <add-to-playlist
      id="add-form"
      v-if="isAddFormOpen"
      :playlists="playlists"
    />
    <the-menu></the-menu>
    <the-header
      @open-register-form="toggleRegisterForm(true)"
      @open-login-form="toggleLoginForm(true)"
    ></the-header>
    <router-view class="router-view" :key="$route.path"></router-view>
    <the-footer></the-footer>
    <!-- <div style="z-index: 20000; position: sticky; bottom: 0" v-if="audio_src!=null">
    <Aplayer   
      style="z-index: 1"
      autoplay
      :music="{
        title: audio_title,
        artist: audio_artist,
        src: audio_src,
        pic: audio_img,
      }"
    />
    <button style="z-index: 2; position: absolute; top: 0; right: 0" @click="audio_src=null">Close</button>
    </div> -->
    <ThePlayer />
  </div>
</template>

<script>
// import Aplayer from "vue-aplayer";
import { mapGetters, mapMutations } from "vuex";
import PlaylistServices from "./common/PlaylistServices";

export default {
  name: "App",
  // components:{Aplayer},
  mixins: [PlaylistServices],
  data() {
    return {
      audio_src: null,
      audio_title: null,
      audio_artist: null,
      audio_img: null,
      isOpenRegisterModal: false,
      isOpenLoginModal: false,
      playlists: [],
    };
  },
  computed: {
    ...mapGetters(["userId", "tokenAuth", "isAddFormOpen"]),
  },
  watch: {
    userId() {
      this.getAllPlaylist(this.userId, this.tokenAuth).then((res) => {
        this.playlists = res.data.Items;
      });
    },
  },
  methods: {
    ...mapMutations(["setListToAdd"]),
    toggleRegisterForm(isOpen) {
      this.isOpenRegisterModal = isOpen;
    },
    toggleLoginForm(isOpen) {
      this.isOpenLoginModal = isOpen;
    },
  },
};
</script>

<style>
#login-form {
  z-index: 12;
  padding-top: 100px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

#register-form {
  z-index: 12;
  padding-top: 100px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

#add-form {
  z-index: 12;
  padding-top: 100px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}
.router-view {
  padding-left: 80px;
  padding-top: 80px;
}
</style>
