export interface ProfileStateSchema {
  isEdit: boolean
  isLoading: boolean
  error: string | undefined
  data: ProfileType | undefined
}

export interface ProfileType {
  email: string | undefined
  name: string | undefined
  lastName: string | undefined
}
