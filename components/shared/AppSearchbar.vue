<template>
  <div class="searchBar-container">
    <div class="input-section">
      <input
        type="text"
        class="input"
        placeholder="Search..."
        v-model="searchResult"
      />
      <el-icon><Search /></el-icon>
    </div>
    <div class="sortBy">
      <p>Sort By:</p>
      <el-select
        v-model="selectedSort"
        placeholder="Select"
        style="width: 100px"
      >
        <el-option
          v-for="item in SORT_VARIANTS"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useProductStore } from "~/stores/product";
const { selectedSort, searchResult } = storeToRefs(useProductStore());
import { SORT_VARIANTS } from "~/typescript/types";
import { Search } from "@element-plus/icons-vue";
</script>

<style lang="scss">
@import "/assets/sass/components/shared/searchbar.scss";
</style>
