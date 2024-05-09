<template>
  <div class="products-container">

    <div class="items" v-for="item in listProducts" :key="item.id">
      <img class="images" :src="item.image" alt="image" />
      <p class="names">{{ item.name }}</p>
      <p>$ {{ item.price }}</p>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
interface IlistProducts {
  id: number;
  name: string;
  price: number;
  categoryId: number;
  image: string;
}

const listProducts = ref<IlistProducts[]>([
  {
    id: 1,
    name: "Customizable Desk",
    price: 750.0,
    categoryId: 1,
    image: "/images/Customizable-Desk.jpg",
  },
  {
    id: 2,
    name: "Storage Box",
    price: 15.8,
    categoryId: 3,
    image: "/images/Storage-Box.jpg",
  },
  {
    id: 3,
    name: "Conference Chair",
    price: 33.0,
    categoryId: 2,
    image: "/images/Conference-Chair.jpg",
  },
  {
    id: 4,
    name: "Desk Combination",
    price: 450.0,
    categoryId: 1,
    image: "/images/Desk-Combination.jpg",
  },
  {
    id: 5,
    name: "Office Chair",
    price: 70.0,
    categoryId: 2,
    image: "/images/Office-Chair.jpg",
  },
  {
    id: 6,
    name: "Drawer Block",
    price: 25.0,
    categoryId: 4,
    image: "/images/Drawer-Block.jpg",
  },
  {
    id: 7,
    name: "Acoustic Block Screens",
    price: 295.0,
    categoryId: 9,
    image: "/images/Acoustic-Block-Screens.jpg",
  },
  {
    id: 8,
    name: "Corner Desk Left Sit",
    price: 85.0,
    categoryId: 1,
    image: "/images/Corner-Desk-Left-Sit.jpg",
  },
]);
</script>
<style lang="scss">
@import "/assets/sass/conponents/products.scss";
</style>
