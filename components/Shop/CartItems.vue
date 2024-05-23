<template>
  <div v-if="cartItems.length">
    <div class="cartItemsSection">
      <div>
        <div v-for="item in cartItems" :key="item.id" class="cartItem">
          <div class="row align-items-center">
            <img :src="item.image" class="cartImage" />
            {{ item.name }}
          </div>
          <div class="d-flex align-items-center">
            <span class="me-3"
              >{{ formatPrice(item.price * item.quantity) }} $</span
            >
            <el-button @click="removeFromCart(item)" class="active" round>
              <span v-if="item.quantity > 1"
                ><el-icon><Minus /></el-icon
              ></span>
              <span v-if="item.quantity === 1">
                <el-icon><Delete /></el-icon>
              </span>
            </el-button>
            <p class="mx-2">{{ item.quantity }}</p>
            <el-button @click="addToCart(item)" class="active" round>
              <el-icon><Plus /></el-icon>
            </el-button>
          </div>
        </div>
        <p>Total Price: {{ formatPrice(cartTotal) }} $</p>
      </div>
    </div>

    <div class="cartItemsDown">
      <el-button @click="clearAllCart()" class="active" round>
        <el-icon><Delete /></el-icon>
      </el-button>
    </div>

  </div>
  <div v-else>
    <p>Your cart is empty.</p>
  </div>
</template>

<script lang="ts" setup>
import { Delete, Plus, Minus } from "@element-plus/icons-vue";

import { useAppStore } from "~/stores/app";
const { cartTotal, cartItems } = storeToRefs(useAppStore());
const { removeFromCart, addToCart, clearAllCart } = useAppStore();

function formatPrice(value: number) {
  return Number(value.toFixed(3));
}
</script>

<style lang="scss">
@import "~/assets/sass/components/cart-items.scss";
</style>
