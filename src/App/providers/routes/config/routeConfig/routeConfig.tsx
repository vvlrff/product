import { HomePage, NotFoundPage } from 'Pages'
import { RouteProps } from 'react-router'

import { AppRoutes, RoutesPath } from 'Shared/config/RouterConfig/AppRoutes'

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutesPath.main,
    element: <HomePage/>
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutesPath.not_found,
    element: <NotFoundPage/>
  }
}
