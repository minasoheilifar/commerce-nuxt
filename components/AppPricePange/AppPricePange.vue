<template>
  <h3>Price Range</h3>
  <div class="priceRange-container">
    <div class="slider-demo-block">
      <el-slider v-model="value" range show-stops :max="10" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const value = ref([4, 8])


</script>

<style lang="scss">
@import "~/sass/conponents/priceRange/priceRange.scss";
</style>
