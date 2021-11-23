<template>
  <div class="ms_weekly_wrapper">
    <div class="ms_weekly_inner">
      <div class="row">
        <div class="col-lg-12">
          <div class="ms_heading">
            <h1>weekly top 15</h1>
          </div>
        </div>
        <div class="col-lg-4 col-md-12 padding_right40" v-for="col in [1,2,3]" :key="col">
          <mini-media v-for="index in [1,2,3,4,5]" :key="index" :top_no="5*(col-1)+index"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>