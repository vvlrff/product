import { LoginPage, HomePage } from 'Pages'
import NotFoundPage from 'Pages/ui/NotFoundPage/ui/NotFoundPage'
import { RouteProps } from 'react-router'

import { AppRoutes, RoutesPath } from 'Shared/config/RouterConfig/AppRoutes'

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutesPath.main,
    element: <HomePage/>
  },
  [AppRoutes.LOGIN]: {
    path: RoutesPath.login,
    element: <LoginPage/>
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutesPath.not_found,
    element: <NotFoundPage/>
  }
}
