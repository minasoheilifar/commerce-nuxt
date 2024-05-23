<template>
  <div class="categories-container">
    <p class="title">Categories</p>

    <div class="section">
      <el-radio-group v-model="selectedCategory" class="items">
        <el-radio :value="undefined"> All Products </el-radio>

        <el-radio v-for="item in categories" :key="item.id" :value="item.id">
          {{ item.name }}
        </el-radio>
      </el-radio-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useProductStore } from "~/stores/product";
const { categories, selectedCategory } = storeToRefs(useProductStore());
</script>

<style lang="scss">
@import "/assets/sass/components/product-categories.scss";
</style>
