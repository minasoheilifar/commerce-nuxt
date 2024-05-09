<template>
<div class="categories-container">
  <h3 class="mt-0">Categories</h3>

  <div class="section">
    <div class="items">

      <input
        type="checkbox"
        id="allProducts"
        value="All Products"
        v-model="checkAll"
        :indeterminate="isIndeterminate"
      />

      <label for="allProducts">All Products</label>
    </div>

    <div class="items" v-for="item in listCategories" :key="item.id">
      <input type="checkbox" id="{{item.id}}" value="{{" item.name }}   />
      <label for="allProducts">{{ item.name }}</label>
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
// import {IlistCategories} from "~/typescript/interfaces";
export interface IlistCategories {
    id: number
    name: string
  }

const checkAll = ref(false);
const isIndeterminate = ref(true);
// const checkedCities = ref(['Shanghai', 'Beijing'])

// const handleCheckAllChange = (val: any) => {
//   checkedCities.value = val ? listCategories : []
//   isIndeterminate.value = false
// }
// const handleCheckedCategoriesChange = (value: any) => {
//   const checkedCount = value.length
//   checkAll.value = checkedCount === listCategories.value.length
//   isIndeterminate.value = checkedCount > 0 && checkedCount < listCategories.value.length
// }


const listCategories = ref<IlistCategories[]>([
  { id: 1, name: "Desks" },
  { id: 2, name: "Furnitures" },
  { id: 3, name: "Boxes" },
  { id: 4, name: "Drawers" },
  { id: 5, name: "Cabinets" },
  { id: 6, name: "Bins" },
  { id: 7, name: "Lamps" },
  { id: 8, name: "Services" },
  { id: 9, name: "Multimedia" },
]);
</script>

<style lang="scss">
@import "/assets/sass/conponents/product-categories.scss";
</style>
