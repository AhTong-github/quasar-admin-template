import {
  SignInRequestType,
  SignInResponseType,
  UserResponseData,
} from './user-request-type'
import { api } from 'boot/axios'

enum API {
  LOGIN_URL = '/user/signIn',
  USERINFO_URL = '/user/info',
}

export const requestSignIn = (data: SignInRequestType) =>
  api.post<never, SignInResponseType>(API.LOGIN_URL, data).then((result) => {
    const _username: string = result.data.username
    const _password: string = result.data.password
    if (data.username === _username && data.password === _password) {
      return result
    }
    return { code: 201, message: 'Username or password is error.' }
  })

export const requestUserInfo = () =>
  api.get<never, UserResponseData>(API.USERINFO_URL).then((result) => {
    return result
  })
