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
});
