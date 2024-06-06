<template>
  <div>
    <input @input="click"/>
    page: home
    <button @click="click">log</button>
  </div>
</template>

<script lang="ts" setup>
const { $debounce } = useNuxtApp();
const click = $debounce(()=>{
  console.log("hi");
},1000)
</script>

<style lang="scss">
@import "~/assets/sass/pages/home.scss";
</style>
