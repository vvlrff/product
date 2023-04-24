import { memo } from 'react'
import { Link } from 'react-router-dom'
import { useTypedTranslation } from 'Shared'
import { SidebarNavigationSchema } from '../../config/SidebarNavigationConfig'

import s from './SidebarNavigation.module.scss'
import { useAuth } from 'Shared/lib/hooks/useAuth'

export const SidebarNavigation = memo(() => {
  const { t } = useTypedTranslation()
  const isAuth = useAuth()
  let sidebarRoutes = Object.values(SidebarNavigationSchema)

  if (!isAuth) {
    sidebarRoutes = sidebarRoutes.filter(route => !route.authOnly)
  }

  return (
      <ul className={s.list}>
          {sidebarRoutes.map(({ text, icon, route }) => {
            return (
                <div className={s.item} key={route}>
                    <span className={s.icon}>{icon}</span>
                    <Link to={route} className={s.link}>{t(text)}</Link>
                </div>
            )
          })}
      </ul>
  )
})
