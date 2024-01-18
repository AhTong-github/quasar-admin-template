import { boot } from 'quasar/wrappers'
import axios, { AxiosInstance } from 'axios'
import axiosErrorHandler from 'common/notify-handler/axios-error-handler'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance
    $api: AxiosInstance
  }
}

const api = axios.create({
  baseURL: process.env.DEV_URL,
  timeout: 5000,
})

api.interceptors.request.use((config) => {
  return config
})

api.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    axiosErrorHandler(error)
  }
)

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api }
