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
      <div class="cartDownSection">
        <div class="p-0 mb-3">
          <el-input
            type="number"
            v-model.number="cart.discountPercent"
            min="0"
            class="discountInput"
          >
            <template #prefix>
              <span>Discount %</span>
            </template>
            <template #suffix>
              <span class="ms-2" v-if="cart.discountPercent">
                Discount Amount:
                {{ formatPrice(cartTotal - cartTotalAfterDiscount) }} $
              </span>
            </template>
          </el-input>
        </div>

        <div>
          <el-button
            @click="clearAllCart()"
            class="active"
            style="width: 42px !important; height: 42px !important"
          >
            <span class="">
              <el-icon><Delete /></el-icon>
            </span>
          </el-button>
          <el-button
            class="active orderBtn"
            style="width: 87% !important; height: 42px !important"
          >
            <span class="d-flex flex-row align-items-center">
              <el-icon><List /></el-icon>
              <span class="ms-2">Order</span>
            </span>
            <div>
              <span
                class="text-decoration me-3"
                v-if="cartTotal - cartTotalAfterDiscount !== 0"
              >
                {{ formatPrice(cartTotal) }} $
              </span>
              <span>
                {{ formatPrice(cartTotalAfterDiscount) }} $
              </span>
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
const { cartTotal, cartItems, cartTotalAfterDiscount, cart } = storeToRefs(
  useAppStore()
);
const { removeFromCart, addToCart, clearAllCart, setDiscountPercent } =
  useAppStore();

function formatPrice(value: number) {
  return Number(value.toFixed(3));
}
</script>

<style lang="scss">
@import "~/assets/sass/components/cart-items.scss";
</style>
