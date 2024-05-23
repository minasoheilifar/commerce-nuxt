import { defineStore } from "pinia";
import products from "~/data/product.json";
import categories from "~/data/category.json";
import type { IProducts } from "~/typescript/interfaces";
import type { ICategory } from "~/typescript/interfaces";
import { SORT_VARIANTS } from '~/typescript/types'

export const useProductStore = defineStore({
  id: "product",
  state: () => ({
    selectedCategory:undefined as undefined | number,
    priceRange: [] as number[],
    selectedPriceRange: [0,1],
    selectedSort: SORT_VARIANTS["NEWEST"] as SORT_VARIANTS ,
    showSideBar: false ,
    searchResult:""
  }),
  getters: {
    categories():ICategory[]{
      return categories;
    },
    products(): IProducts[] {
      return products;
    },
    openAndCloseSideBar():any {
      this.showSideBar=!this.showSideBar;
    },
    openSideBarForCart():any {
      if(!this.showSideBar){
        this.showSideBar=true;
      }
    },
    
  },

  actions: {
    // showCategoryId(id: number) {
    //   return this.Category.find((item) => item.id === id)?.id;
    // },
  },
});
