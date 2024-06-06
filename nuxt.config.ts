export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          refresh: true,
          additionalData: `@import "~/assets/sass/main-variables.scss";`,
          includePaths: ["sass"],
        },
      },
    },
  },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    "@element-plus/nuxt",
  ],
  imports: {
    dirs: ["stores"],
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  runtimeConfig: {
    public: {
      BASE_URL:process.env.BASE_URL,
      BASE_URL_FLIGHT:process.env.BASE_URL_FLIGHT,
    },
  },
});
