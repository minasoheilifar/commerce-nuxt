<template>
  <div class="shop-container-page">
    <div class="leftSide">
      <ProductCategories />
      <PriceRange/>
    </div>

    <div class="rightSide">
      <AppSearchbar />
      <Products/>
    </div>
  </div>
</template>


<style lang="scss">
@import '~/sass/pages/shop.scss';
</style>