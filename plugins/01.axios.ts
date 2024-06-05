import axios from 'axios'
import { useCookie } from 'nuxt/app'
let refreshTokenInProgress = false

export default defineNuxtPlugin(({ $config }) => {
  const instance = axios.create()

  return {
    provide: {
      axios: instance
    }
  }
})
