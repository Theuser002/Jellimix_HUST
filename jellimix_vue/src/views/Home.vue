<template>
  <div class="home">
    <the-featured-song @play-song="playAudio" />
    <the-featured-song @play-song="playAudio" />
    <the-featured-song @play-song="playAudio" />
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