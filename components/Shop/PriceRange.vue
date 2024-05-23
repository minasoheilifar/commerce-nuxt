<template>
  <div class="priceRange-container">
    <p class="title">Price Range</p>
    <div>
      <div class="range">
        <span>{{ selectedPriceRange[0] }} $</span>
        <span>{{ selectedPriceRange[1] }} $</span>
      </div>
      <div class="slider-demo-block">
        <el-slider
          v-model="selectedPriceRange"
          range
          show-stops
          :min="minPrice"
          :max="maxPrice"
          :show-tooltip="false"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useProductStore } from "~/stores/product";

const { products, selectedPriceRange } = storeToRefs(useProductStore());

// states
const minPrice = ref(0);
const maxPrice = ref(0);

const getMinAndMaxPrice = () => {
  const productPrices = products.value.map((item) => item.price);
  const min = Math.min(...productPrices);
  const max = Math.max(...productPrices);
  
  minPrice.value = min;
  maxPrice.value = max + 1;
  selectedPriceRange.value[0] = min;
  selectedPriceRange.value[1] = max;
};

onMounted(() => {
  getMinAndMaxPrice();
});
</script>

<style lang="scss">
@import "/assets/sass/components/price-range.scss";
</style>
