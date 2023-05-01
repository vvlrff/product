import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'

import { CounterReducer } from 'Entities'
import { UserReducer } from 'Entities/User'
import { NavigateOptions, To } from 'react-router-dom'
import { API } from 'Shared/api/api'

import { StateSchema } from './StateSchema'
import { createReducerManager } from './ReducerManger'

export const createReduxStore = (initialState?: StateSchema, navigate?: (to: To, options: NavigateOptions) => void) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: CounterReducer,
    userStateSchema: UserReducer
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore({
    reducer: reducerManager.reduce,
    preloadedState: initialState,
    devTools: IS_DEV,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: API,
          navigate
        }
      }
    })
  })
  // @ts-expect-error
  store.reducerManager = reducerManager

  return store
}
