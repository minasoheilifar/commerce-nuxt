// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite:{
    css:{
      preprocessorOptions:{
        scss: {
          refresh: true,
          additionalData: `@import "~/sass/main-variables.scss";`,
          includePaths: ['sass']
        }
      
      }
    }

  },
  modules: ['@element-plus/nuxt'],




});
