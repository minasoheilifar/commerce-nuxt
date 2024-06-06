<template>
  <div class="container blog-container-page">
    <div class="row">
      <div class="col-12">
        <el-input placeholder="Search popular flights"  />
        <div></div>
        <a class="d-block" v-for="item in popularFlights" :key="item.time" target="_blank" :href="getFlightUrl(item)">{{ item.origin.name }} to {{ item.destination.name }}</a>
        <pre v-loading="fetchingData">
          {{ popularFlights }}
        </pre>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Message } from "@element-plus/icons-vue";
import { useFlightStore } from "~/stores/flight";
const { popularFlights } = storeToRefs(useFlightStore());
const { getPopularFlights } = useFlightStore();
import type { IPopularFlight } from "~/typescript/interfaces";
//////////////////don refs
// const attachment = ref<HTMLElement>();
/////////////////state
const fetchingData = ref(false);
///////////////methods
const fetchFlightData = async () => {
  fetchingData.value = true;
  try {
    await getPopularFlights();
  } catch (error) {
    console.log(error);
  }
  fetchingData.value = false;
};
const getFlightUrl = (flight:IPopularFlight) => {
  return `https://tadilo.com/flights?origin=${flight.origin.name}+(${flight.origin.code})&destination=${flight.destination.name}+(${flight.destination.code})&departureDate=${flight.time.split('T')[0]}&returnDate&adults=1&children=0&infants=0&travelClass=ECONOMY&type=1`;
};

///////////////////onMounted
onMounted(() => {
  fetchFlightData();
});
</script>

<style lang="scss">
@import "~/assets/sass/pages/blog.scss";
</style>
