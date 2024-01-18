import { defineStore } from 'pinia'
import {
  SignInRequestType,
  SignInResponseType,
} from 'api/user/user-request-type'
import { requestSignIn } from 'api/user/user-request'
import serverNotifyHandler from 'common/notify-handler/server-notify-handler'
import { UserState } from 'stores/modules/user-store-type'
import constantRoute from 'router/constant-route'

const useUserStore = defineStore('User', {
  state(): UserState {
    return {
      token: localStorage.getItem('token'),
      sidebarRoutes: constantRoute,
    }
  },
  actions: {
    async userLogin(data: SignInRequestType) {
      const result: SignInResponseType | { code: number; message: string } =
        await requestSignIn(data)
      if (result.code === 200) {
        if ('data' in result) {
          this.token = result.data.token as string
        }
        serverNotifyHandler(result, 'Welcome to sign in.')
        localStorage.setItem('token', <string>this.token)
      } else {
        serverNotifyHandler(result, result.message as string)
      }
    },
  },
  getters: {},
})

export { useUserStore }
