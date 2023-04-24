import { UserActions, getUserInited } from 'Entities/User'
import { useEffect } from 'react'

import { useAppDispatch, useTheme } from 'Shared'
import AppRouter from './providers/RouteProvider'

import './styles/index.scss'
import { useSelector } from 'react-redux'

export const App = () => {
  const { theme } = useTheme()
  const dispatch = useAppDispatch()
  const userInited = useSelector(getUserInited)

  document.body.className = theme

  useEffect(() => {
    dispatch(UserActions.initUserAuth())
  }, [dispatch])

  if (userInited) {
    return <AppRouter />
  }

  return null
}
