
<template>
  <div class="">
    <ul class="menu-container">
      <li v-for="item in listMenu" :key="item.href" ><NuxtLink :to="item.href">{{ item.name }}</NuxtLink></li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface IlistMenu {
  name:string
  href:string
}

const listMenu=ref<IlistMenu[]>([
  {name:'Home',href:"./Home"},
  {name:'Shop',href:"./Shop"},
  {name:'Blog',href:"./Blog"},
  {name:'Contact us',href:"./ContactUs"},
])
</script>


<style lang="scss">
@import '~/sass/conponents/shared/menu.scss';
</style>

