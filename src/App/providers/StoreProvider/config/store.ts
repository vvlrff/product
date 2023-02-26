import { configureStore } from '@reduxjs/toolkit'
import { CounterReducer } from 'Entities'
import { UserReducer } from 'Entities/User'
import { LoginReducer } from 'Features'
import { CreateUserReducer } from 'Features/Registration'
import { StateSchema } from './StateSchema'

export const createReduxStore = (initialState?: StateSchema) => {
  return configureStore<StateSchema>({
    reducer: {
      counter: CounterReducer,
      userStateSchema: UserReducer,
      loginStateSchema: LoginReducer,
      registerUserSchema: CreateUserReducer
    },
    preloadedState: initialState
  })
}
