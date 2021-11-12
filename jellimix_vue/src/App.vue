<template>
  <div id="app">
    <router-link to="/"><span @click="testToast('Developing')">Developing</span></router-link><br>
    <router-link to="/Hello"><span @click="testToast('HelloWorld')">HelloWorld</span></router-link><br>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    testToast(page){
      console.log("toast");
      this.$toast.open({
        message: 'Chuyển sang trang '+page,
        type: 'success'}
      )
    }
  },
}
</script>

<style>
</style>
