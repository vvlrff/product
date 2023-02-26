export interface RegisterUserSchema {
  password: string
  email: string
  isLoading: boolean
  error: string | null
}
