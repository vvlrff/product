export interface ProfileStateSchema {
  isEdit: boolean
  isLoading: boolean
  error: string | undefined
  data: ProfileType | undefined
}

export interface ProfileType {
  email: string | undefined
  firstName: string | undefined
  lastName: string | undefined
}
