import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'

import { CounterReducer } from 'Entities'
import { UserReducer } from 'Entities/User'

import { createReducerManager } from './ReducerManger'
import { StateSchema } from './StateSchema'

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: CounterReducer,
    userStateSchema: UserReducer
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    preloadedState: initialState
  })
  // @ts-expect-error
  store.reducerManager = reducerManager

  return store
}
