<template>
  <div
    class="sidemenu_wrapper"
    :class="{
      open_menu: isOpenMenu,
    }"
  >
    <div class="sidemenu_toggle" @click="isOpenMenu = !isOpenMenu"></div>
    <!-- Nút đóng mở menu -->
    <div class="sidemenu_inner">
      <div
        class="sidemenu-logo_wrapper"
        :class="{
          open_menu: isOpenMenu,
        }"
      >
        <div class="sidemenu-logo" v-if="!isOpenMenu">
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
        <div class="sidemenu-logo_open" v-else>
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
      <div class="sidemenu-item_wrapper">
        <div
          class="sidemenu-item"
          v-for="(item, index) in menuItems"
          :key="index"
          @click="isOpenMenu = false"
        >
          <!--Loop qua các lựa chọn trong menu-->
          <router-link :to="item.path">
            <span class="item-icon">
              <span
                class="icon"
                :style="{
                  'background-position': item.x + 'px ' + item.y + 'px',
                }"
              ></span>
            </span>
            <span class="item-text">{{ item.name }}</span> </router-link
          ><br />
        </div>
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
        { path: "/Home", name: "Trang chủ", x: 0, y: 0 },//đường dẫn router, tên lựa chọn, tọa độ x-y của icon trong ảnh svg
        { path: "/Song", name: "Bài hát", x: -150, y: -28 },
        { path: "/Artist", name: "Nghệ sĩ", x: -60, y: 2 },
        { path: "/Album", name: "Album", x: -30, y: -28 },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
@import "../css/TheMenu.css";
</style>