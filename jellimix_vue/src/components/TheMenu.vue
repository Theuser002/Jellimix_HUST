<template>
  <div
    class="sidemenu_wrapper"
    :class="{
      open_menu: isOpenMenu,
    }"
  >
    <div class="sidemenu_inner">
      <button type="button" class="btn btn-success" @click="isOpenMenu=!isOpenMenu">Đóng/Mở</button>
      <router-link to="/"
        ><span @click="testToast('Developing')">Developing</span></router-link
      ><br />
      <router-link to="/Hello"
        ><span @click="testToast('HelloWorld')">HelloWorld</span></router-link
      ><br />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpenMenu: false,
    };
  },
  methods: {
    testToast(page){
      this.isOpenMenu = false
      this.$toast.open({
        message: 'Chuyển sang trang '+page,
        type: 'success'}
      )
    }
  },
};
</script>

<style scoped>
@import "../css/TheMenu.css";
</style>