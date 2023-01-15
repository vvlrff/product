import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'Shared'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { CounterActions } from '../model/slice/CounterSlice'

import s from './Counter.module.scss'

const Counter: FC = () => {
  const dispatch = useDispatch()
  const conterValue = useSelector(getCounterValue)

  const increment = () => {
    dispatch(CounterActions.increment())
  }

  const decrement = () => {
    dispatch(CounterActions.decrement())
  }

  return (
      <div className={s.counter}>
          <h1>Значение счетчика {conterValue}</h1>
          <Button
              onClick={increment}
          >Увеличить</Button>
          <Button
              onClick={decrement}
          >Уменьшить</Button>
      </div>
  )
}

export default Counter
