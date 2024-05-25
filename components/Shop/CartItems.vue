<template>
  <div v-if="cartItems.length">
    <div class="cartItemsTop">
      <div class="cartItemsSection">
        <div v-for="item in cartItems" :key="item.id" class="cartItem">
          <div class="cartSection">
            <img :src="item.image" class="cartImage" />
            <div class="priceSection">
              <span
                class="d-flex flex-row align-items-center justify-content-between"
              >
                <p>{{ item.name }}</p>
                <p class="me-3">{{ item.price }} $</p>
              </span>
              <span
                class="d-flex flex-row align-items-center justify-content-between"
              >
                <p>Total Price</p>
                <p class="me-3">
                  {{ formatPrice(item.price * item.quantity) }} $
                </p>
              </span>
            </div>
          </div>
          <div class="d-flex align-items-center">
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
      </div>
    </div>

    <div class="cartItemsDown">
      <div class="cartDownSection row">
        <div class="d-flex flex-row align-items-center p-0 mb-3">
          <el-input
            class="discountInput"
            v-model="input2"
            placeholder="Discount"
          >
            <template #append>%</template>
          </el-input>
          <el-button class="active">Update</el-button>
        </div>

        <div class="row">
          <el-button @click="clearAllCart()" class="active">
            <el-icon><Delete /></el-icon>
          </el-button>
          <el-button class="active orderBtn" >
            <div class="d-flex flex-row align-items-center">
              <el-icon><List /></el-icon>
              <span class="ms-2">Order</span>
            </div>
            <div>
              {{ formatPrice(cartTotal) }} $
            </div>
          </el-button>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Your cart is empty.</p>
  </div>
</template>

<script lang="ts" setup>
import { Delete, Plus, Minus, List } from "@element-plus/icons-vue";

import { useAppStore } from "~/stores/app";
const { cartTotal, cartItems } = storeToRefs(useAppStore());
const { removeFromCart, addToCart, clearAllCart } = useAppStore();

function formatPrice(value: number) {
  return Number(value.toFixed(3));
}
const input2 = ref('')

</script>

<style lang="scss">
@import "~/assets/sass/components/cart-items.scss";
</style>
