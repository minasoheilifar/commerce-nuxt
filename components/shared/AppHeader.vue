<template>
  <div class="header-container">
    <div>
      <AppMenu />
    </div>

    <div class="rightSide">
      <el-badge :value="cartItems.length? cartItems.length:undefined" class="item" @click="openAndCloseSideBar()">
        <el-button round >
          <el-icon>
            <ShoppingCart />
          </el-icon>
        </el-button>
      </el-badge>

      <el-button class="active">Contact Us</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ShoppingCart } from "@element-plus/icons-vue";
import { useProductStore } from "~/stores/product";
const { openAndCloseSideBar } = storeToRefs(useProductStore());
import { useAppStore } from "~/stores/app";
const { cartItems } = storeToRefs(useAppStore());

</script>

<style lang="scss">
@import "/assets/sass/app/element-ui.scss";
@import "/assets/sass/components/shared/header.scss";
</style>
