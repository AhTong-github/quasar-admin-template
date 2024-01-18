import { Notify } from 'quasar'

export const axiosErrorHandler = (error: any) => {
  const code = error.response.code
  let msg = ''
  switch (code) {
    case 401:
      msg = 'Get token failed.'
      break
    case 403:
      msg = "Don't have permissions."
      break
    case 404:
      msg = 'Request address error.'
      break
    case 500:
      msg = 'Request server error.'
      break
    default:
      msg = 'Network error.'
      break
  }
  Notify.create({
    color: 'negative',
    message: msg,
    icon: 'report_problem',
    position: 'top',
  })
}

export default axiosErrorHandler
