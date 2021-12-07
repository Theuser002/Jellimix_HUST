<template>
  <div id="app">
    <the-login-form id="login-form" v-if="isOpenModal" @close-form="isOpenModal=false"/>
    <the-menu></the-menu>
    <the-header @open-form="openRegisterForm"></the-header>
    <router-view class="router-view" @play-song="playAudio"></router-view>
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
    <ThePlayer/>
  </div>
</template>

<script>
import TheLoginForm from './components/TheLoginForm.vue';
// import Aplayer from "vue-aplayer";

export default {
  components: { TheLoginForm },
  name: "App",
  // components:{Aplayer},
  data() {
    return {
      audio_src: null,
      audio_title: null,
      audio_artist: null,
      audio_img: null,
      isOpenModal: false
    }
  },
  methods: {
    playAudio(e){
      this.audio_src = null;
      this.audio_title = null;
      this.audio_artist = null;
      this.$nextTick(()=>{
        this.audio_src = e[0];
        this.audio_title = e[1];
        this.audio_artist = e[2];
        this.audio_img = e[3];
      })
    },
    openRegisterForm(event){
      this.isOpenModal = true
      console.log(event);
    }
  },
};
</script>

<style>
.router-view {
  padding-left: 80px;
  padding-top: 80px;
}
</style>
