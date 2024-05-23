<template>
  <div class="shop-container-page">
    <div class="leftSide">
      <ProductCategories />
      <PriceRange />
    </div>

    <div class="rightSide">
      <div :class="['sideBar', showSideBar ? 'show' : 'hide']">
        <div class="closeSideBar" @click="openAndCloseSideBar()">
          <el-icon><CloseBold /></el-icon>
        </div>
        <div class="sideBarItem">
          <CartItems />
        </div>
      </div>

      <AppSearchbar />
      <!-- ///////Products -->
      <div class="products-container">
        <div class="section">
          <div v-if="!filteredProducts.length" class="noProducts">
            <span>there is no product in this category</span>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-6 col-lg-4 col-xl-3 mb-3"
              v-for="item in filteredProducts"
              :key="item.id"
            >
              <ProductItems :item="item" :key="item.id" />
            </div>
          </div>
        </div>
      </div>
      <!-- ///////Products -->
    </div>
  </div>
</template>
<script lang="ts" setup>
import { CloseBold } from "@element-plus/icons-vue";
import { useProductStore } from "~/stores/product";
const { showSideBar, openAndCloseSideBar } = storeToRefs(useProductStore());
import type { IProducts } from "~/typescript/interfaces";
import { SORT_VARIANTS } from "~/typescript/types";
const {
  products,
  selectedPriceRange,
  selectedSort,
  searchResult,
  selectedCategory,
} = storeToRefs(useProductStore());

const filteredProducts = computed(() => {
  const categoryId = selectedCategory.value;
  const minPrice = selectedPriceRange.value?.[0];
  const maxPrice = selectedPriceRange.value?.[1];
  const searchQuery = searchResult.value?.toLowerCase();
  let productList: IProducts[] = products.value;

  if (categoryId !== undefined || (minPrice && maxPrice)) {
    productList = products.value.filter((item) => {
      if (categoryId !== undefined) {
        if (item.categoryId !== categoryId) return false;
      }
      if (minPrice && maxPrice) {
        if (item.price < minPrice || item.price > maxPrice) return false;
      }
      return true;
    });
  }

  // searchResult
  if (searchQuery) {
    productList = productList.filter((item) =>
      item.name.toLowerCase().includes(searchQuery)
    );
  }

  //////////////////////
  //start sort
  console.log("🚀 ~ productList.sort ~ productList:", productList);

  productList.sort((a, b) => {
    const sort = selectedSort.value;
    if (sort === SORT_VARIANTS.CHEAPER) return a.price - b.price;
    else if (sort === SORT_VARIANTS.EXPENSIVE) return b.price - a.price;
    else if (sort === SORT_VARIANTS.NEWEST) return a.id - b.id;
    else return b.id - a.id;
  });
  //finish sort
  //////////////////////////

  return productList;
});
</script>
<style lang="scss">
@import "~/assets/sass/pages/shop.scss";
</style>
