import { UserActions } from 'Entities/User'
import { useEffect } from 'react'

import { useAppDispatch, useTheme } from 'Shared'
import AppRouter from './Providers/RouteProvider'

import './styles/index.scss'

export const App = () => {
  const { theme } = useTheme()
  const dispatch = useAppDispatch()

  document.body.className = theme

  useEffect(() => {
    dispatch(UserActions.initUserAuth())
  }, [dispatch])

  return (
      <AppRouter/>
  )
}
