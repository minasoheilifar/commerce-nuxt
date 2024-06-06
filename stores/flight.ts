import { defineStore } from "pinia";
import type { IFlightWayPoint, IPopularFlight } from "~/typescript/interfaces";

export const useFlightStore = defineStore({
  id: "flight",
  state: () => ({
    popularFlights: [] as IPopularFlight[],
    wayPoints: [] as IFlightWayPoint[],
  }),
  getters: {},

  actions: {
    getPopularFlights() {
      const { $axios } = useNuxtApp();
      const baseUrl = useRuntimeConfig().public.BASE_URL_FLIGHT;
      return new Promise((resolve, reject) => {
        $axios
          .get(`${baseUrl}/flight/popular`)

          .then(({ data }) => {
            this.popularFlights = data.data;
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    searchWayPoint(keyword: string) {
      const { $axios } = useNuxtApp();
      const baseUrl = useRuntimeConfig().public.BASE_URL_FLIGHT;
      return new Promise((resolve, reject) => {
        $axios
          .get(`${baseUrl}/waypoint/ORIGIN/flight-waypoint`, {
            params: { keyword },
          })

          .then(({ data }) => {
            this.wayPoints = data.data;
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
});
