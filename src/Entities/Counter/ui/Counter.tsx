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
          <span className={s.title}>Значение счетчика {conterValue}</span>
          <div className={s.controls}>
              <Button
                  onClick={increment}
            >Увеличить</Button>
              <Button
                  onClick={decrement}
            >Уменьшить</Button>
          </div>
      </div>
  )
}

export default Counter
