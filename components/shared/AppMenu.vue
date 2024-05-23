<template>
  <div class="menu-container">
    <ul class="items">
      <li v-for="item in Menu" :key="item.href">
        <NuxtLink :to="item.href" class="my-link">{{ item.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type {IMenu} from "~/typescript/interfaces"
const route=useRoute();

const Menu = ref<IMenu[]>([
  { name: "Home", href: "/" },
  { name: "Shop", href: "/Shop" },
  { name: "Blog", href: "/Blog" },
  { name: "Contact us", href: "/ContactUs" },
])
</script>

<style lang="scss">

@import "~/assets/sass/components/shared/menu.scss";
</style>
