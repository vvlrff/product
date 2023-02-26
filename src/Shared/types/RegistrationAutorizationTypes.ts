export interface IUser {
  email: string | null
  password: string | null
}

export interface UserLoginStateSchema {
  accessToken: string | null
  user?: {
    id: number
    email: string
  }
}
