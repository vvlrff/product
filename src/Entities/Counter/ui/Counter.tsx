import { FC, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Button, useAppDispatch, useTypedTranslation } from 'Shared'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { CounterActions } from '../model/slice/CounterSlice'

import s from './Counter.module.scss'

const Counter: FC = () => {
  const dispatch = useAppDispatch()
  const conterValue = useSelector(getCounterValue)

  const { t } = useTypedTranslation()

  const increment = useCallback(() => {
    dispatch(CounterActions.increment())
  }, [dispatch])

  const decrement = useCallback(() => {
    dispatch(CounterActions.decrement())
  }, [dispatch])

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
