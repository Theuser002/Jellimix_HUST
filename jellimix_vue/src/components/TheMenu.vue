<template>
  <div
    class="ms_sidemenu_wrapper"
    :class="{
      open_menu: isOpenMenu,
    }"
  >
    <div class="ms_nav_close" @click="openMenu">
      <i class="fa fa-angle-right" aria-hidden="true"></i>
    </div>
    <!-- Nút đóng mở menu -->
    <div class="ms_sidemenu_inner">
      <div
        class="ms_logo_inner"
        :class="{
          open_menu: isOpenMenu,
        }"
      >
        <div class="ms_logo" v-if="!isOpenMenu">
          <!-- Icon khi đóng menu -->
          <router-link to="/">
            <img
              src="../assets/images/musical-note-ver1.png"
              alt=""
              class="img-fluid"
              style="width: 60px; height: 60px"
              id="ms-img"
            />
          </router-link>
        </div>
        <div class="ms_logo_open" v-else>
          <!-- Icon khi mở menu -->
          <router-link to="/">
            <img
              src="../assets/images/musical-note-logo-text-ver1.png"
              alt=""
              class="img-fluid"
              style="width: 120px; height: 120px"
              id="ms-img-open"
            />
          </router-link>
        </div>
      </div>
      <div class="sidemenu-item_wrapper ms_nav_wrapper">
        <ul>
          <li v-for="(item, index) in menuItems" :key="index" @click="openPage">
            <!--Loop qua các lựa chọn trong menu-->
            <router-link
              :to="item.path"
              active-class="active"
              :title="item.name"
            >
              <span class="nav_icon">
                <span class="icon" :class="item.icon"></span>
              </span>
              <span class="nav_text">{{ item.name }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpenMenu: false,
      menuItems: [
        { path: "/Home", name: "Home", icon: "icon_discover" }, //đường dẫn router, tên lựa chọn, tọa độ x-y của icon trong ảnh svg
        { path: "/Songs", name: "Songs", icon: "icon_music" },
        { path: "/Albums", name: "Albums", icon: "icon_albums" },
        { path: "/Artists", name: "Artists", icon: "icon_artists" },
        { path: "/Genres", name: "Genres", icon: "icon_genres" },
        { path: "/Playlists", name: "Playlists", icon: "icon_fe_playlist" },
      ],
    };
  },
  methods: {
    openMenu() {
      let body = document.querySelector("body");

      this.isOpenMenu = !this.isOpenMenu;
      if (this.isOpenMenu) {
        body.setAttribute("class", "slide_menu");
      } else {
        body.removeAttribute("class", "slide_menu");
      }
    },
    openPage() {
      let body = document.querySelector("body");
      this.isOpenMenu = false;
      body.removeAttribute("class", "slide_menu");
    },
  },
};
</script>

<style scoped>
/* @import "../css/TheMenu.css"; */
</style>