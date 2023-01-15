import { configureStore } from '@reduxjs/toolkit'
import { CounterReducer } from 'Entities'
import { StateSchema } from './StateSchema'

export const createReduxStore = (initialState?: StateSchema) => {
  return configureStore<StateSchema>({
    reducer: {
      counter: CounterReducer
    },
    preloadedState: initialState
  })
}
