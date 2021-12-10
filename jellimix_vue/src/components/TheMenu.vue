<template>
  <div
    class="ms_sidemenu_wrapper"
    :class="{
      open_menu: isOpenMenu,
    }"
  >
    <div class="ms_nav_close" @click="isOpenMenu = !isOpenMenu">
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
          <router-link to="/Home">
            <img
              src="../assets/images/musical-note-ver2.png"
              alt=""
              class="img-fluid"
              style="width: 60px; height: 60px"
            />
          </router-link>
        </div>
        <div class="ms_logo_open" v-else>
          <!-- Icon khi mở menu -->
          <router-link to="/Home">
            <img
              src="../assets/images/musical-note-logo-text-ver2.png"
              alt=""
              class="img-fluid"
              style="width: 120px; height: 120px"
            />
          </router-link>
        </div>
      </div>
      <div class="sidemenu-item_wrapper ms_nav_wrapper">
        <ul>
          <li
            v-for="(item, index) in menuItems"
            :key="index"
            @click="isOpenMenu = false"
          >
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
        { path: "/Home/dev", name: "Dev", icon: "icon_discover" }, //đường dẫn router, tên lựa chọn, tọa độ x-y của icon trong ảnh svg
        { path: "/Home", name: "Trang chủ", icon: "icon_discover" }, //đường dẫn router, tên lựa chọn, tọa độ x-y của icon trong ảnh svg
        { path: "/Song", name: "Bài hát", icon: "icon_music" },
        { path: "/Artist", name: "Nghệ sĩ", icon: "icon_artists" },
        { path: "/Album", name: "Album", icon: "icon_albums" },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
@import "../css/TheMenu.css";
</style>