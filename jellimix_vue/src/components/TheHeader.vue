<!--TODO: Phúc-->
<template>
  <div class="ms_header">
    <div class="ms_top_left">
      <div class="ms_top_search">
        <input
          type="text"
          class="form-control"
          placeholder="Search Music Here.."
        />
        <span class="search_icon">
          <img src="../assets/images/svg/search.svg" alt="" />
        </span>
      </div>
      <div class="ms_top_trend">
        <span><a href="#" class="ms_color">Trending Songs :</a></span>
        <span class="top_marquee"
          ><a href="#"
            >Dream your moments, Until I Met You, Gimme Some Courage, Dark Alley
            (+8 More)</a
          ></span
        >
      </div>
    </div>
    <div class="ms_top_right">
      <!-- Theme toggle button -->
      <!-- <label>
        <input
          class="toggle-checkbox"
          type="checkbox"
          checked
          id="switch-theme-toggle-btn"
        />
        <div class="toggle-slot">
          <div class="sun-icon-wrapper">
            <div
              class="iconify sun-icon"
              data-icon="feather-sun"
              style="font-size: 4px"
              data-inline="false"
            ></div>
          </div>
          <div class="toggle-button"></div>
          <div class="moon-icon-wrapper">
            <div
              class="iconify moon-icon"
              data-icon="feather-moon"
              style="font-size: 4px"
              data-inline="false"
            ></div>
          </div>
        </div>
      </label> -->

      <!-- <div class="ms_top_lang">
                        <span data-toggle="modal" data-target="#lang_modal" style="margin-left: 15px">languages <img
                                src="../assets/images/svg/lang.svg" alt=""></span>
                    </div> -->
      <div class="ms_top_btn">
        <a
          href="javascript:;"
          class="ms_btn reg_btn"
          data-toggle="modal"
          data-target="#myModal"
          ><span>register</span></a
        >
        <a
          href="javascript:;"
          class="ms_btn login_btn"
          data-toggle="modal"
          data-target="#myModal1"
          ><span>login</span></a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>