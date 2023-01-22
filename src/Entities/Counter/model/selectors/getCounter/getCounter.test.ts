import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema'
import { DeepPartial } from 'redux'
import { getCounter } from './getCounter'

describe('getCounter', () => {
  test('should return counter', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 17 }
    }

    expect(getCounter(state as StateSchema)).toEqual({ value: 17 })
  })
})
