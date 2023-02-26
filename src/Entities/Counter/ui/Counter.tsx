import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, useTypedTranslation } from 'Shared'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { CounterActions } from '../model/slice/CounterSlice'

import s from './Counter.module.scss'

const Counter: FC = () => {
  const dispatch = useDispatch()
  const conterValue = useSelector(getCounterValue)

  const { t } = useTypedTranslation()

  const increment = () => {
    dispatch(CounterActions.increment())
  }

  const decrement = () => {
    dispatch(CounterActions.decrement())
  }

  return (
      <div className={s.counter}>
          <span className={s.title}>{`${t('entitie_counter_title')} ${conterValue}`}</span>
          <div className={s.controls}>
              <Button
                  onClick={increment}
            >{t('entitie_counter_button_increase')}</Button>
              <Button
                  onClick={decrement}
            >{t('entitie_counter_button_decrease')}</Button>
          </div>
      </div>
  )
}

export default Counter
