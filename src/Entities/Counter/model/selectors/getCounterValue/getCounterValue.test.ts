import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema'
import { DeepPartial } from 'redux'
import { getCounterValue } from './getCounterValue'

describe('getCounter', () => {
  test('should return counter', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 17 }
    }

    expect(getCounterValue(state as StateSchema)).toEqual(17)
  })
})
