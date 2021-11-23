<template>
  <div class="home">
    <MediaSlider :title="'Featured Song'" @play-song="playAudio" />
    <MediaSlider :title="'Recent Played'" @play-song="playAudio" />
    <MediaSlider :title="'Live Radio'" @play-song="playAudio" />
  </div>
</template>

<script>
export default {
  methods: {
    playAudio(e){
      this.$emit('play-song',e)
    }
  },
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