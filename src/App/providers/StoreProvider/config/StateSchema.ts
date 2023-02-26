import { EnhancedStore } from '@reduxjs/toolkit'
import { CounterSchema } from 'Entities'
import { LoginSchema } from 'Features/AuthByEmail'
import { RegisterUserSchema } from 'Features/Registration'
import { AnyAction, CombinedState, Reducer, ReducersMapObject } from 'redux'
import { UserLoginStateSchema } from 'Shared/types/RegistrationAutorizationTypes'

export interface StateSchema {
  counter: CounterSchema
  userStateSchema: UserLoginStateSchema

  // Асинхронные редьюсеры
  loginStateSchema?: LoginSchema
  registerUserSchema?: RegisterUserSchema
}

export type StateSchemaKeys = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKeys, reducer: Reducer) => void
  remove: (key: StateSchemaKeys) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}
