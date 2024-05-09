export default defineNuxtConfig({
  vite:{
    css:{
      preprocessorOptions:{
        scss: {
          refresh: true,
          additionalData: `@import "~/assets/sass/main-variables.scss";`,
          includePaths: ['sass']
        }
      
      }
    }

  },
  modules: ['@element-plus/nuxt'],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
});
