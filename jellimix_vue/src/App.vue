<template>
  <div id="app">
    <the-menu></the-menu>
    <the-header></the-header>
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@import "./css/all.css";

.router-view {
  padding-left: 80px;
  padding-top: 70px;
}
</style>
