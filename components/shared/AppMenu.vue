<template>
  <div class="menu-container">
    <ul class="items">
      <li v-for="item in Menu" :key="item.href">
        <NuxtLink :to="item.href">{{ item.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type {IMenu} from "~/typescript/interfaces"
const route=useRoute();

const Menu = ref<IMenu[]>([
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Blog", href: "/blog" },
  { name: "Contact us", href: "/contactUs" },
])
</script>

<style lang="scss">

@import "~/assets/sass/components/shared/menu.scss";
</style>
