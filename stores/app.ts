import { defineStore } from "pinia";
import type { IProducts } from "~/typescript/interfaces";
import type { ICartItems, ICarts } from "~/typescript/app";

export const useAppStore = defineStore("app", {
  state: () => ({
    cart: {
      items: [] as ICartItems[],
      discountPercent: 0 as number,
    },
  }),
  getters: {
    cartItems: (state) => state.cart.items,
    cartTotal: (state) =>
      state.cart.items.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      ),
    cartTotalAfterDiscount: (state) => {
      const total = state.cart.items.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
      const discount = (total * state.cart.discountPercent) / 100;
      return total - discount;
    },
  },
  actions: {
    postContactUsForm(payload: FormData) {
      const { $axios, $config } = useNuxtApp();
      const baseUrl = useRuntimeConfig().public.BASE_URL;
      return new Promise((resolve, reject) => {
        $axios
          .post(`${baseUrl}/contact-us`, payload)

          .then(({ data }) => {
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    addToCart(product: IProducts) {
      const existingProduct = this.cart.items.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        this.cart.items.push({ ...product, quantity: 1 });
      }
    },
    async removeFromCart(product: IProducts) {
      const existingProductIndex = this.cart.items.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex !== -1) {
        const existingProduct = this.cart.items[existingProductIndex];

        if (existingProduct.quantity > 1) {
          this.cart.items[existingProductIndex] = {
            ...existingProduct,
            quantity: existingProduct.quantity - 1,
          };
        } else {
          try {
            await ElMessageBox.confirm(
              "Are you sure you want to delete this product?",
              "Warning",
              {
                confirmButtonText: "OK",
                cancelButtonText: "Cancel",
                type: "warning",
              }
            );

            this.cart.items = this.cart.items.filter(
              (item) => item.id !== product.id
            );
          } catch (error) {
            console.error("Error removing product from cart:", error);
          }
        }
      }
    },
    async clearAllCart() {
      try {
        await ElMessageBox.confirm(
          "Are you sure you want to clear all cart?",
          "Warning",
          {
            confirmButtonText: "OK",
            cancelButtonText: "Cancel",
            type: "warning",
          }
        );
        this.cart.items = [];
      } catch (error) {
        console.error("Error removing product from cart:", error);
      }
    },
    setDiscountPercent(discountPercent: number) {
      this.cart.discountPercent = discountPercent;
    },
  },
});
