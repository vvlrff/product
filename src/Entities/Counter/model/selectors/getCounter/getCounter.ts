import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema'

export const getCounter = (state: StateSchema) => {
  return state.counter
}
