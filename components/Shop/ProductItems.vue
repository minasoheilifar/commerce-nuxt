<template>
  <div class="items">
    <span class="imageBox">
      <div v-if="item.isNew" class="isBadge isNew">New!</div>
      <div v-if="item.isSale" class="isBadge isSale">Sale</div>
      <img class="images" :src="item.image" alt="image" />
    </span>
    <p class="names">{{ item.name }}</p>
    <div class="priceSection">
      <p class="prices">{{ item.price }} $</p>
      <el-button @click="clickHandler(item)">add to cart</el-button>
    </div>

  </div>
</template>

<script lang="ts" setup>
import type { IProducts } from "~/typescript/interfaces";
import { useAppStore } from "~/stores/app";
const { addToCart} = useAppStore();
import { useProductStore } from "~/stores/product";
const { openSideBarForCart } = storeToRefs(useProductStore());

const props = defineProps<{ item: IProducts }>();
const { item } = props;

function clickHandler(item: IProducts) {
  addToCart(item);
  openSideBarForCart.value();
}
</script>

<style lang="scss">
@import "/assets/sass/components/productItems.scss";
</style>
