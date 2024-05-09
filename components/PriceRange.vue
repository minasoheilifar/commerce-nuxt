<template>
<div class="priceRange-container">
  <h3>Price Range</h3>
  
  <div>
    <div class="slider-demo-block">
      <el-slider v-model="value" range show-stops :max="10" />
    </div>
  </div>

</div>
</template>

<script lang="ts" setup>
const value = ref([4, 8])
</script>

<style lang="scss">
@import "/assets/sass/conponents/price-range.scss";
</style>
