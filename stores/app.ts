import { defineStore } from "pinia";
import type { IProducts } from "~/typescript/interfaces";
import type { ICartItems, ICarts } from "~/typescript/app";

export const useAppStore = defineStore("app", {
  state: () => ({
    carts: {
      items: [] as ICartItems[],
      discountPercent: 0 as number,
    },
  }),
  getters: {
    cartItems: (state) => state.carts.items,
    cartTotal: (state) =>
      state.carts.items.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      ),
    cartTotalAfterDiscount: (state) => {
      const total = state.carts.items.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
      const discount = (total * state.carts.discountPercent) / 100;
      return total - discount;
    },
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
    async removeFromCart(product: IProducts) {
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
          try {
            await ElMessageBox.confirm(
              'Are you sure you want to delete this product?',
              'Warning',
              {
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancel',
                type: 'warning',
              }
            )

            this.carts.items = this.carts.items.filter(
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
          'Are you sure you want to clear all cart?',
          'Warning',
          {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning',
          }
        )
        this.carts.items = [];
      } catch (error) {
        console.error("Error removing product from cart:", error);
      }
    },
    setDiscountPercent(discountPercent: number) {
      this.carts.discountPercent = discountPercent;
    },
  },
});
