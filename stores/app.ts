import { defineStore } from "pinia";
import type { IProducts } from "~/typescript/interfaces";
import type { ICartItems } from "~/typescript/app";

export const useAppStore = defineStore("app", {
  state: () => ({
    carts: {
      items: [] as ICartItems[],
      discount: {},
    },
  }),
  getters: {
    cartItems: (state) => state.carts.items,
    cartTotal: (state) =>
      state.carts.items.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      ),
  },
  actions: {
    addToCart(product: IProducts) {
      const existingProduct = this.carts.items.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        this.carts.items.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(product: IProducts) {
      const existingProductIndex = this.carts.items.findIndex(
        (item) => item.id === product.id
      );
    
      if (existingProductIndex !== -1) {
        const existingProduct = this.carts.items[existingProductIndex];
    
        if (existingProduct.quantity > 1) {
          this.carts.items[existingProductIndex] = {
            ...existingProduct,
            quantity: existingProduct.quantity - 1,
          };
        } else {
          this.carts.items = this.carts.items.filter(
            (item) => item.id !== product.id
          );
        }
      }
    },    
    clearAllCart() {
      this.carts.items = [];
    },
  },
});
