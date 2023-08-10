export interface RegisterUserSchema {
  password: string
  confirmPassword: string
  email: string
  username: string
  fullname: string
  isLoading: boolean
  error: string | null
}
