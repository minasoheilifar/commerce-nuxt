<template>
  <div class="header-container">
    <div>
      <SharedAppMenu/>
    </div>
    <div class="header-rightSide">
      <el-badge :value="1" class="item" badge-class="badge">
        <el-button
          ><el-icon><ShoppingCart /></el-icon
        ></el-button>
      </el-badge>

      <button class="active">Contact Us</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ShoppingCart } from "@element-plus/icons-vue";
</script>

<style lang="scss">
@import "~/sass/conponents/header/header.scss";
</style>
