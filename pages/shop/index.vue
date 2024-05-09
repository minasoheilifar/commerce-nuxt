<script lang="ts" setup>
import AppCategories from '~/components/AppCategories/AppCategories.vue';
</script>

<template>
  <div class="shop-container">
    <div class="shop-leftSide">
      <AppCategories/>
      <AppPricePange/>
    </div>
    <div class="shop-rightSide">
      <SharedAppSearchbar/>
      <AppProducts/>
    </div>
  </div>
</template>


<style lang="scss">
@import '~/sass/pages/shop.scss';
</style>