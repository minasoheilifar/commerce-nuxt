<template>
  <div class="header-container">
    <div>
      <AppMenu/>
    </div>

    <div class="rightSide">
      <el-badge :value="1" class="item" badge-class="badge">

        <el-button>
          <el-icon>
            <ShoppingCart />
          </el-icon>
        </el-button>
      </el-badge>

      <button class="active">Contact Us</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
@import "/assets/sass/components/shared/header.scss";
</style>
