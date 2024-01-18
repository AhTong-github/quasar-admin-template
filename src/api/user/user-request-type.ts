interface DataType {
  username: string
  password: string
  token?: string
}

interface UserInfo {
  userId: number
  avatar: string
  username: string
  password: string
  token: string
}

interface User {
  checkUser: UserInfo
}

/* ---------- sign in ---------- */
export interface SignInRequestType {
  username: string
  password: string
}

export interface SignInResponseType {
  code: number
  message: string
  data: DataType
}

/* ---------- user info ---------- */
export interface UserResponseData {
  code: number
  data: User
}
