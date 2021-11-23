<template>
    <div class="song">
        <a @click="previousRoute">Back</a>
    </div>
</template>

<script>
export default {
    methods: {
        previousRoute(){
            this.$router.back()
        }
    },
}
</script>

<style scoped>
.song {
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  margin-right: 50px;
}
</style>