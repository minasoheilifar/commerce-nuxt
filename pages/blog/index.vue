<template>
  <div class="container blog-container-page">
    <div class="row">
      <h4 class="mb-2">Popular Flights</h4>
      <div class="col-12 col-md-6">
        <el-select
          v-model="originValue"
          multiple
          filterable
          remote
          placeholder=""
          reserve-keyword
          :remote-method="originRemoteMethod"
          :loading="loading"
        >
          <template #prefix>From</template>
          <el-option
            v-for="item in originOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
          <template #loading>
            <svg class="circular" viewBox="0 0 50 50">
              <circle class="path" cx="25" cy="25" r="20" fill="none" />
            </svg>
          </template>
        </el-select>
      </div>
      <div class="col-12 col-md-6">
        <el-select
          v-model="destinationValue"
          multiple
          filterable
          remote
          placeholder=""
          reserve-keyword
          :remote-method="destinationRemoteMethod"
          :loading="loading"
        >
          <template #prefix>To</template>
          <el-option
            v-for="item in destinationOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
          <template #loading>
            <svg class="circular" viewBox="0 0 50 50">
              <circle class="path" cx="25" cy="25" r="20" fill="none" />
            </svg>
          </template>
        </el-select>
      </div>

      <!-- <el-input
        class="mt-3"
        @input="handleInput"
        type="text"
        v-model="searchQuery"
        placeholder="Search popular flights"
      /> -->
      <div v-loading="fetchingData" class="mt-3" style="width: 230px;">
        <a
          class="d-block"
          v-for="item in filteredFlights"
          :key="item.time"
          target="_blank"
          :href="getFlightUrl(item)"
          >{{ item.origin.name }} to {{ item.destination.name }}</a
        >
      </div>
      <pre v-loading="fetchingData" class="mt-3">
          {{ popularFlights }}
        </pre
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, watch } from "vue";
import { useFlightStore } from "~/stores/flight";
const { popularFlights, searchResultPopularFlights } = storeToRefs(
  useFlightStore()
);
const { getPopularFlights } = useFlightStore();
import type { IPopularFlight } from "~/typescript/interfaces";
const { $debounce } = useNuxtApp();

const searchQuery = ref("");
const fetchingData = ref(false);
const originValue = ref<string[]>([]);
const destinationValue = ref<string[]>([]);
const loading = ref(false);
const originOptions = ref<{ value: string; label: string }[]>([]);
const destinationOptions = ref<{ value: string; label: string }[]>([]);

const fetchFlightData = async () => {
  fetchingData.value = true;
  try {
    await getPopularFlights();
  } catch (error) {
    console.error(error);
  }
  fetchingData.value = false;
};

const getFlightUrl = (flight: IPopularFlight) => {
  return `https://tadilo.com/flights?origin=${flight.origin.name}+(${
    flight.origin.code
  })&destination=${flight.destination.name}+(${
    flight.destination.code
  })&departureDate=${
    flight.time.split("T")[0]
  }&returnDate&adults=1&children=0&infants=0&travelClass=ECONOMY&type=1`;
};
const getFlightTime = (flight: IPopularFlight) => {
  return `${flight.time.split("T")[0]}`;
};
const filteredOriginFlights = computed(() => {
  const searchQueryFlights =
    searchResultPopularFlights.value?.toLowerCase() || "";
  return popularFlights.value.filter((item) =>
    item.origin.name.toLowerCase().includes(searchQueryFlights)
  );
});
const filteredDestinationFlights = computed(() => {
  const searchQueryFlights =
    searchResultPopularFlights.value?.toLowerCase() || "";
  return popularFlights.value.filter((item) =>
    item.destination.name.toLowerCase().includes(searchQueryFlights)
  );
});

//for last input
const filteredFlights = computed(() => {
  const searchQueryFlights =
    searchResultPopularFlights.value?.toLowerCase() || "";
  return popularFlights.value.filter((item) =>
    item.origin.name.toLowerCase().includes(searchQueryFlights)
  );
});

const debouncedInput = $debounce(() => {
  searchResultPopularFlights.value = searchQuery.value;
  fetchingData.value = false;
}, 3000);
//for last input

const handleInput = () => {
  fetchingData.value = true;
  debouncedInput();
};

watch(searchQuery, () => {
  handleInput();
});

onMounted(() => {
  fetchFlightData();
  destinationOptions.value = filteredDestinationFlights.value.map((item) => {
    return {
      value: `${item.destination.name}`,
      label: `${item.destination.name} - ${getFlightTime(item)} `,
    };
  });
  originOptions.value = filteredOriginFlights.value.map((item) => {
    return {
      value: `${item.origin.name}`,
      label: `${item.origin.name} - ${getFlightTime(item)} `,
    };
  });
});

const originRemoteMethod = (query: string) => {
  if (query) {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      originOptions.value = filteredOriginFlights.value
        .filter((item) =>
          item.origin.name.toLowerCase().includes(query.toLowerCase())
        )
        .map((item) => ({
          value: `${item.origin.name}`,
          label: `${item.origin.name} - ${getFlightTime(item)}`,
        }));
    }, 3000);
  } else {
    originOptions.value = [];
  }
};
const destinationRemoteMethod = (query: string) => {
  if (query) {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      destinationOptions.value = filteredDestinationFlights.value
        .filter((item) =>
          item.destination.name.toLowerCase().includes(query.toLowerCase())
        )
        .map((item) => ({
          value: `${item.destination.name}`,
          label: `${item.destination.name} - ${getFlightTime(item)}`,
        }));
    }, 3000);
  } else {
    destinationOptions.value = [];
  }
};
</script>

<style lang="scss">
@import "~/assets/sass/pages/blog.scss";
.el-select-dropdown__loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 20px;
}

.circular {
  display: inline;
  height: 30px;
  width: 30px;
  animation: loading-rotate 2s linear infinite;
}
.path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: var(--el-color-primary);
  stroke-linecap: round;
}
.loading-path .dot1,
.loading-path .dot2,
.loading-path .dot3,
.loading-path .dot4 {
  fill: var(--el-color-primary);
  opacity: 0.3;
}
.loading-path .dot1 {
  transform: translate(3.75px, 3.75px);
  animation: custom-spin-move 1s infinite linear alternate;
}
.loading-path .dot2 {
  transform: translate(calc(100% - 3.75px), 3.75px);
  animation: custom-spin-move 1s infinite linear alternate;
  animation-delay: 0.4s;
}
.loading-path .dot3 {
  transform: translate(3.75px, calc(100% - 3.75px));
  animation: custom-spin-move 1s infinite linear alternate;
  animation-delay: 1.2s;
}
.loading-path .dot4 {
  transform: translate(calc(100% - 3.75px), calc(100% - 3.75px));
  animation: custom-spin-move 1s infinite linear alternate;
  animation-delay: 0.8s;
}
@keyframes loading-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}
@keyframes custom-spin-move {
  to {
    opacity: 1;
  }
}
</style>
