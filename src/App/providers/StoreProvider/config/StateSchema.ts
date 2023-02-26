import { CounterSchema } from 'Entities'
import { LoginSchema } from 'Features/AuthByEmail'
import { RegisterUserSchema } from 'Features/Registration'
import { UserLoginStateSchema } from 'Shared/types/RegistrationAutorizationTypes'

export interface StateSchema {
  counter: CounterSchema
  userStateSchema: UserLoginStateSchema
  loginStateSchema: LoginSchema
  registerUserSchema: RegisterUserSchema
}
